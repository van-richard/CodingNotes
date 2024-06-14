---
keywords: compile, amber, qmhub, qchem, torchmd-net, install, software
---

# Patch / Compile 

Amber + QMhub + Torchmd-net 

## Create Conda Environment 

1. Create a `torchmd-net` conda environment, and load modules.

```bash
conda create -f torchmd-net.yml
conda activate torchmd-net

module load intel/2021.2.0
module load impi/2021.2.0
export MKLROOT=/opt/intel/oneapi/mkl/2021.2.0
export LD_PRELOAD=$MKLROOT/lib/intel64/libmkl_core.so:$MKLROOT/lib/intel64/libmkl_sequential.so
```

2. Clone repository to `Programs/` and change branch to torchnet-ext

```bash
git clone 
cd torchmd-net
pip install .
```
3. Clone [](https://github.com/panxl/qmhub) and [](https://github.com/andysim/helpme) to `Programs/`. We'll compile qmhub first.

```bash
git clone
git clone

cd qmhub
pip install .

cd ../helpme
CXX=icpc PKG_CONFIG_PATH=~/miniforge3/lib/pkgconfig cmake .. -DFFTW_INCLUDES=$MKLROOT/include/fftw -DFFTW_LIBRARIES=$MKLROOT/lib/intel64
make helpmelib
```

4. Copy the `python/helpme***` file to `minforge3/envs/torchmd-net/lib/python3.10/site-packages/qmhub/`

5. Finally, compile Amber like [normal](01amber)