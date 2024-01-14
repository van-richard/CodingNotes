<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`trap` - signalled execution](#trap---signalled-execution)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# `trap` - signalled execution

The `trap` command allows you to execute a command whenever your script receives a signal. Here, `trap` will execute `rm` if it receives any of the three listed signals.

```bash
trap "rm $TEMP_FILE; exit" SIGHUP SIGINT SIGTERM
```
