selector_to_html = {"a[href=\"#spinning-the-pdb-in-a-movie\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Spinning the PDB in a Movie<a class=\"headerlink\" href=\"#spinning-the-pdb-in-a-movie\" title=\"Permalink to this heading\">#</a></h2><p>The code looks like</p>", "a[href=\"#rocking\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Rocking<a class=\"headerlink\" href=\"#rocking\" title=\"Permalink to this heading\">#</a></h1><p>The code looks like</p>"}
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
