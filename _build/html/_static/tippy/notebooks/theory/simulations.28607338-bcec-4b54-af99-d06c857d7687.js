selector_to_html = {"a[href=\"https://doi.org/10.33011/livecoms.1.1.5957\"]": "\n<div>\n    <h3>Best Practices for Foundations in Molecular Simulations [Article v1.0]</h3>\n    \n    <p><b>Authors:</b> Efrem Braun, Justin Gilmer, Heather B. Mayes, David L. Mobley, Jacob I. Monroe, Samarjeet Prasad, Daniel M. Zuckerman</p>\n    \n    <p><b>Publisher:</b> University of Colorado at Boulder</p>\n    <p><b>Published:</b> 2018-11-30</p>\n</div>", "a[href=\"#other-methods\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other Methods<a class=\"headerlink\" href=\"#other-methods\" title=\"Permalink to this heading\">#</a></h2><p><span style=\"font-size:1.5em;\">Quantum Mechanics/Molecular Mechanics (QM/MM) Simulations</span></p><p>In classical simulations, bond breaking/forming are generally not allowed. The topology, or chemistry, of the system is is constant as a function of time. In other words, the chemical identity of a molecular remains constant (with the exception of constant pH simulations).</p>", "a[href=\"#literature\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Literature<a class=\"headerlink\" href=\"#literature\" title=\"Permalink to this heading\">#</a></h2><p><a class=\"reference external\" href=\"https://doi.org/10.33011/livecoms.1.1.5957\">Best Practices for Foundations in Molecular Simulations</a></p>", "a[href=\"#molecular-descriptors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Molecular Descriptors<a class=\"headerlink\" href=\"#molecular-descriptors\" title=\"Permalink to this heading\">#</a></h2><p>MD or MC simulations can be carried out with differnt underlying physical theories to describe the particle-base model of the system. For example:</p>", "a[href=\"#molcular-modelling\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Molcular Modelling<a class=\"headerlink\" href=\"#molcular-modelling\" title=\"Permalink to this heading\">#</a></h1><p>Before running a simulation, ask yourself:</p>", "a[href=\"#properties-of-interest\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Properties of Interest<a class=\"headerlink\" href=\"#properties-of-interest\" title=\"Permalink to this heading\">#</a></h2><p>The size of the system alone does not dictate the use of classical descriptors. MM simulations are often used to calculate:</p>"}
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
