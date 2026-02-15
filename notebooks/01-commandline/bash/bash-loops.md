# Loops

- Suppose you have been doing a repetitive task running the same set of commands for a project
- For example, you need to create 100 new directories numbered from 0 to 99
  - You would need to run, `mkdir 0`, `mkdir 1`,.., all the way to `mkdir 99`
- In this case, you can use something called `bash` loops
  - Loops iterate a set of commands for as many arguments given
    - The command in the previous scenario would be `mkdir NUMBER`, and arguments would be `NUMBER` (1 through 99)

## Example: `for` Loops

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

## Example: `while` Loops

```bash
while [ true ]
do
    echo "loop body here..."
    break
done
# => loop body here...
```

