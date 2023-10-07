# Conda Commands


```

## Creating a new virtual environment.

```
conda create -n <name>                          # Create New environment
conda create -n <name> python=<version-number>  # Specific Python version
```

## Running the new environment.

```
conda activate <name>
```

In your new activated environment, you can now install needed packages.

```
conda install <package-name>                 # Install Package
conda install -c conda-forge <package-name>  # Install package from a specific channel (-c)
```

## Leave a virutal environment.

```
conda deactivate
```

## Deleting conda environments and related packages.

```
conda env remove -n <name>
```

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


## Example with AmberTools

```
conda create -n ambertools
conda activate ambertools
conda install -c conda-forge ambertools=22 compilers
```



