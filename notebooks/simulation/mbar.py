import sys
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
from matplotlib.ticker import AutoMinorLocator, LogLocator, NullFormatter
from glob import glob
from sklearn.utils import resample

import pymbar
sys.path.append("/home/panxl/scripts/")
from mbar_pmf import mbar_pmf

n_windows = 21
val_kn = []
for i in range(n_windows):
    fnames = sorted(glob('../%02d/step6.0?_equilibration.cv' % i))
    # fnames = sorted(glob('../%02d/all_step6.cv' % i))
    arrays = [np.loadtxt(f, usecols=1)[::] for f in fnames[:]]
    val_kn.append(np.concatenate(arrays))
val0_k = np.linspace(-2.00, 2.00, n_windows)
K_k = np.ones(n_windows) * 300.0
val_min = -2.00
val_max = 2.00
nbins = n_windows - 1

for i in range(n_windows):
    print("Window %02d:" % i, pymbar.timeseries.subsampleCorrelatedData(val_kn[i], conservative=True))

mbar = mbar_pmf(val_kn, val0_k, K_k, 300.0)

bin_centers, f_i, df_i, reweighting_entropy = mbar.get_pmf(val_min, val_max, nbins)
bin_centers, f_i, df_i, reweighting_entropy = mbar.get_pmf(val_min, val_max, nbins, uncertainties='from-specified', pmf_reference=f_i[:20].argmin())
np.savetxt("freefile_mbar", np.column_stack((bin_centers, f_i, df_i)))

plt.xlabel("R1 - R2 (Å)")
plt.ylabel("Potential of Mean Force (kcal/mol)")


plt.errorbar(bin_centers, f_i - f_i[:10].min(), yerr=df_i, linewidth=1, label="step6.00")
plt.legend(loc=2)
plt.savefig("claisen_pmf.png", dpi=300)
plt.show()
plt.errorbar(bin_centers, df_i, linewidth=1)
print(f_i.max() - f_i[:10].min(), df_i[f_i.argmax()])
