---
keywords: compile, amber, qmhub, qchem, torchmd-net, install, software
---

# Compiling Amber on Pete

- This follows the bible (reference manual) !!!

## Amber 

1. In `Programs/sources`, extract AmberTools *then* Amber

```bash
tar xvjf AmberTools[VERSION].tar.bz2
tar xvjf Amber[VERSION].tar.bz2
```

2. Go to the `build/` directory

```bash
cd build/
```

3. Run the script, `./run_cmake`, compiling CPU, MPI, then CUDA.

:::{code-block} bash
:caption: run_cmake

  cmake $AMBER_PREFIX/amber22_src \
    -DCMAKE_INSTALL_PREFIX=/scratch/van/.Programs/amber22 \
    -DCOMPILER=INTEL \
    -DMPI=FALSE -DCUDA=FALSE -DINSTALL_TESTS=FALSE \
    -DFORCE_EXTERNAL_LIB=mkl \
    -DDOWNLOAD_MINICONDA=FALSE -DBUILD_PYTHON=FALSE \
    2>&1 | tee  cmake.log
:::

*Check if everything is properly linked.*

5. Before we run `make install -j 8`, we'll build sander first, and test it.

```bash
make sander -j 8
```
Test sander using the source in the AmberTools directory. 

If the test went well, go back to the `build/` and compile the MPI version.

```bash
make sander.MPI -j 8
```
