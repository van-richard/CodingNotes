---
keywords: radial, distribution, function, rdf, pytraj, python
---

# RDF

```python
import os
import sys
from glob import glob
import numpy as np
import matplotlib.pyplot as plt
plt.style.use('~/Github/PL888/Scripts/bin/v.mplstyle')
import seaborn as sb

import pytraj as pt

mgs = [1358, 1360]       # MgA, MgB

traj = pt.iterload('../1leader/4ntds/prod0?.nc',
                   '../1leader/4ntds/step3_pbcsetup_1264.parm7')

fig, axs = plt.subplots(2)

for i,ax in enumerate(axs.flat):

    data = pt.rdf(traj,
                  solute_mask=f':{mgs[i]}',
                  solvent_mask=':Na+',
                  bin_spacing=0.2, maximum=12.)
    ax.plot(data[0], data[1], label=f':{mgs[i]}')

    ax.set_xlabel('Distance (Å)')
    ax.set_ylabel('RDF (Å)')
    ax.legend()

```
