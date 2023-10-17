#!/bin/bash
#SBATCH --partition=express
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=16
#SBATCH --output=%j.out
#SBATCH --error=%j.err
#SBATCH --time=00:30:00
#SBATCH --job-name=run1

date

source /scratch/van/Scripts/pete_setqmmm.sh

SANDER="srun -n 16 sander.MPI"

init="step3_pbcsetup"

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

date
