selector_to_html = {"a[href=\"#awk-manipulate-text\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">awk</span></code> - manipulate text<a class=\"headerlink\" href=\"#awk-manipulate-text\" title=\"Permalink to this heading\">#</a></h1><p>Treating a text file, were each space is a column, you can print the columns with:</p>", "a[href=\"#awk-can-do-math\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">awk</span></code> can do math.<a class=\"headerlink\" href=\"#awk-can-do-math\" title=\"Permalink to this heading\">#</a></h2><p>Average a column:</p>", "a[href=\"#separator\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Separator<a class=\"headerlink\" href=\"#separator\" title=\"Permalink to this heading\">#</a></h2><p>You can chose the field separator with, <code class=\"docutils literal notranslate\"><span class=\"pre\">-F</span></code>. This example choses the comma as the separator, and print the 5th column:</p>"}
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
