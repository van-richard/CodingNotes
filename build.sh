#/bin/bash

shopt -s expand_aliases
source ~/.bash_aliases

myconda

jupyter-book build . --all
