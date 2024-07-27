# Applying Distance Restraints in Classical MD Simulations

We can apply restraints to atoms or residues if we are interested in modelling a specific process such as diffusion or binding.

Building on from the `simple` tutorial, the goal here is to simulate the process of 2 Alanine Dipeptide molecules slowly diffusing away from each other using `sander` in the `ambertools` conda environment. 

```{figure} ../../_static/videos/distance.mov
---
width: 50%
---
MD trajectories of 2 Alanine Dipeptide molecules (*shown as ball-and-stick*), solvated in water (*shown as line*) as viewed on VMD. Resrtrains were placed on the center-of-mass between both molecules starting from a distance of 4 Å and gradually increased to 15 Å.
```

In this tutorial, we will:

* Add a new project folder (`~/Tutorials/distance`)
* Use `tleap` to make the molecule (in Amber format)
* Prepare inputs for MD simulations 
* Prepare restraint files `cv.rst`
* Run MD simulations with `sander`
* Analyze the trajectory

**This assumes you have already installed some form of conda, and made the conda environment "ambertools".**

````{note}
- This tutorial can be perform on your local computer
- Download my files for reference: [distance.tar.bz2](https://github.com/van-richard/CodingNotes/blob/79059b233ce24e12ba779f981d50726ea5ec528c/assets/tar/distance.tar.xz "download")
````

## Prepare Files & Folders

Make a project folder, called "distance" in the `~/Tutorials` directory, and change to that directory. *Optionally, if you downloaded the reference file, we will move `distance.tar.bz2` into the reference folder.*

::::{tab-set}
:::{tab-item} Skip Reference File
```bash
cd ~/Tutorials # Go to $HOME/Tutorials
mkdir distance # Make "distance" folder
cd distance    # Go to "distance" folder
```
:::
:::{tab-item} Download Reference File
```bash
cd ~/Tutorials/references # Go to $HOME/reference (Made in simple tutorial)
# I use curl on my Macbook
curl -O 
tar xvfj distance.tar.bz2 # Extract file with tar
cd ../                    # Go back one directory level
mkdir distance            # Make "distance" folder 
cd distance               # Go to "distance" folder
```
:::
::::

## Make Topology and Coordinate Files

Similar to the `simple` tutorial. We use `leap` to prepare our Amber topology and coordinate file. Since Alanine Dipeptide is still an amino acid, we can use `tleap` to generate the topology (`.parm7`) and coordinate files(`.rst7`). The `tleap` program contains reference coordinates for standard residues to generate  missing atoms, this function is base on the residue name.


Give `tleap` instructions by making a file called "tleap.in" containing: 

```shell
source leaprc.protein.ff19SB
source leaprc.water.TIP3P

sys1 = sequence { ACE ALA NME }
sys2 = sequence { ACE ALA NME }
translate sys2 { 5 0 0 }
system = combine { sys1 sys2 }

solvatebox system TIP3PBOX 12.0 iso 0.8

saveamberparm system step3_pbcsetup.parm7 step3_pbcsetup.rst7
savepdb system step3_pbcsetup.pdb

quit
```

This is almost the same as the `tleap` file we made in the `simple` tutorial. Here is an explanation for what each line does:

* `source` line tell Amber which force field parameters we want for our molecules, this is always at the top of the file
    * `leaprc.protein.ff19SB` contains protein parameters
    * `leaprc.water.TIP3P` has the water parameters
* `sys1` is one molecular unit of Alanine Dipeptide 
* `sys2` is another molecular unit of Alanine Dipeptide
* `translate sys2 { 5 0 0 }` shifts the second molecular unit by 5 Å in the x-direction
* `system = combine { sys1 sys2 }` merges both units to one unit, `system`
* `solvatebox system TIP3PBOX 12.0 iso 0.8` line create a a water box around the `system`, such that the minimum distance between any atom in `system` and the edge of the periodic box `12.0` Å. 
    * `iso` rotates the `system` to orient the principal axes
    * `0.8` is how close a solvent atom can be to the system atoms
* `saveamberparm system step3_pbcsetup.parm7 step3_pbcsetup.rst7` line saves `system` as Amber topology (`step3_pbcsetup.parm7`) and coordinate (`step3_pbcsetup.rst7`) files
* `savepdb system step3_pbcsetup.pdb` saves the unit as a PDB file
* `quit` line exits the tleap program.

Run `tleap`, check if you have the 3 new files, and visualize them!

1. `step3_pbcsetup.parm7`
2. `step3_pbcsetup.rst7`
3. `step3_pbcsetup.pdb`

```bash
tleap -sf tleap.in
```

```{note}
We made 2 molecule of alanine dipeptide, where one unit is `sys1`, and the other unit is `sys2`. `tleap` will automatically place both units in the center of the water box. We changed this by using `translate` and move `sys2` 5 Å away in the x-direction. Next, we need to combine both units, solvate the system with water, and save the topology/coordinate files, as well as a new PDB file. 

**The PDB file will help us with identifing atom/residue indexes for the restraint file!!**
```

## Prepare MD Inputs - Simulation Settings

Prepare 2 MD input files, `min.mdin`, and `heat.mdin`. These files contain the settings for the first stage of the simulations. 

1. Minimization
2. Heating (for 10 ps at 300 K)

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
    imin=0,        ! No minimization
    irest=0,       ! This is NOT a restart of an old MD simulation
    ntx=1,         ! So our inpcrd file has no velocities

    ! Temperature control
    ntt=3,         ! Langevin dynamics
    gamma_ln=1.0,  ! Friction coefficient (ps^-1)
    temp0=300,     ! Target temperature

    ! Potential energy control
    cut=9.0,       ! nonbonded cutoff, in angstroms

    ! MD settings
    nstlim=10000,  ! 10K steps, 10 ps total
    dt=0.001,      ! time step (ps)

    ! SHAKE
    ntc=2,         ! Constrain bonds containing hydrogen
    ntf=2,         ! Do not calculate forces of bonds containing hydrogen

    ! Control how often information is printed
    ntpr=1000,     ! Print energies every 1000 steps
    ntwx=1000,     ! Print coordinates every 5000 steps to the trajectory
    ntwr=1000,     ! Print a restart file every 10K steps (can be less frequent)
    ntxo=2,        ! Write NetCDF format
    ioutfm=1,      ! Write NetCDF format (always do this!)

    ! Wrap coordinates when printing them to the same unit cell
    iwrap=1,

    ! Restraint options
    ntr=1,
    restraint_wt=5,
    restraintmask=':1-6', ! Apply weak positional restraint on residues
 /
```
:::
::::

### Restraint Files 

To apply a distance restraint, I typically use the Umbrella Sampling approach. If I avoid all the gritty details, the setup only requires 1 additional restraint file (`cv.rst`) for each restraint value. 

If our initial distance between the 2 molecules is 5 Å, and the goal is to observe some property of the system when the distance is 15 Å. Then I want to sample some distances < 5 Å and increment that distance at some value until I reach 15 Å. The increment between distance will depend on the system and property you're studying. 

Since this is a simple example, we will start with a restraint value of 4 Å and increment this by 4, until we reach 16 Å (i.e.,** our restraint values are 4, 8, 12,and 16 Å**)

The files we need to make are, `prod.mdin` and  `cv.rst`, but each file must have a restraint value of 4, 8, 12, or 16. To keep files organized, I recommend sequentially ordering the files like:

| Produdction MD File | Restraint File | Restraint Value (Å) | 
| --- | --- | ---| 
| prod0.mdin | cv0.rst | 4 |   
| prod1.mdin | cv1.rst |  8 |
| prod2.mdin | cv3.rst | 15 |
| prod3.mdin | cv4.rst | 16 |


The following is a template for preparing the 4 copies of `prod.mdin` and `cv.rst`:

::::{tab-set}
:::{tab-item} Template for "prod.mdin"
```shell
A NVT simulation for common production-level simulations
 &cntrl
    imin=0,        ! No minimization
    irest=1,       ! This IS a restart of an old MD simulation
    ntx=5,         ! So our inpcrd file has velocities

    ! Temperature control
    ntt=3,         ! Langevin dynamics
    gamma_ln=1.0,  ! Friction coefficient (ps^-1)
    temp0=300,   ! Target temperature

    ! Potential energy control
    cut=9.0,       ! nonbonded cutoff, in Angstroms

    ! MD settings
    nstlim=10000,  ! <span style="font-size:1.5em;">**Options in `cv.rst`**</span>MD steps
    dt=0.001,      ! time step (ps)

    ! SHAKE
    ntc=2,         ! Constrain bonds containing hydrogen
    ntf=2,         ! Do not calculate forces of bonds containing hydrogen

    ! Control how often information is printed
    ntpr=1000,     ! Print energies every ntpr steps
    ntwx=1000,     ! Print coordinates every ntwx steps to the trajectory
    ntwr=1000,     ! Print a restart file every 10K steps (can be less frequent)
    ntxo=2,        ! Write NetCDF format
    ioutfm=1,      ! Write NetCDF format (always do this!)

    ! Wrap coordinates when printing them to the same unit cell
    iwrap=1,
        
    ! Restraints
    nmropt=1,      ! Turn on restraints

 /
 
 &wt type='DUMPFREQ', istep1=10 / ! Print restraint value every 10 steps
 &wt type='END' /
 DISANG=cv__NUMBER__.rst  
 DUMPAVE=prod__NUMBER__.cv 

 /
```
:::
::::{tab-item} Template for "cv.rst"
:::
```shell
 &rst
  iat=-1,-1,
  iresid=0,
  igr1=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
  igr2=23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,
  r1=-20, r2=__VALUE, r3=__VALUE__, r4=20, 
  rk2=10.0, rk3=10.0,
 &end
```
:::
::::

```{warning}

**CHANGE THE FOLLOWING PATTERNS:**

- "\_\_VALUE__" is the restraint VALUE... 4, 8, 12, or 16

- "\_\_NUMBER__" with corresponding run... 0, 1, 2, or 3
```

Since this simulation will take some time, we will start the job first and then look into the details of the files.

## Run MD with Bash Script

Instead of running each simulation one command at a time (like we did in the `simple` tutorial), we can write a script to run it for us! Make a file called, `vi runmd.sh` with:

```shell
#!/bin/bash

date

sander="sander"

$sander -O -i min.mdin -p step3_pbcsetup.parm7 -c step3_pbcsetup.rst7 -o min.mdout -r min.ncrst -inf min.mdinfo

$sander -O -i heat.mdin -p step3_pbcsetup.parm7 -c min.ncrst -o heat.mdout -r heat.ncrst -inf heat.mdinfo -ref min.ncrst -x heat.nc

$sander -O -i prod0.mdin -p step3_pbcsetup.parm7 -c heat.ncrst -o prod0.mdout -r prod0.ncrst -inf prod0.mdinfo -x prod0.nc

$sander -O -i prod1.mdin -p step3_pbcsetup.parm7 -c prod0.ncrst -o prod1.mdout -r prod1.ncrst -inf prod1.mdinfo -x prod1.nc

$sander -O -i prod2.mdin -p step3_pbcsetup.parm7 -c prod1.ncrst -o prod2.mdout -r prod2.ncrst -inf prod2.mdinfo -x prod2.nc

$sander -O -i prod3.mdin -p step3_pbcsetup.parm7 -c prod2.ncrst -o prod3.mdout -r prod3.ncrst -inf prod3.mdinfo -x prod3.nc

date
```

After saving the file, run the script in as a background process with the `&` symbol:

```bash
bash runmd.sh &
```

While we wait for this job to run, we can look at file we made.

<span style="font-size:1.5em;">**Options in `prod.mdin`**</span>

The last 10 lines of `prod.mdin` are:

```shell
    ! Restraints
    nmropt=1,      ! Turn on restraints

 /
 
 &wt type='DUMPFREQ', istep1=10 / ! Print restraint value every 10 steps
 &wt type='END' /
 DISANG=cv__NUMBER__.rst  
 DUMPAVE=prod__NUMBER__.cv 

 /
```

<span style="font-size:1.5em;">**Options in `cv.rst`**</span>

This file follows: 

`iresid` - `iresid=0` Use atom numbering (Turning this on, `resid=1`, seems to not work on my laptop which is why we use atom numbering).
`igr1` - Center of mass (COM) of the first residue.
`igr2` - Center of mass (COM) of the second residue.
`r1..r4` - The shape of the potential.
`rk2..rk3` - Restraint force constant (kcal/mol)

**PHEWWWW***, that was kind of confusing, huh? 

## Visualize and Analysis

Now you can visual the results with VMD or Chimera, and perform some analysis.

