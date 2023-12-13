selector_to_html = {"a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal<a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">Terminal</span></code> app can come in many flavors. It also depends on the operating system (macOS or Windows). So until a Windows user volunteers to send me screenshots, all my examples will be from macOS.</p><p>You can find the app by</p>", "a[href=\"#terminal-is-90-keyboard\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal is 90% Keyboard<a class=\"headerlink\" href=\"#terminal-is-90-keyboard\" title=\"Permalink to this heading\">#</a></h2><p>A <a class=\"reference internal\" href=\"../../glossary.html#term-terminal\"><span class=\"xref std std-term\">terminal</span></a> is the text-based interface to control a computer. You type \u201ccommands\u201d to perform any task like manipulate files, run programs, and access supercomputing resource.</p>", "a[href=\"#terminal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal<a class=\"headerlink\" href=\"#terminal\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"\" src=\"../../_images/terminal-header.gif\"/></p><p>Example of terminal application on macOS (Command Line Interface). The format follows: computer name, the <code class=\"docutils literal notranslate\"><span class=\"pre\">;</span></code> sign, username, and then <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code> sign. Users can input text commands in this line, as shown by the gray box</p>", "a[href=\"#shells-provide-structure-to-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shells Provide Structure to Commands<a class=\"headerlink\" href=\"#shells-provide-structure-to-commands\" title=\"Permalink to this heading\">#</a></h2><p>When <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code> is opened, a <a class=\"reference internal\" href=\"../../glossary.html#term-shell\"><span class=\"xref std std-term\">shell</span></a> is started:</p>"}
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
