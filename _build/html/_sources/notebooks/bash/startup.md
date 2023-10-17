---
orphan: true
---

# Start Up Files

When `bash` is invoked as an interactive login shell, or as a non-interactive shell with the --login option, it first reads and executes commands from the file `/etc/profile`, if that file exists. After reading that file, it looks for `~/.bash_profile`, `~/.bash_login`, and `~/.profile`, in that order, and reads and executes commands from the first one that exists and is readable. The --noprofile option may be used when the shell is started to inhibit this behavior.  

When an interactive shell that is not a login shell is started, `bash` reads and executes commands from `~/.bashrc`, if that file exists. This may be inhibited by using the --norc option. The --rcfile file option will force `bash` to read and execute commands from file instead of `~/.bashrc`.

Example of my `~/.bash_profile`:

:::{code-block} bash
:caption: ~/.bash_profile
:linenos:

export BASH_SILENCE_DEPRECATION_WARNING=1
export CLICOLOR=1
export LSCOLORS=ExGxCxDxCxegedabagaced 

if [ -f ~/.bashrc ]; then 
    source ~/.bashrc 
fi  

eval "$(/opt/homebrew/bin/brew shellenv)"  
:::

From the bash man page:

>"When bash is invoked as an interactive login shell, or as a non-interactive shell with the `--login` option, it first reads and executes commands from the file `/etc/profile`, if that file exists. After reading that file, it looks for `~/.bash_profile`, `~/.bash_login`, and `~/.profile`, in that order, and reads and executes commands from the first one that exists and is readable. The `--noprofile` option can be used when the shell is started to inhibit this behavior."

When an interactive shell that is not a login shell is started, bash reads and executes commands from `~/.bashrc`, if that file exists. This can be inhibited by using the `--norc` option. The `--rcfile` file option will force bash to read and execute commands from file instead of `~/.bashrc`

Every new terminal window/tab that you open will load `.bashrc`

On a brand new user account, none of these files will exist, they can be created with any suitable text editor that is capable of creating plain text files with unix style (`LF`) line endings. Save them into your home folder (`~/`)

Example of my `~/.bashrc` file contains:

:::{code-block} bash
:caption: ~/.bashrc
:linenos:

if [ -e ~/.bash_aliases ]; then 
    source ~/.bash_aliases 
fi 

export PATH="/opt/homebrew/opt/gnu-sed/libexec/gnubin:$PATH"
::

Aliases are shortcuts that can save you from having to remember long commands and eliminate a great deal of typing when you are working on the command line

Example of my `~/.bash_aliases` file:

:::{code-block} bash
:caption: ~/.bash_aliases
:linenos:

# aliases
alias myconda='eval "$(/Users/van/Programs/miniforge3/bin/conda shell.bash hook)"; conda activate'

# software
alias chimera="/Applications/Chimera.app/Contents/MacOS/chimera"
alias chimerax="/Applications/ChimeraX-1.5.app/Contents/MacOS/ChimeraX"
alias iqmol="/Applications/IQmol.app/Contents/MacOS/IQmol" 
alias vmd="/Applications/VMD\ 1.9.4.app/Contents/MacOS/startup.command"  

# rsync 
alias rsyncnc='rsync -auvim --include "*/" --include "*/*nc" --exclude "*/*.*" --exclude "*/sinr*" --exclude "*/*/" --exclude "*/*" --exclude "*/*.out" --exclude "*/*.err"' 
alias rsynccv='rsync -auvim --include "*/" --include "*/*cv" --exclude "*/*.*" --exclude "*/sinr*" --exclude "*/*/" --exclude "*/*" --exclude "*/*.out" --exclude "*/*.err"' 
alias rsyncqm='rsync -auvim --exclude "*/qmhub/" --exclude "*/qmhub/*/" --exclude "*/qmhub/*/*"' 
:::