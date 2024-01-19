<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [orphan: true](#orphan-true)
- [`awk` - manipulate text](#awk---manipulate-text)
  - [Separator](#separator)
  - [`awk` can do math.](#awk-can-do-math)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# `awk` - manipulate text

Treating a text file, were each space is a column, you can print the columns with:

```bash
awk '{print $1}' file
```

Where `$1` is the first column. Index starts at 1.

## Separator

You can chose the field separator with, `-F`. This example choses the comma as the separator, and print the 5th column:

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

