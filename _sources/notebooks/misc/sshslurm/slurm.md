# HPC and Using Slurm

SLURM is an open source, fault-tolerant, and highly scalable cluster management and job scheduling system for large and small Linux clusters. 

[slurm.schemd.com](https://slurm.schedmd.com/overview.html)

## Slurm Scripts

<span style="font-size:1.5em;">**Directives (`#SBATCH`)**</span>

The way that Slurm determines how to allocate your jobs to the cluster (i.e. across how many compute nodes, with how many CPUs, for how long etc) is via Slurm directives that are included at the top of your job script. These directives are indicated by lines starting with `#SBATCH`. Here are some examples:

::::{tab-set} 
:::{tab-item} CPU Jobs
```bash
#!/bin/bash
#SBATCH --partition=PARTITION
#SBATCH --time=TIME (DAYS-HOURS:MINUTES:SECONDS)
#SBATCH --nodes=NODES
#SBATCH --ntasks=NTASKS
#SBATCH --output=%j.out 
#SBATCH --error=%j.err
#SBATCH --name=JOBNAME
```
:::
:::{tab-item} GPU Jobs
```bash
#!/bin/bash
#SBATCH --partition=GPU_PARTITION
#SBATCH --time=TIME (DAYS-HOURS:MINUTES:SECONDS)
#SBATCH --nodes=NODES
#SBATCH --ntasks=NTASKS
#SBATCH --output=%j.out 
#SBATCH --error=%j.err
#SBATCH --name=JOBNAME
#SBATCH --gres=gpu:1
```
:::
:::{tab-item} Exclusive CPU Jobs
```bash
##!/bin/bash
##SBATCH --partition=GPU_PARTITION
##SBATCH --time=TIME (DAYS-HOURS:MINUTES:SECONDS)
##SBATCH --nodes=NODES
##SBATCH --ntasks=NTASKS
##SBATCH --output=%j.out 
##SBATCH --error=%j.err
##SBATCH --name=JOBNAME
##SBATCH --mem=0
##SBATCH --exclusive
```
:::
::::


## Job Management

Submitting a job

```bash
sbatch job.slurm
```

Canceling a job

```bash
scancel [JOB ID]
```

Show queued/running jobs which can be all queued/running jobs or just your queued/jobs

```bash
squeue ## All jobs queue
squeue -u *USERNAME* ## USERNAME queue
```


## Information on HPC Resources

Get information about the resources on available nodes that make up the HPC cluster with `sinfo`

```bash 
sinfo ## All resources 
sinfo | grep idle ## Idle nodes 
```


## Information on Pre-Installed Softwares

Additionally, the HPC often has preinstalled software. You can find this using the `module` command. The `module` system to load most software into a user’s environment. Some software may not be accessible by default and must be loaded in. This allows Research Computing to provide multiple versions of the software concurrently and enables users to easily switch between different versions.

List all available modules

```bash
module av
```

Load a module

```bash
module load *name*
```

Remove a module 

```bash
module remove *name*
```

Remove ALL modules, cleaning your environment

```bash
module purge
```
