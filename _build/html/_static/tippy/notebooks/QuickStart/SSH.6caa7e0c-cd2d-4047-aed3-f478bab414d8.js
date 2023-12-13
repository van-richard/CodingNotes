selector_to_html = {"a[href=\"../linux.html#term-scp\"]": "<dt id=\"term-scp\"><a class=\"reference internal\" href=\"../commands/scp.html\"><span class=\"doc std std-doc\">scp</span></a></dt><dd><p>copy files/folders over ssh</p></dd>", "a[href=\"#command-execution-with-ssh\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Command Execution with <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a><a class=\"headerlink\" href=\"#command-execution-with-ssh\" title=\"Permalink to this heading\">#</a></h2><p>What if the only thing you need to do over the SSH connection is execute a single quick command? You might not want to take the separate actions of connecting and authenticating, running the command, and then disconnecting. The <code class=\"docutils literal notranslate\"><span class=\"pre\">ssh</span></code> command allows us to execute command on remote machine without logging into that machine. Here is the general notation:</p>", "a[href=\"#accessing-the-hpc\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Accessing the HPC<a class=\"headerlink\" href=\"#accessing-the-hpc\" title=\"Permalink to this heading\">#</a></h1><p><a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a> stands for Secure Shell protocol, and this is how what it looks like!</p><p>The command looks like this</p>", "a[href=\"../linux.html#term-mv\"]": "<dt id=\"term-mv\"><a class=\"reference internal\" href=\"../commands/mv.html\"><span class=\"doc std std-doc\">mv</span></a></dt><dd><p>move files/folders from one place to another.</p></dd>", "a[href=\"../linux.html#term-ssh\"]": "<dt id=\"term-ssh\"><a class=\"reference internal\" href=\"../commands/ssh.html\"><span class=\"doc std std-doc\">ssh</span></a></dt><dd><p>secure shell protocol</p></dd>", "a[href=\"#transferring-files-folders-remotely\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Transferring Files/Folders Remotely<a class=\"headerlink\" href=\"#transferring-files-folders-remotely\" title=\"Permalink to this heading\">#</a></h2><p>Previously, we learned <a class=\"reference internal\" href=\"../linux.html#term-cp\"><span class=\"xref std std-term\">cp</span></a> and <a class=\"reference internal\" href=\"../linux.html#term-mv\"><span class=\"xref std std-term\">mv</span></a> to manage files locally on our computer. However, to copy files through <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a>, we need to use one of these 2 commands:</p>", "a[href=\"../linux.html#term-cp\"]": "<dt id=\"term-cp\"><a class=\"reference internal\" href=\"../commands/cp.html\"><span class=\"doc std std-doc\">cp</span></a></dt><dd><p>copy files or folders</p></dd>", "a[href=\"../linux.html#term-rsync\"]": "<dt id=\"term-rsync\"><a class=\"reference internal\" href=\"../commands/rsync.html\"><span class=\"doc std std-doc\">rsync</span></a></dt><dd><p>sync files/folders</p></dd>"}
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
