selector_to_html = {"a[href=\"#text-editing-with-vi-vim\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Text Editing with Vi/Vim<a class=\"headerlink\" href=\"#text-editing-with-vi-vim\" title=\"Permalink to this heading\">#</a></h1><p>Vi/Vim is a text editor you can use in your terminal. Unfortunately, this program isn\u2019t like the ones you may be familiar with like Notepad, TextEdit, etc\u2026 There are a lot of key bindings you will need to remember, but once you\u2019re use to it, you\u2019ll realize this text editor designed for speed and increased productivity. The numerous keybindings will be your best friend for speedy navigation to specific points in the file, and for fast editing.</p>", "a[href=\"#overview-of-some-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Overview of Some Commands<a class=\"headerlink\" href=\"#overview-of-some-commands\" title=\"Permalink to this heading\">#</a></h2>"}
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
