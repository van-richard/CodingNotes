---
keywords: pytraj, pairwise, distance, matrix.dist, heatmap, matrix, interaction
---
# Pairwise Distance Matrix

*Example*

```python
import pytraj as pt
from pytraj import matrix
import seaborn as sns

parm = 'free_126/step3_pbcsetup_1264.parm7'
nc = 'free_126/prod*nc'

traj = pt.iterload(nc, top=parm)

mat = matrix.dist(traj, mask='@CA')
np.save('npy/free_126_ca_matrix_dist.npy', mat) # Save data to npy file

# Plot results
sns.heatmap(mat)
```
