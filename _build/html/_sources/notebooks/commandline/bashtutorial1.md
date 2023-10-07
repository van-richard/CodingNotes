# Files in Terminal

Your mouse does not work in the way you expect with the command line interface.. 

Using the terminal means you need to learn how to to communicate with the computer through __commands__.

Simple tasks like:

- Copying files/folders (`cp`)
- Moving files/folders (`mv`)
- Renaming files/folders (`mv`)
- Deleting files/folders (`rm`)

Is usually done with at flick of your mouse, but now we have the command to start automating task. 

**Copying Files/Folders**

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

