selector_to_html = {"a[href=\"#looping\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Looping<a class=\"headerlink\" href=\"#looping\" title=\"Permalink to this heading\">#</a></h2><p><code class=\"docutils literal notranslate\"><span class=\"pre\">for</span></code> loops iterate for as many arguments given:</p>", "a[href=\"#functions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Functions<a class=\"headerlink\" href=\"#functions\" title=\"Permalink to this heading\">#</a></h2><p>You can also define functions</p>", "a[href=\"#scripting\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Scripting<a class=\"headerlink\" href=\"#scripting\" title=\"Permalink to this heading\">#</a></h1><h2>Redirect Commands<a class=\"headerlink\" href=\"#redirect-commands\" title=\"Permalink to this heading\">#</a></h2><p>You can redirect command input and output (stdin, stdout, and stderr) using \u201credirection operators\u201d. Unlike a pipe, which passes output to a command, a redirection operator has a command\u2019s input come from a file or stream, or sends its output to a file or stream.</p><p>Read from stdin until <code class=\"docutils literal notranslate\"><span class=\"pre\">^EOF$</span></code> and overwrite <a class=\"reference external\" href=\"http://hello.py\">hello.py</a> with the lines between <code class=\"docutils literal notranslate\"><span class=\"pre\">EOF</span></code> (which are called a \u201chere document\u201d):</p>", "a[href=\"#redirect-commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Redirect Commands<a class=\"headerlink\" href=\"#redirect-commands\" title=\"Permalink to this heading\">#</a></h2><p>You can redirect command input and output (stdin, stdout, and stderr) using \u201credirection operators\u201d. Unlike a pipe, which passes output to a command, a redirection operator has a command\u2019s input come from a file or stream, or sends its output to a file or stream.</p><p>Read from stdin until <code class=\"docutils literal notranslate\"><span class=\"pre\">^EOF$</span></code> and overwrite <a class=\"reference external\" href=\"http://hello.py\">hello.py</a> with the lines between <code class=\"docutils literal notranslate\"><span class=\"pre\">EOF</span></code> (which are called a \u201chere document\u201d):</p>"}
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
