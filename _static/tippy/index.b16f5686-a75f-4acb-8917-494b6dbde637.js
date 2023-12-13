selector_to_html = {"a[href=\"#codingnotes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CodingNotes<a class=\"headerlink\" href=\"#codingnotes\" title=\"Permalink to this heading\">#</a></h1><h2>Notes I wish I had showed me when I started<a class=\"headerlink\" href=\"#notes-i-wish-i-had-showed-me-when-i-started\" title=\"Permalink to this heading\">#</a></h2><p>This collection was an attempt to consolidated my experiences in computational chemistry. Entering the field with no background in mathematics or computers, a lot was learned through trial and error. Despite these shortcomings, I am forever grateful to the exceptional guidance and continued support of Dr. Genwei Zhang, Dr. Zheng Pei, Dr. Xiaoliang Pan, and Dr. Yihan Shao.</p><p>I hope many of you will find this information useful in your future endeavors.</p>", "a[href=\"#notes-i-wish-i-had-showed-me-when-i-started\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Notes I wish I had showed me when I started<a class=\"headerlink\" href=\"#notes-i-wish-i-had-showed-me-when-i-started\" title=\"Permalink to this heading\">#</a></h2><p>This collection was an attempt to consolidated my experiences in computational chemistry. Entering the field with no background in mathematics or computers, a lot was learned through trial and error. Despite these shortcomings, I am forever grateful to the exceptional guidance and continued support of Dr. Genwei Zhang, Dr. Zheng Pei, Dr. Xiaoliang Pan, and Dr. Yihan Shao.</p><p>I hope many of you will find this information useful in your future endeavors.</p>", "a[href=\"notebooks/QuickStart/Overview.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Overview<a class=\"headerlink\" href=\"#overview\" title=\"Permalink to this heading\">#</a></h1><p>To those with no background in programming, there is a lot to take in. So don\u2019t rush it, and ask questions!</p><p><strong>Objective:</strong> Get comfortable with:</p>"}
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
