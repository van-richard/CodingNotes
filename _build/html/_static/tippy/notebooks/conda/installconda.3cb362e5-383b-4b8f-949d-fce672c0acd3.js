selector_to_html = {"a[href=\"myenv.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">My recommended Conda Setup<a class=\"headerlink\" href=\"#my-recommended-conda-setup\" title=\"Permalink to this heading\">#</a></h1><h2>My List<a class=\"headerlink\" href=\"#my-list\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#installing-miniforge\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Installing Miniforge<a class=\"headerlink\" href=\"#installing-miniforge\" title=\"Permalink to this heading\">#</a></h1><p>I use miniforge, so this tutorial will guide you through installing <a class=\"reference external\" href=\"https://github.com/conda-forge/miniforge\">Miniforge</a>.</p><p>In the repository:</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
