selector_to_html = {"a[href=\"#term-Free-Energy-Perturbation-FEP\"]": "<dt id=\"term-Free-Energy-Perturbation-FEP\">Free Energy Perturbation (FEP)</dt><dd><p>A method based on statistical mechanics for computing free energy differences from MD or MC simulations.</p></dd>", "a[href=\"#free-energy-estimators\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Free Energy Estimators<a class=\"headerlink\" href=\"#free-energy-estimators\" title=\"Permalink to this heading\">#</a></h1><p>A free energy estimator, in the context of statistical mechanics and thermodynamics, is a theoretical or computational tool used to calculate or estimate the free energy of a system. Free energy is a fundamental concept in thermodynamics and is related to the ability of a system to do work. It is often denoted by the letter F or A (Helmholtz free energy), depending on the context.</p>"}
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
