# Supercomputers


In simple terms, they are like giant, powerful versions of regular computers, much larger and involve many more parts. They can take up entire rooms or even buildings. Inside these machines, you'll find thousands or even millions of smaller computer processors (like the brain of the computer) and a lot of memory (like the computer's short-term memory). Think of these processors as workers and the memory as their workspace.

In Oklahoma, we have access to 2 supercomputers:

1. [Oscer (aka. Schooner) at OU](https://www.ou.edu/oscer)
2. [Pete at OSU](https://hpcc.okstate.edu/pete-supercomputer.html)

Visit their websites to get more information and learn how to make an account!

Two key points when using the supercomputer:

1. We access the computers remotely with our terminal
2. Slurm is used to manage jobs on the cluster

## What is `ssh`?

To login remotely to a supercomputer, we use the command `ssh` on the terminal. This is short for secure shell protocol and can take a few arguments. The syntax is `ssh [username]@ssh.server.example.edu`.

First, open your terminal, and follow the directions for Oscer or Pete SSH. Change the `[username]` part, to the username you created!!

## What is `Slurm`?

Since high-performace computing centers are composed of many parts (CPU, GPU, RAM, SSD, HDD, etc.), involving many different users (biological science, machine learning, etc.) with different needs. They require a job scheduling and resource management system. One system is Slurm.

Slurm is like a traffic cop for computers. It's a software system used in big computer clusters, like those in data centers or supercomputers. Slurm helps manage and allocate the computing resources, like processors and memory, to different tasks or jobs that people want to run on the cluster.

Imagine a busy intersection where the traffic cop directs cars to different lanes or tells them when to go. Slurm does something similar but for computer tasks, making sure they don't crash into each other and efficiently use the available resources, so everything runs smoothly. It helps coordinate and schedule who gets to use the computers and when.

For us, the users, some key points when using Slurm are:

1. Job Submission/Management
2. Resource Allocation/Utilization
3. Scripting and Automation

# Accessing the HPC 

## Remote Login

Accessing the supercomputer can be done on your laptop, in the comfort of your bed. The command is `ssh`, which stands for "Secure Shell protocol".

It has the following format:

```bash
ssh username@hostname
```

Where,

1. `username` is the username (whatever you made when applying for the account)
2. `@` is always between `username` and `hostname`
3. `hostname` is the name and IP address of the supercomputer


**Example** For my username, `van`, the command would be:
```bash
ssh van@hostname
```

## What is the *hostname*?

It depends on the computing center. In Oklahoma, you can access Oscer (`schooner.oscer.ou.edu`) or Pete (`pete.hpc.okstate.edu`) by:

::::{tab-set} 
:::{tab-item} Oscer/Schooner
:sync: key1
```bash 
ssh username@schooner.oscer.ou.edu 
```
:::
:::{tab-item} Pete
:sync: key2
```bash
ssh username@pete.hpc.okstate.edu
```
:::
::::

## Task: Accessing the HPC
 
Try logging into one of the supercomputer. Change the `hostname` to the `pete.hpc.okstate.edu` or ``schooner.oscer.ou.edu`.

My username is `van`, so logging in looks like this:

::::{tab-set} 
:::{tab-item} Oscer/Schooner
:sync: key1
```bash 
ssh van@schooner.oscer.ou.edu 
```
:::
:::{tab-item} Pete
:sync: key2
```bash
ssh van@pete.hpc.okstate.edu
```
:::
::::

:::{note}
On the first login attempt, you will get the following prompt:

```bash
The authenticity of host 'pete.hpc.okstate.edu' cannot be established.
 DSA key fingerprint is 01:23:45:67:89:ab:cd:ef:ff:fe:dc:ba:98:76:54:32:10.
 Are you sure you want to continue connecting (yes/no)?
```

Answering `yes` to the prompt will cause the session to continue, and the host key is stored in the local system's known_hosts file. This is a hidden file, stored by default in a hidden directory, called `/.ssh/known_hosts`, in the your home directory. Once the host key has been stored in the known_hosts file, the client system can connect directly to that server again without need for any approvals.

**Answer `yes` by typing into your terminal. This will only happen on the first login!**

:::

*Congratulations! You logged into the supercomputer!*


# HPC Job Managmer

## SLURM Language

Slurm is the software which manages the individual user and group jobs in a supercomputer center.

This is a helpful refernce: [slurm.schemd.com](https://slurm.schedmd.com/overview.html)

::::{margin}
```{tip}
We use the SSH protocol to remotely access the computer. Slurm commands also start with the letter `s`, so they're not to hard to remember~

Commands: `sbatch`, `scancel`, `squeue`, `sinfo`
```
::::

When you access the supercomputer remotely (`ssh username@hostname`), you will always start at `/home`.

If you run `pwd`, you should see that you're it!


## HPC Resources

`sinfo` prints information about the different paritions, and their current status.

```bash 
sinfo 
```

### Pre-Installed Softwares

Clusters often has preinstalled software you can use. They're called using the command `module` . Some software may not be accessible by default and must be loaded in. This allows Research Computing to provide multiple versions of the software concurrently and enables users to easily switch between different versions.

```bash 
sinfo 
```

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
