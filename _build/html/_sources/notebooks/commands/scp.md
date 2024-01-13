---
orphan: true
---

# `scp` - copy files/folders over ssh

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