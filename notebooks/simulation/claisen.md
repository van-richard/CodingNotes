# Claisen Rearrangment

<center>
<video src="../../_static/claisen.mp4" width="50%" controls>
   </video></center>


In this tutorial, we will perform a QM/MM simulation of the claisen rearrangement reaction. The QM region will be defined by semiempirical method, PM3. To model the reaction, we will use umbrella sampling.

## Input Files

Make a new working directory.

```bash
mkdir claisen_rearrangement
cd claisen_rearrangement
```

Make an `input` directory. This is where we will store the PDB files and generate Amber inputs.

```bash
mkdir input
cd input
```

With IQmol, make a PDB file for allyl vinyl ether and copy this to `inputs`. 

To make the topology and coordinate file for a small molecule, we need to:

1. Add hydrogens
2. Convert the PDB to Amber format
3. Get charges
4. Get parameters

I prepared a script for this. You will need to modify the modules/sources based on what software is available for you.

```bash
#!/bin/bash

# USAGE:
# bash antechamber.in [input name] [charge]

# If you want it for ligand.pdb 
# EXAMPLE:
# bash antechamber.in ligand 0

module load OpenBabel
module load intel/2020a
source /home/panxl/amber20/amber.sh

obabel ${1}.pdb -h -opdb -O ${1}_h.pdb
pdb4amber -i ${1}_h.pdb -o ${1}_num.pdb
antechamber -fi pdb -fo mol2 -i ${1}_num.pdb -o ${1}.mol2 -c bcc -pf y -nc $2
parmchk2 -i ${1}.mol2 -f mol2 -o ${1}.frcmod

```

Running the script (`bash antechamber.in all_vinyl_ether.pdb 0`) should give you these files:

allyl_vinyl_ether_h.pdb, allyl_vinyl_ether_h_num.pdb, allyl_vinyl_ether.mol2], and allyl_vinyl_ether.frcmod


Now we can use tleap to make our `.parm7` and `.rst7` files.

```bash
source leaprc.gaff
source leaprc.water.tip3p 

loadamberparams allyl_vinyl_ether.frcmod 

ligand = loadmol2 allyl_vinyl_ether.mol2

solvatebox ligand TIP3PBOX 10.0 iso 0.8

saveamberparm ligand step3_pbcsetup.parm7 step3_pbcsetup.rst7
savepdb ligand step3_pbcsetup.pdb

quit
```

Run tleap, and you should get step3_pbcsetup.parm7 and step3_pbcsetup.rst7.

```bash
tleap -sf tleap.in
```

### Restraint Files

A `cv.rst` file will contain atomic restraints for the mechanism we are interested in.

```
# r1 - r2 (CC - CO bond)
 &rst
  iat=3,4,1,6,
  rstwt=1.,-1.,
  r1=-99, r2=__REST__, r3=__REST__, r4=99,
  rk2=150.0, rk3=150.0,
 &end
```

`# r1 - r2 (CC - CO bond)` Comment describing the restraint. In this case, we are doing restraining the difference between the first distance (r1) and the second distance (r2). 

`iat=3,4,1,6,` Atom numbers for the restraint. The first distance (r1) is the length between atoms 3 and 4. The second distance (r2) is the length between atoms 1 and 6.

`rstwt=1.,-1.,` Indicates we want to take the difference between r1 and r2.

`r1=-99, r2=__REST__, r3=__REST__, r4=99,` The shape of our biasing potential. `__REST__` is a placeholder which we will modify later.

`rk2=150.0, rk3=150.0,` Force constant in kcal/mol.

### QM/MM MD Input files

2 MD input files are used. The first file (step5.00_equilibration.mdin) is used for the initial pathway sampling at a few picoseconds. The second file (step6.00_equilibration.mdin) is used for additional sampling (+10 ps).

1. step5.00_equilibration.mdin
2. step6.00_equilibration.mdin

The general format of a QM/MM MD input file differs from classical MD with the `&qmmm` section.

```bash
A NVT simulation for common production-level simulations
 &cntrl
    imin=0,        ! No minimization
    irest=1,       ! This IS a restart of an old MD simulation
    ntx=5,         ! So our inpcrd file has velocities

    ! Boundary conditions
    ntb=0,         ! Periodic boundaries for constant volume
    ntp=0,         ! No pressure control

    ! Temperature control
    ntt=3,         ! Langevin Mid
    gamma_ln=5.0,  ! Friction coefficient (ps^-1)
    temp0=300.0,   ! Target temperature
    ig=-1,         ! Random number seed

    ! Potential energy control
    cut=999.0,      ! nonbonded cutoff, in Angstroms

    ! MD settings
    nstlim=500,   ! 1 ps total
    dt=0.001,      ! time step (ps)

    ! SHAKE
    ntc=1,         ! Constrain bonds containing hydrogen
    ntf=1,         ! Do not calculate forces of bonds containing hydrogen
    tol=0.000001,  ! Shake tolerance

    ! Control how often information is printed
    ntpr=100,      ! Print energies every 100 steps
    ntwx=100,      ! Print coordinates every 100 steps to the trajectory
    ntwr=100,     ! Print a restart file every 5K steps (can be less frequent)
!   ntwv=-1,       ! Uncomment to also print velocities to trajectory
!   ntwf=-1,       ! Uncomment to also print forces to trajectory
    ntxo=2,        ! Write NetCDF format
    ioutfm=1,      ! Write NetCDF format (always do this!)

    ! Restraints
    nmropt=1,      ! Turn on restraints

    ! QM/MM
    ifqnt=1,       ! Turn on QM/MM
 /


 &qmmm
    ! QM atoms
    qmmask=':1'    ! Amber residue mask for QM atoms

    ! QM settings
    qm_theory='PM3', ! Semiempirical method
    qmcharge=0,    ! Charge of QM subsystem

    ! Shake
    qmshake=0,     ! Use Shake for QM atoms

    ! Potential energy control
    qmcut=999.0,    ! Cutoff for QM/MM electrostatic interactions
    writepdb=1,    ! Check QM atoms
 /

 &wt type='DUMPFREQ', istep1=10 /
 &wt type='END' /
 DISANG=cv.rst
 DUMPAVE=step5.00_equilibration.cv
```

With this we have all of the necessary files. We can go back to the working directory.

```bash
cd ../
```

## Generate Umbrella Windows

The script `gen_inputs.in` will prepare folders for umbrella sampling, and modify the `cv.rst` file so that each window has a different restraint value.

```bash
#!/bin/bash

mkdir -p 00
cd 00/
ln -sf ../input/step3_pbcsetup.parm7
ln -sf ../input/step6.00_equilibration.mdin .
sed -e 's/irest=1/irest=0/;s/ntx=5/nts=1,/' ../input/step5.00_equilibration.mdin > step5.00_equilibration.mdin
cd ..

for i in `seq -w 1 20`; do
mkdir -p $i
cd $i
ln -sf ../input/step3_pbcsetup.parm7
ln -sf ../input/step5.00_equilibration.mdin .
ln -sf ../input/step6.00_equilibration .
cd ..
done

cp ../input/step3_pbcsetup.rst7 00/step5.00_equilibration_inp.rst7

n=-2.0
for i in `seq -f"%02g" 0 20`
do
    nn=$(printf "%.2f" "$n")
    sed "s/__REST__/${nn}/g" input/cv.rst > ${i}/cv.rst
    n=`echo $n + 0.20 | bc`
done
```

## Running QM/MM Simulation

Run QM/MM simulations of the inital pathway, `runqmmm1.slurm`.

```bash
#!/bin/bash
#SBATCH --partition=debug
#SBATCH --exclusive
#SBATCH --ntasks=20
#SBATCH --mem=0
#SBATCH --output=%j.out
#SBATCH --error=%j.err
#SBATCH --time=00:30:00
#SBATCH --job-name=CA

date
module load intel/2020a
source /home/panxl/amber20/amber.sh
export UCX_TLS=all

#SANDER="mpiexec.hydra -bootstrap slurm -n 1 sander.MPI"
SANDER="sander"
init="step3_pbcsetup"

# First Round

istep="step5.00_equilibration"

for i in `seq 0 20`; do
    printf -v j "%02d" $i
    cd $j
    if [ ${i} -eq 0 ]; then
    $SANDER -O -i ${istep}.mdin -o ${istep}.mdout -p ${init}.parm7 -c ${istep}_inp.rst7 -r ${istep}.ncrst -x ${istep}.nc -inf ${istep}.mdinfo
    else
    $SANDER -O -i ${istep}.mdin -o ${istep}.mdout -p ${init}.parm7 -c ${istep}_inp.ncrst -r ${istep}.ncrst -x ${istep}.nc -inf ${istep}.mdinfo
    fi
    printf -v j "%02d" $(($i + 1))
    cp ${istep}.ncrst ../${j}/${istep}_inp.ncrst
    cd ..
done
```

Once this is done, perform additional sampling in each window, `runqmmm2.slurm`.

```bash
#!/bin/bash
#SBATCH --partition=debug
#SBATCH --exclusive
#SBATCH --ntasks=20
#SBATCH --mem=0
#SBATCH --output=%j.out
#SBATCH --error=%j.err
#SBATCH --time=00:30:00
#SBATCH --job-name=CA

date
module load intel/2020a
source /home/panxl/amber20/amber.sh
export UCX_TLS=all

SANDER="sander"
init="step3_pbcsetup"

# First Round

pstep="step5.00_equilibration"
istep="step6.00_equilibration"

for i in `seq -w 0 20`; do
    cd $i
    $SANDER -O -i ${istep}.mdin -o ${istep}.mdout -p ${init}.parm7 -c ${pstep}.ncrst -r ${istep}.ncrst -x ${istep}.nc -inf ${istep}.mdinfo
    cd ..
done
```


```python

```
