# Installing 

I use miniforge, so this tutorial will guide you through installing [Miniforge](https://github.com/conda-forge/miniforge). 

In the repository:

1. Scroll down to the `Download` section
2. Find your operating system (OS)
3. Click the link
4. Copy the downloaded file to your `~/Programs` folder
   1. Make one if you haven't! (`mkdir -p ~/Programs`)
5. Run the installation script with `bash <Miniforge-link>.sh`
6. Choose your installation directory as `~/Programs/miniforge3`

By default, conda will starts in your `base` environment. Generally I don't install very many packages here.

```bash
(base) username@computer:~ username$
```

```{tip}
If you would like to follow my set up for conda, including environments, follow this tutorial:

[](./myenv)
```