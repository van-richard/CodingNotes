# Rocking

<center><video src="https://github.com/van-richard/CodingNotes/blob/531e36ca915575b44ae17e409cd825be4780842e/_static/videos/chimerax_rock_cas9.mp4"width="50%" height="50%" controls>
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
