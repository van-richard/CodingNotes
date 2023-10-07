# `trap` - signalled execution

The `trap` command allows you to execute a command whenever your script receives a signal. Here, `trap` will execute `rm` if it receives any of the three listed signals.

```bash
trap "rm $TEMP_FILE; exit" SIGHUP SIGINT SIGTERM
```
