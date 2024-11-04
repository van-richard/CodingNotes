---
keywords: qmhub
---

# Install QMHub 

3. Clone [](https://github.com/panxl/qmhub.git) to `Programs/sources/`

```bash
git clone https://github.com/panxl/qmhub.git
cd qmhub

module load intel/2021.2.0
module load impi/2021.2.0

export MKLROOT=/opt/intel/oneapi/mkl/2021.2.0
export LD_PRELOAD=$MKLROOT/lib/intel64/libmkl_core.so:$MKLROOT/lib/intel64/libmkl_sequential.so

pip install .
```
