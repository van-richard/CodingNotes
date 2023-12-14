selector_to_html = {"a[href=\"#soft-core-potentials\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Soft-core Potentials<a class=\"headerlink\" href=\"#soft-core-potentials\" title=\"Permalink to this heading\">#</a></h2><p>A standard method has been developed to alchemically change molecules to get around the numeric instabilities called a \u201csoft-core potential.\u201d In these potentials, the configuration variable, <span class=\"math notranslate nohighlight\">\\(r\\)</span>, is now coupled to the alchemical variable, <span class=\"math notranslate nohighlight\">\\(\\lambda\\)</span> , smoothing out the singularity and looks like</p>", "a[href=\"#alchemical-states\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Alchemical States<a class=\"headerlink\" href=\"#alchemical-states\" title=\"Permalink to this heading\">#</a></h1><p>How do we define an \u201calchemical path\u201d? You can think of it as defining the thermodynamic path where we modify, remove, or add various forces on an atom.</p><p>Because the atoms changed their interactions with the surroundings without being removed or added from the system, we have directly modified the atoms to create our alchemical path.</p>"}
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
