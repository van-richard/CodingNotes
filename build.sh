#!/bin/bash

shopt -s expand_aliases
source ~/.bash_aliases

myconda

#jupyter-book build . --all
# Switching to Sphinx to Customize
#

jupyter-book config sphinx ./
sphinx-build ./ ./_build/html -b html
ghp-import -n -p -f _build/html


