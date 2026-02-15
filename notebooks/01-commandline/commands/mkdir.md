# `mkdir` - make new directories.

- Use `mkdir` (Make Directory) to create a new folder.

```bash
mkdir [new folder name]
```

- For example, create a folder called `test`.

```bash
mkdir test
```

```bash
mkdir myNewDir
```

The `-p` flag causes new intermediate directories to be created as necessary.

```bash
mkdir -p myNewDir/with/intermediate/directories
```

If the intermediate directories didn't already exist, running the above command without the `-p` flag would return an error
