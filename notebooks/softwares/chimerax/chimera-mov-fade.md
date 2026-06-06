# Fading

<figure class="align-center">
  <video controls playsinline preload="metadata" style="max-width: 50%; height: auto;">
    <source src="../../../_static/videos/chimerax_fade_cas9.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</figure>


The code looks like:

```
crossfade 48
hide #1 ribbon,atom
wait 48
```

One liner:

```
crossfade 48; hide #1 ribbon,atom; wait 48
```

Where:

crossfade [frames] - fade for # of frames
[action] - can be hiding ribbon, show atoms, color, etc.
wait [frames] - wait this number of frames before executing next line
