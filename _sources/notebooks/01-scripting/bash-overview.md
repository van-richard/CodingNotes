# Scripting with `bash`

- So far, we have used `bash` to interact with the CLI by typing single line commands
- To automate repetitive tasks, we can combine those single lines commands to a file called a `bash` script
- Typically, I name these scripts using the file format, `.sh` (shell) or `.in` (input)



## Redirect Commands to a File with `EOF`

- You can redirect command input and output (i.e., stdin, stdout, and stderr) with "redirection operators"
- Unlike `|`, which passes the standard output (stdout) to the next command, a redirection operator has a command's input come from a file or stream, or sends its output to a file or stream

Example: Read from stdin until `^EOF$` and overwrite `hello.py` with the lines between `EOF` (which are called a "here document"):

```bash
cat > hello.py << EOF
#!/usr/bin/env python
from __future__ import print_function
import sys

print("#stdout", file=sys.stdout)
print("#stderr", file=sys.stderr)

for line in sys.stdin:
    print(line, file=sys.stdout)
EOF
```

- Variables will be expanded if the first "EOF" is not quoted

Example: Run the `hello.py`  script with various stdin, stdout, and stderr redirections:

```bash
python hello.py < "input.in" # pass input.in as input to the script

python hello.py > "output.out" # redirect output from the script to output.out

python hello.py 2> "error.err" # redirect error output to error.err

python hello.py > "output-and-error.log" 2>&1 # redirect both output and errors to output-and-error.log
# &1 means file descriptor 1 (stdout), so 2>&1 redirects stderr (2) to the current
# destination of stdout (1), which has been redirected to output-and-error.log.

python hello.py > /dev/null 2>&1
# redirect all output and errors to the black hole, /dev/null, i.e., no output

# The output error will overwrite the file if it exists,
# if you want to append instead, use ">>":
python hello.py >> "output.out" 2>> "error.err"

# Overwrite output.out, append to error.err, and count lines:
info bash 'Basic Shell Features' 'Redirections' > output.out 2>> error.err
wc -l output.out error.err

# Run a command and print its file descriptor (e.g. /dev/fd/123)
# see: man fd
echo <(echo "#helloworld")

# Overwrite output.out with "#helloworld":
cat > output.out <(echo "#helloworld")
echo "#helloworld" > output.out
echo "#helloworld" | cat > output.out
echo "#helloworld" | tee output.out >/dev/null
```

## Use Standard Output of Command in a Variable

- Commands can be substituted within other commands or used in variables
  - 2 notations can be used:
    1. ``VAR=`COMMAND` ``
    2. `VAR=$(COMMAND)`
- Both notations declares the variable, `VAR`, to be the output of some, `COMMAND` (standard output of whatever command needed)

````{admonition} Personally, I prefer the second notation (2)

It is much easier to read, `VAR=$(COMMAND)`, than closing with the "`" 
````
  
```bash
# Declare variable, VAR, to be the stdout of the command, echo, which prints "Hello World!"
VAR=$(echo "Hello World")
echo $VAR # > Hello World

# Use $VAR from previous, in new variable, N. Pipe stdout to command, tr, which transform spaces " " to new lines "\n"
N=$(echo ${VAR} | awk '{print $2}')
echo $N # > World
```
*Example: Displays the number of files and directories in the current directory.*

```bash
# ls, list items in directory and pipe the output as input, wc -l, to count total number of lines
echo "There are $(ls | wc -l) items here." 
```

## Automating Repetitive Tasks with `bash` Loops

- Suppose you have been doing a repetitive task running the same set of commands for a project
- For example, you need to create 100 new directories numbered from 0 to 99
  - You would need to run, `mkdir 0`, `mkdir 1`,.., all the way to `mkdir 99`
- In this case, you can use something called `bash` loops
  - Loops iterate a set of commands for as many arguments given
    - The command in the previous scenario would be `mkdir NUMBER`, and arguments would be `NUMBER` (1 through 99)

### Example: `for` Loops

```bash
# On command line, type each line below and hit enter
mkdir test
cd test
for NUMBER in {1..99}; do # hit enter, NUMBER is the list 1 to 99 
    mkdir -p $NUMBER # yours might not be tabbed, hit enter, to repeat make directory command
done # end for loop, hit enter
```

- `ls` and you should see 100 folders made
- Cleanup by `cd ../; rm -r test`

*Example: "traditional for loop" way*

```bash
for ((a=1; a <= 3; a++))
do
    echo $a
done
# => 1
# => 2
# => 3
```

- They can also be used to act on files. This will run the command `cat` on file1 and file2.

```bash
for Variable in file1 file2
do
    cat "$Variable"
done
```

- or the output from a command, this will `cat` the output from `ls`.

```bash
for Output in $(ls)
do
    cat "$Output"
done
```

- can also accept patterns, like this to `cat` all the Markdown files in current directory

```bash
for Output in ./*.markdown
do
    cat "$Output"
done
```

### Example: `while` Loops

```bash
while [ true ]
do
    echo "loop body here..."
    break
done
# => loop body here...
```

## Functions

- You can also define functions

```bash
# Definition:
function foo ()
{
    echo "Arguments work just like script arguments: $@"
    echo "And: $1 $2..."
    echo "This is a function"
    returnValue=0    # Variable values can be returned
    return $returnValue
}
# Call the function `foo` with two arguments, arg1 and arg2:
foo arg1 arg2
# => Arguments work just like script arguments: arg1 arg2
# => And: arg1 arg2...
# => This is a function
```

- More than 9 arguments are also possible by using braces, e.g. `${10}, ${11}, ...` or simply

```bash
bar ()
{
    echo "Another way to declare functions!"
    return 0
}
```

- Call the function `bar` with no arguments:

```bash
bar # => Another way to declare functions!
```

- Calling your function

```bash
foo "My name is" $Name
```

## Adding Choices (Options) to Script with `case` Statements

- Simplify complex conditionals options for multiple different choices
- Using the `case` statement instead of nested `if` statements will help your scripts to be readable and easier to maintain
  
```bash
# General format starts with keyword, case, followed by some, EXPRESSION, i.e. string/variable
case EXPRESSION in

    PATTERN_1)  # some pattern terminated by, ')'
        STATEMENTS # if EXPRESSION == PATTERN_1 do this
    ;; # end 

     PATTERN_2) # different pattern terminated by, ')'
        STATEMENTS # if EXPRESSION == PATTERN_2 do this
    ;; #end

    PATTERN_N) # another pattern
        STATEMENTS 
    ;; #end

    *) # default patter
        STATEMENTS # usually "Usage:"
    ;; # end
esac # Ends with esac keyword (case backwards)
```

*Example: Script Checking File Formats in Current Directory*

- Use `vi` to make a new script called, `fileformat.sh`
- Copy the following lines to the new script using Insert Mode
- Save the file with `:wq`
- Run script by typing `bash fileformat.sh` in the terminal
  
```bash
#!/bin/bash

# For each item in stdout of, ls, command
for file in $(ls); do
    Extension=${file##*.} # Assign to variable, Extension
    case "$Extension" in
    sh) 
        echo "Shell script: $file"
    ;;
    md) 
        echo "A markdown file: $file"
    ;;
    png) 
        echo "PNG image file: $file"
    ;;
    txt) 
        echo "A text file: $file"
    ;;
    zip) 
        echo "An archive: $file"
    ;;
    conf) 
        echo "A configuration file: $file"
    ;;
    py) 
        echo "A Python script: $file"
    ;;
    *) 
        echo "Unknown file type: $file"
    ;;
    esac
done
```