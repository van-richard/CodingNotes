---
keywords: pytraj, pairwise, distance, matrix.dist, heatmap, matrix, interaction
---

# __Pytraj__ 2D-RMSD

- Pairwise Distance Matrix

```python
import pytraj as pt
from pytraj import matrix
import seaborn as sb

parm = 'step3_pbcsetup_1264.parm7'
nc = 'prod*nc'

traj = pt.iterload(nc, top=parm)

mat = matrix.dist(traj, mask='@CA')

sb.heatmap(mat)
```
