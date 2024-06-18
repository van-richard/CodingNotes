# Create AutoDock Vina Conda Environment on HPC

This example will help you create an AutoDock Vina Conda environment on Pete.

    - Follows [AutoDock Vina ReadTheDocs](https://autodock-vina.readthedocs.io/en/latest/index.html)
    - Also helpful is the [ADFR Suite](https://autodock-vina.readthedocs.io/en/latest/index.html)
        - Helps with virtual screening, grids, covalent docking, etc.

- Login to HPC

```
ssh van@pete.hpc.okstate.edu
```

- Launch an interactive session on batch, and activate your conda environment

- Create an environment named `vina` with `python=3.10`

```
conda create -n vina python=3.10
```

- Install `vina`, `nb_conda_kernels` for jupyter, and other helpful libraries

```
conda install -c conda-forge vina nb_conda_kernels matplotlib pandas swig boost-cpp sphinx sphinx_rtd_theme
```

- Install [ADFR Suite](https://ccsb.scripps.edu/adfr/downloads/), and download the linux tarball installer
- Copy this file to Pete, and follow install instructions

```
cd ~/.Programs # or where-ever your Programs directory is
cd ADFRsuite_x86_64Linux_1.0
./install.sh
echo "export PATH=/path/to/Programs/ADFRsuite_x86_64Linux_1.0/bin:$PATH" >> ~/.bashrc
```


