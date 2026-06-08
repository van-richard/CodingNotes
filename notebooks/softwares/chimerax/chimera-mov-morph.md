# Morphing

Create a smooth transition between aligned molecular structures in ChimeraX.

<figure class="align-center">
  <video controls playsinline preload="metadata" style="max-width: 50%; height: auto;">
    <source src="../../../_static/videos/chimerax_morph_fncas12a.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Morphing transition between FnCas12a structures 6GTG and 6I1K.</figcaption>
</figure>

The structures must be aligned before morphing. This example uses two FnCas12a structures, PDB 6GTG and PDB 6I1K.

## Morph command

```text
morph #1,2,3,4,5 frames 100
```

Example setup:

```text
open 6i1k 6gtg
match #2 to #1
morph #1,2,3,4,5 frames 100
```

## One-line morph command

```text
open 6i1k 6gtg; match #2 to #1; morph #1,2,3,4,5 frames 100
```

## What each morph command does

- `open 6i1k 6gtg` opens the two FnCas12a structures.
- `match #2 to #1` aligns model `#2` to model `#1`.
- `morph #1,2,3,4,5 frames 100` creates a 100-frame morph using the listed models.
