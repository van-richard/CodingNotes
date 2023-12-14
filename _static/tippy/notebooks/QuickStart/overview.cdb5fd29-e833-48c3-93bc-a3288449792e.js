selector_to_html = {"a[href=\"#a-not-so-quick-start-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">A (not so) Quick Start Guide<a class=\"headerlink\" href=\"#a-not-so-quick-start-guide\" title=\"Permalink to this heading\">#</a></h1><p><em>I intended for this to be read within 30 minutes\u2026 Sorry! (December 9, 2023)</em></p>", "a[href=\"#what-do-i-need\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What do I need?<a class=\"headerlink\" href=\"#what-do-i-need\" title=\"Permalink to this heading\">#</a></h2><p>Depending on the projects, you might need:</p>"}
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
