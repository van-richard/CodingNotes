#!/usr/bin/env bash

set -euo pipefail

# Some pages include files from amberassist. Update it when it is available,
# but allow the documentation build to continue when it is not checked out.
if [[ -d "_external/amberassist/.git" ]]; then
    git -C _external/amberassist pull
else
    printf '%s\n' \
        "Optional dependency _external/amberassist is missing; skipping its update." \
        "Pages that include files from amberassist may produce build warnings."
fi

# Local build: generate the HTML site in _build/html.
sphinx-build ./ _build/html

# Deploy: replace the gh-pages branch with the build and push it to GitHub.
printf '%s\n' "Deploying _build/html to GitHub Pages with ghp-import..."
ghp-import -n -p -f _build/html
