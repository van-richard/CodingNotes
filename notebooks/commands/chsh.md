<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [orphan: true](#orphan-true)
- [chsh - change shell](#chsh---change-shell)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
