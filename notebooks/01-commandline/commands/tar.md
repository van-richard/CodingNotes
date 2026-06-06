# `tar`

`tar` creates and extracts archive files.

## Common `tar` usage

`tar` stands for tape archive. Archive files collect multiple files into one file for easier portability and storage.

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
