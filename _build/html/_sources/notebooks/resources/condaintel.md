# Intel Environments with m1/m2 Macs

If you have an Apple computer with the m1 or m2 chips, some Python libraries may not work.

You can work around this by setting up a conda environment with an intel architecture!

<span style="font-size:1.5em;">**Example: Ambertools on m2 Macbook**</span>

1. Create a new conda environment and activate the environment

```bash
CONDA_SUBDIR=osx-64 conda create -n ambertools python=3.10
conda activate ambertools
```

2. Check the environment architecture with `python`
3. Change the architecture
4. Deactivate environment to set new configuration, then re-activate environment
5. Now you can install Ambertools!


python -c "import platform;print(platform.machine()) "
conda env config vars set CONDA_SUBDIR=osx-64
conda deactivate
conda activate ambertools
```
