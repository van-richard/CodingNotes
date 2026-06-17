# SQM and SINR AmberTools 26 patch summary

## Sources reviewed

- AmberTools 26 SQM patch: `qmhub/patches/sqm_at26.patch`
- AmberTools 26 SINR patch: `qmhub/patches/sinr_at26.patch`
- AmberTools 23 SQM reference: `legacy_patches/sqm_at23.patch`
- AmberTools 23 SINR reference: `legacy_patches/sinr_at23.patch`

## High-level summary

`sqm_at26.patch` ports the SQM QM/MM electrostatic-output work to AmberTools 26. It adds storage and force-plumbing for MM-site electrostatic potential and field values from the QM region, extends SQM's standalone force path so it can compute and print those MM-site quantities, and adds `qmmm_int=6/7` behavior for reduced QM/MM electrostatic damping and AM1/PM3/PM6 Gaussian correction handling.

`sinr_at26.patch` adds a new Sander thermostat/integrator mode, `ntt=12`, for a Stochastic Isokinetic Nose-Hoover RESPA middle scheme. It reuses the existing SINR state machinery used by `ntt=10`, adds two middle-scheme operators, validates the new input mode, writes/restarts SINR auxiliary velocities with the internally scaled time constant, and preserves the existing `ntt=10` update path.

## Patch footprint

| Patch | Files touched | Added lines | Removed lines |
| --- | ---: | ---: | ---: |
| `sqm_at26.patch` | 7 | 196 | 117 |
| `legacy_patches/sqm_at23.patch` | 7 | 197 | 118 |
| `sinr_at26.patch` | 3 | 96 | 34 |
| `legacy_patches/sinr_at23.patch` | 3 | 103 | 48 |

## Key changes in `sqm_at26.patch`

| Name | Main files | What changes |
| --- | --- | --- |
| **MM ESP/field storage** | `AmberTools/src/sqm/qmmm_struct_module.F90` | Adds `qmmm_struct%mm_esp(4,*)` and allocates/deallocates it for QM/MM runs. Component 1 stores electrostatic potential; components 2-4 store field/force-like Cartesian components at MM sites. |
| **Sander QM/MM force call plumbing** | `AmberTools/src/sander/qm_mm.F90`, `AmberTools/src/sqm/qm2_get_qmmm_forces.F90` | Extends `qm2_get_qmmm_forces` to accept `mm_esp`, so Sander-side QM/MM force evaluation can also accumulate MM-site potential/field data. |
| **Charge-separated force algebra** | `AmberTools/src/sqm/qm2_get_qmmm_forces.F90` | Computes the per-MM-site electrostatic potential and field before multiplying pair forces by the MM charge, then applies the charge when accumulating physical QM/MM forces. Switched-interaction terms are likewise changed so potential/field bookkeeping is not double-multiplied by MM charge. |
| **Light/heavy derivative ESP accumulation** | `AmberTools/src/sqm/qm2_get_qmmm_forces.F90` | Passes an `mm_esp` scalar into both light-atom and heavy-atom derivative helpers, adds the electronic-plus-nuclear electrostatic energy contribution to `mm_esp(1,*)`, and accumulates Cartesian field components from `pair_force`. |
| **`qmmm_int=6/7` reduced damping** | `AmberTools/src/sqm/qm2_calc_rij_and_eqns.F90` | Sets the QM/MM electrostatic damping terms `qmi_oneBDD1/2/3` to zero when `qmmm_int` is 6 or 7. |
| **`qmmm_int=7` Gaussian correction support** | `AmberTools/src/sqm/qm2_hcore_qmmm.F90`, `qm2_get_qmmm_forces.F90` | Extends the AM1/PM3/PM6 Gaussian core-core correction paths that previously applied to `qmmm_int=2` so they also apply to `qmmm_int=7`. |
| **Input range extension** | `AmberTools/src/sqm/qm2_read_nm_and_alloc.F90` | Raises the legal `qmmm_int` range from `0..5` to `0..7` and increases `parameter_file` path storage from 80 to 256 characters. |
| **Standalone SQM MM-force/ESP output** | `AmberTools/src/sqm/sqm.F90` | In standalone SQM force calculations, computes QM/MM forces for `qmmm_int > 0` except `qmmm_int=5`, zeroes and fills `mm_esp`, supports the DFTB and non-DFTB force paths, and prints MM-site potential/field data when verbosity is greater than 3. |
| **Larger external-charge input** | `AmberTools/src/sqm/sqm.F90` | Raises external-charge array capacity from 1,000 to 20,000 sites, extends input line handling from 80 to 100 characters, increases scan loops accordingly, and suppresses the verbose per-charge echo table. |

## Key changes in `sinr_at26.patch`

| Name | Main files | What changes |
| --- | --- | --- |
| **New `ntt=12` input mode** | `AmberTools/src/sander/mdread2.F90` | Prints an `ntt=12` SINR middle-scheme banner and extends the legal `ntt` range to include 12. |
| **SINR validation for `ntt=12`** | `AmberTools/src/sander/mdread2.F90` | Allows `gamma_ln` with `ntt=12`, requires `gamma_ln > 0`, `nkija >= 1`, `ntc=ntf=1`, and `tempi <= temp0` for `ntt=10/12`, while keeping `ntt=10` at `sinrtau >= 0.5` and requiring only `sinrtau > 0` for `ntt=12`. |
| **Internal SINR time constant** | `AmberTools/src/sander/runmd.F90` | Adds `sinrtaux`; `ntt=10` uses the user `sinrtau` unchanged, while `ntt=12` uses `sinrtau * 20.455d0` for SINR initialization and restart read/write. |
| **Shared SINR setup/cleanup** | `AmberTools/src/sander/runmd.F90` | Initializes, restarts, writes auxiliary SINR velocities, and cleans up SINR data for both `ntt=10` and `ntt=12`; the existing `ntt=10` initial force/kick/drift remains guarded so it is not run for `ntt=12`. |
| **Middle-scheme update sequence** | `AmberTools/src/sander/runmd.F90` | Adds the `ntt=12` per-step sequence: two velocity updates, a half coordinate drift, two thermostat updates with a stochastic thermostat update between them, and a final half coordinate drift. |
| **New SINR operators** | `AmberTools/src/sander/sinr_t.F90` | Exports and implements `iLqdt` for half-step coordinate drift and `iLodt` for stochastic Ornstein-Uhlenbeck updates of the second thermostat variables. |
| **Sander force-coordinate bookkeeping** | `AmberTools/src/sander/runmd.F90` | Treats `ntt=12` like `ntt=10` in the post-step coordinate/force bookkeeping and SINR temperature reporting hooks. |

## Notable differences from the AT23 legacy patches

### SQM differences

- **Same file footprint, mostly direct port.** Both SQM patches touch the same seven files and implement the same main feature set: MM-site ESP/field storage, QM/MM force algebra changes, `qmmm_int=6/7`, standalone SQM output, and larger external-charge input.
- **AT26 makes `mm_esp` explicitly accumulative.** In `sqm_at26.patch`, `mm_esp` dummy arguments are `intent(inout)` and the first Cartesian field update uses `mm_esp(k,j) = mm_esp(k,j) + pair_force(...)`. The AT23 legacy patch used `intent(out)` and overwrote that first field contribution. This AT26 refinement matches the later additive updates and supports accumulation across QM/MM pair contributions after callers zero `qmmm_struct%mm_esp`.
- **RESP charge allocation is not duplicated in `sqm_at26.patch`.** The legacy SQM patch changed `qm_resp_charges` allocation from `nquant` to `nquant+nlink`. The AT26 SQM patch does not carry that hunk because the maintained AT26 patch sequence puts QM/link RESP-charge allocation in `qmhub/patches/qmhub_at26.patch`, which is applied before `sqm_at26.patch`.
- **Context placement differs for AT26 source layout.** The `mm_esp` allocation/deallocation hunks land around AT26's existing `qmmm_switch` and `PM3MMX_INTERFACE` logic, while the legacy AT23 hunk lands nearer the end of the original allocation/deallocation routines.

### SINR differences

- **AT26 preserves existing `ntt=10` semantics more carefully.** The AT26 patch scales `sinrtaux` only when `ntt == 12`; the legacy AT23 patch scaled it for both `ntt=10` and `ntt=12`. AT26 also keeps the original `ntt=10` `sinrtau >= 0.5` check, while the legacy patch relaxed the shared check to `sinrtau > 0`.
- **AT26 validation messages are corrected for the new mode.** The AT26 patch updates the `ntt` range message to say `0..12` and updates shared `ntt=10/12` error strings. The legacy patch changed the logic but left some messages referring only to `0..11` or `ntt=10`.
- **AT26 does not port legacy changes to existing low-level `ntt=10` SINR operators.** The AT23 legacy patch also changed existing SINR internals such as the Suzuki-Yoshida `wj` time factor and `iLndt` coefficients/exponents. Those hunks are absent from `sinr_at26.patch`, leaving AT26's existing `ntt=10` operator behavior untouched while adding only the operators needed for `ntt=12`.
- **Some AT23 legacy fixes are already AT26-native.** The legacy patch added MPI broadcast of `sd%v2` and rewrote the velocity-force propagator `iLvdt`; the AT26 source already contains those forms, so the AT26 patch does not need equivalent hunks.
- **AT26 includes AT26-specific declaration context.** The `runmd.F90` declaration hunk preserves AT26's existing `dt25` variable while adding `sinrtaux`; the legacy AT23 context did not include `dt25`.

## Changed files in the AT26 patches

### `sqm_at26.patch`

| File | Purpose |
| --- | --- |
| `AmberTools/src/sander/qm_mm.F90` | Passes `qmmm_struct%mm_esp` into SQM QM/MM force evaluation. |
| `AmberTools/src/sqm/qm2_calc_rij_and_eqns.F90` | Adds reduced damping for `qmmm_int=6/7`. |
| `AmberTools/src/sqm/qm2_get_qmmm_forces.F90` | Adds MM-site ESP/field accumulation and charge-separated force algebra. |
| `AmberTools/src/sqm/qm2_hcore_qmmm.F90` | Extends AM1/PM3/PM6 Gaussian correction handling to `qmmm_int=7`. |
| `AmberTools/src/sqm/qm2_read_nm_and_alloc.F90` | Allows `qmmm_int` up to 7 and lengthens `parameter_file`. |
| `AmberTools/src/sqm/qmmm_struct_module.F90` | Adds allocation and deallocation for `mm_esp`. |
| `AmberTools/src/sqm/sqm.F90` | Adds standalone SQM MM force/ESP output and larger external-charge input capacity. |

### `sinr_at26.patch`

| File | Purpose |
| --- | --- |
| `AmberTools/src/sander/mdread2.F90` | Adds `ntt=12` reporting and input validation. |
| `AmberTools/src/sander/runmd.F90` | Adds `ntt=12` initialization, stepping, restart, and cleanup paths. |
| `AmberTools/src/sander/sinr_t.F90` | Adds/export middle-scheme coordinate drift and stochastic thermostat operators. |

## Usage implication

After the maintained patch sequence is applied, SQM can report MM-site electrostatic potential/field values from the QM region for supported QM/MM modes, including standalone SQM force runs at high verbosity. Sander also gains `ntt=12` as a separate SINR middle-scheme integrator mode; existing `ntt=10` behavior is intended to remain the AT26-native SINR path.
