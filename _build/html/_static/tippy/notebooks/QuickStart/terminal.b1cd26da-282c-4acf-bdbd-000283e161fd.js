selector_to_html = {"a[href=\"#terminal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal<a class=\"headerlink\" href=\"#terminal\" title=\"Permalink to this heading\">#</a></h1><p>Get comfortable using the <a class=\"reference internal\" href=\"../../glossary.html#term-terminal\"><span class=\"xref std std-term\">terminal</span></a>, cause this is always the first step before you can do any calculation! HA HA HA</p>", "a[href=\"#terminal-application-is-99-keyboard-only\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal Application is 99% KEYBOARD ONLY<a class=\"headerlink\" href=\"#terminal-application-is-99-keyboard-only\" title=\"Permalink to this heading\">#</a></h2><p>A <a class=\"reference internal\" href=\"../../glossary.html#term-terminal\"><span class=\"xref std std-term\">terminal</span></a> is the text-based interface to control a computer. You type \u201ccommands\u201d to perform any task like manipulate files, run programs, and access supercomputing resource.</p>", "a[href=\"../../glossary.html#term-interactive-prompt\"]": "<dt id=\"term-interactive-prompt\">interactive prompt</dt><dd><p>A programming appraoch where commands are typed line by line, or command by command. The code is executed immediately</p></dd>", "a[href=\"../../glossary.html#term-scripts\"]": "<dt id=\"term-scripts\">scripts</dt><dd><p>File containing a sequence of commands a program</p></dd>", "a[href=\"#open-the-your-terminal\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">** Open the Your Terminal!<a class=\"headerlink\" href=\"#open-the-your-terminal\" title=\"Permalink to this heading\">#</a></h2><p>The type of terminal application will depend on your operating system (MacOS or Windows).</p><p>I use MacOS, so I included those examples.</p>", "a[href=\"#shells-provide-structure-to-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shells Provide Structure to Commands<a class=\"headerlink\" href=\"#shells-provide-structure-to-commands\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\" style=\"width: 75%\">\n<img alt=\"../../_images/terminal-window.png\" src=\"../../_images/terminal-window.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 1 </span><span class=\"caption-text\">Example of the terminal application on MacOS. The format on the line begins with the computer name, the <code class=\"docutils literal notranslate\"><span class=\"pre\">;</span></code> sign, username, and then <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code> sign. The grey box is where a user  can input text commands.</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"../../glossary.html#term-terminal\"]": "<dt id=\"term-terminal\">terminal</dt><dd><p>Application to interact with computers by typing our desired action. Most of the time, you can\u2019t use a mouse.</p></dd>", "a[href=\"../../glossary.html#term-shell\"]": "<dt id=\"term-shell\">shell</dt><dd><p>Program that provides structure in the command line interface. Has preset definitions for commands. Different shell programs may have minor differences in commands and workflows. I use the shell, bash, but there is also: \u201cfish, zsh, ksh, sh, tsch, Power Shell, or pwsh\u201d</p></dd>"}
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
