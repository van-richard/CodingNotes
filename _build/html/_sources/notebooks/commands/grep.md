---
orphan: true
---

# `grep` - search for pattern in file or folders

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
