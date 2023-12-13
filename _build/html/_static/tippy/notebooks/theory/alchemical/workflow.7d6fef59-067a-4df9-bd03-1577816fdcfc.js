selector_to_html = {"a[href=\"#setup-amber-files-for-pmemd\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Setup Amber Files for <code class=\"docutils literal notranslate\"><span class=\"pre\">pmemd</span></code><a class=\"headerlink\" href=\"#setup-amber-files-for-pmemd\" title=\"Permalink to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">pmemd</span></code> requires the single topology file approach.</p>", "a[href=\"#code\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Code<a class=\"headerlink\" href=\"#code\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#simulation-workflows\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Simulation Workflows<a class=\"headerlink\" href=\"#simulation-workflows\" title=\"Permalink to this heading\">#</a></h1><h2>Setup Amber Files for <code class=\"docutils literal notranslate\"><span class=\"pre\">pmemd</span></code><a class=\"headerlink\" href=\"#setup-amber-files-for-pmemd\" title=\"Permalink to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">pmemd</span></code> requires the single topology file approach.</p>", "a[href=\"#free-energy-setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Free Energy Setup<a class=\"headerlink\" href=\"#free-energy-setup\" title=\"Permalink to this heading\">#</a></h2>"}
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
