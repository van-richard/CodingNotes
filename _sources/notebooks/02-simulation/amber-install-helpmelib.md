---
keywords: helpme, helPME, helpmelib, qmhub
---

# Compile `helpmelib` executable

3. Clone [](https://github.com/andysim/helpme) to `Programs/sources/`

```bash
git clone https://github.com/andysim/helpme

cd ../helpme
mkdir -p build
cd build

module load intel/2021.2.0
module load impi/2021.2.0

export MKLROOT=/opt/intel/oneapi/mkl/2021.2.0
export LD_PRELOAD=$MKLROOT/lib/intel64/libmkl_core.so:$MKLROOT/lib/intel64/libmkl_sequential.so

CC=$(which icc) CXX=$(which icpc) \
    PKG_CONFIG_PATH=~/miniforge3/lib/pkgconfig \
    cmake .. \
    -DFFTW_INCLUDES=$MKLROOT/include/fftw -DFFTW_LIBRARIES=$MKLROOT/lib/intel64
    -DPYTHON_EXECUTABLE=$(which python)

make helpmelib

cp python/ ..
```
