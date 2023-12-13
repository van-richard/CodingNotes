selector_to_html = {"a[href=\"#quick-start-guide\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quick Start Guide<a class=\"headerlink\" href=\"#quick-start-guide\" title=\"Permalink to this heading\">#</a></h1><p><strong>Day 1</strong> in computational chemistry. Good luck!</p>", "a[href=\"#other-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Other Resources<a class=\"headerlink\" href=\"#other-resources\" title=\"Permalink to this heading\">#</a></h2><p>I enjoyed:</p>"}
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
