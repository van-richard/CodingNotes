<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Fading](#fading)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# Fading








<center><video src="../../_static/chimerax_fade_cas9.mp4" width="50%" height="50%" center controls>
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


```python

```
