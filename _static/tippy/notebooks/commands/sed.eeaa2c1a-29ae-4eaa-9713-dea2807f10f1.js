selector_to_html = {"a[href=\"#sed-tranform-replace-text\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">sed</span></code> - tranform/replace text!<a class=\"headerlink\" href=\"#sed-tranform-replace-text\" title=\"Permalink to this heading\">#</a></h1><p>We can replace some text, INPUT, with another text, OUTPUT, in a file with <code class=\"docutils literal notranslate\"><span class=\"pre\">sed</span></code>. The notation is:</p>"}
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
