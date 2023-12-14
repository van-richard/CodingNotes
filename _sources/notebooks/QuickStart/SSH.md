# Accessing the HPC 

## Remote Login

Accessing the supercomputer can be done on your laptop, in the comfort of your bed. The command is {term}`ssh`, which stands for "Secure Shell protocol".

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
