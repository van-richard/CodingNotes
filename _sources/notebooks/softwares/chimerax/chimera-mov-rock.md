# Rocking

Record a molecular structure rocking back and forth in ChimeraX.

<figure class="align-center">
  <video controls playsinline preload="metadata" style="max-width: 50%; height: auto;">
    <source src="../../../_static/videos/chimerax_rock_cas9.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Rocking view of the Cas9 structure.</figcaption>
</figure>

## Rock command

```text
movie record supersample 3
rock y 25 360
wait 360
movie encode ~/Desktop/movie.mp4
```

## One-line rock command

```text
movie record supersample 3; rock y 25 360; wait 360; movie encode ~/Desktop/movie.mp4
```

## What each rock command does

- `movie record supersample 3` begins recording and uses supersampling to improve image quality.
- `rock y 25 360` rocks the structure around the `y`-axis through 25 degrees over 360 frames.
- `wait 360` waits for the 360-frame motion to finish before running the next command.
- `movie encode ~/Desktop/movie.mp4` saves the recording as `movie.mp4` on the Desktop.
