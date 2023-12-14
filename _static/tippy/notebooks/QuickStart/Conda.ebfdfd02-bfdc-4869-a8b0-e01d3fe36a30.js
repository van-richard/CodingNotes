selector_to_html = {"a[href=\"#conda\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.2. </span>Conda<a class=\"headerlink\" href=\"#conda\" title=\"Permalink to this heading\">#</a></h1><p>Some open-source programs are written in python and then hosted on GitHub, which is great!.. Until you find it\u2019s written in a different version of python\u2026</p><p>I had multiple version of python on laptop until I was shown <strong>Conda</strong>!</p>", "a[href=\"../../glossary.html#term-miniforge\"]": "<dt id=\"term-miniforge\">miniforge</dt><dd><p>Community-drive anaconda package</p></dd>", "a[href=\"#conda-package-management\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">3.1. </span>Conda Package Management<a class=\"headerlink\" href=\"#conda-package-management\" title=\"Permalink to this heading\">#</a></h1>"}
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
