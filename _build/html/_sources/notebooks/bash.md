---
myst:
  enable_extensions: ["deflist"]
---

# More `bash`

## Built-in Variables

There are some useful built-in variables, like:

```bash
echo "Last program's return value: $?"
echo "Script's PID: $$"
echo "Number of arguments passed to script: $#"
echo "All arguments passed to script: $@"
echo "Script's arguments separated into different variables: $1 $2..."
```

## Brace Expansion 

`{...}` are used to generate arbitrary strings:

```bash
echo {1..10} # => 1 2 3 4 5 6 7 8 9 10
echo {a..z} # => a b c d e f g h i j k l m n o p q r s t u v w x y z
```

This will output the range from the start value to the end value. Note that you can't use variables here:

```bash
from=1
to=10
echo {$from..$to} # => {$from..$to}
```

Now that we know how to echo and use variables, let's learn some of the other basics of Bash!

If you get too much output in your terminal, or from a script, the command `clear` clears your screen:

```bash
clear
```

`Ctrl-L` also works for clearing output.

Reading a value from input:

```bash
echo "What's your name?"
read name
```

Note that we didn't need to declare a new variable.

```bash
echo "Hello, $name!"
```

## Conditional Execution

```bash
echo "Always executed" || echo "Only executed if first command fails"
# => Always executed
echo "Always executed" && echo "Only executed if first command does NOT fail"
# => Always executed
# => Only executed if first command does NOT fail
```

# Ampersand

A single ampersand `&` after a command runs it in the background. A background command's output is printed to the terminal, but it cannot read from the input.

```bash
sleep 30 &
```

List background jobs

```bash
jobs # => [1]+  Running                 sleep 30 &
```

Bring the background job to the foreground

```bash
fg
```

`Ctrl-C` to kill the process, or `Ctrl-Z` to pause it. Resume a background process after it has been paused with `Ctrl-Z`

```bash
bg
```

Kill job number 2

```bash
kill %2
```

`%1`, `%2`, etc. can be used for `fg` and `bg` as well

Redefine command `ping` as alias to send only 5 packets

## Expressions

Expressions are denoted with the following format:

```bash
echo $(( 10 + 5 )) # => 15
```

## Redirect Commands

You can redirect command input and output (stdin, stdout, and stderr) using "redirection operators". Unlike a pipe, which passes output to a command, a redirection operator has a command's input come from a file or stream, or sends its output to a file or stream.

Read from stdin until `^EOF$` and overwrite hello.py with the lines between `EOF` (which are called a "here document"):

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

Variables will be expanded if the first "EOF" is not quoted. Run the hello.py Python script with various stdin, stdout, and stderr redirections:

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

Commands can be substituted within other commands using `$( ):` The following command displays the number of files and directories in the current directory.

```bash
echo "There are $(ls | wc -l) items here."
```

Bash uses a `case` statement that works similarly to switch in Java and C++:

```bash
case "$Variable" in
    # List patterns for the conditions you want to meet
    0) echo "There is a zero.";;
    1) echo "There is a one.";;
    *) echo "It is not null.";;  # match everything
esac
```

## Looping

`for` loops iterate for as many arguments given:

```bash
#The contents of $Variable is printed three times.
for Variable in {1..3}
do
    echo "$Variable"
done
# => 1
# => 2
# => 3
```

Or write it the "traditional for loop" way:

```bash
for ((a=1; a <= 3; a++))
do
    echo $a
done
# => 1
# => 2
# => 3
```

They can also be used to act on files. This will run the command `cat` on file1 and file2.

```bash
for Variable in file1 file2
do
    cat "$Variable"
done
```

.. or the output from a command, this will `cat` the output from `ls`.

```bash
for Output in $(ls)
do
    cat "$Output"
done
```

Bash can also accept patterns, like this to `cat` all the Markdown files in current directory

```bash
for Output in ./*.markdown
do
    cat "$Output"
done
```

`while` loop:

```bash
while [ true ]
do
    echo "loop body here..."
    break
done
# => loop body here...
```

## Functions

You can also define functions

```
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

More than 9 arguments are also possible by using braces, e.g. `${10}, ${11}, ...` or simply

```bash
bar ()
{
    echo "Another way to declare functions!"
    return 0
}
```

Call the function `bar` with no arguments:

```bash
bar # => Another way to declare functions!
```

Calling your function

```bash
foo "My name is" $Name
```
