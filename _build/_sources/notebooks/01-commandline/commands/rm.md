# `rm` - delete files


```{caution}
This command is permanently delete your files / folders
No trash can to recover "accidental" events
```

- Use `rm` (Remove) to delete files/folders.

```bash
# Delete file1.txt
rm file1.txt
```

### Deleting Multiple Files

```bash
# Deleting 2 files named, file1.txt and file2.txt
rm file1.txt file2.txt
```

### Deleting Folders

- Like `cp`, you need the option `-r` to delete a folder
- `-f` can force delete

```bash
# Delete entire folder called directory/
rm -r directory/

# Force delete all contents with `-f`
rm -rf directory/
```

:::{code} bash
rm file.txt
:::

:::{code} bash
rm -r directory/
:::

