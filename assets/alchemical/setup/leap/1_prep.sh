#!/bin/sh
#
# Method 1: setup for a fully dual-topology side chain residue
#

shopt -s expand_aliases
source ~/.bash_aliases

myconda; conda activate ambertools

basedir=init

wtprot=$(grep -n "OXT" ${basedir}/wt_wat.pdb  | awk -F ":" '{print $1 +1}')
mtprot=$(grep -n "OXT" ${basedir}/mt_wat.pdb  | awk -F ":" '{print $1 +1}')

head -n $wtprot ${basedir}/wt_wat.pdb > wt.pdb
head -n $mtprot  ${basedir}/mt_wat.pdb > mt.pdb
sed -i '/CRYST/d' *.pdb
