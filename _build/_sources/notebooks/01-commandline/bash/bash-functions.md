# Functions

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
