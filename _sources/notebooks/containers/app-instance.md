# `apptainer instance start`

[apptainer docs]https://apptainer.org/docs/user/main/running_services.html)

## Instances

- `apptainer instance start` Creates an isolated environment for container service to live inside 
- Executes the contents of `startscript` (in definition file)

```bash
# SIF_NAME - /path/to/file.sif
# INSTANCE_NAME - can be any string (e.g. instance1)
apptainer instance start SIF_NAME INSTANCE_NAME
```


