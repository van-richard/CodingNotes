selector_to_html = {"a[href=\"#cd-change-directories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">cd</span></code> - change directories<a class=\"headerlink\" href=\"#cd-change-directories\" title=\"Permalink to this heading\">#</a></h1><p>Since bash works in the context of a current directory, you might want to run your command in some other directory. We have cd for changing location:</p><p>Change to home directory</p>"}
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
