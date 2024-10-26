---
keywords: torchmdnet
---

## TorchMDnet-ext Environment (CPU)

- Environment

```
bullet # interactive gpu 
module load gcc/11.2.0
```

- Create environment

```
conda create -n torchmdnet python=3.10
conda activate torchmdnet
conda install -c pytorch -c nvidia pytorch pytorch-cuda=12.1 -y
conda install -c pyg pyg -y
conda install pip h5py tqdm lightning -y
conda clean --all --yes
```

- Make sure you have a clean environment (no intel/impi)

```
pip install git+https://github.com/panxl/torchmd-net.git@tensornet-ext
```
