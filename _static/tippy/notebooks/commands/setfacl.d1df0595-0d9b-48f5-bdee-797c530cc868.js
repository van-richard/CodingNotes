selector_to_html = {"a[href=\"#setfacl-change-file-folder-permissions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">setfacl</span></code> - change file/folder permissions<a class=\"headerlink\" href=\"#setfacl-change-file-folder-permissions\" title=\"Permalink to this heading\">#</a></h1><p>Give specific user permission to read/write/execute a folder.</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">setfacl</span></code> is short for set File ACL (Access Control List). This sets permissions for specific users, without changing the owndership of the directory.</p>"}
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
