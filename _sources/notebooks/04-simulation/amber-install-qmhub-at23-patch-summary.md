# QMHub AmberTools 23 Patch Summary

Source patch: `qmhub/patches/qmhub_at23.patch`

## What This Patch Does

This patch adds a QMHub backend to AmberTools/Sander's external QM interface. It lets Sander run QM and QM/MM calculations through QMHub by selecting `EXTERN` with `qmhub`, passing QM atoms, optional MM point charges, RESP charges, and unit-cell data to QMHub, then reading energies and gradients back into Sander.

The patch also adjusts parts of the QM/MM setup so QMHub can receive the full data it needs for periodic electrostatic embedding, link atoms, and charge handling.

## Key Changes

### Build Integration

Adds `qm2_extern_qmhub_module.F90` to the Sander build in:

- `AmberTools/src/sander/CMakeLists.txt`
- `AmberTools/src/sander/Makefile`
- `AmberTools/src/sander/depend`

### QMHub EXTERN Registration

Updates `qm2_extern_module.F90` so `qmhub` is a recognized external program. The dispatch path now calls `get_qmhub_forces`, adds a QMHub citation, and calls `qmhub_finalize` during external-QM cleanup.

### New QMHub Driver Module

Adds `AmberTools/src/sander/qm2_extern_qmhub_module.F90`, which implements the Sander-to-QMHub bridge:

- Reads a new `&qmhub` namelist.
- Writes QMHub input data.
- Launches QMHub when needed.
- Reads QMHub energies and gradients.
- Converts QMHub forces and energies back to Amber units.
- Cleans up FIFO communication handles.

### QMHub Namelist

Introduces the `&qmhub` namelist with these options:

- `config`: QMHub configuration file, default `qmhub.ini`.
- `basedir`: working/output directory, default `qmhub`.
- `comm`: communication mode, default `2`.
- `debug`: debug verbosity, default `0`.

### Communication Modes

Implements three QMHub exchange modes:

- `comm = 0`: text file input/output.
- `comm = 1`: binary stream file input/output.
- `comm = 2`: FIFO-based streaming mode, intended as the default.

### Unit Cell Exchange

Extends the external-QM call path to pass `ucell` from Sander into the QMHub interface. The QMHub module writes cell vectors for periodic calculations so QMHub can reconstruct the periodic cell.

### RESP Charge Plumbing

Changes the external-QM call in `qm_mm.F90` to pass `qmmm_struct%qm_resp_charges` into the external interface instead of the SCF charge array. This gives QMHub access to topology RESP charges for QM and link atoms.

### Link-Atom Charge Handling

Updates `qm_zero_charges.F90` so MM link-pair charges are also copied into the corresponding link-atom RESP charge slots before the MM link-pair atom charges are zeroed.

### Periodic QM/MM Pair List Behavior

Modifies `qm_fill_qm_xcrd_periodic` so a no-cutoff path can include every non-link MM atom when the QM region plus cutoff exceeds all box dimensions. This supplies QMHub with an all-cell electrostatic embedding list for those cases.

### QM/MM Charge Redistribution

Extends `qmmm_adjust_q` so charge correction is not only added to selected MM atoms, but also subtracted evenly from QM and link atoms. This appears intended to keep the QMHub RESP-charge view consistent with Amber's charge adjustment.

### Minor Output Formatting

Adjusts one `qm_pme` error message in `sander.F90` to use a single quoted string split across source lines.

## Files Changed

- `AmberTools/src/sander/CMakeLists.txt`
- `AmberTools/src/sander/Makefile`
- `AmberTools/src/sander/depend`
- `AmberTools/src/sander/qm2_extern_module.F90`
- `AmberTools/src/sander/qm2_extern_qmhub_module.F90`
- `AmberTools/src/sander/qm_mm.F90`
- `AmberTools/src/sqm/qm_zero_charges.F90`
- `AmberTools/src/sander/sander.F90`

## Review-Identified Follow-Ups

The reviewed patch has several correctness concerns that should be fixed before treating it as final:

- Allocate RESP charge storage for link atoms before assigning `qm_resp_charges(nquant+i)`.
- Create both input and output FIFOs before launching QMHub in default `comm = 2` mode.
- Keep ReaxFF and other legacy EXTERN backends on the SCF charge array instead of routing them through QMHub RESP-charge behavior.
- Gate QMHub-specific charge redistribution behind a QMHub backend check.
- Gate no-cutoff periodic pair-list expansion behind a QMHub backend check.
- Confirm and fix QMHub unit-cell matrix orientation for text and binary exchange.
