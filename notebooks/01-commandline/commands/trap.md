# `trap`

`trap` runs a command when a shell script receives a selected signal.

## Common `trap` usage

Here, `trap` executes `rm` if it receives any of the three listed signals:

```bash
trap "rm $TEMP_FILE; exit" SIGHUP SIGINT SIGTERM
```
