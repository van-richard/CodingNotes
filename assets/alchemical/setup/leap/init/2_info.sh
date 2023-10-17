#!/bin/bash

# Get info on counterions, charge, etc.

wtlines=$(wc -l wt_wat.pdb | awk '{print $1}')
mtlines=$(wc -l mt_wat.pdb | awk '{print $1}')

echo " "
echo "PDB Files Total Lines"
echo "WT PDB has: ${wtlines}"
echo "MT PDB has: ${mtlines}"
echo "Difference: $(echo "${wtlines} - ${mtlines}" | bc -l )"
echo " "

echo "tleap made wt then mt pdb.."
echo " "
echo "Ions number:" 
echo "$(grep "neutralize" leap.log)"

# awk '{print $1 " " $2 " " $3 " " $4 " " $5}' wt_wat.pdb > tmp.wt
# awk '{print $1 " " $2 " " $3 " " $4 " " $5}' mt_wat.pdb > tmp.mt
#sdiff tmp.wt tmp.mt > tmp.atm.diff


