selector_to_html = {"a[href=\"#exporting-environments-to-a-yml-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Exporting environments to a YML file.<a class=\"headerlink\" href=\"#exporting-environments-to-a-yml-file\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#creating-new-environments\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Creating New Environments<a class=\"headerlink\" href=\"#creating-new-environments\" title=\"Permalink to this heading\">#</a></h2><p>A new conda environment can be created with <code class=\"docutils literal notranslate\"><span class=\"pre\">create</span></code>, and you can specifiy the version of python!</p>", "a[href=\"#leaving-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Leaving Environment<a class=\"headerlink\" href=\"#leaving-environment\" title=\"Permalink to this heading\">#</a></h2><p>Use <code class=\"docutils literal notranslate\"><span class=\"pre\">deactivate</span></code> if you want to leave or switch to a different conda environment</p>", "a[href=\"#conda-environments\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Conda Environments<a class=\"headerlink\" href=\"#conda-environments\" title=\"Permalink to this heading\">#</a></h1><h2>Creating New Environments<a class=\"headerlink\" href=\"#creating-new-environments\" title=\"Permalink to this heading\">#</a></h2><p>A new conda environment can be created with <code class=\"docutils literal notranslate\"><span class=\"pre\">create</span></code>, and you can specifiy the version of python!</p>", "a[href=\"#deleting-conda-environments-and-related-packages\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Deleting conda environments and related packages.<a class=\"headerlink\" href=\"#deleting-conda-environments-and-related-packages\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#list-available-environments\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">List available environments.<a class=\"headerlink\" href=\"#list-available-environments\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#installing-a-conda-environment-from-a-yml-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Installing a Conda environment from a YML file.<a class=\"headerlink\" href=\"#installing-a-conda-environment-from-a-yml-file\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#list-packages-within-an-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">List packages within an environment.<a class=\"headerlink\" href=\"#list-packages-within-an-environment\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#running-the-new-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Running the new environment.<a class=\"headerlink\" href=\"#running-the-new-environment\" title=\"Permalink to this heading\">#</a></h2><p>In your new activated environment, you can now install needed packages.</p>"}
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
