---
orphan: true
---

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

