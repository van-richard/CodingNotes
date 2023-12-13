selector_to_html = {"a[href=\"#scp-copy-files-folders-over-ssh\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">scp</span></code> - copy files/folders over ssh<a class=\"headerlink\" href=\"#scp-copy-files-folders-over-ssh\" title=\"Permalink to this heading\">#</a></h1><p>Using the command, <code class=\"docutils literal notranslate\"><span class=\"pre\">scp</span></code>, is helpful for copying single files or folders that aren\u2019t too large in size. The general notation is similar to <code class=\"docutils literal notranslate\"><span class=\"pre\">rsync</span></code>:</p>"}
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
