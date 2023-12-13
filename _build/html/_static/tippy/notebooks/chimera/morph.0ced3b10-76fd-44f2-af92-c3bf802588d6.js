selector_to_html = {"a[href=\"#morphing-transition-between-2-pdb-structures\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Morphing transition between 2 PDB structures<a class=\"headerlink\" href=\"#morphing-transition-between-2-pdb-structures\" title=\"Permalink to this heading\">#</a></h2><p>Note: You must align the structures before morphing.</p><p><em>Morph between 2 PDB structures of FnCas12a (PDB 6GTG to 6I1K)</em></p>", "a[href=\"#example\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Example<a class=\"headerlink\" href=\"#example\" title=\"Permalink to this heading\">#</a></h3><p>Open 2 PDB files for FnCas12a.</p>", "a[href=\"#morphing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Morphing<a class=\"headerlink\" href=\"#morphing\" title=\"Permalink to this heading\">#</a></h1><h2>Morphing transition between 2 PDB structures<a class=\"headerlink\" href=\"#morphing-transition-between-2-pdb-structures\" title=\"Permalink to this heading\">#</a></h2><p>Note: You must align the structures before morphing.</p><p><em>Morph between 2 PDB structures of FnCas12a (PDB 6GTG to 6I1K)</em></p>"}
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
