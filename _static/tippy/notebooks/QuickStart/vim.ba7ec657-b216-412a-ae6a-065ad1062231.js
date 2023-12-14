selector_to_html = {"a[href=\"#text-editors\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.4. </span>Text Editors<a class=\"headerlink\" href=\"#text-editors\" title=\"Permalink to this heading\">#</a></h1><p>So how do we make, edit, or even begin to visualize files?</p><p>We need a CLI text editor. Something similar on your computer might be <code class=\"docutils literal notranslate\"><span class=\"pre\">Notepad</span></code>, or <code class=\"docutils literal notranslate\"><span class=\"pre\">TextEdit</span></code>, which really is just a simplified Word program.</p>", "a[href=\"#vi-vim\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.4.1. </span>vi/vim<a class=\"headerlink\" href=\"#vi-vim\" title=\"Permalink to this heading\">#</a></h2><p>There are several levels to using <code class=\"docutils literal notranslate\"><span class=\"pre\">vi/vim</span></code>, but don\u2019t get lost! For now, we only need to know:</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">vi/vim</span></code> has 2 modes:</p>", "a[href=\"#save-quit\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.4.2. </span>Save &amp; Quit<a class=\"headerlink\" href=\"#save-quit\" title=\"Permalink to this heading\">#</a></h2><p>To do this, you need to be in Command Mode. There are 4 options:</p>"}
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
