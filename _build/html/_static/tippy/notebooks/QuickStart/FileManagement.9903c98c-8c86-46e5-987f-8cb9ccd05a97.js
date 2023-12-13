selector_to_html = {"a[href=\"#moving-files-folders-renaming-files-folders\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Moving Files/Folders &amp; Renaming Files/Folders<a class=\"headerlink\" href=\"#moving-files-folders-renaming-files-folders\" title=\"Permalink to this heading\">#</a></h2><p>Yes. They are the same command, <a class=\"reference internal\" href=\"../linux.html#term-mv\"><span class=\"xref std std-term\">mv</span></a>. The notation for <a class=\"reference internal\" href=\"../linux.html#term-mv\"><span class=\"xref std std-term\">mv</span></a> is the same as <a class=\"reference internal\" href=\"../linux.html#term-cp\"><span class=\"xref std std-term\">cp</span></a>!</p>", "a[href=\"../linux.html#term-rm\"]": "<dt id=\"term-rm\"><a class=\"reference internal\" href=\"../commands/rm.html\"><span class=\"doc std std-doc\">rm</span></a></dt><dd><p>delete files</p></dd>", "a[href=\"../linux.html#term-mv\"]": "<dt id=\"term-mv\"><a class=\"reference internal\" href=\"../commands/mv.html\"><span class=\"doc std std-doc\">mv</span></a></dt><dd><p>move files/folders from one place to another.</p></dd>", "a[href=\"#deleting-files-folders\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Deleting Files/Folders<a class=\"headerlink\" href=\"#deleting-files-folders\" title=\"Permalink to this heading\">#</a></h2><p><a class=\"reference internal\" href=\"../linux.html#term-rm\"><span class=\"xref std std-term\">rm</span></a> is used to delete files/folders, and is written like <a class=\"reference internal\" href=\"../linux.html#term-cp\"><span class=\"xref std std-term\">cp</span></a> and <a class=\"reference internal\" href=\"../linux.html#term-mv\"><span class=\"xref std std-term\">mv</span></a></p>", "a[href=\"../linux.html#term-cp\"]": "<dt id=\"term-cp\"><a class=\"reference internal\" href=\"../commands/cp.html\"><span class=\"doc std std-doc\">cp</span></a></dt><dd><p>copy files or folders</p></dd>", "a[href=\"#files-in-terminal\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Files in Terminal<a class=\"headerlink\" href=\"#files-in-terminal\" title=\"Permalink to this heading\">#</a></h1><p>Your mouse does not work in the way you expect with the command line interface\u2026</p><p>Using the terminal means you need to learn how to to communicate with the computer through <strong>commands</strong>.</p>", "a[href=\"#copying-files-folders\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Copying Files/Folders<a class=\"headerlink\" href=\"#copying-files-folders\" title=\"Permalink to this heading\">#</a></h2><p>To copy files, you use the command, <a class=\"reference internal\" href=\"../linux.html#term-cp\"><span class=\"xref std std-term\">cp</span></a>, where you include the file or folder you want to copy followed by the path you want the copy to go!</p>"}
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
