selector_to_html = {"a[href=\"theory/simulations.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Molcular Modelling<a class=\"headerlink\" href=\"#molcular-modelling\" title=\"Permalink to this heading\">#</a></h1><p>Before running a simulation, ask yourself:</p>", "a[href=\"#notes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Notes<a class=\"headerlink\" href=\"#notes\" title=\"Permalink to this heading\">#</a></h1><p>The background, concepts, and equations for simulation protocols and methodologies.</p><p>These are not comprehensive and I recommend referring to the the papers I cited.</p>", "a[href=\"theory/fe-alchemical.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Alchemical Free Energy<a class=\"headerlink\" href=\"#alchemical-free-energy\" title=\"Permalink to this heading\">#</a></h1><p>Alchemical free energy calculations use unphysical intermediate states to estimate the free energy of the physical process we\u2019re investigating.</p><p>Here, the quantity of interest is the change in binding affinity between a compound A and a related compound B, (e.g., by modifying one of the drug scaffold\u2019s substituents) is given by:</p>", "a[href=\"theory/fe-estimators.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Free Energy Estimators<a class=\"headerlink\" href=\"#free-energy-estimators\" title=\"Permalink to this heading\">#</a></h1><p>A free energy estimator, in the context of statistical mechanics and thermodynamics, is a theoretical or computational tool used to calculate or estimate the free energy of a system. Free energy is a fundamental concept in thermodynamics and is related to the ability of a system to do work. It is often denoted by the letter F or A (Helmholtz free energy), depending on the context.</p>", "a[href=\"theory/fe-binding.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Modelling Binding Affinity<a class=\"headerlink\" href=\"#modelling-binding-affinity\" title=\"Permalink to this heading\">#</a></h1><p>The binding affinity (energy of binding) between a ligand, <span class=\"math notranslate nohighlight\">\\(L\\)</span>, to a receptor.</p>"}
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
