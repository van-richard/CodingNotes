selector_to_html = {"a[href=\"../linux.html#term-cd\"]": "<dt id=\"term-cd\"><a class=\"reference internal\" href=\"../commands/cd.html\"><span class=\"doc std std-doc\">cd</span></a></dt><dd><p>change directories</p></dd>", "a[href=\"#additional-resources\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.4.3. </span>Additional Resources<a class=\"headerlink\" href=\"#additional-resources\" title=\"Permalink to this heading\">#</a></h2><p>For more information, please refer to the following resource:</p><p><a class=\"reference external\" href=\"https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/introduction#:~:text=A%20typical%20PDB%20formatted%20file,the%20atoms%20and%20their%20coordinates.\">RCSB: Guide to Understanding PDB data</a></p>", "a[href=\"#open-the-ala-xyz-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.4.2. </span>Open the <code class=\"docutils literal notranslate\"><span class=\"pre\">ala.xyz</span></code> File<a class=\"headerlink\" href=\"#open-the-ala-xyz-file\" title=\"Permalink to this heading\">#</a></h2><p>First, open your terminal, and then change directories to where you saved the <code class=\"docutils literal notranslate\"><span class=\"pre\">ala.xyz</span></code>. Since I saved them to my <code class=\"docutils literal notranslate\"><span class=\"pre\">~/Desktop/</span></code>, I will <a class=\"reference internal\" href=\"../linux.html#term-cd\"><span class=\"xref std std-term\">cd</span></a> there, and use <a class=\"reference internal\" href=\"../linux.html#term-less\"><span class=\"xref std std-term\">less</span></a> to view <code class=\"docutils literal notranslate\"><span class=\"pre\">ala.xyz</span></code>:</p>", "a[href=\"../linux.html#term-less\"]": "<dt id=\"term-less\"><a class=\"reference internal\" href=\"../commands/less.html\"><span class=\"doc std std-doc\">less</span></a></dt><dd><p>view files</p></dd>", "a[href=\"#what-are-xyz-files\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.4. </span>What are XYZ Files?<a class=\"headerlink\" href=\"#what-are-xyz-files\" title=\"Permalink to this heading\">#</a></h1><p>The XYZ file format is a text-file format. Unlike PDB files, there is no formal standard and several variations exist. However, a typical XYZ format specifies the molecule geometry by giving the number of atoms with Cartesian coordinates that will be read on the first line, a comment on the second, and the lines of atomic coordinates in the following lines.</p><p>Typically, we use these files to store molecular geometries in Quantum Mechanical (QM) calculations. These files generally contain up to a few hundred atoms. For example, let\u2019s build the small molecule alanine dipeptide, and store this data in <code class=\"docutils literal notranslate\"><span class=\"pre\">.xyz</span></code>.</p>", "a[href=\"#example-with-alanine-dipeptide\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.4.1. </span>Example with Alanine Dipeptide<a class=\"headerlink\" href=\"#example-with-alanine-dipeptide\" title=\"Permalink to this heading\">#</a></h2><p>Alanine dipeptide is the amino acid, Alanine, with the N-/C-terminal capped by an N-acetyl and N\u2032-methylamide to neutralize the charges. First we will build alanine dipeptide via IQmol, then save the structure as <code class=\"docutils literal notranslate\"><span class=\"pre\">ala.xyz</span></code>:</p>"}
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
