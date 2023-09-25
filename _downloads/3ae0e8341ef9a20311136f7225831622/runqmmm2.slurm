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

pstep="step5.00_equilibration"
istep="step6.00_equilibration"

for i in `seq -w 0 20`; do
    cd $i
    $SANDER -O -i ${istep}.mdin -o ${istep}.mdout -p ${init}.parm7 -c ${pstep}.ncrst -r ${istep}.ncrst -x ${istep}.nc -inf ${istep}.mdinfo
    cd ..
done

