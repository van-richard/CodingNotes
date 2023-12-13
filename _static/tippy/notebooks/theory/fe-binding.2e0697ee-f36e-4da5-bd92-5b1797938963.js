selector_to_html = {"a[href=\"#simulating-binding-affinity\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Simulating Binding Affinity<a class=\"headerlink\" href=\"#simulating-binding-affinity\" title=\"Permalink to this heading\">#</a></h2><p>Using atomistic molecular modelling to predict protein-ligand binding is a growing area in many fields (drug discovery). When calculations are sufficiently fast and accurate, we can anticipate significant reduction in time and cost for the early stages of drug discovery and/or trial-and-error experimentation.</p><p>We have several methods to predict protein-ligand binding affinity, such as:</p>", "a[href=\"#modelling-binding-affinity\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Modelling Binding Affinity<a class=\"headerlink\" href=\"#modelling-binding-affinity\" title=\"Permalink to this heading\">#</a></h1><p>The binding affinity (energy of binding) between a ligand, <span class=\"math notranslate nohighlight\">\\(L\\)</span>, to a receptor.</p>"}
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
