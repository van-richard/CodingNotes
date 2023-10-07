# Unix/Linux Commands

[{term}`def<awk>`]

Manipulation of text.

Treating a text file, were each space is a column, you can print the columns with:

```bash
awk '{print $1}' file
```

Where `$1` is the first column. Index starts at 1.

Separator

You can chose the field separator with, `-F`. This example choses the comma as the separator, and print the 5th column:

```bash
awk -F ',' '{print $5} file'
```

`awk` can do math. Average a column by:

```bash
awk '{ total += $2; count++ } END { print total/count }' file
```

Add to value in column

```bash
awk '{print $1 + 1}' file
```

## cat

Print files to stdout

```bash
cat file.txt
```

We can also read the file using `cat`:

```bash
Contents=$(cat file.txt)
```

- "\n" prints a new line character
- "-e" to interpret the new line escape characters as escape characters

```bash
echo -e "START OF FILE\n$Contents\nEND OF FILE"
```

## cd 

Change directories

Since bash works in the context of a current directory, you might want to run your command in some other directory. We have cd for changing location:

Change to home directory

```bash
cd ~ 
```

or

```bash
cd     
```

Go back one directory

```bash
cd ../
```

Go to specific directory

```bash
cd /home/username/Documents  
```

Go the the previous directory you were in

```bash
cd -   
```

## cp 

Copy files/folders.

To copy file1 to file2 (new name):

```bash
cp [FILE_1] [FILE_2]
```

Copy folders:

```bash
cp -r [FOLDER_1] [FOLDER_2]
```

Use `cp` to copy files or directories from one place to another.

- `cp` creates NEW versions of the sources, so editing the copy won't affect the original (and vice versa).

**Note that it will overwrite the destination if it already exists.**

```bash
cp srcFile.txt clone.txt
```

or

```bash
cp -r srcDirectory/ dst/ # recursively copy
```

Copying can be down with paths

```bash
cp -r /path/to/dir_1 /path/to/dir_2
```

## cut

Prints only the first column before the `,` character

```bash
cut -d ',' -f 1 file.txt
```

## grep 

Searching for Pattern in File/Folders

Example

```bash
grep [OPTIONS] 'PATTERN' FILE
```

Search pattern ignoring case

```bash
grep -i PATTERN FILE
```

Search pattern and get NEXT NUMBER of lines

```bash
grep -A NUMBER PATTERN FILE
```

Search pattern and get previous NUMBER of  lines

```bash
grep -B NUMBER PATTERN FILE
```

Print to stdout all lines of file.txt which match some regex. The example prints lines which begin with "foo" and end in "bar"

```bash
grep "^foo.*bar$" file.txt
```

Pass the option "-c" to instead print the number of lines matching the regex

```bash
grep -c "^foo.*bar$" file.txt
```

Other useful options are:

```bash
grep -r "^foo.*bar$" someDir/ # recursively `grep`
grep -n "^foo.*bar$" file.txt # give line numbers
grep -rI "^foo.*bar$" someDir/ # recursively `grep`, but ignore binary files
```

Perform the same initial search, but filter out the lines containing "baz"

```bash
grep "^foo.*bar$" file.txt | grep -v "baz"
```

If you literally want to search for the string, and not the regex, use `fgrep` (or `grep -F`)

```bash
fgrep "foobar" file.txt
```

## head

Print the first 10 lines of `file.txt`.

```bash
head file.txt
```

Print X-number of lines of `file.txt`.

```bash
head -n X file.txt # Where x is a number 
```

## help

Read Bash shell built-ins documentation with the bash `help` built-in:

```bash
help
help help
help for
help return
help source
help .
```

## info

Read info documentation with `info` (`?` for help)

```bash
apropos info | grep '^info.*('
man info
info info
info 5 info
```

## ls 

List information about files/folders 

The default is to list the files in the current directory. Adding options can change how the list is organized.

```bash
ls [option] [directory]
```

List directories

```bash
ls -d
```

Long list format 

```bash
ls -l
```

Sort by time (newest first)

```bash
ls -t
```

List files with file size in kilobytes/megabytes/gigabytes

```bash
ls -h
```

Sort alphabetically

```bash
ls -X
```

## man

Get documentation for various functions with `man`

```bash
man grep # documentation for grep

man sed # documentation for sed 
```

## mkdir

Create new directories.

```bash
mkdir myNewDir
```

The `-p` flag causes new intermediate directories to be created as necessary.

```bash
mkdir -p myNewDir/with/intermediate/directories
```

If the intermediate directories didn't already exist, running the above command without the `-p` flag would return an error

## mv 

Move files or directories from one place to another.

`mv` is similar to `cp`, but it deletes the source.
`mv` is also useful for renaming files!

```bash
mv source.txt new.txt
```

## sed 

Tranform/replace text!

We can replace some text, INPUT, with another text, OUTPUT, in a file with `sed`. The notation is:

```bash
sed 's/INPUT/OUTPUT/' file
```

Create a new file with replacement

```bash
sed 's/INPUT/OUTPUT/' file > newfile
```

Replace occurances within the file

```bash
sed -i 's/INPUT/OUTPUT/' file
```

Replace all occurances

```bash
sed 's/INPUT/OUTPUT/g' file
```

Delete lines containing pattern

```bash
sed '/INPUT/d' file
```

Variables with sed

```bash
sed "s/INPUT/${VARIABLE}/" file
```

Multiple inputs

```bash
sed -e 's/INPUT1/OUTPUT1/;s/INPUT2/OUTPUT2/;s/INPUT3/OUTPUT3/' file
```

## seq 

Print a sequence of numbers. Default increment of 1.

```bash
seq FIRST INCREMENT LAST
```

This returns a sequence of numbers between 0 and 10.

```bash
seq 0 10
```

Sequence with Placeholders

```bash
seq -w 0 40
```

## sort

Print `file.txt` lines in sorted order

```bash
sort file.txt
```

## setfacl 

Give specific user permission to read/write/execute a folder.

`setfacl` is short for set File ACL (Access Control List). This sets permissions for specific users, without changing the owndership of the directory.

```bash
setfacl -m u:username:rwx myfolder
```

Options 

Helpful options.

| Option | Meaning |
| :----- | :------ |
| \-m, \--modify=acl        | modify the current ACL(s) of file(s) |
| \-M, \--modify-file=file  | read ACL entries to modify from file |
| \-x, \--remove=acl        | remove entries from the ACL(s) of file(s) |
| \-b, \--remove-all        | remove all extended ACL entries |
| \-R, \--recursive         | recurse into subdirectories |

## sudo

`sudo` is used to perform commands as the superuser usually it will ask interactively the password of superuser

```bash
NAME1=$(whoami)
NAME2=$(sudo whoami)
echo "Was $NAME1, then became more powerful $NAME2"
```

## tail

Print the last 10 lines of `file.txt`.

```bash
tail file.txt
```

Print X-number of lines of `file.txt`.

```bash
tail -n X file.txt # Where x is a number 
```

## tar

`tar` stands for tape archive.

We can use the `tar` command to create, compressed, or uncompressed Archive files, and also maintain/modify them.

Archive files are used to collect multiple data files together into a single file for easier portability and storage, or simply to compress files to use less storage space. 

Example of opening `tar` files:

```bash
tar xvf file.tar
```

Example of creating `tar` files:

```bash
tar cvf file.tar file
```

`gzip` compression on the `tar` Archive

```bash
tar cvzf folder.tar.gz folder # Creating tar

tar xvzf folder.tar.gz # Extract tar 
```

`bzip2` compression on `tar` Archive

```bash
tar cfvj folder.tar.bz2 folder # Creating tar

tar xvjf folder.tar.bz2 # Extract tar
```

## trap

The `trap` command allows you to execute a command whenever your script receives a signal. Here, `trap` will execute `rm` if it receives any of the three listed signals.

```bash
trap "rm $TEMP_FILE; exit" SIGHUP SIGINT SIGTERM
```


```python

```
