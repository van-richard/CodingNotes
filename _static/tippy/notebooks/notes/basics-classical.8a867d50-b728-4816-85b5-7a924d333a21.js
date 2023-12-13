selector_to_html = {"a[href=\"#potential-energy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Potential Energy<a class=\"headerlink\" href=\"#potential-energy\" title=\"Permalink to this heading\">#</a></h2><p>Energy of a system is composed of bonded and nonbonded interactions:</p>", "a[href=\"#force-fields\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Force Fields<a class=\"headerlink\" href=\"#force-fields\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#classical-molecular-dynamics\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Classical Molecular Dynamics<a class=\"headerlink\" href=\"#classical-molecular-dynamics\" title=\"Permalink to this heading\">#</a></h1><h2>Potential Energy<a class=\"headerlink\" href=\"#potential-energy\" title=\"Permalink to this heading\">#</a></h2><p>Energy of a system is composed of bonded and nonbonded interactions:</p>"}
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
