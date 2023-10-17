#!/bin/bash
#SBATCH -p a100 
#SBATCH -t 1-00:00:00
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=10
#SBATCH --mem=5G
#SBATCH --job-name=TIcomplex
#SBATCH --output=%jcomplex.out
#SBATCH --error=%jcomplex.err
#SBATCH --gres=gpu:1
#SBATCH --array=1-11

module load AmberGPU

pmemd="pmemd.cuda"
window=$(sed -n "$SLURM_ARRAY_TASK_ID"p list)

echo "TI Complex"
echo "Window ${window}"

cd complex/$window

$pmemd -i min.in -c ti.rst7 -ref ti.rst7 -p ti.parm7   -O -o min.mdout -inf min.mdinfo -e min.mden -r min.rst7 -l min.log

$pmemd -i heat.in -c min.rst7 -ref ti.rst7 -p ti.parm7   -O -o heat.mdout -inf heat.mdinfo -e heat.mden -r heat.rst7 -x heat.nc -l heat.log

$pmemd -i ti.in -c heat.rst7 -p ti.parm7   -O -o ti001.mdout -inf ti001.mdinfo -e ti001.mden -r ti001.rst7 -x ti001.nc      -l ti001.log

