# `Conda`

- Programs that manages other programs, specificaly for python

- A forver power struggle between slight changes in package/library versions

- Without `conda`, you will definitely bloat your computer with 3 different versions of python 

- Very important to have:
    
    1. Virtiual envionrments  - virtual partition which isolates different paackages that might otherwise confict
    2. `jupyter lab` / `jupyter notebook` - interactive interface for python. very helpful for beginnners



## Installing [Miniforge3](https://github.com/conda-forge/miniforge)


In the repository:

1. Scroll down to the `Download` section
2. Find your operating system (OS)
3. Click the link
4. Copy the downloaded file to your `~/Programs` folder
   1. Make one if you haven't! (`mkdir -p ~/Programs`)
5. Run the installation script with `bash <Miniforge-link>.sh`
6. Choose your installation directory as `~/Programs/miniforge3`

By default, you start in the `base` environment, which looks like:

```bash
(base) username@computer:~ username$
```

