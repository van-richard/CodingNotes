# Pairwise Distance

*Example*

```python
import pytraj as pt
from pytraj import matrix
import seaborn as sns
traj1 = pt.iterload('free_126/prod*nc', top='free_126/step3_pbcsetup_1264.parm7')

mat = matrix.dist(traj1, mask='@CA')
np.save('npy/free_126_ca_matrix_dist.npy', mat)

sns.heatmap(mat)
```
