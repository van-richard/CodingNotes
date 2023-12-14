selector_to_html = {"a[href=\"#input-files\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Input Files<a class=\"headerlink\" href=\"#input-files\" title=\"Permalink to this heading\">#</a></h2><p>Make a new working directory.</p>", "a[href=\"#qm-mm-enzyme-reaction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">QM/MM: Enzyme Reaction<a class=\"headerlink\" href=\"#qm-mm-enzyme-reaction\" title=\"Permalink to this heading\">#</a></h1><p>In this tutorial, we will perform QM/MM simulations modelling th DNA cleavage mechanism in the HNH-like domain of I-Ppo1. To accelerate the simulation, we utilize the multiple time step approach, (Outer time step: B3LYP/6-31G*, and inner step: PM3), and SINR thermostat.</p><p>Additionally, we will use QMHub to add long-range electrostatics.</p>"}
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
