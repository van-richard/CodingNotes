# `tar` - compress/uncompress files

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
