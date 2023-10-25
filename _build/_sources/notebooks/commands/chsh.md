---
orphan: true
---

# chsh - change shell

If you don't know which shell you're using, type the following command in your terminal:

```bash
echo $SHELL 
```

** Change Shell to Bash **

The output should be `/bin/bash` printed on your screen. If it's not, run the following command:

```bash
chsh -s /bin/bash
```
You should now be in a `bash` shell
