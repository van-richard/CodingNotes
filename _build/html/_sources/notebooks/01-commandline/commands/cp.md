# `cp` - copy files or folders

- Use `cp` to copy files or folders 
  - The `[source]` is the original file/folder or `/path/to/OriginalFile` or `/path/to/OriginalFolder`
  - The `[destination]` is where you want the *new copy* to go, this can be in the same folder, or to another path (`/different/path/to/NewFile`)

```bash
cp [source] [destination]
```

- Again, both `[source]` and `[destination]` can use absolute or relative paths


```bash
# Copy file in current working directory, OriginalFile.txt, to another directory in /path/to/destination and name it NewFile.txt
cp OriginalFile.txt /path/to/destination/NewFile.txt 

# Copy file from another directory here (.)
cp /path/to/OriginalFile.txt . 
```

- The `.` means `./` or the current directory you're in
  - Remember to go back a folder, we run `cd ../` ? 
  - `../` points back on directory while `./` means the current one

### Copy Folders with `cp -r`

- Copying a directory requires the option `-r`.

```bash
# Option, -r, tells cp to copy the entire folder to a new path
cp -r directory /path/to/destination

# Can also copy things "here" (.)
cp /path/to/directory .

# Copy directory in the current working directory using the name, directory2
cp -r directory directory2
```

To copy file1 to file2 (new name):

```bash
cp [FILE_1] [FILE_2]
```

Copy folders:

```bash
cp -r [FOLDER_1] [FOLDER_2]
```

Use `cp` to copy files or directories from one place to another.

- `cp` creates NEW versions of the sources, so editing the copy won't affect the original (and vice versa).

**Note that it will overwrite the destination if it already exists.**

```bash
cp srcFile.txt clone.txt
```

or

```bash
cp -r srcDirectory/ dst/ # recursively copy
```

Copying can be down with paths

```bash
cp -r /path/to/dir_1 /path/to/dir_2
```
