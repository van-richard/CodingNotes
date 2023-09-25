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

