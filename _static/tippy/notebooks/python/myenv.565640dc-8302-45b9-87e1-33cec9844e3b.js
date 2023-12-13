selector_to_html = {"a[href=\"#create-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Create Environment<a class=\"headerlink\" href=\"#create-environment\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#my-recommended-conda-setup\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">My Recommended Conda Setup<a class=\"headerlink\" href=\"#my-recommended-conda-setup\" title=\"Permalink to this heading\">#</a></h1><h2>My List<a class=\"headerlink\" href=\"#my-list\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#my-list\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">My List<a class=\"headerlink\" href=\"#my-list\" title=\"Permalink to this heading\">#</a></h2>"}
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
