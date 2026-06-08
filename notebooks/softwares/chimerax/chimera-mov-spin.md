# Spin

Record a full rotation of a molecular structure in ChimeraX.

<figure class="align-center">
  <video controls playsinline preload="metadata" style="max-width: 50%; height: auto;">
    <source src="../../../_static/videos/chimerax_spin_cas9_surface.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Spinning view of the Cas9 molecular surface.</figcaption>
</figure>

## Spin command

```text
movie record supersample 3
turn y 1 360
wait 360
movie encode ~/Desktop/movie.mp4
```

## One-line spin command

```text
movie record supersample 3; turn y 1 360; wait 360; movie encode ~/Desktop/movie.mp4
```

## What each spin command does

- `movie record supersample 3` begins recording and uses supersampling to improve image quality.
- `turn y 1 360` rotates the structure around the `y`-axis by 1 degree per frame for 360 frames.
- `wait 360` waits for the 360-frame rotation to finish before running the next command.
- `movie encode ~/Desktop/movie.mp4` saves the recording as `movie.mp4` on the Desktop.
