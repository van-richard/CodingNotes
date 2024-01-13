#!/bin/bash

shopt -s expand_aliases
source ~/.bash_aliases

myconda; conda activate web

jb build ./ --all
ghp-import -n -p -f _build/html
