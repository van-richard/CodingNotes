# Plot PMF with PyMBAR

```{note}
This requires you to download 
```

```python
import numpy as np
import matplotlib.pyplot as plt
import sys
from glob import glob



fname = np.loadtxt('qmmm/wt/mbar/freefile_mbar_allstep6')
fname2 = np.loadtxt('qmmm/k866a/mbar/freefile_mbar_allstep6')
print(fname[0], fname2[0])
print(fname[-1], fname2[-1])

colors=["#956bed", "#ce1365"]


plt.figure(figsize=(3.33,2), dpi=300)

mt = np.loadtxt('qmmm/k866a/mbar/freefile_mbar_allstep6')
wt = np.loadtxt('qmmm/wt/mbar/freefile_mbar_allstep6')

plt.plot(mt[:,0], mt[:,1] - mt[:10,1].min(), linewidth=0.5, c=colors[0], label=labels[0])
plt.fill_between(mt[:,0], (mt[:,1] - mt[:10,1].min())-mt[:,2], (mt[:,1] - mt[:10,1].min())+mt[:,2], color=colors[0], alpha=0.4)


plt.plot(wt[:,0], wt[:,1] - wt[:10,1].min(), linewidth=0.5, c=colors[1], label=labels[1])
plt.fill_between(wt[:,0], (wt[:,1] - wt[:10,1].min())-wt[:,2], (wt[:,1] - wt[:10,1].min())+wt[:,2], color=colors[1], alpha=0.4)


m = plt.text(0.1,1, "%.1f ± %.1f kcal/mol" % ((mt[:,1].max() - mt[:10,1].min()), mt[mt[:,1].argmax()][2]), fontsize=8, color=colors[0])
m.set_bbox(dict(facecolor='white', alpha=0.9, edgecolor='white'))
w = plt.text(0.1,-3, "%.1f ± %.1f kcal/mol" % ((wt[:,1].max() - wt[:10,1].min()), wt[wt[:,1].argmax()][2]), fontsize=8, color=colors[1])
w.set_bbox(dict(facecolor='white', alpha=0.9, edgecolor='white'))


# plt.legend(loc=2,fontsize=8)
plt.xlabel('d1 - d2 (Å)', fontsize=10)
plt.xticks(ticks=np.arange(-2.5,2.5,0.5), fontsize=8)
plt.ylabel('PMF (kcal/mol)', fontsize=10)
plt.yticks(ticks=np.arange(-5,30,5), fontsize=8)
plt.grid(linestyle='--')
plt.tick_params(axis='both', direction='in')
    
plt.savefig('img/pmf-mbar-wt-k866a.svg', bbox_inches='tight')


frames = np.linspace(-1.85,2.15,420)

for frame in range(len(frames)):
    plt.figure(figsize=(6.4,3.6), dpi=300)
    for i in range(len(files)):
        fname = np.loadtxt('qmmm/%s/mbar/freefile_mbar_allstep6' % files[i])
        legend = labels[i] + '\n$\Delta$G$^\ddag$ = ' + str(np.round(fname[:,1].max() - fname[:10,1].min(),1)) + ' $\pm$ ' + str(np.round(fname[fname[:,1].argmax()][2],1)) + ' kcal/mol'
        # print(legend)
        plt.errorbar(fname[:,0], fname[:,1] - fname[:10,1].min(), yerr=fname[:,2], linewidth=1,label=labels[i])
        plt.legend(fontsize=10)
        plt.xlabel('R1 - R2 (Å)', fontsize=12)
        plt.ylabel('Potential of Mean Force (kcal/mol)', fontsize=12)
    plt.axvline(frames[frame], c='k')
    plt.savefig('img/pmf/pmf-mbar-wt-k866a-%03d.png' % frame, bbox_inches='tight')
    plt.close()


colors = plt.cm.jet(np.linspace(0,1,len(labels)))
plt.figure(figsize=(6.4,3.6), dpi=300)

for i in range(len(freefile_mbar)):
    initial = np.loadtxt('qmmm/k866a/mbar/%s' % freefile_mbar[i])
    legend = labels[i] + '\n$\Delta$G$^\ddag$ = ' + str(np.round(initial[:,1].max() - initial[:10,1].min(),1)) + ' $\pm$ ' + str(np.round(initial[initial[:,1].argmax()][2],1)) + ' kcal/mol'
    plt.errorbar(initial[:,0], initial[:,1] - initial[:10,1].min(), yerr=initial[:,2], linewidth=1, color=colors[i],label=labels[i])
    # plt.text(0.5,0.5,'$\Delta$ G$^\ddag$ = ' + str(np.round(initial[:,1].max() - initial[:10,1].min(),1)) + ' $\pm$ ' + str(np.round(initial[initial[:,1].argmax()][2],1)), c=colors[i], fontsize=12)

plt.xlabel("R1 - R2 (Å)", fontsize=12)
plt.ylabel("Potential of Mean Force (kcal/mol)", fontsize=12)
plt.legend(loc=2, fontsize=10)
plt.savefig("img/pmf-mbar-k866a-convergence.png", dpi=300, bbox_inches='tight')

print(round(initial[:,1].max() - initial[:10,1].min(),1), round(initial[initial[:,1].argmax()][2],1))

```