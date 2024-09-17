# Simple MD Tutorial of Alanine Dipeptide

A simple example of how to run MD simulations is with the molecule, Alanine Dipeptide. We will model the residue, solvate it in a water box, equilibrate the system, and run MD production simulations with AmberTools. This should take roughly an hour.

```{figure} https://github.com/van-richard/CodingNotes/blob/2d70d86fc555d6dfc7dedc47d996929f56fd6e04/_static/videos/simple.mov
---
width: 50%
---

MD trajectory of Alanine Dipeptide (*shown as ball-and-stick*) solvated in water (*shown as line*) viewed on VMD.
```

The system, Alanine Dipeptide, is the amino acid, Alanine, with the charged ends neutralized. This is done by "capping" the N-terminal with an acetyl group, and C-terminal with N-methylamide.

In this tutorial, we will:

* Make a `~/Tutorials/` folder all of our projects
* Add a new project folder called `simple`
* Use `tleap` to make the molecule (in Amber format)
* Prepare inputs for MD simulations
* Run MD simulations with `sander`
* Analyze the trajectory

**This assumes you have already installed some form of conda, and made the conda environment "ambertools".**

````{note}
- This tutorial can be perform on your local computer
- Download my files for reference: [simple.tar.bz2](https://github.com/van-richard/CodingNotes/blob/79059b233ce24e12ba779f981d50726ea5ec528c/assets/tar/simple.tar.xz "download")
````

## Prepare Files & Folders

First, set up the directories by creating a folder for "Tutorials", then make a project folder for the "simple" simulation project. *Optionally, if you downloaded the reference file, we will move `simple.tar.bz2` into a reference folder.*

Create:
1. A `~/Tutorials` folder in our home
2. A `simple` folder inside `~/Tutorials`
    - i.e. ~/Tutorials/simple
3. (Optional) The downloaded reference folder `simple` in `~/Tutorials/references/`
    - i.e. ~/Tutorials/references/simple

Open terminal and check where you are:

```bash
pwd
```

Make a new directory for projects called, "Tutorials":

```bash
mkdir ~/Tutorials
```

The `~/` before Tutorials is the home path, i.e. `$HOME/Tutorials`. 

Go inside `~/Tutorials` and  make the first project folder called, "simple":

```bash
mkdir simple
```

If you downloaded my reference files, then make another folder called "references", with `mkdir references`, then unzip and move the folder into references,

:::::{admonition} Try me!!
:class: dropdown

Assuming you saved my reference file by using your mouse, moved the file to `~/Tutorials`, and extracted the files by clicking...

I want to share the command line approach! Downloading and extracting compressed files via command line is helpful because it can be automated! Plus, in the future, we don't want to download files locally, then upload to the supercomputer... It becomes tedious..

In the terminal, go to where you want the file to be saved (`cd ~/Tutorials/`):

- Download the `.tar.bz2` file with either `curl` or `wget` *depending on your OS*. 
- Extract the files with `tar`

::::{tab-set}
:::{tab-item} MacOS
```bash
curl - O https://van-richard.github.io/CodingNotes/_downloads/053d20a2b9fe9f09025552a74192e439/simple.tar.bz2
tar xvfj simple.tar.bz2 
```
:::
:::{tab-item} Linux
```bash
wget https://van-richard.github.io/CodingNotes/_downloads/053d20a2b9fe9f09025552a74192e439/simple.tar.bz2
tar xvfj simple.tar.bz2 
```
:::
::::
:::::

:::{admonition} Question

In terms of the terminal, do you know where you are or what is in this directory? If you forgot the path, then run `pwd`. This will tell you where you are with respect to your home directory. To see files/folders, run `ls`.
:::

## Prepare Topology and Coordinate Files Inputs

Since Alanine dipeptide is still an amino acid, we can use `tleap` to generate the topology (`.parm7`) and coordinate files(`.rst7`). The `tleap` program contains reference coordinates for standard residues to generate  missing atoms, this function is base on the residue name.

To give `tleap` instructions, make a file called, "tleap.in" using `vi`, and copy the following lines:

:::{code-block} shell
:linenos:

source leaprc.protein.ff19SB
source leaprc.water.tip3p

system = sequence { ACE ALA NME }

solvatebox system TIP3PBOX 12.0 iso 0.8

saveamberparm system step3_pbcsetup.parm7 step3_pbcsetup.rst7

quit
:::

Briefly, the:

* `source` line tell Amber which force field parameters we want for our molecules, this is always at the top of the file
    * `leaprc.protein.ff19SB` contains protein parameters
    * `leaprc.water.tip3p` has the water parameters
* `system = sequence { ACE ALA NME }` line makes use of the `sequence` command which combines amino acid residues together to build a molecule, and this is stored as "system" variable
* `solvatebox system TIP3PBOX 12.0 iso 0.8` line create a a water box around the `system`, such that the minimum distance between any atom in `system` and the edge of the periodic box `12.0` Å. 
    * `iso` rotates the `system` to orient the principal axes
    * `0.8` is how close a solvent atom can be to the system atoms
* `saveamberparm system step3_pbcsetup.parm7 step3_pbcsetup.rst7` line saves `system` as Amber topology (`step3_pbcsetup.parm7`) and coordinate (`step3_pbcsetup.rst7`) files
* `quit` line exits the tleap program.

Now we can run `tleap`:

```bash
tleap -sf tleap.in
```

The `-sf` for `tleap` lets us run the script `tleap.in`, otherwise it will run interactively in the command line


If you list the files in this directory, you should see `step3_pbcsetup.parm7` and `step3_pbcsetup.rst7`.

```{important}
Visualize these two files with VMD. Always do this before moving on!
```

## Prepare MD Inputs - Simulation Settings

Now, we will make 3 MD input files for running Amber simulations. These files contain the settings for each part of the simulations. The 3 parts involve:

1. Minimization
2. Heating (for 20 ps from 0 K to 300 K)
3. Production MD (100 ps at 300 K and 1 atm)

::::{tab-set}
::: {tab-item} min.mdin
```shell
Minimization input file in explicit solvent
 &cntrl
  ! Minimization options
  imin=1         ! Turn on minimization
  maxcyc=2000,   !  Maximum number of minimization cycles
  ncyc=1000,     ! Steepest-descent steps, better for strained systems       

  ! Potential energy function options
  cut=8.0,       ! nonbonded cutoff, in angstroms
 
  ! Control how often information is printed to the output file
  ntpr=100,      ! Print energies every 100 steps
 /
 
```
:::
:::{tab-item} heat.mdin
```shell
A NVT simulation for common production-level simulations
 &cntrl
  imin=0,        ! Turn off minimization
  irest=0,       ! This is NOT a restart of an old MD simulation
  ntx=1,         ! So our inpcrd file has no velocities
   
  ! Temperature control
  ntt=3,         ! Langevin dynamics
  gamma_ln=1.0,  ! Friction coefficient (ps^-1)
  tempi=0.0,     ! Initial temp -- give it some small random velocities   
  temp0=300,     ! Target temperature

  ! Potential energy control
  cut=0,       ! nonbonded cutoff, in angstroms
 
  ! MD settings
  nstlim=10000,  ! MD steps
  dt=0.002,      ! Time step (ps)

  ! SHAKE
  ntc=2,         ! Constrain bonds containing hydrogen
  ntf=2,         ! Do not calculate forces of bonds containing hydrogen
  
  ! Control how often information is printed
  ntwx=100,      ! Print coordinates every ntwx steps to the trajectory
  
  ! Restraints
  nmropt=1,      ! Turn on Restraints
 /
! This section will vary the temperature 
! For the first 9000 steps, temp increases from 0 to 300 K.
! For steps 9001 to 10000, temp will remain at 300 K
&wt type='TEMP0', istep1=0, istep2=9000, value1=0.0, value2=300.0 /
&wt type='TEMP0', istep1=9001, istep2=10000, value1=300.0, value2=300.0 /
&wt type='END' /

```
:::
:::{tab-item} prod.mdin
```shell
A NPT simulation for common production-level simulations
 &cntrl
  imin=0,        ! Turn off minimization
  irest=1,       ! This is a restart of an old MD simulation
  ntx=5,         ! So our inpcrd file has velocities
  
  ! Temperature control
  ntt=3,         ! Langevin dynamics
  gamma_ln=2.0,  ! Friction coefficient (ps^-1)   
  temp0=300,     ! Target temperature
  
  ! Potential energy control
  cut=8.0,       ! nonbonded cutoff, in angstroms

  ! MD settings
  nstlim=50000,  ! MD steps
  dt=0.002,      ! Time step (ps)

  ! SHAKE
  ntc=2,         ! Constrain bonds containing hydrogen
  ntf=2,         ! Do not calculate forces of bonds containing hydrogen
  
  ! Control how often information is printed
  ntwx=100,      ! Print coordinates every ntwx steps to the trajectory  
  ntpr=100,
  ntwx=100,

  ! Constant pressure control.
  barostat=1,    ! Berendsen barostat... change to 2 for MC
  ntp=1,         ! 1=isotropic, 2=anisotropic, 3=semi-isotropic w/ surften
  pres0=1.0,     ! Target external pressure, in bar
  taup=1.0,      ! Pressure relaxation time (in ps)
 /
 
```
:::
::::

## Running the Simulation

- Amber has 2 MD engines called, `sander` and `pmemd` 
- `sander` is free and shipped with Ambertools

Using `sander`, run the following commands in sequential order:

::::{tab-set}
:::{tab-item} Step 1 - Minimization
```bash
sander -O -i min.mdin -p step3_pbcsetup.parm7 -c step3_pbcsetup.rst7 -o min.mdout -r min.ncrst -inf min.mdinfo
```
:::
:::{tab-item} Step 2 - Heating
```bash
sander -O -i heat.mdin -p step3_pbcsetup.parm7 -c min.ncrst -o heat.mdout -r heat.ncrst -inf heat.mdinfo -x heat.nc
```
:::
::::{tab-item} Step 3 - Production MD
```bash
sander -O -i prod.mdin -p step3_pbcsetup.parm7 -c heat.ncrst -o prod.mdout -r prod.ncrst -inf prod.mdinfo -x prod.nc
```
:::
::::

## Visualize Trajectory

Now you can visual the results with VMD or Chimera, and perform some analysis.
