# Terminal, Shell, & Bash

## Terminal

:::{figure} https://raw.githubusercontent.com/van-richard/CodingNotes/main/_static/gif/terminal-header.gif
---
align: center
name: terminal-header
---

Command line on MacOS :term:`terminal`, where, (1) :term:`echo` will return `"[`some text`]"` as an output, (2) :term:`echo` to output "2 + 2", the `|` (pipe) takes this as input for the next command, `bc -l` (calculator), (3) `echo` prints the variable, `$SHELL`, which points to the program `/bin/bash`, and (4) cowboy.
:::

Example of the `terminal` on a Macbook ({numref}`terminal-header`). The line you are working on is noted with the `$`. The format of this line is: computer name, `;` , username, and then `$`. `Bash` commands are typed by line, and ran by hitting the `[enter]` key.

**_Why do we start here?_**
The command line is a tool that everyone uses in computational research. 

Some advantages:
  * More control in running applications
  * Faster management across operating systems (OS)
  * Ability to automate repetitive tasks (scripting)

Not to mention, many data analysis tools and computing servers requires proficiency with command line.
* For example,
  * Accessing the supercomputer 
  * Managing files remotely/locally
  * Port forwarding
  
Yes, there is a steep learning curve. This will be confusing. A little irritating. And probably involve some tears. 

BUT, once you get the hang of it, you'll find yourself running the same few commands over and over again!

### Terminal is just 90% Keyboard

Graphical Interfaces
  * Most people are familiar with programs that require a mouse and keyboard to interact through visible (on-screen) menus, buttons, sliders, etc.
  * These rely on the `Graphical User Interfaces (GUI)` to complete specific instructions like copying, deleting, or renaming

Alternatively,
  * Other programs operating with a {term}`Command Line Interface (CLI)`
  * Only require input from a keyboard
   * Instructions are typed to perform the tasks
   * Often for computing a large number of files, or automating repetitive tasks

The CLI can be accessed via {term}`terminal` app.
  * Pre-installed on many computers
  * Text-based graphical interface

### Terminal App

You can find the terminal by:

::::{tab-set} 
:::{tab-item} MacOS

Manually looking through your files for it
* Open `launchpad` -> Look for `terminal`.
* Open `Finder` -> `Applications/` -> `terminal`

* Search 
* Press `cmd`+`[space]`. Then type `terminal`.
:::
:::{tab-item} Windows
To use a Linux terminal on a Windows machine, you will need to install the Ubuntu application. This will differ if you're using Windows 10 or Windows 11.

I will write this up, but here is my reference.

[Install Ubuntu on WSL](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview)
:::
::::

:::{sidebar} 
:class: important
Notation and pre-defined commands will depend on your {term}`shell`!
:::

Users can send instructions to the computer by running `commands` 
  * Like GUIs, these instructions can be for manipulating files or running software
  * Often, a `command` is an abbreviation of common words (copy = `cp`, move = `mv`)
  
***

## Shell

::::{margin} 
:::{important}
Essentially, one type of CLI, the choice in `shell` programs dictates how:
  * Interact with the operating system
  * Workflow and control of the program
  * Command line combinations
:::
::::

### Shells Provides Structure

When the user opens `terminal`, a {term}`shell` session is immediately started
* These contain the current state, or {term}`environment`, of the shell. 
  * Only one session per shell 

* They are programs that understand and executes the {term}`command` from the user
  * Interprets human language (text input) into computer language (output)
  
* Several `shells` are available
  * Examples: `csh`, `zsh` 

**I mainly use the `bash` shell.**


An {term}`interactive prompt`, is when the user runs each "command" line by line 
  * Combining all lines into 1 file is called a "shell {term}`script`."


### Commands in Command Line

In a `shell`, you have `commands`, which are computer processes that are predefined by the chosen `shell` structure.

`commands` are typed, and interpreted by the computer to run some process. In other words, the user provides some `input` in the form of commands, and the computer `output` the result. The `output` is printed on your screen, and does not change. To update the `output`, you will need to run the command again!

Some `commands` can be modified by `options` which follow the command with a hyphen `-`.

Some `commmands` take in arguments, which is the `input` for the commands

#### Helpful Commands

Common ones are:

1. {term}`pwd`
2. {term}`echo`
3. {term}`cat`
4. {term}`tail`
5. {term}`head`
6. {term}`touch`.


## Navigating

### Objective
* Understand the general layout of the :term:`terminal`, and how it differs from GUIs like `Finder` 
* Find where your start, currently are, and can go in :term:`terminal`
* See files/folders 
* Difference between absolute and relative paths


### Where are we?

The first command to learn is :term:`pwd` which stands for Print Working Directory. A lot of commands are named as an abbreviation of a word or words describing them. :term:`pwd` tells you what your current or present working directory (folder) is.

```bash
pwd
```

Navigating the terminal will rely on you being in the right location. As you're moving around directories, it is easy to lose track of where you are. Use this command often to remind yourself where you presently are.



### What Files/Folders are Here?

````{margin}
```{tip}
:class: dropdown

More examples can be found here: [](../commands/ls.md)
```
````

We know where we are, but we want to know what files/folders are here! To do this, use `ls`, short for list.

```bash
ls
```

### How to make a new folder/directory?

::::{margin}
:::{tip}
:class: dropdown

Avoid using spaces when choosing filenames/folders. For example, for a folder called "amino acids", ather than using a space, you should use an underscore (`mkdir amino_acids`) or hyphen (`mkdir amino-acids`).

More examples can be found here: [](../commands/mkdir.md)
:::
::::

Let's make a new folder/directory, so our current working directory isn't so lonely. To do this, use the :term:`mkdir` command, short for make directory. This command takes an argument, i.e. the new folder name!

The syntax is `mkdir [argument]` or in other words `mkdir [new folder name]`. Here, I will use the bracket notations (`[]`) to imply this is some sort of input given by you. We can start by making a new folder called `test/`.

```bash
mkdir test
```


## Enter/Exit Folders

We can enter a folder with the :term:`cd` command, short for change directories. This command takes an argument, following the syntax `cd [argument]` or in other words `cd [folder name]`.

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

```bash
pwd
```


## What are Paths?

There are 2 types of paths we can use

1. Absolute
   1. The path to files/folders/programs relative to the root directory (i.e. `/home`, `/Users`, etc.)
2. Relative. 
   1. The path to files/folders/programs is relative to where _you_ are (i.e. current working directory)
   
Whenever we refer to a file or directory we are using one of these paths.

To begin with, we have to understand that the file system under linux is a hierarchical structure. At the very top of the structure is what's called the root directory. It is denoted by a single slash (`/`). It has subdirectories, they have subdirectories and so on. Files may reside in any of these directories.

# File Management

## Copy, Move, Rename, & Delete Files

Your mouse does not work in the way you expect when in the CLI.

Using the terminal means you need to learn how to communicate with the computer through __commands__.

Tasks like:

- Copying files/folders (:term:`cp`)
- Moving files/folders (:term:`mv`)
- Renaming files/folders (:term:`mv`)
- Deleting files/folders (:term:`rm`)

Need to be typed!


## Copying

To copy files, you use the command, :term:`cp`, where you include the file or folder you want to copy followed by the path you want the copy to go!

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


## Moving & Renaming

Yes. They are the same command, :term:`mv`. The notation for :term:`mv` is the same as :term:`cp`!

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


## Deleting

```{caution}

This command is permanent. There is no trash can to recover your files from.....

```

:term:`rm` is used to delete files/folders, and is written like :term:`cp` and :term:`mv`

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
