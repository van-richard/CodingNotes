# `sed` - tranform/replace text!

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
