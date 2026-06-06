# Repository Guidelines

This repository is a Sphinx/Jupyter Book documentation site for computational chemistry and coding notes.

## Source Files

Treat the following paths as authored source:

- `notebooks/`
- `index.md`
- `_toc.yml`
- `conf.py`
- `assets/`
- `static/`
- `_static/`

Treat `_build/` and `jupyter_execute/` as generated artifacts. Do not commit generated output.

## Working Practices

- Before committing, run:

  ```bash
  sphinx-build ./ _build/html
  ```

- Do not rewrite educational content aggressively. Preserve the author's voice.
- Prefer small, focused commits.
- Ask before deleting notebooks or assets.
