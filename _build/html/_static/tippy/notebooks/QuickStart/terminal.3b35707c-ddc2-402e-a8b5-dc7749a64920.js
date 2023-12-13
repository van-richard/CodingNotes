selector_to_html = {"a[href=\"../../glossary.html#term-Graphical-User-Interface-GUI\"]": "<dt id=\"term-Graphical-User-Interface-GUI\">Graphical User Interface (GUI)</dt><dd><p>Programs with pictures, buttons, and would probably require your mouse</p></dd>", "a[href=\"#shell-provide-structure-to-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shell Provide Structure to Commands<a class=\"headerlink\" href=\"#shell-provide-structure-to-commands\" title=\"Permalink to this heading\">#</a></h2><p>When <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code> is opened, a <a class=\"reference internal\" href=\"../../glossary.html#term-shell\"><span class=\"xref std std-term\">shell</span></a> session initiates.</p>", "a[href=\"../../glossary.html#term-scripts\"]": "<dt id=\"term-scripts\">scripts</dt><dd><p>File containing a sequence of commands a program</p></dd>", "a[href=\"../../glossary.html#term-terminal\"]": "<dt id=\"term-terminal\">terminal</dt><dd><p>Application to interact with computers by typing our desired action. Most of the time, you can\u2019t use a mouse.</p></dd>", "a[href=\"../../glossary.html#term-shell\"]": "<dt id=\"term-shell\">shell</dt><dd><p>Program that provides structure in the command line interface. Has preset definitions for commands. Different shell programs may have minor differences in commands and workflows. I use the shell, bash, but there is also: \u201cfish, zsh, ksh, sh, tsch, Power Shell, or pwsh\u201d</p></dd>", "a[href=\"../../glossary.html#term-interactive-prompt\"]": "<dt id=\"term-interactive-prompt\">interactive prompt</dt><dd><p>A programming appraoch where commands are typed line by line, or command by command. The code is executed immediately</p></dd>", "a[href=\"../../glossary.html#term-Command-Line-Interface-CLI\"]": "<dt id=\"term-Command-Line-Interface-CLI\">Command Line Interface (CLI)</dt><dd><p>A computer program that takes text-based input to perform a task, operation, or action</p></dd>", "a[href=\"#terminal-command-line-shell-bash\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal, Command Line, Shell, &amp; Bash<a class=\"headerlink\" href=\"#terminal-command-line-shell-bash\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"\" src=\"../../_images/terminal-header.gif\"/></p><p>Example of the <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code> on a Macbook. The line you are working on is noted with the <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code>. The format of this line is: computer name, <code class=\"docutils literal notranslate\"><span class=\"pre\">;</span></code> , username, and then <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code> . <code class=\"docutils literal notranslate\"><span class=\"pre\">Bash</span></code> commands are typed by line, and ran by hitting the <code class=\"docutils literal notranslate\"><span class=\"pre\">[enter]</span></code> key. The four lines ran:</p>", "a[href=\"#terminal-is-90-keyboard\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal is 90% Keyboard<a class=\"headerlink\" href=\"#terminal-is-90-keyboard\" title=\"Permalink to this heading\">#</a></h2><p>A <a class=\"reference internal\" href=\"../../glossary.html#term-terminal\"><span class=\"xref std std-term\">terminal</span></a> is the text-based interface to control a computer. You type \u201ccommands\u201d to perform any task like manipulate files, run programs, and access supercomputing resource.</p>"}
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
