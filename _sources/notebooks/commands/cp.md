<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`cp` - copy files or folders](#cp---copy-files-or-folders)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# `cp` - copy files or folders

To copy file1 to file2 (new name):

```bash
cp [FILE_1] [FILE_2]
```

Copy folders:

```bash
cp -r [FOLDER_1] [FOLDER_2]
```

Use `cp` to copy files or directories from one place to another.

- `cp` creates NEW versions of the sources, so editing the copy won't affect the original (and vice versa).

**Note that it will overwrite the destination if it already exists.**

```bash
cp srcFile.txt clone.txt
```

or

```bash
cp -r srcDirectory/ dst/ # recursively copy
```

Copying can be down with paths

```bash
cp -r /path/to/dir_1 /path/to/dir_2
```