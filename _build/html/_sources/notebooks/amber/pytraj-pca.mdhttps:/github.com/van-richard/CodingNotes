# Principal Component Analysis

*Example*

```python
import pytraj as pt
import matplotlib.pyplot as plt
import numpy as np
import sys


topology = "/directory/topology.parm7"
trajectory = "/directory/file.nc"

traj = pt.load(trajectory, top="topology")

data = pt.pca(traj, mask='@CA', n_vecs=10)

projection_data = data[0]

x = projection_data[0] * num1
y = projection_data[1] * num2

plt.scatter(x, y, marker='o', c=range(traj.n_frames), alpha=0.5)        

# Percent Variance 
pc1 = (data[1][0][0] / np.sum(data[1][0])) * 100
pc2 = (data[1][0][1] / np.sum(data[1][0])) * 100

plt.xlabel('PC1 (' + str(np.round(pc1, 1)) + ' %)')
plt.ylabel('PC2 (' + str(np.round(pc2, 1)) + ' %)')

plt.xlim(-60,60)
plt.ylim(-60,60)
cbar = plt.colorbar()
cbar.set_label('Frame #')
plt.title(folder+ ' ' + rep)
plt.savefig('img/' + folder+'_' + rep + 'pca.png', dpi=300)
```
