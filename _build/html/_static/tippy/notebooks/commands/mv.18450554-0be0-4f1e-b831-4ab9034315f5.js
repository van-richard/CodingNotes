selector_to_html = {"a[href=\"#mv-move-files-folders-from-one-place-to-another\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">mv</span></code> - move files/folders from one place to another.<a class=\"headerlink\" href=\"#mv-move-files-folders-from-one-place-to-another\" title=\"Permalink to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">mv</span></code> is similar to <code class=\"docutils literal notranslate\"><span class=\"pre\">cp</span></code>, but it deletes the source.\n<code class=\"docutils literal notranslate\"><span class=\"pre\">mv</span></code> is also useful for renaming files!</p>"}
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
