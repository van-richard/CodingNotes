# Files in Terminal

Your mouse does not work in the way you expect with the command line interface.. 

Using the terminal means you need to learn how to to communicate with the computer through __commands__.

Simple tasks like:

- Copying files/folders (`cp`)
- Moving files/folders (`mv`)
- Renaming files/folders (`mv`)
- Deleting files/folders (`rm`)

Is usually done with at flick of your mouse, but now we have the command to start automating task. 

<span style="font-size:1.5em;">*Copying Files/Folders**<span>

To copy files, you use the command, `cp`, where you include the file or folder you want to copy followed by the path you want the copy to go!

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

<span style="font-size:1.5em;">**Moving Files/Folders or Renaming Files/Folders**</span>

Yes. They are the same command, `mv`. The notation for `mv` is the same as `cp`!

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


<span style="font-size:1.5em;"><span style="font-size:1.5em;">**Deleting Files/Folders**</span>

```{caution}

This command is permanent. There is no trash can to recover your files from.....

```

`rm` is used to delete files/folders, and is written like `cp` and `mv`

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
