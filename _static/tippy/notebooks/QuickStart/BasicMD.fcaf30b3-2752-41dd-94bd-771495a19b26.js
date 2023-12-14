selector_to_html = {"a[href=\"#classical-mechanics\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>Classical Mechanics<a class=\"headerlink\" href=\"#classical-mechanics\" title=\"Permalink to this heading\">#</a></h2><p>Molecular dynamic (MD) simulations use classical Newtonian mechanics to describe the motions of atoms and molecules.</p><p>These simulations involve:</p>", "a[href=\"#briefly-molecular-dynamics\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5. </span>Briefly, Molecular Dynamics<a class=\"headerlink\" href=\"#briefly-molecular-dynamics\" title=\"Permalink to this heading\">#</a></h1><p>The general steps of molecular dynamics (MD) simulations are shown below, consider the following questions for each step:</p>"}
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
