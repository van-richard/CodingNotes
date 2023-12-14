selector_to_html = {"a[href=\"#rsync-sync-files-folders\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">rsync</span></code> - sync files/folders<a class=\"headerlink\" href=\"#rsync-sync-files-folders\" title=\"Permalink to this heading\">#</a></h1><p>Since I typically use <code class=\"docutils literal notranslate\"><span class=\"pre\">rsync</span></code> to transfer folders, I will not cover using this command for tranfering files. You can use <code class=\"docutils literal notranslate\"><span class=\"pre\">scp</span></code> for that. T</p><p>he notation for <code class=\"docutils literal notranslate\"><span class=\"pre\">rsync</span></code> looks like:</p>"}
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
