#!/bin/bash
# Activate webdev environment first 

cd _external/amberassist
git pull
cd -

sphinx-build ./ _build/html

ghp-import -n -p -f _build/html

