# Jupyter Notebooks

The Jupyter Notebook App is a server-client application that allows editing and running notebook documents via a web browser. The Jupyter Notebook App can be executed on a local desktop requiring no internet access (as described in this document) or can be installed on a remote server and accessed through the internet.

In addition to displaying/editing/running notebook documents, the Jupyter Notebook App has a “Dashboard” (Notebook Dashboard), a “control panel” showing local files and allowing to open notebook documents or shutting down their kernels.

## What are Kernels?

A notebook kernel is a “computational engine” that executes the code contained in a Notebook document. The IPython kernel, referenced in this guide, executes python code. Kernels for many other languages exist (official kernels).

When you open a Notebook document, the associated kernel is automatically launched. When the notebook is executed (either cell-by-cell or with menu Cell -> Run All), the kernel performs the computation and produces the results. Depending on the type of computations, the kernel may consume significant CPU and RAM. Note that the RAM is not released until the kernel is shut-down.

## Switch Conda Environments

You can switch conda environments within `jupyterlab` if you install `nb_conda_kernels` into your `base` Conda environment.

- `jupyterlab` package is for running notebooks.
- `nb_conda_kernels` package allows you to switch Conda environments directly in the web browser.

```bash
conda install -c conda-forge jupyterlab nb_conda_kernels
```

To run jupyter, type:

```bash
jupyter lab
```

This should open your brower automatically. If not, copy the first or second link.
