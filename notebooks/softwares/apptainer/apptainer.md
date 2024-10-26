# apptainer 

- An open-source program enabling operating system virualization (i.e. containerization)
- Creates a flexible OS environment resulting in portability and reproducibility of softwares 
- Specificaly develop at Lawerence Berkeley National Lab to simplify the process of running applications on HPC clusters 
- link?

```{tableofcontents}
```

# Apptainer 
 
- containers for softwares

## Build

```bash
sudo apptainer build ubuntu.sif ubuntu.def
sudo apptainer build --sandbox /tmp/ubuntu docker://ubuntu:22.04
```

## Run

```bash
apptainer shell ubuntu.sif
apptainer shell --contain --cleanenv ubuntu.sif 
```

```bash
apptainer run ubuntu.sif pwd
```

```bash
apptainer exec ubuntu.sif apt update 
```

