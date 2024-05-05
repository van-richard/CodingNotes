#!/bin/bash

shopt -s expand_aliases
source ~/.bash_aliases

mfa webdev

#jb build ./ --all
sphinx-build ./ _build/html

ghp-import -n -p -f _build/html
