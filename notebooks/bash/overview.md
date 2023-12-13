# bash Shell

First line of the script is the shebang which tells the system how to execute the script: 

[Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))

## Comments

Comments start with `#`. The `shebang` is also a comment.

```bash
#!/usr/bin/bash
```

## Command

Each command starts on a new line, or after a semicolon:

```bash
echo "This is the first command"; echo "This is the second command"
```

## Variables

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

## Arrays

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

## Standard In/Out/Err

Results (stdout) of the previous command can be passed as input (stdin) to the next command using a pipe `|`. Commands chained in this way are called a "pipeline", and are run concurrently. The `grep` command filters the input with provided patterns. That's how we can list .txt files in the current directory:

```bash
ls -l | grep "\.txt"
```

## Built-in Variables

There are some useful built-in variables, like:

:::{code} bash
echo "Last program's return value: $?"
echo "Script's PID: $$"
echo "Number of arguments passed to script: $#"
echo "All arguments passed to script: $@"
echo "Script's arguments separated into different variables: $1 $2..."
:::

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