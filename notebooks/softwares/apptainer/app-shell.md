# `apptainer shell`

- run shell within container

```bash
apptainer shell SIF

apptainer shell --cleanenv SIF
apptainer shell --bind src:dir SIF
apptainer shell --contain SIF
```

```bash
# sandbox 
sudo apptainer shell -WC /tmp/dir

sudo apptainer shell SIF
```
