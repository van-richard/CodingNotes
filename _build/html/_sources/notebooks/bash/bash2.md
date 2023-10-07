# Bash

## Overview

First line of the script is the shebang which tells the system how to execute the script: 

[Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))

### Comments

Comments start with `#`. The `shebang` is also a comment.

```bash
#!/usr/bin/bash
```

### Command

Each command starts on a new line, or after a semicolon:

```bash
echo "This is the first command"; echo "This is the second command"
```

### Variables

Declaring a variable looks like this:

```bash
variable="Some string"
```

**But not like this:**

```bash
variable = "Some string" # => returns error "variable: command not found"
```

Bash will decide that `variable` is a command it must execute and give an error because it can't be found.

Nor like this:

```bash
variable= "Some string" # => returns error: "Some string: command not found"
```

Bash will decide that "Some string" is a command it must execute and give an error because it can't be found. In this case the "variable=" part is seen as a variable assignment valid only for the scope of the "Some string" command. 

Using the variable:

```bash
echo "$variable" # => Some string
echo '$variable' # => $variable
```

When you use a variable itself — assign it, export it, or else — you write its name without `$`. If you want to use the variable's value, you should use `$`. 

Note that `'` (single quote) won't expand the variables! You can write variable without surrounding quotes but it's not recommended.

Parameter expansion `${...}`:

```bash
echo "${variable}" # => Some string
```

This is a simple usage of parameter expansion such as two examples above. Parameter expansion gets a value from a variable. It "expands" or prints the value. During the expansion time the value or parameter can be modified. Below are other modifications that add onto this expansion.

String substitution in variables:

```bash
echo "${variable/Some/A}" # => A string
```

This will substitute the first occurrence of "Some" with "A".

Substring from a variable:

```bash
length=7
echo "${variable:0:length}" # => Some string
```

This will return only the first 7 characters of the value

```bash
echo "${variable: -5}" # => string
```

This will return the last 5 characters (note the space before -5). The space before minus is mandatory here. String length:

```bash
echo "${#variable}" # => 11
```

Indirect expansion:

```bash
other_variable="variable"
echo ${!other_variable} # => Some string
```

This will expand the value of `other_variable`.

The default value for variable:

```bash
echo "${foo:-"DefaultValueIfFooIsMissingOrEmpty"}"
# => DefaultValueIfFooIsMissingOrEmpty
```

This works for null (`foo=`) and empty string (`foo=""`); zero (`foo=0`) returns `0`. Note that it only returns default value and doesn't change variable value.

### Arrays

Declare an array with 6 elements:

```bash
array=(one two three four five six)
```

Print the first element:

```bash
echo "${array[0]}" # => "one"
```

Print all elements:

```bash
echo "${array[@]}" # => "one two three four five six"
```

Print the number of elements:

```bash
echo "${#array[@]}" # => "6"
```

Print the number of characters in third element

```bash
echo "${#array[2]}" # => "5"
```

Print 2 elements starting from fourth:

```bash
echo "${array[@]:3:2}" # => "four five"
```

Print all elements each of them on new line.

```bash
for item in "${array[@]}"; do
    echo "$item"
done
```

### Standard In/Out/Err

Results (stdout) of the previous command can be passed as input (stdin) to the next command using a pipe `|`. Commands chained in this way are called a "pipeline", and are run concurrently. The `grep` command filters the input with provided patterns. That's how we can list .txt files in the current directory:

```bash
ls -l | grep "\.txt"
```

## Advanced

### Start Up Files

When `Bash` is invoked as an interactive login shell, or as a non-interactive shell with the --login option, it first reads and executes commands from the file `/etc/profile`, if that file exists. After reading that file, it looks for `~/.bash_profile`, `~/.bash_login`, and `~/.profile`, in that order, and reads and executes commands from the first one that exists and is readable. The --noprofile option may be used when the shell is started to inhibit this behavior.  

When an interactive shell that is not a login shell is started, `Bash` reads and executes commands from `~/.bashrc`, if that file exists. This may be inhibited by using the --norc option. The --rcfile file option will force `Bash` to read and execute commands from file instead of `~/.bashrc`.

#### ~/.bash_profile

My `~/.bash_profile` contains:

```bash
export BASH_SILENCE_DEPRECATION_WARNING=1
export CLICOLOR=1
export LSCOLORS=ExGxCxDxCxegedabagaced 

if [ -f ~/.bashrc ]; then 
    source ~/.bashrc 
fi  

eval "$(/opt/homebrew/bin/brew shellenv)"  
```

#### ~/.bashrc

From the bash man page:

>"When bash is invoked as an interactive login shell, or as a non-interactive shell with the `--login` option, it first reads and executes commands from the file `/etc/profile`, if that file exists. After reading that file, it looks for `~/.bash_profile`, `~/.bash_login`, and `~/.profile`, in that order, and reads and executes commands from the first one that exists and is readable. The `--noprofile` option can be used when the shell is started to inhibit this behavior."

When an interactive shell that is not a login shell is started, bash reads and executes commands from `~/.bashrc`, if that file exists. This can be inhibited by using the `--norc` option. The `--rcfile` file option will force bash to read and execute commands from file instead of `~/.bashrc`

Every new terminal window/tab that you open will load `.bashrc`

On a brand new user account, none of these files will exist, they can be created with any suitable text editor that is capable of creating plain text files with unix style (`LF`) line endings. Save them into your home folder (`~/`)

My `~/.bashrc` file contains:

```bash
if [ -e ~/.bash_aliases ]; then 
    source ~/.bash_aliases 
fi 

export PATH="/opt/homebrew/opt/gnu-sed/libexec/gnubin:$PATH"
```

#### ~/.bash_aliases

`Bash` aliases are essentially shortcuts that can save you from having to remember long commands and eliminate a great deal of typing when you are working on the command line

My `~/.bash_aliases` file contains:


```bash
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
```




```python

```
