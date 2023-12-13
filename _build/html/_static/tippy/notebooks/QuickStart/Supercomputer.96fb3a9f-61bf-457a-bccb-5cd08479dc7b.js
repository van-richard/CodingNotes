selector_to_html = {"a[href=\"../linux.html#term-ssh\"]": "<dt id=\"term-ssh\"><a class=\"reference internal\" href=\"../commands/ssh.html\"><span class=\"doc std std-doc\">ssh</span></a></dt><dd><p>secure shell protocol</p></dd>", "a[href=\"#what-is-ssh\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What is <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a>?<a class=\"headerlink\" href=\"#what-is-ssh\" title=\"Permalink to this heading\">#</a></h2><p>To login remotely to a supercomputer, we use the command <a class=\"reference internal\" href=\"../linux.html#term-ssh\"><span class=\"xref std std-term\">ssh</span></a> on the terminal. This is short for secure shell protocol and can take a few arguments. The syntax is <code class=\"docutils literal notranslate\"><span class=\"pre\">ssh</span> <span class=\"pre\">[username]@ssh.server.example.edu</span></code>.</p><p>First, open your terminal, and follow the directions for Oscer or Pete SSH. Change the <code class=\"docutils literal notranslate\"><span class=\"pre\">[username]</span></code> part, to the username you created!!</p>", "a[href=\"../Jargon.html#term-Slurm\"]": "<dt id=\"term-Slurm\">Slurm</dt><dd><p>Job management system on some supercompters.</p></dd>", "a[href=\"#supercomputers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Supercomputers<a class=\"headerlink\" href=\"#supercomputers\" title=\"Permalink to this heading\">#</a></h1><p>In simple terms, they are like giant, powerful versions of regular computers, much larger and involve many more parts. They can take up entire rooms or even buildings. Inside these machines, you\u2019ll find thousands or even millions of smaller computer processors (like the brain of the computer) and a lot of memory (like the computer\u2019s short-term memory). Think of these processors as workers and the memory as their workspace.</p><p>In Oklahoma, we have access to 2 supercomputers:</p>", "a[href=\"#what-is-slurm\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What is <a class=\"reference internal\" href=\"../Jargon.html#term-Slurm\"><span class=\"xref std std-term\">Slurm</span></a>?<a class=\"headerlink\" href=\"#what-is-slurm\" title=\"Permalink to this heading\">#</a></h2><p>Since high-performace computing centers are composed of many parts (CPU, GPU, RAM, SSD, HDD, etc.), involving many different users (biological science, machine learning, etc.) with different needs. They require a job scheduling and resource management system. One system is Slurm.</p><p>Slurm is like a traffic cop for computers. It\u2019s a software system used in big computer clusters, like those in data centers or supercomputers. Slurm helps manage and allocate the computing resources, like processors and memory, to different tasks or jobs that people want to run on the cluster.</p>"}
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
