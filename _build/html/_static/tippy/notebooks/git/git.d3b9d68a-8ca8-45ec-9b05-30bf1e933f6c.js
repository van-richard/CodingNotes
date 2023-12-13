selector_to_html = {"a[href=\"#copy-repository-from-github\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Copy repository from GitHub<a class=\"headerlink\" href=\"#copy-repository-from-github\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#git\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">git<a class=\"headerlink\" href=\"#git\" title=\"Permalink to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">git</span></code> is a version control system.\n<code class=\"docutils literal notranslate\"><span class=\"pre\">git</span></code> helps you keep track of code changes.\n<code class=\"docutils literal notranslate\"><span class=\"pre\">git</span></code> is used to collaborate on code.</p><p><a class=\"reference external\" href=\"https://github.com\">GitHub</a> is a cloud-based hosting service that lets you manage <code class=\"docutils literal notranslate\"><span class=\"pre\">git</span></code> repositories. If you have open-source projects that use <code class=\"docutils literal notranslate\"><span class=\"pre\">git</span></code>, then GitHub is designed to help you better manage them.</p>", "a[href=\"#basics\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Basics<a class=\"headerlink\" href=\"#basics\" title=\"Permalink to this heading\">#</a></h2><h3>Copy repository from GitHub<a class=\"headerlink\" href=\"#copy-repository-from-github\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#commands\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Commands<a class=\"headerlink\" href=\"#commands\" title=\"Permalink to this heading\">#</a></h2><p>Quickly check available commands</p>", "a[href=\"#push-your-changes\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Push your changes<a class=\"headerlink\" href=\"#push-your-changes\" title=\"Permalink to this heading\">#</a></h3><p>Make sure you update your copy first with:</p>"}
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
