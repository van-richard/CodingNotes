# Create Websites

## Jupyter Book

### Background

Design a website using jupyter notebooks

[Jupyter-Book](https://jupyterbook.org/en/stable/intro.html)

### Tutorial

Adapted from the webpage.

In a `conda` environment, install the package, `jupyter-book`

```bash
conda install -c conda-forge jupyter-book
```

Create a new book

```bash
jupyter-book create mynewbook/
```

Building the book

```bash
jupyter-book build mybookname/
```

To publish the book to a Github repository, I use ghp-import.

```bash
pip install ghp-import
ghp-import -n -p -f _build/html
```

Then

```bash
git add .
git commit -a 
git push
```

I automated this with a `build.sh` script:

```bash
#!/bin/bash

# Import aliases
shopt -s expand_aliases 
source ~/.bash_aliases  

# Build book and push changes
myconda jupyter-book build . --all 
ghp-import -n -p -f _build/html 
```

To publish you book online, you need to host it on a public repository on Github.

1. First, log in to GitHub, then go to the “create a new repository” page: new
2. Next, give your online repository a name and a description. Make your repository public and do not initialize it with a README file, then click “Create repository”.
3. Now, clone the (currently empty) online repository to a location on your local computer. You can do this via the command line with:

```bash
git clone https://github.com/<my-org>/<my-repository-name> 
```

4. Copy all of your book files and folders into this newly cloned repository. For example, if you created your book locally with `jupyter-book create mylocalbook` and your new repository is called ”myonlinebook,“ you could do this via the command line with:

```bash
cp -r mylocalbook/* myonlinebook/ 
```

5. Now you need to sync your local and remote (i.e., online) repositories. You can do this with the following commands: 

```bash
bash build.sh
```
6. Update the settings for your GitHub pages site:
   - Use the `gh-pages` branch to host your website.
   - Choose root directory `/` if you’re building the book in it’s own repository. Choose `/docs` directory if you’re building documentation with jupyter-book. From the main branch of your book’s root directory (which should contain the `_build/html` folder



```python

```


```python

```
