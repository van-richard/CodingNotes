selector_to_html = {"a[href=\"#terminal-shell-bash\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal, Shell, &amp; Bash<a class=\"headerlink\" href=\"#terminal-shell-bash\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"\" src=\"../../_images/terminal-header.gif\"/></p><p>Example of the <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code> on a Macbook. The line you are working on is noted with the <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code>. The format of this line is: computer name, <code class=\"docutils literal notranslate\"><span class=\"pre\">;</span></code> , username, and then <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code> . <code class=\"docutils literal notranslate\"><span class=\"pre\">Bash</span></code> commands are typed by line, and ran by hitting the <code class=\"docutils literal notranslate\"><span class=\"pre\">[enter]</span></code> key. The four lines ran:</p>", "a[href=\"#shell-programs-provides-structure\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Shell Programs Provides Structure<a class=\"headerlink\" href=\"#shell-programs-provides-structure\" title=\"Permalink to this heading\">#</a></h1><p>When the user opens <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code>, a <a class=\"reference internal\" href=\"../../glossary.html#term-shell\"><span class=\"xref std std-term\">shell</span></a> session is immediately started</p>", "a[href=\"#terminal-is-just-90-keyboard\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal is just 90% Keyboard<a class=\"headerlink\" href=\"#terminal-is-just-90-keyboard\" title=\"Permalink to this heading\">#</a></h2><p>================================</p><p>Graphical Interfaces</p>"}
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
