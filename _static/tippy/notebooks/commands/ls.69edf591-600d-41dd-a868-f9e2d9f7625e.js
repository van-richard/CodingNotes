selector_to_html = {"a[href=\"#ls-list-information-about-files-folders\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">ls</span></code> - list information about files/folders<a class=\"headerlink\" href=\"#ls-list-information-about-files-folders\" title=\"Permalink to this heading\">#</a></h1><p>The default is to list the files in the current directory. Adding options can change how the list is organized.</p>"}
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
