# Overview

oh dear lord

---

- Amber suite contains:
    - AmberTools contains several independently developed packages for preparing, running, and analyzing MD simulations
    - Amber enables faster simulations (on parallel CPU or GPU hardware)
    - Essentially, they differ in licensing

```{note}
AmberTools can be installed in a `conda` environment, while Amber will require the source code

For more information, please read the bible (Amber reference manual) !!!
```

## Download source files
- Visit (https://ambermd.org/)[] and head to the `Download Amber` section
- For AmberTools
    - Go to option 2 
    - Enter name and institution
    - Click `Download`

- Amber
    - Go to non-commercial use
    - Enter name and institution
    - Click `Download`

## Copy files to cluster 

- Names will depend on version (year)
    - `amber[VERSION].tar.bz2`
    - `ambertools[VERSION].tar.bz2`

```bash
# For now the copy will be in the home directory
scp /path/to/download/amber[VERSION].tar.bz2 van@hostname:/home/van/          
scp /path/to/download/ambertools[VERSION].tar.bz2 van@hostname:/home/van/
```

