---
keywords: core, thread, cpu, count
---

# lscpu 

core: physical processing unit
thread: logical execution path 
    - can use simultaneous multithreading (SMT)
    - Intel calls SMT "hyper-threading," allowing each core to run 2 threads concurrently

find threads/core count on machine, with:

```bash On linux/mac, run:
lscpu | grep -E 'Core|Thread'
```

