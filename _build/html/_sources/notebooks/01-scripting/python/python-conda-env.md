# Creating New Environments

A new conda environment can be created with `create`, and you can specifiy the version of python!

- `NAME` is the conda environment name
- `VERSION` is the version number of python
  
::::{tab-set}
:::{tab-item} New Environment
:::{code} bash
conda create -n NAME                          
:::
:::{tab-item} env w/ python verion
conda create -n NAME python=VERSION
:::
::::

## Running the new environment.

```
conda activate <name>
```

In your new activated environment, you can now install needed packages.

```
conda install <package-name>                 # Install Package
conda install -c conda-forge <package-name>  # Install package from a specific channel (-c)
```

## Leaving Environment

Use `deactivate` if you want to leave or switch to a different conda environment

:::{code} bash
conda deactivate
:::

## Deleting conda environments and related packages.

:::{code} bash
conda env remove -n NAME --all
:::

## List available environments.

```
conda env list
```

## List packages within an environment.

```
conda activate <name>
conda list
```


## Exporting environments to a YML file.

```
conda activate <name>
conda env export > <name>.yml
```


## Installing a Conda environment from a YML file.

```
conda env create -f <name>.yml
```



