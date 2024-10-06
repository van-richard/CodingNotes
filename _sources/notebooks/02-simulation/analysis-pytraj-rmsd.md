---
keywords: root, mean, square, deviation, rmsd, pytraj
---

# Root Mean Square Deviation (RMSD) 

The Root Mean Square Deviation (RMSD) is a measure of the average distance between atoms in a superimposed structure. You will see this analysis used to judge convergence of an MD simulation in just about every MD paper. The equation is

$$
\mathrm{RMSD} = \sqrt{\frac{1}{N} \sum_{i = 1}^{N} \|v_i - w_i\|^2}
$$

Where, $N$ is the number of points for the structures $v_i$ and $w_i$. With xyz-coordinates, we have

$$
\mathrm{RMSD}(\mathbf{v}, \mathbf{w}) = \sqrt{\frac{1}{n} \sum_{i=1}^n 
      ((v_{ix} - w_{ix})^2 + (v_{iy} - w_{iy})^2 + (v_{iz} - w_{iz})^2})
$$



```python
import pytraj as pt
import matplotlib.pyplot as plt

# Load trajectory
traj = pt.iterload('prod.nc', top='step3_pbcsetup_1264.parm7')

rmsd = pt.rmsd(traj, mask="@CA")

# Plot Simulation Time vs RMSD
plt.plot(rmsd)
plt.xlabel('Time ')
plt.ylabel('RMSF (Å)')
plt.savefig('rmsf.png', dpi=300)

```

## Pairwise Root Mean Square Deviation (2D RMSD)

```python
import pytraj as pt
import matplotlib.pyplot as plt

# Load trajectory
traj = pt.iterload('prod.nc', top='step3_pbcsetup_1264.parm7')

rmsd = pt.pairwise_rmsd(traj, mask="@CA")

# Plot Simulation Time vs RMSD
plt.plot(rmsd)
plt.xlabel('Time ')
plt.ylabel('RMSF (Å)')
plt.savefig('rmsf.png', dpi=300)
```


