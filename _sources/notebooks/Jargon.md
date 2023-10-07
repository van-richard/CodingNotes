# Learn the Jargon

## What is a Computer?

<!-- My early concept of coding was the typical *hacker-man* we see in movies. You know.. The guy sitting in a dark room with a million monitors, each screen with an absurd amount of code running.. and the green text.. This concept made me dislike the idea of sitting at a computer all day to crunch numbers..  

But then I learned about the field of **computational chemistry!** *You can do chemistry on a computer?? Whaaa???*

Prior to joining the Shao Lab, I had ZERO programming experience (I barely knew how to send emails, lol). -->


<span style="font-size:1.5em;">**Unix/Linux Operating Systems**</span> 

- Like Windows and MacOS, Linux is just a operating system
- It is open-source, allowing the user the freedom to run any program, study the how the program works, make changes to the program, redistribute copies of modiciation
- Several distributions available for different applications
    - Example: Linux Mint, Debian, Ubuntu, or Fedora
- Linux is also used on supercomputing clusters, some distrubtions are:
    - Red Hat Enterprise Linux, Ubuntu Server, CentOS, or SUSE Enterprise Linux

- Unix is very similar to Linux
    - Made up of kernals, shell, etc. 
- But this is not open-source, you need a license for use
    - Example: MacOS is a Unix system


<span style="font-size:1.5em;">**Terminal and the Command Line**</span>

- The terminal is a text-based interface to your computer, some examples applications are:
    - On MacOS, you have the `Terminal` app that is already installed on your computer
    - On Windows, you have a similar interface called `Command Prompt`

- The command line is how you interact with the computer by inputting lines of text called "command-lines" into the terminal
- Also called, Command Line Interface (CLI), this is probably different to what you're use to which are Graphical User Interfaces (GUI)
    - With a GUI, you can use your mouse to move around
    - In CLI, you need to type in commands to do things!

```{note} 
**Windows Users:** Depending on your version of Windows, you will need to activate WSL and install the `Ubuntu` app.
```


<span style="font-size:1.5em;">**`Bash` Shell**</span>

- `Bash` is Unix shell and command language
- Most of us in lab use this language in our CLI/terminal
    - But there are other shells available like `zsh`, `tcsh`, or `csh`
- Each language use slightly different functions and scripting notation


## What are Supercomputers?

- Supercomputers, or high-performance computing (HPC) centers, is where we perform most of our work
- In Oklahoma, we have access to:
    1. [Oscer, OU's supercomputer](https://www.ou.edu/oscer)
        - Also called Schooner
    2. [Pete, OSU's supercomputer](https://hpcc.okstate.edu/pete-supercomputer.html)

- `ssh` is a command we run to access the supercomputers over the internet

- Slurm is a cluster management system used on high-performance clusters (HPC) 
- Running jobs on the supercomputer requires some Slurm commands
    - Slurm scripts have additional informatin for the Slurm scheduler

## Git/Github

**Git** is a free and open source version control system designed to manage coding projects.

**[GitHub](https://www.github.com)** is a web-based hosting serice for git repositories (a place where you store data, files, resources). 

Aside from manging coding projects with `git`, we use Github to store our presentations, papers, and other lab management things. *Github is just a website, whereas `git` is a command in your `Bash` terminal.* Git will come with its own set of commands which we will discuss [here](https://van-richard.github.io/CodingNotes/notebooks/commandline/git.html).


## Visualization Softwares

There are a plethora of molecular visualization softwares you can find on the internet. Depending on your focus, there will only be a handful which you will use in your day to day. I use the following:

- [IQmol](http://iqmol.org)
- [ChimeraX](https://www.cgl.ucsf.edu/chimerax/) 
- [VMD]( https://www.ks.uiuc.edu/Research/vmd/)
- [ChemDraw](https://connect.revvitysignals.com/sitesubscription/Gallery.aspx)
- [Schrodinger Maestro](https://www.schrodinger.com/products/maestro)


## What is Python? Conda?

- Python is a programming language.
- Conda is a software used to manage Python.


<span style="font-size:1.5em;">**Python**</span>

Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python is widely used in various fields, including web development (this website), data analysis, artificial intelligence, scientific computing, and more.

Some reasons why Python has grown in popularity include:

1. **Readability:** Python's syntax is designed to be clear and easy to read, which makes it an excellent choice for beginners and experienced programmers alike. It uses indentation (whitespace) to define code blocks, which enforces a consistent and clean code style.
2. **Interpreted:** Python is an interpreted language, meaning that you don't need to compile your code before running it. The Python interpreter reads your code line by line and executes it, which can speed up development.
3. **Extensive Standard Library:** Python comes with a vast standard library that provides modules and functions for a wide range of tasks. This library simplifies many common programming tasks, such as working with files, networking, and more.
4. **Object-Oriented:** Python supports object-oriented programming (OOP) principles, including classes and inheritance, making it suitable for building complex and organized software projects.
5. **Community and Ecosystem:** Python has a large and active community of developers who contribute to its growth. This community has created a vast ecosystem of third-party libraries and frameworks, such as Django for web development, NumPy for scientific computing, and TensorFlow for machine learning.
6. **Open Source:** Python is open-source, which means it's freely available, and its source code can be modified and redistributed, fostering collaboration and innovation.

There are many other reasons, but for the laymen, this pretty much sums it up!

<span style="font-size:1.5em;">**Conda**</span>

When I say "Conda," what I mean are the programs, **Anaconda, Miniconda, and/or Miniforge**. They are all software tools and distributions commonly used for *managing and working with Python.* 

```{note}
Conda implies the use of Anaconda, Miniconda, and/or Miniforge.
```

1. **Anaconda:** A comprehensive Python distribution that comes with a wide range of pre-installed data science and scientific computing packages. It's designed to simplify the installation and management of packages commonly used in data analysis, machine learning, and scientific research.

    **Features:**
    - A graphical user interface called Anaconda Navigator for managing packages and environments.
    - A package manager called conda for installing, updating, and managing Python packages and environments.
    - Includes popular packages like NumPy, Pandas, Matplotlib, scikit-learn, Jupyter Notebook, and many others.
    - Cross-platform (works on Windows, macOS, and Linux).
    
    Anaconda is suitable for users who want a hassle-free way to set up a Python environment with all the necessary data science tools and libraries.

2. **Miniconda:** A minimalistic version of Anaconda. Instead of including a large set of pre-installed packages, Miniconda provides you with a minimal Python and conda installation. You can then choose which packages to install according to your specific needs.

   **Features:**
    - Lightweight and customizable.
    - Allows you to create and manage isolated Python environments using conda.
    - Provides the flexibility to build a custom environment tailored to your project requirements.
    
    Miniconda is ideal for users who want more control over their Python environment and prefer to install packages individually based on their project's requirements.

4. **Miniforge:** Similar to Miniconda but is specifically designed for users who want to work with the conda package manager and Python environments in a simplified and lightweight way. It's built on top of Conda-Forge, a community-driven collection of conda packages.

   **Features:**
    - Simplifies the installation and management of Python packages using conda.
    - Provides a streamlined and efficient package management experience.
    - Compatible with Conda-Forge packages, which often include a broader range of community-contributed packages compared to Anaconda's default repository.

    Miniforge is suitable for users who prefer a minimalistic conda setup and access to a broad range of community-contributed packages.

```{note}
I recommend installing Miniforge!
```


## What is computational chemistry?

What is it? What do we do? What are the questions, and insights?

