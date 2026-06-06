# CodingNotes

CodingNotes is a Sphinx and Jupyter Book documentation site containing practical notes on command-line tools, HPC, Python, molecular simulation, and scientific software.

Published site: <https://van-richard.github.io/CodingNotes/>

## Local Setup

Clone the repository:

```bash
git clone https://github.com/van-richard/CodingNotes.git
cd CodingNotes
```

### Conda

```bash
conda create --name codingnotes python pip
conda activate codingnotes
python -m pip install --upgrade pip
```

### venv

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
```

## Install Requirements

```bash
python -m pip install -r requirements.txt
```

To deploy with `build.sh`, also install `ghp-import`:

```bash
python -m pip install ghp-import
```

## Build

Build the HTML documentation locally:

```bash
sphinx-build . _build/html
```

Open `_build/html/index.html` in a browser to inspect the result.

## Deploy

The deployment script builds the site and publishes `_build/html` to GitHub Pages with `ghp-import`:

```bash
./build.sh
```

Before running it, activate the project environment and ensure the working tree is ready to publish. The script also updates `_external/amberassist` with `git pull` and pushes the generated site, so it should be treated as a deployment command rather than a local build command.

## Repository Layout

- `index.md`: site landing page
- `notebooks/`: authored Markdown pages and Jupyter notebooks
- `static/` and `_static/`: images, videos, scripts, styles, and other static resources
- `assets/`: custom CSS, JavaScript, and HTML theme templates
- `_toc.yml`: external table-of-contents configuration
- `conf.py`: Sphinx configuration
- `requirements.txt`: Python documentation dependencies
- `build.sh`: build and GitHub Pages deployment script
- `_build/`: generated documentation output
- `jupyter_execute/`: generated notebook execution artifacts

## Maintenance Notes

- Keep authored content and source assets tracked in Git.
- Do not commit `_build/`, `jupyter_execute/`, doctrees, notebook checkpoints, or local virtual environments.
- Update `_toc.yml` when adding, moving, or removing documentation pages.
- Run a clean local build before deployment and review all Sphinx warnings.
- Verify external files referenced from `_external/amberassist` are available before building pages that use `literalinclude`.
