selector_to_html = {"a[href=\"#conda\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Conda<a class=\"headerlink\" href=\"#conda\" title=\"Permalink to this heading\">#</a></h2><p>Program for managing <code class=\"docutils literal notranslate\"><span class=\"pre\">python</span></code> packages.</p>", "a[href=\"#python\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Python<a class=\"headerlink\" href=\"#python\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#python-conda\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Python &amp; Conda<a class=\"headerlink\" href=\"#python-conda\" title=\"Permalink to this heading\">#</a></h1><h2>Python<a class=\"headerlink\" href=\"#python\" title=\"Permalink to this heading\">#</a></h2>"}
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
