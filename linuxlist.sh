#!/bin/bash

cd notebooks/commands

echo "---
orphan: true
---

# List of Commands

:::{Glossary}
" > ../linux.md

ls | sort | sed 's/.md//' | while read i; do 
echo "[${i}](./commands/${i})"
echo "   " | tr "\n" " "
grep "#" ${i}.md | head -n 1 | awk -F "-" '{print $2}'
printf "\n\n"  
done >> ../linux.md

echo ":::" >> ../linux.md
