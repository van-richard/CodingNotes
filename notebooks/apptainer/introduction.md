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

