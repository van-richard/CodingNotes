---
keywords: cpptraj, autoimage, strip, :WAT, rms, parmstrip, parmwrite, traj.in, trajin, trajout
---

# Export Dry Trajectory (no water)

[Original Example](https://amberhub.chpc.utah.edu/combining-multiple-trajectory-files-into-a-single-trajectory-and-remove-water-molecules-to-save-space/)

CPPTRAJ can be used to remove explicit water from the simulation. To do this, make 2 files: 1) Strip water from trajectory, and 2) save new topology file.

1) Strip water from trajectory (`traj1.in`)
   - Load topology/trajectory files
   - `autoimage` re-orients the solute in the water box
   - `strip` removes the residues `WAT` and counterions
   - Fit new trajectory to alpha carbons
   - Save as `dry-prod.nc`
  
```bash
parm step3_pbcsetup.parm7
trajin prod.nc
autoimage
strip :WAT,Na,Cl
rms @CA
trajout dry-prod.nc 
go
```

2) Make a new topology file (`traj2.in`)

```bash
parm step3_pbcsetup.parmm7
parmstrip :WAT,Na,Cl 
parmwrite out dry-step3.parm7 
go
```

Run these commands with CPPTRAJ

```bash
cpptraj traj1.in
cpptraj traj2.in
```
