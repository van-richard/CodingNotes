selector_to_html = {"a[href=\"notebooks/bash/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">bash Shell<a class=\"headerlink\" href=\"#bash-shell\" title=\"Permalink to this heading\">#</a></h1><p>First line of the script is the shebang which tells the system how to execute the script:</p><p><a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Shebang_(Unix)\">Shebang</a></p>", "a[href=\"notebooks/python/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Python &amp; Conda<a class=\"headerlink\" href=\"#python-conda\" title=\"Permalink to this heading\">#</a></h1><h2>Python<a class=\"headerlink\" href=\"#python\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#codingnotes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CodingNotes<a class=\"headerlink\" href=\"#codingnotes\" title=\"Permalink to this heading\">#</a></h1><p><strong>Notes I wish I had showed me when I started</strong></p>", "a[href=\"notebooks/hpc/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">SLURM &amp; ssh<a class=\"headerlink\" href=\"#slurm-ssh\" title=\"Permalink to this heading\">#</a></h1><h2>SLURM<a class=\"headerlink\" href=\"#slurm\" title=\"Permalink to this heading\">#</a></h2><p>Job management on HPC</p>", "a[href=\"notebooks/git/overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Github &amp; git<a class=\"headerlink\" href=\"#github-git\" title=\"Permalink to this heading\">#</a></h1><h2>Github<a class=\"headerlink\" href=\"#github\" title=\"Permalink to this heading\">#</a></h2><p>Website</p>"}
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
