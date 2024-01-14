<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Morphing](#morphing)
  - [Morphing transition between 2 PDB structures](#morphing-transition-between-2-pdb-structures)
    - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# Morphing


<center><video src="../../_static/chimerax_morph_fncas12a.mp4" width="50%" height="50%" controls>
</video></center>




## Morphing transition between 2 PDB structures

Note: You must align the structures before morphing.

*Morph between 2 PDB structures of FnCas12a (PDB 6GTG to 6I1K)*

The code looks like:

```
morph #1,2,3,4,5 frames 100
```

### Example

Open 2 PDB files for FnCas12a.

```
open 6i1k 6gtg
```

Align the two structures.

```
match #2 to #1
```

Morph transition is done by: 

```
morph #1,2,3,4,5 frames 100
```


```python

```
