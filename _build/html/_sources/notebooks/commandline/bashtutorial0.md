# Navigating w/ Command Line

## Overview

Learning how to navigate the command line interface. In this tutorial, we will learn:

- Getting our current working directory
- Listing files/folders avalable in the current working directory
- Making a new folder
- Absolute and relative paths

In this tutorial, we will use the terminal on your local computer. So, there will be some differences in your output depending on if you're using MacOS or Windows/Ubuntu. Additionally, this tutorial assumes you using `bash` as your command line shell. If you don't know which shell you're using, type the following command in your terminal:

```bash
echo $SHELL 
```

The output should be `/bin/bash` printed on your screen. If it's not, run the following command:

```bash
chsh -s /bin/bash
```
You should now be in a `bash` shell

```{note}
When using the terminal, you usually **do not** need to use the mouse/trackpad! 
```

## Where are we?

The first command we are going to learn is `pwd` which stands for Print Working Directory. A lot of commands are named as an abbreviation of a word or words describing them. `pwd` tells you what your current or present working directory (folder) is.

```bash
pwd
```

Navigating the terminal will rely on you being in the right location. As you're moving around directories, it is easy to lose track of where you are. Use this command often to remind yourself where you presently are.

## What is here?

We know where we are, but we want to know what files/folders are here! To do this, use `ls`, short for list.

```bash
ls
```

## How to make a new folder/directory?

Let's make a new folder/directory so our current working directory isn't so lonely. To do this, use the `mkdir` command, short for make directory. This command takes an argument, i.e. the new folder name!

The syntax is `mkdir [arugment]` or in other words `mkdir [new folder name]`. Here, I will use the braket notations (`[]`) to imply this is some sort of input given by you. We can start by making a new folder called `test/`.

```bash
mkdir test
```

**NOTE:** Avoid using spaces in filenames and/or folders. This causes some extra key strokes which we will touch on later! An example would be making a folder called "amino acids". Rather than using a space, use an underscore (`mkdir amino_acids`) or hyphen (`mkdir amino-acids`).

## Moving in/out of folders/directories

We can enter a folder with the `cd` command, short for change directories. This command takes an argument, following the syntax `cd [argument]` or in other words `cd [folder name]`.

```bash
cd test
```

Check where you are with `pwd`, and you should see that you're in the new working directory!

```bash
pwd
```

To go back one directory, use the argument `../`.

```bash
cd ../
```

To go back to your "home" directory, you have two options:

```bash
cd    # Option 1
cd ~  # Option 2
```

If you check your current working directory again, you should see that you're back home

## What are paths?

There are 2 types of paths we can use, absolute and relative. Whenever we refer to a file or directory we are using one of these paths. Whenever we refer to a file or directory, we can use either type of path (either way, the system will still be directed to the same location).

To begin with, we have to understand that the file system under linux is a hierarchical structure. At the very top of the structure is what's called the root directory. It is denoted by a single slash ( / ). It has subdirectories, they have subdirectories and so on. Files may reside in any of these directories.

Absolute paths specify a location (file or directory) in relation to the root directory. You can identify them easily as they always begin with a forward slash ( `/`)

Relative paths specify a location (file or directory) in relation to where we currently are in the system. They will not begin with a slash.

