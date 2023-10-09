---
orphan: true
---

# Navigating in Terminal

First we need to find your terminal!! Then, I want to introduce the general layout within the command line interface. Our goal here is to understand these concepts:

* The current working directory 
* List content avalable "here" `.`
* Create new folders
* Absolute and relative paths 

````{note}
 We will use the terminal on your local computer.
 In the margin is a screen capture of my terminal running the command. There will be some differences (files/folders) between your terminal and mine.

````


## Where are we?

The first command to learn is `pwd` which stands for Print Working Directory. A lot of commands are named as an abbreviation of a word or words describing them. `pwd` tells you what your current or present working directory (folder) is.

```bash
pwd
```

Navigating the terminal will rely on you being in the right location. As you're moving around directories, it is easy to lose track of where you are. Use this command often to remind yourself where you presently are.



## What is Here?

````{margin}
```{tip}
:class: dropdown
More examples can be found here: 
[](../commands/ls.md)
```
````

We know where we are, but we want to know what files/folders are here! To do this, use `ls`, short for list.

```bash
ls
```



## How to make a new folder/directory?

````{margin}
```{tip}
:class: dropdown
More examples can be found here: 
[](../commands/mkdir.md)
```
````

Let's make a new folder/directory so our current working directory isn't so lonely. To do this, use the `mkdir` command, short for make directory. This command takes an argument, i.e. the new folder name!

The syntax is `mkdir [arugment]` or in other words `mkdir [new folder name]`. Here, I will use the braket notations (`[]`) to imply this is some sort of input given by you. We can start by making a new folder called `test/`.

```bash
mkdir test
```

```{note}
Avoid using spaces in filenames and/or folders. This causes some extra key strokes which we will touch on later! An example would be making a folder called "amino acids". Rather than using a space, use an underscore (`mkdir amino_acids`) or hyphen (`mkdir amino-acids`).
```

***

## Go in/out of Directories

````{margin}
```{tip}
:class: dropdown
More examples can be found here: 
[](../commands/cd.md)
```
````

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

```bash
pwd
```


## What are Paths?

There are 2 types of paths we can use

1. Absolute
2. Relative. 
   
Whenever we refer to a file or directory we are using one of these paths.

To begin with, we have to understand that the file system under linux is a hierarchical structure. At the very top of the structure is what's called the root directory. It is denoted by a single slash (`/`). It has subdirectories, they have subdirectories and so on. Files may reside in any of these directories.

```{important}
Absolute paths specify a location of a file/folder in relation to the root directory `/`

Relative paths specify a location file/folder  in relation to where *you* currently are in the system.
```
