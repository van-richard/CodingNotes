---
orphan: true
---

# Files in Terminal

Your mouse does not work in the way you expect with the command line interface.. 

Using the terminal means you need to learn how to to communicate with the computer through __commands__.

Simple tasks like:

- Copying files/folders ({term}`cp`)
- Moving files/folders ({term}`mv`)
- Renaming files/folders ({term}`mv`)
- Deleting files/folders ({term}`rm`)

Is usually done with at flick of your mouse, but now we have the command to start automating task. 

<br>

## Copying Files/Folders

````{margin}
```{tip}
More examples can be found here: 
[](../commands/cp.md)
```
````

To copy files, you use the command, {term}`cp`, where you include the file or folder you want to copy followed by the path you want the copy to go!



::::{tab-set}
:::{tab-item} General Notation
```bash
cp [source] [destination]
```

For both `[source]` and `[destination]`, you can use the absolute or relative path

:::
:::{tab-item} Copy Files
```bash
cp file.txt /path/to/destination/file-copy.txt
```

Copying a file is straight forward, you can even give the file a new name at the destination.

:::
:::{tab-item} Copy Folders
```bash
cp -r directory/ path/to/destination
```

Copying a directory requires the option `-r`, otherwise it is the same as copying files.

:::
::::

<br>

## Moving Files/Folders or Renaming Files/Folders 

````{margin}
```{tip}
:class: dropdown
More examples can be found here: 
[](../commands/mv.md)
```
````

Yes. They are the same command, {term}`mv`. The notation for {term}`mv` is the same as {term}`cp`!



::::{tab-set}
:::{tab-item} General Notation
```bash
mv [source] [destination]  # Moving
mv [source] [newname]      # Renaming
```

For both source and destination you can use the absolute or relative path

:::
:::{tab-item} Move/Rename Files
```bash
mv file.txt /path/to/destination/newname.txt
```

Moving a file is straight forward, you can even give the file a new name at the destination.

:::
:::{tab-item} Move/Rename Folders
```bash
mv directory/ path/to/desitination/newname
```

Moving a directory is the same as the previous examples.

:::
::::


<br>

## Deleting Files/Folders

````{margin}
```{tip}
:class: dropdown
More examples can be found here: 
[](../commands/rm.md)
```
````

```{caution}

This command is permanent. There is no trash can to recover your files from.....

```

{term}`rm` is used to delete files/folders, and is written like {term}`cp` and {term}`mv`



::::{tab-set}
:::{tab-item} General Notation
```bash
rm [sources]
```

Where,  `[source]`, can be the absolute or relative path

:::
:::{tab-item} Delete Files
```bash
rm file1.txt file2.txt
```

You can delete multiple files at once.

:::
:::{tab-item} Copy Folders
```bash
rm -r directory/
```

Include the option, `-r`, to delete a folder.

:::
::::
