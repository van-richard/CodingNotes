selector_to_html = {"a[href=\"#remote-login\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3.1. </span>Remote Login<a class=\"headerlink\" href=\"#remote-login\" title=\"Permalink to this heading\">#</a></h2><p>Accessing the supercomputer can be done on your laptop, in the comfort of your bed. The command is <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a>, which stands for \u201cSecure Shell protocol\u201d.</p><p>It has the following format:</p>", "a[href=\"#what-is-the-hostname\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3.2. </span>What is the <em>hostname</em>?<a class=\"headerlink\" href=\"#what-is-the-hostname\" title=\"Permalink to this heading\">#</a></h2><p>It depends on the computing center. In Oklahoma, you can access Oscer (<code class=\"docutils literal notranslate\"><span class=\"pre\">schooner.oscer.ou.edu</span></code>) or Pete (<code class=\"docutils literal notranslate\"><span class=\"pre\">pete.hpc.okstate.edu</span></code>) by:</p>", "a[href=\"#task-accessing-the-hpc\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3.3. </span>Task: Accessing the HPC<a class=\"headerlink\" href=\"#task-accessing-the-hpc\" title=\"Permalink to this heading\">#</a></h2><p>Try logging into one of the supercomputer. Change the <code class=\"docutils literal notranslate\"><span class=\"pre\">hostname</span></code> to the <code class=\"docutils literal notranslate\"><span class=\"pre\">pete.hpc.okstate.edu</span></code> or ``schooner.oscer.ou.edu`.</p><p>My username is <code class=\"docutils literal notranslate\"><span class=\"pre\">van</span></code>, so logging in looks like this:</p>", "a[href=\"../linux.html#term-ssh\"]": "<dt id=\"term-ssh\"><a class=\"reference internal\" href=\"../commands/ssh.html\"><span class=\"doc std std-doc\">ssh</span></a></dt><dd><p>secure shell protocol</p></dd>", "a[href=\"#accessing-the-hpc\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3. </span>Accessing the HPC<a class=\"headerlink\" href=\"#accessing-the-hpc\" title=\"Permalink to this heading\">#</a></h1><h2><span class=\"section-number\">2.3.1. </span>Remote Login<a class=\"headerlink\" href=\"#remote-login\" title=\"Permalink to this heading\">#</a></h2><p>Accessing the supercomputer can be done on your laptop, in the comfort of your bed. The command is <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a>, which stands for \u201cSecure Shell protocol\u201d.</p><p>It has the following format:</p>"}
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
