selector_to_html = {"a[href=\"#amber\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Amber<a class=\"headerlink\" href=\"#amber\" title=\"Permalink to this heading\">#</a></h2><p><em>Check if everything is properly linked.</em></p>", "a[href=\"#compiling-amber\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Compiling Amber<a class=\"headerlink\" href=\"#compiling-amber\" title=\"Permalink to this heading\">#</a></h1><p>Amber + QMhub + Torchmd-net</p><p>Compile Amber for QM/MM simulations with QMhub and Torchmd-net.</p>", "a[href=\"#create-conda-environment\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Create Conda Environment<a class=\"headerlink\" href=\"#create-conda-environment\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<div class=\"literal-block-wrapper docutils container\" id=\"id1\">\n<div class=\"code-block-caption\"><span class=\"caption-number\">Listing 4 </span><span class=\"caption-text\">run_cmake</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this code\">#</a></div>\n<div class=\"highlight-bash notranslate\"><div class=\"highlight\"><pre><span></span><span class=\"w\">  </span>cmake<span class=\"w\"> </span><span class=\"nv\">$AMBER_PREFIX</span>/amber22_src<span class=\"w\"> </span><span class=\"se\">\\</span>\n<span class=\"w\">    </span>-DCMAKE_INSTALL_PREFIX<span class=\"o\">=</span>/scratch/van/.Programs/amber22<span class=\"w\"> </span><span class=\"se\">\\</span>\n<span class=\"w\">    </span>-DCOMPILER<span class=\"o\">=</span>INTEL<span class=\"w\"> </span><span class=\"se\">\\</span>\n<span class=\"w\">    </span>-DMPI<span class=\"o\">=</span>FALSE<span class=\"w\"> </span>-DCUDA<span class=\"o\">=</span>FALSE<span class=\"w\"> </span>-DINSTALL_TESTS<span class=\"o\">=</span>FALSE<span class=\"w\"> </span><span class=\"se\">\\</span>\n<span class=\"w\">    </span>-DFORCE_EXTERNAL_LIB<span class=\"o\">=</span>mkl<span class=\"w\"> </span><span class=\"se\">\\</span>\n<span class=\"w\">    </span>-DDOWNLOAD_MINICONDA<span class=\"o\">=</span>FALSE<span class=\"w\"> </span>-DBUILD_PYTHON<span class=\"o\">=</span>FALSE<span class=\"w\"> </span><span class=\"se\">\\</span>\n<span class=\"w\">    </span><span class=\"m\">2</span>&gt;<span class=\"p\">&amp;</span><span class=\"m\">1</span><span class=\"w\"> </span><span class=\"p\">|</span><span class=\"w\"> </span>tee<span class=\"w\">  </span>cmake.log\n</pre></div>\n</div>\n</div>"}
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
