#!/bin/sh

shopt -s expand_aliases
source ~/.bash_aliases

myconda


top=$(pwd)
getdvdl=$top/getdvdl3.py

for system in complex protein; do
  cd $system
  result=0.0

  python $getdvdl 5 ti001.mden [01].* > dvdl.dat
  dG=$(tail -n 1 dvdl.dat | awk '{print $4}')
  echo "dG sum for $system = $dG"

  cd $top
done

