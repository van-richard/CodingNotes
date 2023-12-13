selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\" style=\"width: 100%\">\n<img alt=\"../../_images/fe-alchem-thermo-cycle.png\" src=\"../../_images/fe-alchem-thermo-cycle.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 6 </span><span class=\"caption-text\">Example of thermodynamic cycle from the paper.</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#alchemical-free-energy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Alchemical Free Energy<a class=\"headerlink\" href=\"#alchemical-free-energy\" title=\"Permalink to this heading\">#</a></h1><p>Alchemical free energy calculations use unphysical intermediate states to estimate the free energy of the physical process we\u2019re investigating.</p><p>Here, the quantity of interest is the change in binding affinity between a compound A and a related compound B, (e.g., by modifying one of the drug scaffold\u2019s substituents) is given by:</p>"}
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
