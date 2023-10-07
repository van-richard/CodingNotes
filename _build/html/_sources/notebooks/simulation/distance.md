# Distance Restraints

<video src="../../_static/distance.mov" width="100%" controls>
</video>

We can apply a harmonic restraint to atoms/residues if we are interested in changes to molecular interactions or thermodynamics.

This is another simplified tutorial building on what we learned from simulations of alanine dipeptide. We will simulate 2 molecules of alanine dipeptide using `sander` from `ambertools`. In the simulation, we will gradually pull the 2 molecules away from each other (4 Angstom to 10 Angstrom).

We will perform the typical simulations steps, such as equilibration (minimizatino, heating 20 ps) and production runs (100 ps). Additionally, we will prepare 4 copies of `prod.in` where each input has a different distance restraint value.

The files we need are:

1. Topology file (*.parm7)
2. Coordinate file (*.rst7)
3. MD input files (min.in, heat.in, prod\*.in, and *cv\*.rst*)

````{note}
You can download my files: [distance.tar.bz2](https://www.dropbox.com/scl/fi/8p1ymw35ilvs79egtktqv/distance.tar.bz2?rlkey=mgddua07m5q8ukbptf1uiv36j&dl=0)

Extract the file with:

```bash
tar xvjf distance.tar.bz2
```

In this tutorial, I am running the simulation on my personal computer, not on the supercomputer.*

This requires the `ambertools` conda environment. You can activate it running:

```bash
conda activate ambertools
```
````

## Preparing Inputs

nda activate ambertools
```

First we will need to prepare the input files. Start by making a new project folder called `distance`, and then change directories here:

```bash
mkdir distance
cd distance
```

Since alanine dipeptide is an amino acid that is capped. We can use `tleap` to generate our topology and coordinate files. 

We can use tleap to generate the topology and coordinate file.

To do so, make a file called `tleap.in`.

```bash
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

Here we made each molecule of alanine dipeptide as `sys1` or `sys`. `tleap` will automatically place both in the center of the water box. We can change this by using `translate` to move one of the molecules 5 Å away in the x-direction. Finally, combine both molecules, and save a new PDB file. The PDB file will help with identifing atom/residue indexes. Get the Amber input files by running the script, `tleap.in`

```bash
tleap -sf tleap.in
```

If you list the files in the current working directory, you should see

1. `step3_pbcsetup.parm7`
2. `step3_pbcsetup.rst7`
3. `step3_pbcsetup.pdb`

```{note}
Visualize these files with VMD. Always do this before moving on!
```

Next, we will make the Amber MD input files. 

They contain settings for each MD run. We will have 3 steps:

1. Minimization
2. Heating (for 10 ps at 300 K)
3. Production MD (10 ps at 300 K, ranging distance)

**Minimization** Make a `min.in` file, with:

```bash
Minimize
 &cntrl
  imin=1    
  ntx=1,        
  irest=0,
  maxcyc=2000,
  ncyc=1000,
  ntpr=100,
  ntwx=0,
  cut=8.0,
 /
```

**Heating** Make a `heat.in` file, with:

```bash
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

**Production MD** We will need 4 copies of `prod.in`. Make sure they have different names (i.e. `prod0`, `prod1`, `prod2`, and `prod3`). Use the following as your template, and be sure to change the last line, where `DUMPAVE=prod.cv` to `DUMPAVE=prod[0,1,2, or 3].cv`.

Here is an example of `prod0.in`.

```bash
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
    nstlim=10000, ! 2 ns total
    dt=0.001,      ! time step (ps)

    ! SHAKE
    ntc=2,         ! Constrain bonds containing hydrogen
    ntf=2,         ! Do not calculate forces of bonds containing hydrogen

    ! Control how often information is printed
    ntpr=1000,     ! Print energies every 1000 steps
    ntwx=1000,    ! Print coordinates every 50000 steps to the trajectory
    ntwr=1000,    ! Print a restart file every 10K steps (can be less frequent)
    ntxo=2,        ! Write NetCDF format
    ioutfm=1,      ! Write NetCDF format (always do this!)

    ! Wrap coordinates when printing them to the same unit cell
    iwrap=1,
        
    ! Restraints
    nmropt=1,      ! Turn on restraints

 /
 
 &wt type='DUMPFREQ', istep1=10 / # Print restraint value every 10 steps
 &wt type='END' /
 DISANG=cv0.rst   # Restraint file is cv0.rst
 DUMPAVE=prod0.cv # Print restraint value in the file, prod0.cv

 /
```


### Restraint File

Like the `prod.in`, prepare 4 copies of the restraint file, `cv.rst` (`cv0.rst`, `cv1,rst`, `cv2.rst`, and `cv3.rst`). Set the range of the restraint value to 4, 8, 12, and 15 (e.g. for a distance restraing of 8 Angstroms, do, `r2=8, r3=8`... etc.). The file has the following format:

`iresid` - `iresid=0` Use atom numbering (Turning this on, `resid=1`, seems to not work which is why we use atom numbering).
`igr1` - Center of mass (COM) of the first residue.
`igr2` - Center of mass (COM) of the second residue.
`r1..r4` - The shape of the potential.
`rk2..rk3` - Restraint force constant (kcal/mol)

Example with COM distance of 4 Angstrom.

```bash
# Distance restraint of 4 Angstroms between the center of mass (COM) of both molecules (the ALA part)
# igr1 and igr2 are the atom numbers
 &rst
  iat=-1,-1,
  iresid=0,
  igr1=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
  igr2=23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,
  r1=-20, r2=4, r3=4, r4=20,
  rk2=10.0, rk3=10.0,
 &end
```

## Run Amber MD with `sander`

Alternatively, you can also run this with the MPI version of `sander` or `pmemd`, or if you have a GPU available, `pmemd.cuda`. Just replace `sander` with your choice of MD engine.

You can prepare a single file running the steps sequentially. I made the file, `runmd.slurm`.

```bash
#!/bin/bash

sander="sander"

$sander -O -i min.in -p step3_pbcsetup.parm7 -c step3_pbcsetup.rst7 -o min.out -r min.ncrst -inf min.mdinfo

$sander -O -i heat.in -p step3_pbcsetup.parm7 -c min.ncrst -o heat.out -r heat.ncrst -inf heat.mdinfo -ref min.ncrst -x heat.nc

$sander -O -i prod0.in -p step3_pbcsetup.parm7 -c heat.ncrst -o prod0.out -r prod0.ncrst -inf prod0.mdinfo -x prod0.nc

$sander -O -i prod1.in -p step3_pbcsetup.parm7 -c prod0.ncrst -o prod1.out -r prod1.ncrst -inf prod1.mdinfo -x prod1.nc

$sander -O -i prod2.in -p step3_pbcsetup.parm7 -c prod1.ncrst -o prod2.out -r prod2.ncrst -inf prod2.mdinfo -x prod2.nc

$sander -O -i prod3.in -p step3_pbcsetup.parm7 -c prod2.ncrst -o prod3.out -r prod3.ncrst -inf prod3.mdinfo -x prod3.nc
```

Running `runmd.slurm` on *your computer*:

```bash
bash runmd.slurm
```

## Conclusion

Now you can visual the results with VMD or Chimera, and perform some analysis.

## Helpful Tips

Generate `cv[0 to 3].rst` and `prod[0 to 3].in` files by looping.

Instead of making a file called `cv.rst`. Make a file called `ref_cv.rst`, which looks like:

```bash
# Distance restraint of 4 Angstroms between the center of mass (COM) of both molecules (the ALA part)
# igr1 and igr2 are the atom numbers
 &rst
  iat=-1,-1,
  iresid=0,
  igr1=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
  igr2=23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,
  r1=-20, r2=__REST__, r3=__REST__, r4=20,
  rk2=10.0, rk3=10.0,
 &end
 ```

```{note}
r2` and `r3` are now set to `__REST__`, which will be replaced through a script I call `gen_inputs.in`.
```

Instead of making a file called `prod.rst`. Make a file called `ref_prod.rst`, which looks like:

```bash
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
    nstlim=10000, ! 2 ns total
    dt=0.001,      ! time step (ps)

    ! SHAKE
    ntc=2,         ! Constrain bonds containing hydrogen
    ntf=2,         ! Do not calculate forces of bonds containing hydrogen

    ! Control how often information is printed
    ntpr=1000,     ! Print energies every 1000 steps
    ntwx=1000,    ! Print coordinates every 50000 steps to the trajectory
    ntwr=1000,    ! Print a restart file every 10K steps (can be less frequent)
    ntxo=2,        ! Write NetCDF format
    ioutfm=1,      ! Write NetCDF format (always do this!)

    ! Wrap coordinates when printing them to the same unit cell
    iwrap=1,
        
    ! Restraints
    nmropt=1,      ! Turn on restraints

 /
 
 &wt type='DUMPFREQ', istep1=10 /
 &wt type='END' /
 DISANG=cv__REST__.rst
 DUMPAVE=prod__REST__.cv

 /
```

Then make a file called `gen_inputs.in`, which makes new files by modifying the `__REST__` string with the restraint value needed (Using the`sed` function), based on a reference file (`ref_cv.rst` and `ref_prod.in`). The`gen_inputs.in` file looks like:

```bash
#!/bin/bash

n=4 # First restraint value
for i in `seq 0 3`; do # Loop over the sequence of number 0, 1, 2, 3
    sed "s/__REST__/${n}/g" ref_cv.rst > cv${i}.rst # Change __REST__ to restraint value
    sed "s/__REST__/${n}/g" ref_prod.in > prod${i}.in # Change __REST__ to restraint value
    n=`echo $n + 4 | bc` # Add 2 to the last restraint value
done
```
