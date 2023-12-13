selector_to_html = {"a[href=\"#codingnotes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CodingNotes<a class=\"headerlink\" href=\"#codingnotes\" title=\"Permalink to this heading\">#</a></h1><p><strong>Notes I wish I had showed me when I started</strong></p>", "a[href=\"notebooks/QuickStart/Overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1. </span>Overview<a class=\"headerlink\" href=\"#overview\" title=\"Permalink to this heading\">#</a></h1><p>To those with no background in programming, there is a lot to take in. So don\u2019t rush it, and ask questions!</p><p><strong>Objective:</strong> Get comfortable with:</p>"}
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
