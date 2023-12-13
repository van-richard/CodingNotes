selector_to_html = {"a[href=\"#term-environment\"]": "<dt id=\"term-environment\">environment</dt><dd><p>The current state of your shell</p></dd>", "a[href=\"#term-command\"]": "<dt id=\"term-command\">command</dt><dd><p>Word or some alphabetical-combination that contains instructions to be carried out by the computer</p></dd>", "a[href=\"#term-Command-Line-Interface-CLI\"]": "<dt id=\"term-Command-Line-Interface-CLI\">Command Line Interface (CLI)</dt><dd><p>A computer program that takes text-based input to perform a task, operation, or action</p></dd>", "a[href=\"#term-interactive-prompt\"]": "<dt id=\"term-interactive-prompt\">interactive prompt</dt><dd><p>A programming appraoch where commands are typed line by line, or command by command. The code is executed immediately</p></dd>", "a[href=\"#term-script\"]": "<dt id=\"term-script\">script</dt><dd><p>File contaning a sequence of commands a program</p></dd>", "a[href=\"#term-terminal\"]": "<dt id=\"term-terminal\">terminal</dt><dd><p>Application to interact with computers by typing our desired action. Most of the time, you can\u2019t use a mouse.</p></dd>", "a[href=\"#term-shell\"]": "<dt id=\"term-shell\">shell</dt><dd><p>Program that provides structure in the command line interface. Has preset definitions for commands. Different shell programs may have minor differences in commands and workflows. I use the shell, bash, but there is also: \u201cfish, zsh, ksh, sh, tsch, Power Shell, or pwsh\u201d</p></dd>", "a[href=\"#term-scripts\"]": "<dt id=\"term-scripts\">scripts</dt><dd><p>Files contaning a sequence of commands a program</p></dd>", "a[href=\"#term-Graphical-User-Interface-GUI\"]": "<dt id=\"term-Graphical-User-Interface-GUI\">Graphical User Interface (GUI)</dt><dd><p>Programs with pictures, buttons, and would probably require your mouse</p></dd>"}
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
