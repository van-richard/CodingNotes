# `setfacl` - change file/folder permissions 

Give specific user permission to read/write/execute a folder.

`setfacl` is short for set File ACL (Access Control List). This sets permissions for specific users, without changing the owndership of the directory.

```bash
setfacl -m u:username:rwx myfolder
```

Helpful options.

| Option | Meaning |
| :----- | :------ |
| \-m, \--modify=acl        | modify the current ACL(s) of file(s) |
| \-M, \--modify-file=file  | read ACL entries to modify from file |
| \-x, \--remove=acl        | remove entries from the ACL(s) of file(s) |
| \-b, \--remove-all        | remove all extended ACL entries |
| \-R, \--recursive         | recurse into subdirectories |
