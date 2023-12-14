selector_to_html = {"a[href=\"#slurm\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">SLURM<a class=\"headerlink\" href=\"#slurm\" title=\"Permalink to this heading\">#</a></h2><p>Job management on HPC</p>", "a[href=\"#ssh\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">ssh<a class=\"headerlink\" href=\"#ssh\" title=\"Permalink to this heading\">#</a></h2><p>Remote logins</p>", "a[href=\"#slurm-ssh\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">SLURM &amp; ssh<a class=\"headerlink\" href=\"#slurm-ssh\" title=\"Permalink to this heading\">#</a></h1><h2>SLURM<a class=\"headerlink\" href=\"#slurm\" title=\"Permalink to this heading\">#</a></h2><p>Job management on HPC</p>"}
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
