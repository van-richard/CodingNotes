# Rocking

<figure class="align-center">
  <video controls playsinline preload="metadata" style="max-width: 50%; height: auto;">
    <source src="../../../_static/videos/chimerax_rock_cas9.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</figure>

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
