## Lmod `module`

```{margin}
More information:

[lmod.readthedocs.io](https://lmod.readthedocs.io/en/latest/030_installing.html?highlight=bash%20variable)

Avoid using `module` on login node!
```

- Lmod is a Lua based module system that easily handles the `MODULEPATH` Hierarchical problem
  
- Environment Modules provide a convenient way to dynamically change the users’ environment through `modulefiles`

- This includes easily adding or removing directories to the `PATH` environment variable

- `modulefiles` for Library packages provide environment variables that specify where the library and header files can be found

- Don't forget you can do `help` or `man` to get more information as well
  
```bash
module help 
man module 
```

## Uses of `module`

```bash
# List all compilers & softwares modules
module list     

# Only list compatable modules based on current environment 
module av       
module available 

# Search modules based on STRING 
module spider STRING

# Using module
module load MODULE/NAME

# Remove specific module
module unload MODULE/NAME

# Cleanse environment
module purge # Does not clean `env` variables..

# Return to default module configuration
module restore
```

