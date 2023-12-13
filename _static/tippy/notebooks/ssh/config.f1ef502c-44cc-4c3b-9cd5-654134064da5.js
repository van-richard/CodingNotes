selector_to_html = {"a[href=\"../linux.html#term-ssh\"]": "<dt id=\"term-ssh\"><a class=\"reference internal\" href=\"../commands/ssh.html\"><span class=\"doc std std-doc\">ssh</span></a></dt><dd><p>secure shell protocol</p></dd>", "a[href=\"#configure-ssh\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configure <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a><a class=\"headerlink\" href=\"#configure-ssh\" title=\"Permalink to this heading\">#</a></h1><p>The <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a> program receives its configuration from either the command line or from configuration files <code class=\"docutils literal notranslate\"><span class=\"pre\">~/.ssh/config</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">/etc/ssh/ssh_config</span></code>. Command-line options take precedence over configuration files. The user-specific configuration file <code class=\"docutils literal notranslate\"><span class=\"pre\">~/.ssh/config</span></code> is used next. Finally, the global <code class=\"docutils literal notranslate\"><span class=\"pre\">/etc/ssh/ssh_config</span></code> file is used.</p><p>Some commonly used configuration options:</p>"}
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
