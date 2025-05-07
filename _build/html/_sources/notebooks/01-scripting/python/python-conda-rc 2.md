# Conda Config

Conda configuration file, `.condarc` for custom settings

## Add Channels

```bash
conda config --add channels conda-forge
```

## Multi-Threading

```bash
conda config --set repodata_threads 2
```

- Change the all defaults

```bash
conda config --set default_threads 8
```

## Configuration File

```bash
channels:
    - conda-forge

default_threads: 8
notify_outdated_conda: false
auto_update_base: false
auto_update_conda: false
auto_activate_base: true
change_ps1: true
```

