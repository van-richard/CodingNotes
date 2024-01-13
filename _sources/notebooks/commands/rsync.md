---
orphan: true
---

# `rsync` - sync files/folders 

Since I typically use `rsync` to transfer folders, I will not cover using this command for tranfering files. You can use `scp` for that. T

he notation for `rsync` looks like:

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

```{note}
In the example where I sync from "Local to Server", the `[source]` (from general notation) is `directory/`, you might have noticed it includes a `/`, whereas the `[destination]` does not. This trailing `/` means all contents (files and folders) from  the `[source]` (i.e. `directory/`). Without the trailing `/`, the `[source]` would be placed within `[destination]`. In other words, you made another copy of the `[source]` folder inside the destination folder rather than syncing the 2 (i.e. making `/path/to/directory/directory`)
```