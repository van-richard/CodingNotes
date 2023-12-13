selector_to_html = {"a[href=\"#problems\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Problems<a class=\"headerlink\" href=\"#problems\" title=\"Permalink to this heading\">#</a></h2><p>If the curvature of <span class=\"math notranslate nohighlight\">\\(\\frac{dU}{d\\lambda}\\)</span> is large, the bias introduced by discrete  states becomes significant. So when using TI it is very important to verify if you gathered enough data from a sufficient numbers of states, such that the free energy becomes independent of the number of states to within statistical precision!</p><p>The linear transformation will always have an infinite potential at <span class=\"math notranslate nohighlight\">\\(r = 0\\)</span> leading to numeric instabilities for evaluating <span class=\"math notranslate nohighlight\">\\(\\frac{dU}{d\\lambda}\\)</span>. Although there are ways to get around this, they do not converge very well. However, if with a soft core potential, this problem can be mostly avoided.</p>", "a[href=\"#derivations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Derivations<a class=\"headerlink\" href=\"#derivations\" title=\"Permalink to this heading\">#</a></h2><p>For two systems, <span class=\"math notranslate nohighlight\">\\(A\\)</span> and <span class=\"math notranslate nohighlight\">\\(B\\)</span>, with potential energies <span class=\"math notranslate nohighlight\">\\(U_A\\)</span> and <span class=\"math notranslate nohighlight\">\\(U_B\\)</span>, which can be calculated from n ensemble average over configurations sampled from MD or MC with Boltzmann weighting. A new potential energy function could be defined as:</p>", "a[href=\"#statistical-errors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Statistical Errors<a class=\"headerlink\" href=\"#statistical-errors\" title=\"Permalink to this heading\">#</a></h2><p>To get the correct statistical error, each individual average should be multiplied by <span class=\"math notranslate nohighlight\">\\(\\sqrt{2\\tau}\\)</span> to correct for the correlation time at each state; error is then</p>", "a[href=\"#thermodynamic-integration\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Thermodynamic Integration<a class=\"headerlink\" href=\"#thermodynamic-integration\" title=\"Permalink to this heading\">#</a></h1><p>The free energy difference therefore calculated by defining a thermodynamic path between the states and integrating over ensemble-averaged enthalpy changes along the path.</p><p>This paths can either be real chemical processes or alchemical processes.</p>", "a[href=\"#estimating-free-energy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Estimating Free Energy<a class=\"headerlink\" href=\"#estimating-free-energy\" title=\"Permalink to this heading\">#</a></h2><p>Information from only a single state is needed to calculate the derivative above. Since we can only perform simulations at a number of <span class=\"math notranslate nohighlight\">\\(\\lambda\\)</span> states, numeric integration schemes are required</p>"}
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
