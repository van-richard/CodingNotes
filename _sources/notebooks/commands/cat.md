<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`cat` - print input to standard output](#cat---print-input-to-standard-output)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# `cat` - print input to standard output

```bash
cat file.txt
```

We can also read the file using `cat`:

```bash
Contents=$(cat file.txt)
```

- "\n" prints a new line character
- "-e" to interpret the new line escape characters as escape characters

```bash
echo -e "START OF FILE\n$Contents\nEND OF FILE"
```