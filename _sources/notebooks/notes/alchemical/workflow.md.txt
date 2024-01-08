---
orphan: true
---

:::{note}
For more information, refer to the
[Best Practices for Alchemical Free Energy Calculations](https://livecomsjournal.org/index.php/livecoms/article/view/v2i1e18378) paper by Xu et. al.
:::

# Simulation Workflows

## Setup Amber Files for `pmemd`

`pmemd` requires the single topology file approach.

* First I make initial PDB files for the wildtype and mutation to compare the number of atoms and charge of both systems
* Use this as the template for the topology and coordinate file for the alchemical simulation
* Use `parmed` to remove redundant bonding terms for more efficient calculation (`timerge`)

::::{tab-set}
:::{tab-item} 1. Preparing PDB files
To get an idea of the number of atoms and charge of wildtype vs mutant, I create an `init` folder, run `tleap`, and grab some information.

1. Go to the `setup/leap/ref` directory
2. Copy `step3_pbcsetup_wt.pdb` to `step3_pbcsetup_mt.pdb` with the residue mutation
3. Go back one level, and into the `init` directory (we will generate inital PDB files for wildtype and mutant)
4. Run `1_leap.sh` to get `wt_wat.pdb` and `mt_wat.pdb`
   1. Check (visualize) PDBs, and make sure you introduced the correct mutation
5. Get PDB information with `2_info.sh` for differences in atom number and ions
   1. We use this to see what other atoms need to be transformed w/ mutation (i.e. charges)
   
:::
:::{tab-item} 2. Split components of system 
Now that we're familiar with the protein systems we're simulating, make PDBs containing the components for our alchemical calculation
* We need a pdb file for wildtype protein, mutant protein, nucleic acids (sgRNA + dsDNA), and one with ions/waters.

1. Go back one level (to `setup/leap`)
2. Run `1_prep.sh` 
   1. This makes `step3_pbcsetup_wt.pdb` and `step3_pbcsetup_mt.pdb` from the `/init/*_wat.pdb`
   2. Only has protein information.
3. Copy `init/mt_wat.pdb` to the following:
   1. `step3_pbcsetup_nt.pdb` - contains only nucleic acid residues 
   2. `step3_pbcsetup_ion_wat.pdb` - contains only counterions and water
   
:::
:::{tab-item} 3. Files for Alchemical
Preparing the topology and coordinate files for alchemical simulation

1. Run `1_leap.sh` to get:
   1. The files `protein.*` which contain wildtype/mutant protein, and ions/waters
   2. The files `complex.*` which contain wildtype/mutant protein, sgRNA, dsDNA, and ions/waters
2. Run `2_eliminate_duplicates.sh` to remove redundant terms
   1. We will only use the files `merged_protein.*`, and `merged_complex.*` 
   
:::
::::

### Code

```{admonition} Scripts
:class: dropdown

:::::{tab-set}
::::{tab-item} 1_leap.sh
:::{code-block} bash
:lineno-start: 1

#!/bin/sh

date

shopt -s expand_aliases
source ~/.bash_aliases

myconda; conda activate ambertools

basedir=leap

tleap -f - <<_EOF
# load the AMBER force fields
source leaprc.protein.ff14SB
source leaprc.DNA.OL15
source leaprc.RNA.OL3
source leaprc.water.tip3p
loadamberparams frcmod.ions234lm_1264_tip3p 

# load the coordinates and create the systems
wt = loadpdb $basedir/step3_pbcsetup_wt.pdb
mt = loadpdb $basedir/step3_pbcsetup_mt.pdb
na = loadpdb $basedir/step3_pbcsetup_nt.pdb
m = loadpdb $basedir/step3_pbcsetup_mg.pdb
w = loadpdb $basedir/step3_pbcsetup_ion_wat.pdb

protein = combine {wt mt m w}
complex = combine {wt mt na m w}

#set default nocenter on

# create protein in solution
setbox protein "centers"
savepdb protein protein.pdb
saveamberparm protein protein.parm7 protein.rst7

# create complex in solution
setbox complex "centers"
savepdb complex complex.pdb
saveamberparm complex complex.parm7 complex.rst7

quit
_EOF

date
:::
::::

::::{tab-item} 2_eliminate_duplicate.sh
:::{code-block} shell
:lineno-start: 1

#!/bin/bash

date

shopt -s expand_aliases
source ~/.bash_aliases

myconda; conda activate ambertools

# wildtype res = 854
# num = 854 - 1 = 853
# mutant res = 1366 + 853 = 2219

parmed protein.parm7 <<_EOF
loadRestrt protein.rst7
setOverwrite True
# [all res of wt] [all res of mt] [wt] [mt]
tiMerge :1-1365 :1366-2730 :854 :2219
add12_6_4 @%Mg2+ watermodel TIP3P
outparm merged_protein.parm7 merged_protein.rst7
quit
_EOF

parmed complex.parm7 <<_EOF
loadRestrt complex.rst7
setOverwrite True
# [all res of wt] [all res of mt] [wt] [mt]
tiMerge :1-1365 :1366-2730 :854 :2219
add12_6_4 @%Mg2+ watermodel TIP3P
outparm merged_complex.parm7 merged_complex.rst7
quit
_EOF

date
:::
::::
:::::
```

<br>

***

<br>

## Free Energy Setup

1. Go back on level to the `free_energy` folder
2. I prepared 3 template files for MD inputs:
   1. min.tmpl
   2. heat.tmpl
   3. prod.tmpl
   
```{admonition} Templates for MD inputs
:class: dropdown

:::::{tab-set}
::::{tab-item} 1. min.tmpl
:::{code-block} shell
:lineno-start: 1

minimisation
 &cntrl
   ! Minimization Options
   imin = 1, 
   ntmin = 2, 
   maxcyc = 500,
   ntpr = 50, 
   ntwe = 50,
   dx0 = 1.0D-7,

   icfe = 1, ifsc = 1, clambda = %L%, scalpha = 0.5, scbeta = 12.0,
   logdvdl = 0,
   timask1='@14195,14196,14197,14198,14199,14200,14201,14202,14203,14204,14205,14206,14207,14208,14209,14210,14211,14212,14213,14214,14215,14216',
   timask2='@22497,22498,22499,22500,22501,22502,22503,22504,22505,22506',
   scmask1='@14195,14196,14197,14198,14199,14200,14201,14202,14203,14204,14205,14206,14207,14208,14209,14210,14211,14212,14213,14214,14215,14216',
   scmask2='@22497,22498,22499,22500,22501,22502,22503,22504,22505,22506',
   ! timask1=':865',
   ! scmask1=':865',
   ! timask2=':2230',
   ! scmask2=':2230',
   
 /

 &ewald
 / 
:::
::::
::::{tab-item} 2. heat.tmpl
:::{code-block} shell
:lineno-start: 1

heating
 &cntrl
   imin = 0, 
   irest = 0, 
   ntx = 1, 
   
   ! MD
   nstlim = 20000, 
   dt = 0.001,
   ntb = 1, ! NVT

   ! SHAKE
   ntc = 2,
   ntf = 1, ! alchemical

   ! Temperature Regulation
   ntt = 3, 
   temp0 = 300.0, 
   tempi = 50.0, 
   gamma_ln = 1.0,

   ! output
   ioutfm = 1, 
   iwrap = 1,
   ntwe = 1000, 
   ntwx = 1000, 
   ntpr = 1000, 
   ntwr = 5000,

   !needed for method 2, also set dt=0.001
   noshakemask = ':865,2230',

   nmropt = 1,
   ntr = 1, restraint_wt = 5.00,
   restraintmask='@CA & @P',

   icfe = 1, ifsc = 1, clambda = %L%, scalpha = 0.5, scbeta = 12.0,
   logdvdl = 0,
   timask1='@14195,14196,14197,14198,14199,14200,14201,14202,14203,14204,14205,14206,14207,14208,14209,14210,14211,14212,14213,14214,14215,14216',
   timask2='@22497,22498,22499,22500,22501,22502,22503,22504,22505,22506',
   scmask1='@14195,14196,14197,14198,14199,14200,14201,14202,14203,14204,14205,14206,14207,14208,14209,14210,14211,14212,14213,14214,14215,14216',
   scmask2='@22497,22498,22499,22500,22501,22502,22503,22504,22505,22506',
   ! timask1=':865',
   ! scmask1=':865',
   ! timask2=':2230',
   ! scmask2=':2230',

 /

 &ewald
 / 

 &wt
   type='TEMP0',
   istep1 = 0, istep2 = 18000,                                      
   value1 = 50.0, value2 = 300.0
 /

 &wt type = 'END'
 /
:::
::::
::::{tab-item} 3. prod.tmpl
:::{code-block} shell
:lineno-start: 1

TI simulation
 &cntrl
   imin = 0,         ! Turn on minimization
   irest = 1,        ! 1 = restart simulation
   ntx = 5,          ! 5 = read coordinates/velocities from file
   
   ! Molecular Dynamics
   nstlim = 1000000,  ! Number of MD-steps
   dt = 0.002,       ! time step (psec)
   ntb = 1,          ! NVT
   ntc = 2,          ! Turn on SHAKE (bonds involving hydrogen constrainted) 
   ntf = 1,

   ! Temperature Regulation
   ntt = 3,               ! 0=NVE,1=NVT,2=Anderson,3=Langevin
   temp0 = 300.0,         ! Reference temperature
   gamma_ln = 1.0,        ! Collision frequency in ps^-1
   ig = -1,               ! Random initial velocities
   
   ! Outputs
   ntwx = 500000,          ! Write coordinates to .nc 
   ntpr = 500000,          ! Print energy every ntpr steps
   ntwr = 2500000,          ! Write rsrt every ntwr steps
   ntwe = 250000,           ! Write energy/temp to mden
   ioutfm = 1,            ! Format of coordinate/v 
   iwrap = 1,             ! PBC

   ! Amber TI Free Energy Calculation (pmemd/sander)
   icfe = 1,              ! Turn on TI estimates
   ifsc = 1,		  ! Turn on Softcore-Potential electrostatics
   clambda = %L%,         ! lambda value (0=unperturb Hamiltonian)
   scalpha = 0.5,         ! alpha parameter (default=0.5)
   scbeta = 12.0,         ! beta parameter (defulat(12 Angstrom^2)
   logdvdl = 1,           ! Print pV/vlamba for postprocessing

   ! Output files for MBAR post-processing
   ifmbar = 1,            ! Print potential E for MBAR
   mbar_states = 11,      ! Number of lambda windows
   ! Lambda Windows simulated
   mbar_lambda = 0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,

   ! TI Amber mask selection
   timask1='@14195,14196,14197,14198,14199,14200,14201,14202,14203,14204,14205,14206,14207,14208,14209,14210,14211,14212,14213,14214,14215,14216',
   timask2='@22497,22498,22499,22500,22501,22502,22503,22504,22505,22506',
   scmask1='@14195,14196,14197,14198,14199,14200,14201,14202,14203,14204,14205,14206,14207,14208,14209,14210,14211,14212,14213,14214,14215,14216',
   scmask2='@22497,22498,22499,22500,22501,22502,22503,22504,22505,22506',
   ! timask1=':865',
   ! scmask1=':865',
   ! timask2=':2230',
   ! scmask2=':2230',
 /

 &ewald
 / 
:::
::::
:::::
```

3. Prepare lambda directories by running `./setup.sh`
4. Run independent simulations with:
   1. `run_protein.slurm`
   2. `run_complex.slurm`

