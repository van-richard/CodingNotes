# Accessing the HPC 

The command, {term}`ssh`, means the Secure Shell protocol, and we use to remotely access the supercomputer! 

The general notation looks like this:

```bash
ssh username@servername
```

Where: 
- `username` is the username that you made when applying for the account
- `@servername` is the server name and IP address of the supercomputer

To log into Oscer/Schooner or Pete, the command would look like this (*change `username` to your username*):

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

Lets try logging into the Pete supercomputer. If you have Oscer/Schooner, then change the `servername` to the `schooner.oscer.ou.edu`.


<span style="font-size:1.5em;">**Accessing Pete with `ssh`**</span>

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

The first time logging in, you will get the following prompt:

```bash
The authenticity of host 'pete.hpc.okstate.edu' cannot be established.
 DSA key fingerprint is 01:23:45:67:89:ab:cd:ef:ff:fe:dc:ba:98:76:54:32:10.
 Are you sure you want to continue connecting (yes/no)?
```

Answering `yes` to the prompt will cause the session to continue, and the host key is stored in the local system's known_hosts file. This is a hidden file, stored by default in a hidden directory, called `/.ssh/known_hosts`, in the your home directory. Once the host key has been stored in the known_hosts file, the client system can connect directly to that server again without need for any approvals.

```{note} 
**Answer `yes` by typing into your terminal. This will only happen on the first login!**
```

<span style="align:center; font-size:2em;">**Congratulations! You logged into the supercomputer!**</soan>


## Transferring File & Folder 

We need to be able to copy files and folders from the supercomputer to our local computer, or vice versa. Previously, we learned {term}`cp` and {term}`mv` to manage files locally on our computer. However, to copy files through {term}`ssh`, we need to use one of these 2 commands:

1. `rsync` 
2. `scp`

To use either command, type:

::::{tab-set}
:::{tab-item} rsync 
```bash
rsync /path/to/source/ /path/to/destination
```
:::
:::{tab-item} scp
```bash
scp /path/to/source /path/to/destination/
```
:::
::::

```{note}
I recommend using `rsync` because this will check files sizes and modify timestamps of both files or folders. It will skip any further processing if they match. Additionally, if the destination file already exists, the transfer algorithm will make sure only differences between the files are sent over the wire.
```

We won't go any futher, but remember you can find more information about {term}`rsync` and {term}`scp`! 

One last thing about {term}`ssh` is that, you can also run commands without going through the whole process of logging in.

## Command Execution with {term}`ssh`

What if the only thing you need to do over the SSH connection is execute a single quick command? You might not want to take the separate actions of connecting and authenticating, running the command, and then disconnecting. The `ssh` command allows us to execute command on remote machine without logging into that machine. Here is the general notation:

```bash
ssh van@pete.hpc.okstate.edu [COMMAND]
```

Where `[COMMAND]` is some `bash` commands. 

Here is an example of making a new directory, `test`, without logging in:

```bash
ssh van@pete.hpc.okstate.edu mkdir -p test
```

Log into the supercomputer, and list the contents of your home directory. You should see that you have a new `test/` directory.

