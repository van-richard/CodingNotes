selector_to_html = {"a[href=\"#term-XYZ-Files\"]": "<dt id=\"term-XYZ-Files\">XYZ Files</dt><dd><p>A simple and widely used file format in computational chemistry and molecular modeling. Often used to represent the three-dimensional coordinates of atoms or small molecules. The <code class=\"docutils literal notranslate\"><span class=\"pre\">.xyz</span></code> files are plain text files that contain atomic coordinates, atom types, and sometimes additional information about the system. These files are often used in Quantum Mechanics (QM) calculations!</p></dd>", "a[href=\"#what-are-xyz-files\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What are XYZ Files?<a class=\"headerlink\" href=\"#what-are-xyz-files\" title=\"Permalink to this heading\">#</a></h2><p>The XYZ file format is a text-file format. Unlike PDB files, there is no formal standard and several variations exist. However, a typical XYZ format specifies the molecule geometry by giving the number of atoms with Cartesian coordinates that will be read on the first line, a comment on the second, and the lines of atomic coordinates in the following lines.</p><p>Typically, we use these files to store molecular geometries in Quantum Mechanical (QM) calculations. These files generally contain up to a few hundred atoms. For example, let\u2019s build the small molecule alanine dipeptide, and store this data in <code class=\"docutils literal notranslate\"><span class=\"pre\">.xyz</span></code>.</p>", "a[href=\"#term-PDB-Files\"]": "<dt id=\"term-PDB-Files\">PDB Files</dt><dd><p>Protein structures are saved and shared via the <a class=\"reference external\" href=\"https://www.rcsb.org\">Protein Data Bank at the Research Collaboratory for Structural Bioinformatics (RCSB)</a> as <code class=\"docutils literal notranslate\"><span class=\"pre\">.pdb</span></code> files. These files follow a text file standard discussed later</p></dd>", "a[href=\"#molecular-structure-files\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Molecular Structure Files<a class=\"headerlink\" href=\"#molecular-structure-files\" title=\"Permalink to this heading\">#</a></h1><p>The structures of proteins and small-molecules can be solved via experimental methods, NMR, some examples include NMR, X-ray crystallography, and Cryo-EM. There are many databases for different approaches to solving molecular structures, but I will limit this dicussion to <code class=\"docutils literal notranslate\"><span class=\"pre\">.pdb</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">.xyz</span></code> files.</p>", "a[href=\"#what-are-pdb-files\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">What are PDB files?<a class=\"headerlink\" href=\"#what-are-pdb-files\" title=\"Permalink to this heading\">#</a></h2><p>These are files which contain atomic coordinates and other information which descripes biological molecules. Structural biologist use experimental methods such as X-ray crystallography, Nuclear Magnetic Resonace spectroscopy, and Cryo-electron microscopy to determine the location of atoms in the structure. The information is then deposited to a <a class=\"reference external\" href=\"https://www.org\">RCSB</a>.</p><p>Each structure will have a unique 4-letter/number code. Inside each file, the Protein Data Bank format consists of lines of information in a text file. Each line of information in the file is called a record. A file generally contains several different types of records, which are arranged in a specific order to describe a structure.</p>"}
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
