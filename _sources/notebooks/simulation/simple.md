# Tutorial: Simple MD

<center><video src="../../_static/simple.mov" width="50%" controls>
</video></center>

This is a simple tutorial of alanine dipeptide in a water box. We will perform the typical MD simulations steps such as equilibration (minimizatino, heating 20 ps) and have a production run (100 ps). This will take about 1 hour.

To do so, we will need to make:

1. Topology file (*.parm7)
2. Coordinate file (*.rst7)
3. MD input files (min.in, heat.in, prod.in)

You can download my files here:

[simple.tar.bz2](https://www.dropbox.com/scl/fi/vnhuy67y148z51talehlt/simple.tar.bz2?rlkey=cocf2mz57hbsnj26xe4f6e4d4&dl=0)

To extract:

```bash
tar xvjf simple.tar.bz2
```

*NOTE: This tutorial can run on your personal computer. The example/files used the `ambertools` conda environment on my MacBook.*

Activated your `ambertools` conda environment.

```bash
conda activate ambertools
```

## Preparing Inputs

Make a new working directory.

```bash
mkdir tutorial1
cd tutorial1
```

Since alanine dipeptide is an amino acid that is capped. We can use `tleap` to generate our topology and coordinate files. 

To do so, make a file called `tleap.in`.

```bash
source leaprc.protein.ff19SB
source leaprc.water.TIP3P

system = sequence { ACE ALA NME }

solvatebox system TIP3PBOX 12.0 iso 0.8

saveamberparm system step3_pbcsetup.parm7 step3_pbcsetup.rst7

quit
```

Run the script, `tleap.in`

```bash
tleap -sf tleap.in
```

If you list the files in the current working directory, you should see

1. `step3_pbcsetup.parm7`
2. `step3_pbcsetup.rst7`

*ALWAYS VISUALIZE THESE TWO FILES BEFORE MOVING ON!*
Next, we will make the Amber MD input files. 

They contain settings for each MD run. We will have 3 steps:

1. Minimization
2. Heating (for 20 ps from 0 K to 300 K)
3. Production MD (100 ps at 300 K and 1 atm)

### Minimization

Make a `min.in` file, with:

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

### Heating 

Make a `heat.in` file, with:

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

### Production MD

Make a `prod.in` file, with:

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

## Run Amber MD with `sander`

Amber has 2 MD engines, `sander` and `pmemd`. `sander` is free and shipped with Ambertools. 

Alternatively, you can run this with the MPI version of `sander` or `pmemd`, or the GPU version of `pmemd` called `pmemd.cuda`. Just change `sander` to your desired MD engine.

Now run each step in sequential order, starting with minimization.

```bash
sander -O -i min.in -p step3_pbcsetup.parm7 -c step3_pbcsetup.rst7 -o min.out -r min.ncrst -inf min.mdinfo
```

When this is done, run `heat.in`:

```bash
sander -O -i heat.in -p step3_pbcsetup.parm7 -c min.ncrst -o heat.out -r heat.ncrst -inf heat.mdinfo -x heat.nc
```

Last, run the production MD with `prod.in`:

```bash
sander -O -i prod.in -p step3_pbcsetup.parm7 -c heat.ncrst -o prod.out -r prod.ncrst -inf prod.mdinfo -x prod.nc
```

## Conclusion

Now you can visual the results with VMD or Chimera, and perform some analysis.

