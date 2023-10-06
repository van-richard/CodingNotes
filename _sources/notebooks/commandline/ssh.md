# Accessing the HPC 

The command, `ssh`, is a Secure Shell protocol used for remote logins, allowing access to a computer over the internet. We use this command to access the supercomputer.

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
```bash 
ssh username@schooner.oscer.ou.edu 
```
:::
:::{tab-item} Pete
```bash
ssh username@pete.hpc.okstate.edu
```
:::
::::

Lets try logging into the Pete supercomputer. If you have Oscer/Schooner, then change the `servername` to the `schooner.oscer.ou.edu`.


<span style="font-size:1.5em;">**Accessing Pete with `ssh`**</span>

In this example, I will login to the Pete supercomputer at OSU. My username is `van`, so it will look like this:

```bash
ssh van@pete.hpc.okstate.edu
```

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

We need to be able to copy files and folders from the supercomputer to our local computer, or vice versa. Previously, we learned `cp` and `mv` to manage files locally on our computer. However, to copy files through `ssh`, we need to use one of these 2 commands:

1. `rsync` 
2. `scp`

```{note}
I recommend using `rsync` because this will check files sizes and modify timestamps of both files or folders. It will skip any further processing if they match. Additionally, if the destination file already exists, the transfer algorithm will make sure only differences between the files are sent over the wire.
```


<span style="font-size:1.5em;">**Transferring with `rsync`**</span>

Since I typically use `rsync` to transfer folders, I will not cover using this command for tranfering files. You can use `scp` for that. The notation for `rsync` looks like:

```bash
rsync [source]/ [destination]
```

Where `[source]` is the reference folder, and `[destination]` is the folder you want **updated**  (i.e., to match the reference folder). Some examples of syncing directories from:

::::{tab-set} 
:::{tab-item} Local to Server
```bash 
rsync -avuim directory/ van@pete.hpc.okstate.edu:/path/to/directory 
```
:::
:::{tab-item} Server to Local
```bash
rsync -avuim van@pete.hpc.okstate.edu:/path/to/directory/ directory  
```
:::
::::

I included the options, `-avuim`, where:

| Option | Meaning |
| --- | --- | 
| -a | *archive*, only sync the `[source]` and `[destination]` |
| -v | *verbose*, print sync information on screen |
| -u | *update*,  skip files that are newer on the receiver |
| -i | *inline*, update destination files in-place |
| -m | *prune* empty directory chains from file-list |

In the example where I sync from "Local to Server", the `[source]` (from general notation) is `directory/`, you might have noticed it includes a `/`, whereas the `[destination]` does not. This trailing `/` means all contents (files and folders) from  the `[source]` (i.e. `directory/`). Without the trailing `/`, the `[source]` would be placed within `[destination]`. In other words, you made another copy of the `[source]` folder inside the destination folder rather than syncing the 2 (i.e. making `/path/to/directory/directory`)


<span style="font-size:1.5em;">**Transferring with `scp`**</span> 

Using the command, `scp`, is helpful for copying single files or folders that aren't too large in size. The general notation is similar to `rsync`:

```bash
scp -r [source] [destination]
```

The option, `-r`, allows you to copy folders (*but this can be used with files regardless*). Here are some examples:

::::{tab-set} 
:::{tab-item} File: Local to Server
```bash 
scp file.txt van@pete.hpc.okstate.edu:/path/to/directory 
```
:::
:::{tab-item} Directory: Local to Server
```bash
scp -r folder van@pete.hpc.okstate.edu:/path/to/directory 
```
:::
:::{tab-item} Directory: Server to Local
```bash
scp -r van@pete.hpc.okstate.edu:/path/to/directory .
```
:::
::::

Recall that option, `-r`, is used for copying folders, but it can also copy files. The `.` means here, which assumes you are in the working directory where you need the file.


## Command Execution with `ssh`

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

