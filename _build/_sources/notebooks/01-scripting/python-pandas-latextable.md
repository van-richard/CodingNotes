# Convert Pandas DataFrame to LaTeX

```python
import numpy as np
import pandas as pd
from glob import glob

fnames = sorted(glob('reweighting_entropy*')) # Returns a list of files (I have 4)

f = [np.loadtxt(fname) for f in fnames] # Generator object
    
    
df = pd.DataFrame(
    {'Reaction Coordinate': f[0][:,0],
     'Reweighting Entropy (B3LYP/6-31G*)' : f[0][:,1],
     'Reweighting Entropy (B3LYP/6-31+G*)' : f[1][:,1],
     'Reweighting Entropy (ωB97X-D/6-31G)' : f[2][:,1],
     'Reweighting Entropy (ωB97X-D/6-31+G)' : f[3][:,1],
    })

print(df.to_latex(column_format='ccccc',index=False)) # Print out and copy!
```
