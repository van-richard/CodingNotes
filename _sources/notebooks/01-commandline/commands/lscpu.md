---
keywords: core, thread, cpu, count
---

# `lscpu`

`lscpu` displays CPU architecture, core, and thread information.

## Common `lscpu` usage

On Linux, show the number of cores and threads:

```bash
lscpu | grep -E 'Core|Thread'
```

- core: physical processing unit
- thread: logical execution path
    - can use simultaneous multithreading (SMT)
    - Intel calls SMT "hyper-threading," allowing each core to run 2 threads concurrently
