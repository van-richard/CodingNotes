# Fading

<center><video src="https://github.com/van-richard/CodingNotes/blob/531e36ca915575b44ae17e409cd825be4780842e/_static/videos/chimerax_fade_cas9.mp4" width="50%" height="50%" center controls>
</video></center>


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
