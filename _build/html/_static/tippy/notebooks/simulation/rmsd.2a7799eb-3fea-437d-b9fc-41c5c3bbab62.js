selector_to_html = {"a[href=\"#pairwise-root-mean-square-deviation\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pairwise Root Mean Square Deviation<a class=\"headerlink\" href=\"#pairwise-root-mean-square-deviation\" title=\"Permalink to this heading\">#</a></h2><p>2D-RMSD</p><p><em>Example</em></p>", "a[href=\"#rmsd\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">RMSD<a class=\"headerlink\" href=\"#rmsd\" title=\"Permalink to this heading\">#</a></h1><p>The Root Mean Square Deviation (RMSD) is a measure of the average distance between atoms in a superimposed structure. You will see this analysis used to judge convergence of an MD simulations in just about every MD paper. The equation is</p>"}
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
