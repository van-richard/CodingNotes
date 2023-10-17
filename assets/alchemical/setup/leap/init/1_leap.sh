#!/bin/sh
#
# Method 1: setup for a fully dual-topology side chain residue
#

shopt -s expand_aliases
source ~/.bash_aliases

myconda; conda activate ambertools

basedir="../ref"

tleap -f - <<_EOF
# load the AMBER force fields
source leaprc.protein.ff14SB
source leaprc.DNA.OL15
source leaprc.RNA.OL3
source leaprc.water.tip3p

# load the coordinates and create the systems
wt = loadpdb $basedir/step3_pbcsetup_wt.pdb
mt = loadpdb $basedir/step3_pbcsetup_mt.pdb
na = loadpdb $basedir/step3_pbcsetup_nt.pdb

wildtype = combine {wt na}
mutant = combine {mt na }

charge wildtype
charge mutant

solvatebox wildtype TIP3PBOX 12.0 iso 0.8
solvatebox mutant TIP3PBOX 12.0 iso 0.8

addions wildtype Na+ 0
addions mutant Na+ 0

savepdb wildtype wt_wat.pdb
savepdb mutant mt_wat.pdb

quit
_EOF
