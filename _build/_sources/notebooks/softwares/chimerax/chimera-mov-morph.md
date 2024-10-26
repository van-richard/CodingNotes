# Morphing


<center><video src="https://github.com/van-richard/CodingNotes/blob/531e36ca915575b44ae17e409cd825be4780842e/_static/videos/chimerax_morph_fncas12a.mp4" width="50%" height="50%" controls>
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
