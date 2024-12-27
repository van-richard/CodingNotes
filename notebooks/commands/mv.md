# `mv` - move files/folders from one place to another.

- Both are performed with `mv`
- Follows the same notation as `cp`
- **Does not require the option, `-r` !!**

```bash
mv [source] [destination]
```
- `[source]` can be a file, folder, `/path/to/file`, or `/path/to/folder`
- `[destination]` can be `/path/to/file`, or `/path/to/folder` with `NewFileName` or `NewFolderName`

### Move/Rename Files and Folders

- Moving a file is straightforward; you can even rename it at the destination

```bash
# Move file.txt to the folder, destination, in /path/to, and rename it to newname.txt
mv file.txt /path/to/destination/newname.txt
```

- Same for folders

```bash
mv directory path/to/destination/newname
```

`mv` is similar to `cp`, but it deletes the source.
`mv` is also useful for renaming files!

```bash
mv source.txt new.txt
```
