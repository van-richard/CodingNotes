---
keywords: load, amber, pete
---

# Loading Amber 

- To help minimize confusion (and keep me from inhibiting your workflow), I decided to transition from `source ...file.sh` to `module load program` 

- Stable program compilations are separated from those under development, and allows  packages loaded independently 

- For example, to see softwares available on Pete run

```bash
module av # For more information, run 'man module'
```

## Custom `modules` 

- I prepared several configuration files so Amber, Qchem, and several conda environments can be loaded 

- To include my files in your shell environment, add the following to `~/.bashrc`

```bash
# Prepends directory path of module files to MODULEPATH environment
source /home/van/env.sh 
```

```{note} For example
1. Use text editor (vim/nano), and write `source /home/van/env.sh` at the end of `~/.bashrc`

2. Use`echo` to append this line to `~/.bashrc`
`echo "source /home/van/env.sh" >> ~/.bashrc`
```

- Every time a new shell is initiated, `~/.bashrc` will be read and configure the shell environment with the custom modules 

    - These changes will take effect in the next login

    - To enable it for the current session, you can also manually, `source ~/.bashrc` 

- Run `module av` to see the new modules 


## Softwares, Examples, and Conda Environments

- Modules in `/home/van/ccats/softwares` contain independent packages

- 

