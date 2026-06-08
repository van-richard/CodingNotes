# Fading

Create a crossfade while changing how a molecular model is displayed in ChimeraX.

<figure class="align-center">
  <video controls playsinline preload="metadata" style="max-width: 50%; height: auto;">
    <source src="../../../_static/videos/chimerax_fade_cas9.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Crossfade that hides the Cas9 ribbon and atoms.</figcaption>
</figure>

## Fade command

```text
crossfade 48
hide #1 ribbon,atom
wait 48
```

## One-line fade command

```text
crossfade 48; hide #1 ribbon,atom; wait 48
```

## What each fade command does

- `crossfade 48` begins a crossfade lasting 48 frames.
- `hide #1 ribbon,atom` hides the ribbon and atoms for model `#1`.
- `wait 48` waits for the crossfade to finish before running the next command.
