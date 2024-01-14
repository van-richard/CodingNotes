<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Rocking](#rocking)
  - [Spinning the PDB in a Movie](#spinning-the-pdb-in-a-movie)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# Rocking


<center><video src="../../_static/chimerax_rock_cas9.mp4"width="50%" height="50%" controls>
</video></center>




The code looks like 

```
movie record supersample 3
rock y 25 360
wait 360
movie encode ~/Desktop/movie.mp4
```

One liner:

```
movie record supersample 3; rock y 25 360; wait 360; movie encode ~/Desktop/movie.mp4
```

Where:

movie record [options] - begins the screen recording, addition option `supersample 3`
rock [axix] [degree] [frame #] - rock along the `y`-axis, moving `25` degree along the axis for `360` frames
wait [frame] - number of wait-frames before running the next line
movie encode [location] - save the video at specified location

## Spinning the PDB in a Movie

The code looks like 

```
movie record supersample 3
turn y 1 360
wait 360
movie encode ~/Desktop/movie.mp4
```

One liner:

```
movie record supersample 3; turn y 1 360; wait 360; movie encode ~/Desktop/movie.mp4
```

Where:

movie record [options] - begins the screen recording, addition option `supersample 3`
turn [axis] [degree] [frame #] - spin on the `y`-axis at `1` degree every `360` frames
wait [frame] - number of wait-frames before running the next line
movie encode [location] - save the video at specified location




```python

```
