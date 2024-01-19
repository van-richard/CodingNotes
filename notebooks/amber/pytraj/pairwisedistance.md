<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Pairwise Distance](#pairwise-distance)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
