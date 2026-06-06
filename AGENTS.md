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

Treat `_build/` and `jupyter_execute/` as generated artifacts. Do not commit generated output.

## Working Practices

- Before committing, run:

  ```bash
  sphinx-build ./ _build/html
  ```

- Do not rewrite educational content aggressively. Preserve the author's voice.
- Prefer small, focused commits.
- Ask before deleting notebooks or assets.

## Media embedding rules

- Do not embed local repo media using GitHub `blob/...` URLs.
- Use local relative paths into `static/` because `conf.py` sets `html_static_path = ['static/']`.
- Use HTML `<video controls playsinline preload="metadata">` blocks for videos.
- Prefer `.mp4` encoded with H.264/yuv420p for browser compatibility.
- Keep captions when converting MyST `{figure}` video blocks to HTML `<figure>` blocks.
- After media changes, run `sphinx-build -n --keep-going ./ _build/html`.
