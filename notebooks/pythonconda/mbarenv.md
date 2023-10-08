# Conda `mbar` Environment

1. Right-Click and Copy the link:

    [mbar.yaml](../../assets/mbar.yaml)

2. On the cluster, download the file with `wget`

```bash
wget 
```

3. On the cluster, make sure your conda env is activated, then creat ethe environment

```bash
conda activate
conda env create -f mbar.yml
```