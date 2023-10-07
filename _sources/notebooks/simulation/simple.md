# Simple MD Tutorial

<!-- <img src="../images/fun-fish.png" alt="fishy" class="bg-primary mb-1" width="200px"> -->
<!-- <video src="../../_static/simple.mov" width="50%" controls> -->

```{figure} ../../_static/simple.mov
---
width: 50%
name: simple-md
---
MD trajectory of Alanine Dipeptide (shown as ball-and-stick) solvated in a water box (shown as line) viewed on VMD.
```

A simple example we can perform is a simulation of Alanine Dipeptide solvated in a water box. Alanine Dipeptide is just the amino acid, Alanine, but with the N-terminal capped by an acetyl group (Amber Residue Name: ACE), and C-terminal capped by N-methylamide (Amber Residue Name: NME).

To do so, we will need to make:

1. Topology file (*.parm7)
2. Coordinate file (*.rst7)
3. MD input files (min.in, heat.in, prod.in)

````{note}
You can download my files: [simple.tar.bz2](https://www.dropbox.com/scl/fi/vnhuy67y148z51talehlt/simple.tar.bz2?rlkey=cocf2mz57hbsnj26xe4f6e4d4&dl=0)

Extract the file with:

```bash
tar xvjf simple.tar.bz2
```

In this tutorial, I am running the simulation on my personal computer, not on the supercomputer.*

This requires the `ambertools` conda environment. You can activate it running:

```bash
conda activate ambertools
```
````


## Preparing Inputs

First we will need to prepare the input files. Start by making a new project folder called `simple`, and then change directories here:

```bash
mkdir simple
cd simple
```

Alanine dipeptide is an amino acid with its ends capped. We can use the `tleap` program to generate our topology and coordinate files. To do this, make a file called "tleap.in" with `vi` (i.e., `vi tleap.in`) and copy the following:

```bash
source leaprc.protein.ff19SB
source leaprc.water.TIP3P

system = sequence { ACE ALA NME }

solvatebox system TIP3PBOX 12.0 iso 0.8

saveamberparm system step3_pbcsetup.parm7 step3_pbcsetup.rst7

quit
```

Save and exit `vi`. Now, you can run `tleap` with `tleap.in` as the input:

```bash
tleap -sf tleap.in
```

If you list the files in this  directory, you should see `step3_pbcsetup.parm7` and `step3_pbcsetup.rst7`.

```{note}
Visualize these two files with VMD. Always do this before moving on!
```

Now, we will make the Amber MD input files. These files contain the settings for each MD run. We will have 3 steps:

1. Minimization
2. Heating (for 20 ps from 0 K to 300 K)
3. Production MD (100 ps at 300 K and 1 atm)


**Minimization** Make a `min.in` file, with `vi min.in` containing:

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

**Heating** Make a `heat.in` file, with `vi heat.in` containing:

```bash
Heat
 &cntrl
  imin=0,
  ntx=1,
  irest=0,
  nstlim=10000,
  dt=0.002,
  ntf=2,
  ntc=2,
  tempi=0.0,
  temp0=300.0,
  ntpr=100,
  ntwx=100,
  cut=8.0,
  ntb=1,
  ntp=0,
  ntt=3,
  gamma_ln=2.0,
  nmropt=1,
  ig=-1,
 /
&wt type='TEMP0', istep1=0, istep2=9000, value1=0.0, value2=300.0 /
&wt type='TEMP0', istep1=9001, istep2=10000, value1=300.0, value2=300.0 /
&wt type='END' /
```

**Production MD** Make a `prod.in` file, with `vi prod.in` containing:

```bash
Production
 &cntrl
  imin=0,
  ntx=5,
  irest=1,
  nstlim=50000,
  dt=0.002,
  ntf=2,
  ntc=2,
  temp0=300.0,
  ntpr=100,
  ntwx=100,
  cut=8.0,
  ntb=2,
  ntp=1,
  ntt=3,
  barostat=1,
  gamma_ln=2.0,
  ig=-1,
 /
```


## Running the Simulation

Amber has 2 MD engines, `sander` and `pmemd`. `sander` is free and shipped with Ambertools. 

```{note}
You can also run this with the MPI version of `sander` or `pmemd`, or the GPU version of `pmemd` called `pmemd.cuda` if you have access to our Amber software. Just change `sander` to your desired MD engine.
```

Run each step in sequential order, starting with minimization.

::::{tab-set}
:::{tab-item} Step 1 - Minimization
```bash
sander -O -i min.in -p step3_pbcsetup.parm7 -c step3_pbcsetup.rst7 -o min.out -r min.ncrst -inf min.mdinfo
```
:::
::::{tab-item} Step 2 - Heating
:::
```bash
sander -O -i heat.in -p step3_pbcsetup.parm7 -c min.ncrst -o heat.out -r heat.ncrst -inf heat.mdinfo -x heat.nc
```
:::
::::{tab-item} Step 3 - Production MD
:::
```bash
sander -O -i prod.in -p step3_pbcsetup.parm7 -c heat.ncrst -o prod.out -r prod.ncrst -inf prod.mdinfo -x prod.nc
```
:::
::::


## Conclusion

Now you can visual the results with VMD or Chimera, and perform some analysis.

