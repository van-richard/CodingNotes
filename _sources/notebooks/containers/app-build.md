# `apptainer build`

```{note}
recommended to build on local machine
`--fakeroot` or `sudo`
SIF files are only readable, no write.
```

```bash
# from docker
sudo apptainer build SIF docker://ubuntu:22.04

# definition file requires sudo
sudo apptainer build SIF DEF

# writable directory for testing
sudo apptainer build --sandbox /tmp/dir docker://ubuntu:22.04
sudo apptainer build --sandbox /tmp/dir SIF
```
