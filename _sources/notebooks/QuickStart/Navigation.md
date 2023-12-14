# Navigating

## Objective
* Understand the general layout of the :term:`terminal`, and how it differs from GUIs like `Finder` 
* Find where your start, currently are, and can go in :term:`terminal`
* See files/folders 
* Difference between absolute and relative paths


## Where are we?

The first command to learn is :term:`pwd` which stands for Print Working Directory. A lot of commands are named as an abbreviation of a word or words describing them. :term:`pwd` tells you what your current or present working directory (folder) is.

```bash
pwd
```

Navigating the terminal will rely on you being in the right location. As you're moving around directories, it is easy to lose track of where you are. Use this command often to remind yourself where you presently are.



## What Files/Folders are Here?

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



## How to make a new folder/directory?

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

