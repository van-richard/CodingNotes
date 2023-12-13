selector_to_html = {"a[href=\"#shells-provide-the-structure\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shells Provide the Structure<a class=\"headerlink\" href=\"#shells-provide-the-structure\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#summary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Summary<a class=\"headerlink\" href=\"#summary\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\" style=\"width: 75%\">\n<img alt=\"../../_images/terminal-window.png\" src=\"../../_images/terminal-window.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 1 </span><span class=\"caption-text\">MacOS terminal window. The format begins with your computer name, a <code class=\"docutils literal notranslate\"><span class=\"pre\">;</span></code>, username, and then <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code>. After the <code class=\"docutils literal notranslate\"><span class=\"pre\">$</span></code> is the user text input, which is shown as a grey box.</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#terminal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminal<a class=\"headerlink\" href=\"#terminal\" title=\"Permalink to this heading\">#</a></h1><p>Prepare to get comfortable using the <code class=\"docutils literal notranslate\"><span class=\"pre\">terminal</span></code>, because this will be the foundation in learning (<em>and doing</em>) anything else!</p><p>The <a class=\"reference internal\" href=\"#term-terminal\"><span class=\"xref std std-term\">terminal</span></a> is a text-based interface to the computer. With it, you can type \u201ccommands\u201d to manipulate files, execute programs, and access supercomputing resources.</p>", "a[href=\"#term-command-line\"]": "<dt id=\"term-command-line\">command line</dt><dd><p>The interface that allows a user to type a command (which is expressed as a sequence of characters \u2014 typically a command name followed by some parameters) and then press the Return key to execute that command.</p></dd>", "a[href=\"#term-terminal\"]": "<dt id=\"term-terminal\">terminal</dt><dd><p>Interface or application that allows users to interact with computers, typically via a keyboard and display.</p></dd>", "a[href=\"#exercise-open-the-your-terminal\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><strong>Exercise:</strong> Open the Your Terminal!<a class=\"headerlink\" href=\"#exercise-open-the-your-terminal\" title=\"Permalink to this heading\">#</a></h2><p>The type of terminal application will depend on your operating system (MacOS or Windows).</p><p>I use MacOS, so I included those examples.</p>", "a[href=\"#term-shell\"]": "<dt id=\"term-shell\">shell</dt><dd><p>A shell is a user interface for accessing the services of an operating system.</p></dd>", "a[href=\"../../glossary.html#term-Command-Line-Interface-CLI\"]": "<dt id=\"term-Command-Line-Interface-CLI\">Command Line Interface (CLI)</dt><dd><p>Processes your text input</p></dd>"}
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
