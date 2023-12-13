selector_to_html = {"a[href=\"#chsh-change-shell\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">chsh - change shell<a class=\"headerlink\" href=\"#chsh-change-shell\" title=\"Permalink to this heading\">#</a></h1><p>If you don\u2019t know which shell you\u2019re using, type the following command in your terminal:</p>"}
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
