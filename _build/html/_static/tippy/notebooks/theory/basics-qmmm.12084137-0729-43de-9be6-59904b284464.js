selector_to_html = {"a[href=\"#qm-mm-simulations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">QM/MM Simulations<a class=\"headerlink\" href=\"#qm-mm-simulations\" title=\"Permalink to this heading\">#</a></h1><h2>Overview<a class=\"headerlink\" href=\"#overview\" title=\"Permalink to this heading\">#</a></h2><p>Reference: <a class=\"reference external\" href=\"https://www.youtube.com/watch?v=VK0e6-ndodM\">https://www.youtube.com/watch?v=VK0e6-ndodM</a></p><p>In general, a hybrid quantum mechanics/molecular mechanics (QM/MM) scheme requires:</p>", "a[href=\"#bonded-interactions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Bonded Interactions<a class=\"headerlink\" href=\"#bonded-interactions\" title=\"Permalink to this heading\">#</a></h2><p>Bonded interactions are introduced when covalent bonds connecting QM and MM regions are cut.</p><p>This term is chosen at classical FF level.</p>", "a[href=\"#overview\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Overview<a class=\"headerlink\" href=\"#overview\" title=\"Permalink to this heading\">#</a></h2><p>Reference: <a class=\"reference external\" href=\"https://www.youtube.com/watch?v=VK0e6-ndodM\">https://www.youtube.com/watch?v=VK0e6-ndodM</a></p><p>In general, a hybrid quantum mechanics/molecular mechanics (QM/MM) scheme requires:</p>", "a[href=\"#short-range\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Short-Range<a class=\"headerlink\" href=\"#short-range\" title=\"Permalink to this heading\">#</a></h3><p>In electron spill-out, a problem may arise when using standard MM atomic charges to describe the charge distribution of the MM system, which results in over-polarization near the boundary.</p>", "a[href=\"#electrostatic-embedding\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Electrostatic Embedding<a class=\"headerlink\" href=\"#electrostatic-embedding\" title=\"Permalink to this heading\">#</a></h2><p>Electrostatic interactions between QM and MM subsystems are handled during computation of electronic wave function. Charged MM atoms near QM Hamiltonian are treated as one-electron operators.</p>", "a[href=\"#nonbonded-interactions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Nonbonded Interactions<a class=\"headerlink\" href=\"#nonbonded-interactions\" title=\"Permalink to this heading\">#</a></h2><p>Non bonded term is:</p>"}
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
