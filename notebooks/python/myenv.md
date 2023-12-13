# My Recommended Conda Setup

* The installation of conda should be in your `~/Programs` directory
* For the HPC, turn off conda on login by removing the conda lines in `~/.bashrc` or `~/.bash_profile`
* Make an alias for conda, in `~/.bash_aliases`:
  * `alias myconda='eval "$(/Users/van/Programs/miniforge3/bin/conda shell.bash hook)"; conda activate'`

## My List

* [base.yaml](../../assets/base.yml)
* [ambertools](../../assets/ambertools.yml)
* [mbar.yaml](../../assets/mbar.yml)

## Create Environment

1. Right-Click and copy the link
   - These environments should work on both the supercomputer or a personal one.

2. On the cluster (or your computer):
   1. Activate the conda base environment ()
   2. Download the file with `wget` (doesn't matter where)
   
        ```bash
        wget environment_name_link
        ```

3. Create the environment

:::{code-block} bash
conda env create -f *environment_name*.yaml
:::

::::{tab-set}
:::{tab-item} base.yml
I recommend keeping the base environment super simple! The only packages you really need here are:

* numpy, matplotlib, pandas, scipy
  * Small and quick analysis
* jupyterlab
  * Interactive python coding
* nb_conda_kernel
  * Switching between environments within a jupyter notebook
* mambda
  * I haven't installed it, but can intall packages faster than conda

You don't need to install this, but you can use the YAML file to update your base environment

```bash
conda env update -f base.yml
```
:::
:::{tab-item} mbar.yml
Free energy analysis with MBAR 

Download a copy these scripts to a `~/Scripts` folder

1. [mbar_pmf.py](../../assets/Scripts/mbar_pmf.py)
2. [mbar_pmf2.py](../../assets/Scripts/mbar_pmf2.py)

Then, creat the environment

```bash
conda create -f mbar.yml
```
:::
::::



