# Terminal, Shell, & Bash
## Terminal

:::{figure} https://raw.githubusercontent.com/van-richard/CodingNotes/main/_static/gif/terminal-header.gif
---
align: center
name: terminal-header
---

Command line on MacOS `terminal`, where, (1) `echo` will return `"[`some text`]"` as an output, (2) `echo` to output "2 + 2", the `|` (pipe) takes this as input for the next command, `bc -l` (calculator), (3) `echo` prints the variable, `$SHELL`, which points to the program `/bin/bash`, and (4) cowboy.
:::

Example of the `terminal` on a Macbook ({numref}`terminal-header`). The line you are working on is noted with the `$`. The format of this line is: computer name, `;` , username, and then `$` . `Bash` commands are typed by line, and ran by hitting the `[enter]` key.

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


## Commands in Command Line

In a `shell`, you have `commands`, which are computer processes that are predefined by the chosen `shell` structure.

`commands` are typed, and interpreted by the computer to run some process. In other words, the user provides some `input` in the form of commands, and the computer `output` the result. The `output` is printed on your screen, and does not change. To update the `output`, you will need to run the command again!

Some `commands` can be modified by `options` which follow the command with a hyphen `-`.

Some `commmands` take in arguments, which is the `input` for the commands

### Helpful Commands

Common ones are:

1. {term}`pwd`
2. {term}`echo`
3. {term}`cat`
4. {term}`tail`
5. {term}`head`
6. {term}`touch`.


