selector_to_html = {"a[href=\"#tutorial\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tutorial<a class=\"headerlink\" href=\"#tutorial\" title=\"Permalink to this heading\">#</a></h2><p>Adapted from their webpage.</p><p>In a <code class=\"docutils literal notranslate\"><span class=\"pre\">conda</span></code> environment, install the package, <code class=\"docutils literal notranslate\"><span class=\"pre\">jupyter-book</span></code></p>", "a[href=\"#create-websites\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Create Websites<a class=\"headerlink\" href=\"#create-websites\" title=\"Permalink to this heading\">#</a></h1><p>Requires a GitHub account.</p>", "a[href=\"#jupyter-book\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Jupyter Book<a class=\"headerlink\" href=\"#jupyter-book\" title=\"Permalink to this heading\">#</a></h2><p>Design a website using jupyter notebooks</p><p><a class=\"reference external\" href=\"https://jupyterbook.org/en/stable/intro.html\">Jupyter-Book</a></p>"}
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
