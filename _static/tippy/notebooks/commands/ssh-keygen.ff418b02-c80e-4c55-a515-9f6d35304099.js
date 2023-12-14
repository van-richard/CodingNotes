selector_to_html = {"a[href=\"#ssh-keygen-make-ssh-key\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">ssh-keygen</span></code> - Make SSH key<a class=\"headerlink\" href=\"#ssh-keygen-make-ssh-key\" title=\"Permalink to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">ssh-keygen</span></code> creates an RSA key pair and stores the public key in a public key file named <code class=\"docutils literal notranslate\"><span class=\"pre\">.ssh/id_rsa.pub</span></code> and a private key file named <code class=\"docutils literal notranslate\"><span class=\"pre\">.ssh/id_rsa</span></code>.</p><p>To make a key, you can type:</p>"}
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
