selector_to_html = {"a[href=\"#generate-keys\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Generate Keys<a class=\"headerlink\" href=\"#generate-keys\" title=\"Permalink to this heading\">#</a></h2><p>Start on your local computer in your home directory.</p><p>Use the command, <a class=\"reference internal\" href=\"../linux.html#term-ssh-keygen\"><span class=\"xref std std-term\">ssh-keygen</span></a>, for authentication key generation, management and conversion:</p>", "a[href=\"#automate-ssh-login\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Automate <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a> Login<a class=\"headerlink\" href=\"#automate-ssh-login\" title=\"Permalink to this heading\">#</a></h1><p>Having to enter your password every time you log into a supercomputer and transfer files can become tedious. However, we can log into a supercomputer without the need to enter your password (<em>safely and securely</em>)!</p><p>To do this, we will make a <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a> key. This key is an access credential for the <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a> network protocol. This authenticated and encrypted secure network protocol is used for remote communication between machines on an unsecured open network. <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a> uses a pair of keys to initiate a secure handshake between the remote parties.</p>", "a[href=\"../linux.html#term-ssh\"]": "<dt id=\"term-ssh\"><a class=\"reference internal\" href=\"../commands/ssh.html\"><span class=\"doc std std-doc\">ssh</span></a></dt><dd><p>secure shell protocol</p></dd>", "a[href=\"../linux.html#term-ssh-keygen\"]": "<dt id=\"term-ssh-keygen\"><a class=\"reference internal\" href=\"../commands/ssh-keygen.html\"><span class=\"doc std std-doc\">ssh-keygen</span></a></dt><dd><p>keygen`</p></dd>"}
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
