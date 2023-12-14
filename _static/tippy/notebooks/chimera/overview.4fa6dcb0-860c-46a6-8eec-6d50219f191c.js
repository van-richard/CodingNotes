selector_to_html = {"a[href=\"#chimerax\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">ChimeraX<a class=\"headerlink\" href=\"#chimerax\" title=\"Permalink to this heading\">#</a></h1><p>Chimera and <a class=\"reference external\" href=\"https://www.cgl.ucsf.edu/chimerax/\">ChimeraX</a> are both great molecular visualization tools developed by UCSF.</p><p>ChimeraX is the newest program, and it can efficiently handle large data (i.e. PDBs with thousands of atoms). It is my prefered GUI when exploring new structures and making videos/figures.</p>", "a[href=\"#opening-pdbs-from-rcsb\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Opening PDBs from RCSB<a class=\"headerlink\" href=\"#opening-pdbs-from-rcsb\" title=\"Permalink to this heading\">#</a></h2><p>On ChimeraX command line, type:</p>", "a[href=\"#summary-of-command-line-options\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Summary of Command Line Options<a class=\"headerlink\" href=\"#summary-of-command-line-options\" title=\"Permalink to this heading\">#</a></h2><p>Rather than searching through the GUI (graphic user interface) for the function you need (i.e., Show/Hide atoms/ribbon/surface), you can use the commmand line interface to control the display.</p><p><strong>Command Line Options:</strong></p>"}
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
