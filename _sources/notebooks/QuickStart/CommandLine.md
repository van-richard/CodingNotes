---
orphan: true
---

# Terminal & Command Line

{term}`Terminal` is just a text-based interface to your computer. In this environment, you can type commands, manipulate files, execute programs, and open documents. There are many varieties you can choose from, but:

* For MacOS users, the "Terminal" app is already pre-installed.

* For Windows users, you have the "Command Prompt" or "Windows Powershell" applications pre-installed.

The {term}`command line` (or command line interface (CLI)) is the just the interface that processes commands in the form of lines of text. The user (you or me) typically interacts with the {term}`terminal` via CLI.

When you first open the terminal, you will be in a {term}`shell` (or command line shell). The purpose of this is to provide the *structure* to the commands we input. There are many types of {term}`unix`/{term}`linux` based shells, such as {term}`bash`, zsh, csh, etc. I will later introduce, {term}`bash`, but the purpose of {term}`bash` include flow control constructs to combine commands. In addition to typing commands at an interactive
 prompt, we can write scripts (e.g., small pieces of code used to automate repetitive tasks).

```{figure} ../../_static/images/terminal-window.png
---
align: center
---
The terminal window on my MacBook. The standard format starts with the name of your computer, followed by a colob, your username, and then a dollar sign. The next grey box is where you input commands.
```
 

## **Exercise:** Open the Your Terminal!

The type of terminal application will depend on your operating system (MacOS or Windows). 

I use MacOS, so I included those examples.

To start using the terminal, follow these instructions for your operating system:

````{tab-set}
```{tab-item} MacOS
You computer should already have the "terminal" application preinstalled. There are 2 way to open the application:

1. Press `cmd`+`[space]`. Then type `terminal`.
2. Click the `launchpad` application. Search for `terminal`.

Congratulations! You opened the terminal!
```

```{tab-item} Windows
To use a Linux terminal on a Windows machine, you will need to install the Ubuntu application. This will differ if you're using Windows 10 or Windows 11.

I will write this up, but here is my reference.

[Install Ubuntu on WSL](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview)
```
````

## Summary 

```{Glossary}
terminal
    Interface or application that allows users to interact with computers, typically via a keyboard and display.

shell
    A shell is a user interface for accessing the services of an operating system.

        Examples: Bash, fish, zsh, ksh, sh, tsch, Power Shell, pwsh

command line
    The interface that allows a user to type a command (which is expressed as a sequence of characters — typically a command name followed by some parameters) and then press the Return key to execute that command.
```
