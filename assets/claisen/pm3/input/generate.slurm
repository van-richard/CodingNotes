#!/bin/bash
#SBATCH -p express
#SBATCH -t 00:10:00
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --output=%j.out
#SBATCH --error=%j.err
#SBATCH --job-name=antechamber

date

source /scratch/van/Scripts/pete_setqmmm.sh

name="allyl_vinyl_ether"

antechamber -fi pdb -fo mol2 -i ${name}.pdb -o ${name}.mol2 -c bcc -pf y -nc 0
parmchk2 -i ${name}.mol2 -f mol2 -o ${name}.frcmod

cat <<_EOF > tleap.in
source leaprc.gaff
source leaprc.water.tip3p 

loadamberparams allyl_vinyl_ether.frcmod 

ligand = loadmol2 allyl_vinyl_ether.mol2

solvatebox ligand TIP3PBOX 10.0 iso 0.8

saveamberparm ligand step3_pbcsetup.parm7 step3_pbcsetup.rst7
savepdb ligand step3_pbcsetup.pdb

quit
_EOF

tleap -sf tleap.in

date
