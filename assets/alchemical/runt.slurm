#!/bin/bash
#SBATCH -p a100 
#SBATCH -t 1-00:00:00
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=10
#SBATCH --mem=5G
#SBATCH --job-name=TIprotein
#SBATCH --output=%jprotein.out
#SBATCH --error=%jprotein.err
#SBATCH --gres=gpu:1
#SBATCH --array=1-11

module load AmberGPU

pmemd="pmemd.cuda"
window=$(sed -n "$SLURM_ARRAY_TASK_ID"p list)

echo "TI Protein"
echo "Window ${window}"

cp ti
cd protein/$window



$pmemd -i ti.in -c heat.rst7 -p ti.parm7   -O -o ti001.mdout -inf ti001.mdinfo -e ti001.mden -r ti001.rst7 -x ti001.nc      -l ti001.log

