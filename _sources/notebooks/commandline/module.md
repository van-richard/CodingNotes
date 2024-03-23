# `module` on Clusters

- On HPCs, softwares are loaded using the `module` command, which is set up by the system admin.

- Allow access any softare without worrying about the environment variables

[module](https://lmod.readthedocs.io/en/latest/030_installing.html?highlight=bash%20variable)


## Help yourself

```
module help
```

## List softwares

```
module list
```


## All available software

```bash
module av 
# or 
module available
```

## Search for specific module 

```bash
module spider STRING
# or
module -r spider STRING # regular expression
```

## Load software to environment/script

```
module load STRING
```

## Remove modules

```
module purge
```

