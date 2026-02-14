#!/bin/bash


mf
conda activate webdev

cd _external/amberassist
git pull
cd -

#jb build ./ --all
sphinx-build ./ _build/html

ghp-import -n -p -f _build/html
