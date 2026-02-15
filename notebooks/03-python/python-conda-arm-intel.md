---
keyword: macOS, m1, m2, arm, intel, conda, environment, CONDA_SUBDIR, osx-64
---

# Intel Environments on M1/M2

If you have an Macbook with the m1 or m2 chips, you might have found out some python libraries don't work.

A work around, is via a conda environment with an intel architecture!

<span style="font-size:1.5em;">**Example: Ambertools on m2 Macbook**</span>

- Create a new conda environment and activate the environment

```bash
CONDA_SUBDIR=osx-64 conda create -n ambertools23 python=3.10
```

- activate environment

```bash
conda activate ambertools
```

- Check the environment architecture with `python`

```python
python -c "import platform;print(platform.machine()) "
```

- Change the architecture
   
```bash
conda env config vars set CONDA_SUBDIR=osx-64
```

- Follow the instructions onscreen! 
    - Deactivate environment to set new configuration, then re-activate environment.

```bash
conda deactivate; conda activate ambertools
```

- install Ambertools!

```bash
conda install -c conda-forge ambertools
```
