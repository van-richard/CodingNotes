# `qmhub_at26.patch` summary and AT23 comparison

## Sources reviewed

- AmberTools 26 patch: `qmhub/patches/qmhub_at26.patch`
- AmberTools 23 reference patch: `qmhub/patches/qmhub_at23.patch`

## High-level summary

`qmhub_at26.patch` ports the QMHub Sander external-QM interface to AmberTools 26. It adds a new `qm2_extern_qmhub_module.F90`, wires that module into the Sander build, registers `qmhub` as an `EXTERN` backend, and exchanges QM atoms, MM point charges, unit-cell data, QM/MM energy, and QM/MM gradients with the `qmhub` command. The interface supports text (`comm=0`), binary (`comm=1`), and FIFO (`comm=2`) exchange modes through a new `&qmhub` namelist.

The AT26 version also contains compatibility refinements beyond the AT23 patch: QMHub-specific behavior is gated behind detection of both `qm_theory='EXTERN'` and an `&qmhub` namelist, legacy non-QMHub EXTERN charge behavior is preserved, QM/link RESP charge storage is extended, and a TorchANI charge-slicing adjustment is added for the AT26 source layout.

## Patch footprint

| Patch | Files touched | Added lines | Removed lines |
| --- | ---: | ---: | ---: |
| `qmhub_at26.patch` | 11 | 791 | 70 |
| `qmhub_at23.patch` | 8 | 746 | 68 |

## Key changes

| Name | Main files | What changes |
| --- | --- | --- |
| **Sander build integration** | `AmberTools/src/sander/CMakeLists.txt`, `Makefile`, `depend` | Adds `qm2_extern_qmhub_module.F90` / `.o` to the normal QM, QM API, and LES build lists and dependency rules. |
| **QMHub EXTERN registration** | `AmberTools/src/sander/qm2_extern_module.F90` | Imports `get_qmhub_forces`, adds `qmhub` to the supported EXTERN program list, dispatches `extern_program='qmhub'`, prints QMHub citation text, skips generic constant printing for QMHub, and calls `qmhub_finalize()` during external-QM finalization. |
| **QMHub communication module** | `AmberTools/src/sander/qm2_extern_qmhub_module.F90` | Adds the core Sander-side QMHub driver. It reads `&qmhub` (`config`, `basedir`, `comm`, `debug`), creates exchange files/FIFOs, launches `qmhub`, writes Sander input data, reads energy/gradients, converts Hartree/Bohr outputs to Amber units, and closes FIFO streams at finalization. |
| **Unit-cell exchange** | `qm2_extern_module.F90`, `qm2_extern_qmhub_module.F90`, `qm_mm.F90` | Passes `ucell` from Sander QM/MM into the EXTERN layer and writes the 3x3 cell basis to QMHub in all communication modes. In AT26, text and binary modes write `ucell(i,:)` rows rather than the AT23 patch's `ucell(:,i)` columns. |
| **QMHub EXTERN detection and gating** | `AmberTools/src/sqm/qmmm_nml_module.F90`, `qm2_read_nm_and_alloc.F90` | Adds `qmmm_nml%qmhub_extern`, sets it only when `qm_theory='EXTERN'` and an `&qmhub` namelist are present, broadcasts it in MPI, and prints it with other QMMM settings. |
| **QMHub no-cutoff periodic pair list** | `AmberTools/src/sander/qm_mm.F90` | For QMHub EXTERN periodic QM/MM cases where the QM cutoff sphere exceeds all box dimensions, builds a no-cutoff list containing all non-link MM atoms instead of distance-filtering by `qmcut`. Unlike the AT23 patch, AT26 limits this behavior to `qmmm_nml%qmhub_extern`. |
| **Separate legacy EXTERN and QMHub RESP charges** | `qm2_extern_module.F90`, `qm_mm.F90`, `qm_zero_charges.F90`, `qmmm_struct_module.F90` | Keeps the legacy EXTERN charge array separate from QMHub RESP charges, passes `qmmm_struct%qm_resp_charges` only to QMHub, stores link-pair RESP charges for link atoms, and allocates `qm_resp_charges` for `nquant+nlink` entries. |
| **QMHub-only charge adjustment** | `AmberTools/src/sqm/qm_zero_charges.F90` | Applies the QM/link charge correction added by the AT23 patch only when the QMHub EXTERN path is active, so other EXTERN backends keep their AT26-native charge handling. |
| **AT26 compatibility fixes** | `AmberTools/src/sander/qm2_extern_torchani_module.F90`, `qm2_extern_module.F90` | Slices `qmmm_struct%qm_resp_charges(1:nqmatoms)` for TorchANI because the array can now include link atoms, and adapts the EXTERN program table to AT26's existing entries such as ANI. |

## Notable differences from `qmhub_at23.patch`

- **More files are touched in AT26.** AT26 adds changes to `qmmm_nml_module.F90`, `qm2_read_nm_and_alloc.F90`, `qmmm_struct_module.F90`, and `qm2_extern_torchani_module.F90`; AT23 does not touch these files.
- **QMHub behavior is explicitly gated in AT26.** AT23 applies the no-cutoff periodic pair-list behavior and QM/link charge redistribution broadly once the patched logic is reached. AT26 introduces `qmmm_nml%qmhub_extern` so those behaviors activate only for `EXTERN` calculations with an `&qmhub` namelist.
- **Charge plumbing is more conservative in AT26.** AT23 routes EXTERN calls through `qmmm_struct%qm_resp_charges`; AT26 passes both `scf_mchg` for legacy EXTERN backends and `qmmm_struct%qm_resp_charges` for QMHub, avoiding unintended changes to other external engines.
- **Link-atom RESP storage is extended in AT26.** AT26 updates `qmmm_struct_module.F90` so `qm_resp_charges` can hold QM atoms plus link atoms (`nquant+nlink`). This supports the QMHub link-charge additions made in `qm_zero_charges.F90`.
- **Unit-cell text/binary orientation differs.** AT23 writes `ucell(:,i)` for `comm=0` and `comm=1`; AT26 writes `ucell(i,:)`. FIFO mode writes row slices in both patches. Current QMHub readers load the exchange matrix as a 3x3 array, so the AT26 row-wise output preserves Amber's `ucell` matrix orientation for those readers.
- **FIFO startup is hardened in AT26.** AT23 creates only the input FIFO before launching QMHub. AT26 creates both input and output FIFO paths up front to avoid a first-step race where Sander writes before QMHub creates the output FIFO.
- **The AT23 `sander.F90` message-format tweak is not carried into AT26.** AT26's QMHub patch does not touch `AmberTools/src/sander/sander.F90`.
- **AT26 preserves newer AmberTools behavior.** The patch accounts for AT26's existing TorchANI/ANI external-QM code and avoids broad changes that would affect other EXTERN backends.

## Changed files in `qmhub_at26.patch`

| File | Purpose |
| --- | --- |
| `AmberTools/src/sander/CMakeLists.txt` | Adds QMHub module to Sander CMake source lists. |
| `AmberTools/src/sander/Makefile` | Adds QMHub object to traditional Makefile object lists. |
| `AmberTools/src/sander/depend` | Adds dependencies and compile rule for `qm2_extern_qmhub_module.o`. |
| `AmberTools/src/sander/qm2_extern_module.F90` | Registers and dispatches the QMHub EXTERN backend. |
| `AmberTools/src/sander/qm2_extern_qmhub_module.F90` | New QMHub Sander interface implementation. |
| `AmberTools/src/sander/qm2_extern_torchani_module.F90` | Restricts TorchANI RESP-charge copy to real QM atoms. |
| `AmberTools/src/sander/qm_mm.F90` | Passes unit-cell/charge data into EXTERN and adds QMHub-gated no-cutoff pair-list logic. |
| `AmberTools/src/sqm/qmmm_nml_module.F90` | Adds and broadcasts/prints `qmhub_extern`. |
| `AmberTools/src/sqm/qm2_read_nm_and_alloc.F90` | Detects the `&qmhub` namelist and sets `qmhub_extern`. |
| `AmberTools/src/sqm/qm_zero_charges.F90` | Adds QMHub link-charge storage and QMHub-only charge redistribution. |
| `AmberTools/src/sqm/qmmm_struct_module.F90` | Allocates `qm_resp_charges` for QM plus link atoms. |

## Usage implication

For AmberTools 26, this patch expects QMHub runs to use `qm_theory='EXTERN'` in `&qmmm` together with an `&qmhub` namelist. The presence of `&qmhub` selects the QMHub-specific path; other EXTERN backends should continue using the AT26-native charge and cutoff behavior.
