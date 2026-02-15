---
keywords: cat, bash
---

# `cat` - print input to standard output

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
