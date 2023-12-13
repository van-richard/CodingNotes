selector_to_html = {"a[href=\"#shell-provide-structure-to-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shell Provide Structure to Commands<a class=\"headerlink\" href=\"#shell-provide-structure-to-commands\" title=\"Permalink to this heading\">#</a></h2><p>When <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code> is opened, a <a class=\"reference internal\" href=\"../../glossary.html#term-shell\"><span class=\"xref std std-term\">shell</span></a> session initiates.</p>", "a[href=\"#terminal-is-90-keyboard\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal is 90% Keyboard<a class=\"headerlink\" href=\"#terminal-is-90-keyboard\" title=\"Permalink to this heading\">#</a></h2><p>A <a class=\"reference internal\" href=\"../../glossary.html#term-terminal\"><span class=\"xref std std-term\">terminal</span></a> is the text-based interface to control a computer. You type \u201ccommands\u201d to perform any task like manipulate files, run programs, and access supercomputing resource.</p>", "a[href=\"#terminal-command-line-shell-bash\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal, Command Line, Shell, &amp; Bash<a class=\"headerlink\" href=\"#terminal-command-line-shell-bash\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"\" src=\"../../_images/terminal-header.gif\"/></p><p>Example of the <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code> on a Macbook. The line you are working on is noted with the <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code>. The format of this line is: computer name, <code class=\"docutils literal notranslate\"><span class=\"pre\">;</span></code> , username, and then <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code> . <code class=\"docutils literal notranslate\"><span class=\"pre\">Bash</span></code> commands are typed by line, and ran by hitting the <code class=\"docutils literal notranslate\"><span class=\"pre\">[enter]</span></code> key. The four lines ran:</p>"}
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
