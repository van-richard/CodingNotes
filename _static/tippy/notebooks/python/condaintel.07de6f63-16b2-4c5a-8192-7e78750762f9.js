selector_to_html = {"a[href=\"#intel-environments-on-m1-m2\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Intel Environments on M1/M2<a class=\"headerlink\" href=\"#intel-environments-on-m1-m2\" title=\"Permalink to this heading\">#</a></h1><p>If you have an Macbook with the m1 or m2 chips, you might have found out some python libraries don\u2019t work.</p><p>A work around, is via a conda environment with an intel architecture!</p>"}
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
