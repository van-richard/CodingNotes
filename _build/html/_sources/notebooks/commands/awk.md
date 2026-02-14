---
keywords: print, column, text, tabulate, table, txt, specific, column, awk
---

# `awk` - manipulate text

Treating a text file, were each space is a column, you can print the columns with:

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

