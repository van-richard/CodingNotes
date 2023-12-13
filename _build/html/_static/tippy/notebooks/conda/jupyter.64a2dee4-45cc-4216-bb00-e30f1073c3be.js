selector_to_html = {"a[href=\"#jupyter-notebooks\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Jupyter Notebooks<a class=\"headerlink\" href=\"#jupyter-notebooks\" title=\"Permalink to this heading\">#</a></h1><p>The Jupyter Notebook App is a server-client application that allows editing and running notebook documents via a web browser. The Jupyter Notebook App can be executed on a local desktop requiring no internet access (as described in this document) or can be installed on a remote server and accessed through the internet.</p><p>In addition to displaying/editing/running notebook documents, the Jupyter Notebook App has a \u201cDashboard\u201d (Notebook Dashboard), a \u201ccontrol panel\u201d showing local files and allowing to open notebook documents or shutting down their kernels.</p>", "a[href=\"#switch-conda-environments\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Switch Conda Environments<a class=\"headerlink\" href=\"#switch-conda-environments\" title=\"Permalink to this heading\">#</a></h2><p>You can switch conda environments within <code class=\"docutils literal notranslate\"><span class=\"pre\">jupyterlab</span></code> if you install <code class=\"docutils literal notranslate\"><span class=\"pre\">nb_conda_kernels</span></code> into your <code class=\"docutils literal notranslate\"><span class=\"pre\">base</span></code> conda environment.</p>", "a[href=\"#what-are-kernals\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What are Kernals?<a class=\"headerlink\" href=\"#what-are-kernals\" title=\"Permalink to this heading\">#</a></h2><p>A notebook kernel is a \u201ccomputational engine\u201d that executes the code contained in a Notebook document. The ipython kernel, referenced in this guide, executes python code. Kernels for many other languages exist (official kernels).</p><p>When you open a Notebook document, the associated kernel is automatically launched. When the notebook is executed (either cell-by-cell or with menu Cell -&gt; Run All), the kernel performs the computation and produces the results. Depending on the type of computations, the kernel may consume significant CPU and RAM. Note that the RAM is not released until the kernel is shut-down.</p>"}
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
