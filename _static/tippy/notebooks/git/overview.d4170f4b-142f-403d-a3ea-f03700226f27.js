selector_to_html = {"a[href=\"#github-git\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Github &amp; git<a class=\"headerlink\" href=\"#github-git\" title=\"Permalink to this heading\">#</a></h1><h2>Github<a class=\"headerlink\" href=\"#github\" title=\"Permalink to this heading\">#</a></h2><p>Website</p>", "a[href=\"#git\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">git<a class=\"headerlink\" href=\"#git\" title=\"Permalink to this heading\">#</a></h2><p>Version control</p>", "a[href=\"#github\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Github<a class=\"headerlink\" href=\"#github\" title=\"Permalink to this heading\">#</a></h2><p>Website</p>"}
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
