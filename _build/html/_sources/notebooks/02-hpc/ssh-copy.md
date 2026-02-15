# Transfer Data 

- Upload, Download, & Extras

## Transferring Files/Folders Remotely

Previously, we learned the linux commmands, `cp` and `mv`, to manage files locally in the `terminal`.

To copy files through `ssh`, we need to use one of two commands:

1. `rsync` remote (and local) copy
2. `scp` - secure copy

The format for them are:

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

Both require a `source` (original file) as the first option, followed by the `destination` (where you want the copy). This is similar to the syntax of `cp` and `mv`. The biggest difference is that you will need to include your HPC account:

**Example** If you're copying a local file, to Oscer, it would be:
```bash
scp /path/to/local/source username@schooner.oscer.ou.edu:/path/to/destination
```
Copying the local file to Oscer with `scp` needs `username@hostname:` followed by the absolute path to the `destination`. **Note the `:`**

I recommend using `rsync` because this will check files sizes and modify timestamps of both files or folders. It will skip any further processing if they match. Additionally, if the destination file already exists, the transfer algorithm will make sure only differences between the files are sent over the wire.

I won't go further here, but you can find more information about `rsync` and `scp` later.

***

One last thing about `ssh` is that, you can also run commands without going through the whole process of logging in.

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

