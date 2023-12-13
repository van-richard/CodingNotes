selector_to_html = {"a[href=\"#saving-images\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Saving Images<a class=\"headerlink\" href=\"#saving-images\" title=\"Permalink to this heading\">#</a></h1><p>You can save figures using the command line interface. The following example saves the display as a <code class=\"docutils literal notranslate\"><span class=\"pre\">.png</span></code> file. <code class=\"docutils literal notranslate\"><span class=\"pre\">Supersample</span> <span class=\"pre\">3</span></code> helps the quality, and <code class=\"docutils literal notranslate\"><span class=\"pre\">transparentBackground</span></code> removes the white background.</p><p>One liner:</p>"}
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
