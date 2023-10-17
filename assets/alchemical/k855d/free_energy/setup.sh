#!/bin/sh
#
# Setup for the free energy simulations: creates and links to the input file as
# necessary.  Two alternative for the de- and recharging step can be used.
#

if [[ ! -f list ]]; then
	#seq -w 0.00 0.05 1.00 > list
	seq 0.0 0.1 1.0 > list
fi

windows=$(cat list)
basedir="../setup"
top=$(pwd)
setup_dir=$(cd "$basedir"; pwd)

for system in protein complex; do
  if [ \! -d $system ]; then
    mkdir $system
  fi

  cd $system

  for w in $windows; do
    if [ \! -d $w ]; then
      mkdir $w
    fi

    sed -e "s/%L%/$w/" $top/min.tmpl > $w/min.in
    sed -e "s/%L%/$w/" $top/heat.tmpl > $w/heat.in
    sed -e "s/%L%/$w/" $top/prod.tmpl > $w/ti.in

    (
      cd $w
      ln -sf $setup_dir/merged_${system}.parm7 ti.parm7
      ln -sf $setup_dir/merged_${system}.rst7  ti.rst7
    )
  done

  cd $top
done

cat <<_EOF > run_protein.slurm
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
window=\$(sed -n "\$SLURM_ARRAY_TASK_ID"p list)

echo "TI Protein"
echo "Window \${window}"

cd protein/\$window

\$pmemd -i min.in -c ti.rst7 -ref ti.rst7 -p ti.parm7 \
  -O -o min.mdout -inf min.mdinfo -e min.mden -r min.rst7 -l min.log

\$pmemd -i heat.in -c min.rst7 -ref ti.rst7 -p ti.parm7 \
  -O -o heat.mdout -inf heat.mdinfo -e heat.mden -r heat.rst7 -x heat.nc -l heat.log

\$pmemd -i ti.in -c heat.rst7 -p ti.parm7 \
  -O -o ti001.mdout -inf ti001.mdinfo -e ti001.mden -r ti001.rst7 -x ti001.nc \
     -l ti001.log

_EOF

cat <<_EOF > run_complex.slurm
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
window=\$(sed -n "\$SLURM_ARRAY_TASK_ID"p list)

echo "TI Complex"
echo "Window \${window}"

cd complex/\$window

\$pmemd -i min.in -c ti.rst7 -ref ti.rst7 -p ti.parm7 \
  -O -o min.mdout -inf min.mdinfo -e min.mden -r min.rst7 -l min.log

\$pmemd -i heat.in -c min.rst7 -ref ti.rst7 -p ti.parm7 \
  -O -o heat.mdout -inf heat.mdinfo -e heat.mden -r heat.rst7 -x heat.nc -l heat.log

\$pmemd -i ti.in -c heat.rst7 -p ti.parm7 \
  -O -o ti001.mdout -inf ti001.mdinfo -e ti001.mden -r ti001.rst7 -x ti001.nc \
     -l ti001.log

_EOF
