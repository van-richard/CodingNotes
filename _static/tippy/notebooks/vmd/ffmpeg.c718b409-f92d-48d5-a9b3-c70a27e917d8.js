selector_to_html = {"a[href=\"#ffmpeg\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">ffmpeg<a class=\"headerlink\" href=\"#ffmpeg\" title=\"Permalink to this heading\">#</a></h1><p><a class=\"reference external\" href=\"https://ffmpeg.org\">ffmpeg Download</a></p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">ffmpeg</span></code> can convert image files to a video. Download the program, and add this to your <code class=\"docutils literal notranslate\"><span class=\"pre\">~/Programs</span></code> folder.</p>"}
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
