# Compiling Amber

Amber + QMhub + Torchmd-net 

Compile Amber for QM/MM simulations with QMhub and Torchmd-net.

Using Amber22 and AmberTools23 on Pete.

:::{admonition} Includes
* sander.MPI
* SINR thermostat
* adaptive string method
:::

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

## Amber 

1. In `Programs/sources`, decompress AmberTools *then* Amber

```bash
tar xvjf AmberTools
tar xvjf Amber
```

2. Apply patches in `amber22_src/`, qmhub, sinr, sqm, and then asm.

```bash
patch -p 1 < patch_file
```

3. Go to the `build/` directory

```bash
cd build/
```

4. Change the `run_cmake` and run it `./run_cmake`:

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
