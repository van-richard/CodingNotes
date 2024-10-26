## SLURM

- Job schedule management on most clusters
- See more: [slurm.schemd.com](https://slurm.schedmd.com/overview.html)

## Pre-Installed Softwares

- there are sevearl preinstalled software you can use
- They can be started with the command, `module`
- Some softwares may not be accessible by default and must be loaded in
- This allows Research Computing to provide multiple versions of the software concurrently and enables users to easily switch between different versions.


## SLURM Commands

```
sinfo
sbatch SCRIPT
scancel JOBID

::::{margin}
```{tip}
SLURM commands will have the letter 's' before it. This seems to confuse a lot of people when they first learn. To help you remember, try recalling that we use `ssh` to login to the computer. 
```
::::

- When you access the supercomputer remotely (`ssh username@hostname`)
- you will always start at `/home`, check by running the command, `pwd`



## Slurm Scripts

It will be important for you to differentiat between a shell script and a Slurm script. When I make files, I typically use the file extention `.slurm` for jobs I plan to submit to the cluster. The slurm scripts have a specific notation you must follow.

### Directives (`#SBATCH`)

The way that Slurm determines how to allocate your jobs to the cluster (*i.e. across how many compute nodes, with how many CPUs, for how long etc*) is via Slurm directives that are included at the top of your job script. These directives are indicated by lines starting with `#SBATCH`. Common types of jobs are:

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

echo "Hello World!"

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

echo "Hello World!"

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

echo " Wow you dick."

```
:::
::::

To submit a `.slurm` job use `sbatch`. Alternatively, you can cancel it with `scancel`.

::::{tab-set}
:::{tab-item} Submit a Job
```bash
sbatch job.slurm   # This will print a JOB_ID
```
:::
:::{tab-item} Cancel a Job
```bash
scancel JOB_ID
```
:::
:::{tab-item} Check jobs
```bash
squeue             # All jobs queue
squeue -u username # your usernameUSERNAME queue
```
:::
::::
