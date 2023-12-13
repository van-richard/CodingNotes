selector_to_html = {"a[href=\"#reduced-potentials-u-x\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Reduced Potentials (<span class=\"math notranslate nohighlight\">\\(u(x)\\)</span>)<a class=\"headerlink\" href=\"#reduced-potentials-u-x\" title=\"Permalink to this heading\">#</a></h3><p>In a general form, you can take some subset of the additive terms in the following to define the reduced potential <span class=\"math notranslate nohighlight\">\\(u_i(x)\\)</span> for thermodynamic state <span class=\"math notranslate nohighlight\">\\(i\\)</span>:</p>", "a[href=\"#multistate-bennett-acceptance-ratio-mbar\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Multistate Bennett Acceptance Ratio (MBAR)<a class=\"headerlink\" href=\"#multistate-bennett-acceptance-ratio-mbar\" title=\"Permalink to this heading\">#</a></h2><p>Esseentially, it is a generalization of the  that calculates the (relative) free energies of several multi-states. It  reduces to the BAR method when only two super states are involved.</p>", "a[href=\"#derivations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Derivations<a class=\"headerlink\" href=\"#derivations\" title=\"Permalink to this heading\">#</a></h2><p>This derivation starts from a slightly modified version of the free energy equation</p>", "a[href=\"#bar-mbar\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">BAR &amp; MBAR<a class=\"headerlink\" href=\"#bar-mbar\" title=\"Permalink to this heading\">#</a></h1><p>Bennett Acceptance Ratio (BAR) method draws on data from multiple states to estimate the free energy difference.</p><p>While, TI requires the ensemble average from a <em>single</em> state to estimate free energies (TI needs the derivatives at state), it does not require the configurations from any neighboring state.</p>", "a[href=\"#bennett-acceptance-ratio-bar\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Bennett Acceptance Ratio (BAR)<a class=\"headerlink\" href=\"#bennett-acceptance-ratio-bar\" title=\"Permalink to this heading\">#</a></h2><p>BAR works under the principal that at the same configuration, <span class=\"math notranslate nohighlight\">\\(\\vec q\\)</span>, at two separate states, <span class=\"math notranslate nohighlight\">\\(A\\)</span> and <span class=\"math notranslate nohighlight\">\\(B\\)</span>, there is a pathway connecting the two potentials and a difference of <span class=\"math notranslate nohighlight\">\\(\\Delta U_{ij}(\\vec{q})\\)</span>. Because the states are in the same configuration, there is a exact relationship between the distributions of potential energy differences between <span class=\"math notranslate nohighlight\">\\(\\Delta U_{ij}(\\vec{q})\\)</span> of states sampled from <span class=\"math notranslate nohighlight\">\\(i\\)</span>, and <span class=\"math notranslate nohighlight\">\\(\\Delta U_{ji}(\\vec{q})\\)</span> the distribution of potential energy differences sampled from the state <span class=\"math notranslate nohighlight\">\\(j\\)</span>. Since it\u2019s an exact function of distributions, statistics can be applied to find the optimal way to use the information between two states, improving the free energy estimate.</p>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Derivations<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p>Starting from our core free energy equation, we have</p>"}
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
