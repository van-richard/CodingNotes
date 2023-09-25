#!/bin/bash

sander="sander"

$sander -O -i min.in -p step3_pbcsetup.parm7 -c step3_pbcsetup.rst7 -o min.out -r min.ncrst -inf min.mdinfo

$sander -O -i heat.in -p step3_pbcsetup.parm7 -c min.ncrst -o heat.out -r heat.ncrst -inf heat.mdinfo -ref min.ncrst -x heat.nc

$sander -O -i prod0.in -p step3_pbcsetup.parm7 -c heat.ncrst -o prod0.out -r prod0.ncrst -inf prod0.mdinfo -x prod0.nc

$sander -O -i prod1.in -p step3_pbcsetup.parm7 -c prod0.ncrst -o prod1.out -r prod1.ncrst -inf prod1.mdinfo -x prod1.nc

$sander -O -i prod2.in -p step3_pbcsetup.parm7 -c prod1.ncrst -o prod2.out -r prod2.ncrst -inf prod2.mdinfo -x prod2.nc

$sander -O -i prod3.in -p step3_pbcsetup.parm7 -c prod2.ncrst -o prod3.out -r prod3.ncrst -inf prod3.mdinfo -x prod3.nc
