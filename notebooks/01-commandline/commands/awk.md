---
keywords: print, column, text, tabulate, table, txt, specific, column, awk
---

# `awk`

`awk` selects, transforms, and calculates with fields in structured text.

## Common `awk` usage

Treating a text file, where each space separates a column, you can print a column with:

```bash
awk '{print $1}' file
```

Where `$1` is the first column. Index starts at 1.

## Separator

You can chose the field separator with, `-F`. Here, the comma is a separator to print the 5th column:

```bash
awk -F ',' '{print $5} file'
```

## `awk` can do math. 

Average a column:

```bash
awk '{ total += $2; count++ } END { print total/count }' file
```

Add to value in column

```bash
awk '{print $1 + 1}' file
```
