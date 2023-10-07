#!/bin/bash
#SBATCH --partition=express
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=16
#SBATCH --output=%j.out
#SBATCH --error=%j.err
#SBATCH --time=00:30:00
#SBATCH --job-name=run2

date

source /scratch/van/Scripts/pete_setqmmm.sh

SANDER="srun -n 16 sander.MPI"

init="step3_pbcsetup"

pstep="step5.00_equilibration"
istep="step6.00_equilibration"

for i in `seq -w 0 20`; do
    cd $i
    $SANDER -O -i ${istep}.mdin -o ${istep}.mdout -p ${init}.parm7 -c ${pstep}.ncrst -r ${istep}.ncrst -x ${istep}.nc -inf ${istep}.mdinfo
    cd ..
done

date
