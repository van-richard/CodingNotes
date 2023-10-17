#!/bin/sh
#
# Method 1: setup for a fully dual-topology side chain residue
#

date

shopt -s expand_aliases
source ~/.bash_aliases

myconda; conda activate ambertools

basedir=leap

tleap -f - <<_EOF
# load the AMBER force fields
source leaprc.protein.ff14SB
source leaprc.DNA.OL15
source leaprc.RNA.OL3
source leaprc.water.tip3p
loadamberparams frcmod.ions234lm_1264_tip3p 

# load the coordinates and create the systems
wt = loadpdb $basedir/step3_pbcsetup_wt.pdb
mt = loadpdb $basedir/step3_pbcsetup_mt.pdb
na = loadpdb $basedir/step3_pbcsetup_nt.pdb
m = loadpdb $basedir/step3_pbcsetup_mg.pdb
w = loadpdb $basedir/step3_pbcsetup_ion_wat.pdb

protein = combine {wt mt m w}
complex = combine {wt mt na m w}

#set default nocenter on

# create protein in solution
setbox protein "centers"
savepdb protein protein.pdb
saveamberparm protein protein.parm7 protein.rst7

# create complex in solution
setbox complex "centers"
savepdb complex complex.pdb
saveamberparm complex complex.parm7 complex.rst7

quit
_EOF

date
