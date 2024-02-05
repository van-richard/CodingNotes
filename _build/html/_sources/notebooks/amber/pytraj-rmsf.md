---
keywords: root, mean, square, fluctuation, rmsf, pytraj
---

# Root Mean Square Fluctuation (RMSF)

*Example*

Plot for C$_{\alpha}$ of protein in Amber MD simulation, with domains labeled by color.


```python
import pytraj as pt
import matplotlib.pyplot as plt
# Load trajectory
traj = pt.iterload('prod.nc', top='step3_pbcsetup_1264.parm7')

# Superimpose to 1st frame and alpha carbons
pt.superpose(traj, ref=0, mask="@CA")

rmsf0 = pt.rmsf(traj, mask="@CA")

# Shade domains different color
plt.axvspan(   1,   56, facecolor='tab:red', alpha=0.2)
plt.axvspan( 718,  765, facecolor='tab:red', alpha=0.2)
plt.axvspan( 925, 1102, facecolor='tab:red', alpha=0.2)
plt.axvspan(  56,  718, facecolor='tab:blue', alpha=0.2)
plt.axvspan( 765,  924, facecolor='tab:orange', alpha=0.2)
plt.axvspan(1099, 1368, facecolor='tab:green', alpha=0.2)

# Plot Residue # vs RMSF
plt.plot(np.arange(1,len(rmsf0.T[0])+1), rmsf0.T[1])
plt.xlabel('Residue Number')
plt.ylabel('RMSF (Å)')
plt.savefig('rmsf.png', dpi=300)
```


