selector_to_html = {"a[href=\"#python-conda\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Python &amp; Conda<a class=\"headerlink\" href=\"#python-conda\" title=\"Permalink to this heading\">#</a></h1><p>Python is a programming language we all use day-to-day in data analysis, machine learning, and figure/movie-making!</p>", "a[href=\"../Jargon.html#term-miniforge\"]": "<dt id=\"term-miniforge\">miniforge</dt><dd><p><a class=\"reference external\" href=\"https://github.com/conda-forge/miniforge\">A smol but slightly faster snake</a></p><p>Small like <a class=\"reference internal\" href=\"#term-miniconda\"><span class=\"xref std std-term\">miniconda</span></a>, but the community (conda-forge) driven minimalistic conda installer.</p><p><strong>Most of us in the lab use this.</strong></p></dd>"}
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
