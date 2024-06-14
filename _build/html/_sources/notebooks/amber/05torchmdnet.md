---
keywords: torchmdnet
---

## TorchMDnet-ext Environment (CPU)

- Create environment
```
conda create -n torchmdnet python=3.10
conda activate torchmdnet
conda install -c pytorch -c nvidia pytorch pytorch-cuda=12.1
conda install -c pyg pyg 
conda install pip h5py tqdm lightning
conda clean --all --yes
```

- Make sure you have a clean environment (no intel/impi)

```
module load gcc/11.2.0 # for pete
pip install git+https://github.com/panxl/torchmd-net.git@tensornet-ext
```
