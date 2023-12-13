selector_to_html = {"a[href=\"#tar-compress-uncompress-files\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">tar</span></code> - compress/uncompress files<a class=\"headerlink\" href=\"#tar-compress-uncompress-files\" title=\"Permalink to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">tar</span></code> stands for tape archive.</p><p>We can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">tar</span></code> command to create, compressed, or uncompressed Archive files, and also maintain/modify them.</p>"}
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
