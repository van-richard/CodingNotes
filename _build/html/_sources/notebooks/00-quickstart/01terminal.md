# Terminal, Shell, & Bash

:::{figure} https://raw.githubusercontent.com/van-richard/CodingNotes/main/_static/gif/terminal-header.gif
---
figwidth: 75%
align: center
name: terminal-header
---

Example of command line in the `terminal` application of MacOS. The line you are working on is noted with the `$`. The format of this line is: computer name, `;` , username, and then `$`. `Bash` commands are typed by line, and ran by hitting the `[enter]` key.where, (1) :term:`echo` will return `"[`some text`]"` as an output, (2) :term:`echo` to output "2 + 2", the `|` (pipe) takes this as input for the next command, `bc -l` (calculator), (3) `echo` prints the variable, `$SHELL`, which points to the program `/bin/bash`, and (4) cowboy.
:::

In this section, we'll delve into the basics of the terminal, its role, and why it's crucial in computational research.

Approaches to "using" computer programs:
  1) A common way makes use of a Graphical User Interface (GUI)
    - Programs that use a mouse and keyboard with on-screen menus, buttons, sliders, etc.
    - Relies on the user to click on-screen options for specific instructions
  2) Alternatively, computer programs can be operated via the Command Line Interface (CLI)
    - Uses text-based instructions, only requiring input from the keyboard
    - Often used for computing many files or automating repetitive tasks.


## Wtf is a Terminal?

Terminal is a graphical-based application, providing access to the CLI
  - This is preinstalled on MacOS as the `terminal` app
  - Windows has variations called `Command Prompt` and `PowerShell`  

Using command line is a fundamental tool in computational research, offering advantages like:
  - More control in running applications
  - Faster management across operating systems (OS)
  - Ability to automate repetitive tasks (scripting)

### Example: Opening the Terminal App

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

Several data analysis tools and computing servers require proficiency with the command line. It may have a steep learning curve and be a bit confusing initially, but once you get the hang of it. Automation will be E Z!
  - Notation and pre-defined commands will depend on your shell!

Users can send instructions to the computer by running `commands` 
  - Like GUIs, these instructions can be for manipulating files or running software
  - Often, a `command` is an abbreviation of common words (copy = `cp`, move = `mv`)

---

## $SHELL

::::{sidebar}
:::{important}
Essentially, a type of CLI, the choice in `shell` programs dictates how you:
- Interact with the operating system
- Manage workflow and program control
- Combine command line instructions
:::
::::

When you open `terminal`, a `shell` session starts immediately, containing the current state or `environment` 
  - Only one session per shell exists

Shells are programs that understand and execute user commands:
  - interpreting human language (text input) into computer language (output)
  - Various `shells` are available, such as `csh`, `zsh`

**I use `bash` shell, so my notes will only cover `bash`!**

An `interactive prompt` is when users run each "command" line by line. 

:::{note}

Later, we will see that combining multiple command lines into one file is called a "shell `script`."
:::

### Example: Bash Shell Commands

In a `shell`, predefined `commands` are computer processes. 
  - `Commands` are typed and interpreted by the computer to run processes
  - Users provide `input` in the form of commands, and the computer `outputs` the result
  - To update the `output`, run the command again.

Some `commands` can be modified by `options` following the command with a hyphen `-`. Others take `arguments` as input. Look at the following examples:

1. `pwd`
2. `echo`
3. `touch`
3. `cat`
4. `tail`
5. `head`

---

## Navigating

- Understand the general layout of the `terminal` 
- Compare differences from GUIs like `Finder` or `File Explorer`
- Find your start, current position, and navigate in `terminal`.
- View files/folders.
- Differentiate between absolute and relative paths.

### Starting Location! 

The default location when you first login is called your "home" directory


### Where Are We?

Use `pwd` (Print Working Directory) to find your current working directory (folder).

```bash
pwd
```

Navigate in the terminal, relying on being in the right location. As you move around directories, use `pwd` often to remind yourself where you are.

### What Files/Folders are Here?

Use `ls` (List) to see what files/folders are in the current location.

```bash
ls
```

### How to Make a New Folder/Directory?

Use `mkdir` (Make Directory) to create a new folder.

```bash
mkdir [new folder name]
```

For example, create a folder called `test`.

```bash
mkdir test
```

### Enter/Exit Folders

Use `cd` (Change Directory) to enter a folder.

```bash
cd [folder name]
```

Check your current location with `pwd`.

```bash
pwd
```

To go back one directory, use `cd ../`. To return to your "home" directory:

```bash
cd    # Option 1
cd ~  # Option 2
```

Check your current location again to ensure you're back home.

```bash
pwd
```

## What are Paths?

Two types of paths:
1. Absolute - relative to the root directory (e.g., `/home`, `/Users`).
2. Relative - relative to your current working directory.

File or directory references use one of these paths.

---

## File Management

- How to copy, move, rename, and/or delete files?
- Tasks like copying, moving, renaming, and deleting files/folders (`cp`, `mv`, `rm`) need to be typed!

### Copy using `cp` 

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

## Moving & Renaming with `mv`

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

## Deleting Files and/or Folders with `rm`

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