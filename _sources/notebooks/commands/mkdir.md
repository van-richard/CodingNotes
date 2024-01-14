<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`mkdir` - make new directories.](#mkdir---make-new-directories)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# `mkdir` - make new directories.

```bash
mkdir myNewDir
```

The `-p` flag causes new intermediate directories to be created as necessary.

```bash
mkdir -p myNewDir/with/intermediate/directories
```

If the intermediate directories didn't already exist, running the above command without the `-p` flag would return an error