selector_to_html = {"a[href=\"../conda/myenv.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">My recommended Conda Setup<a class=\"headerlink\" href=\"#my-recommended-conda-setup\" title=\"Permalink to this heading\">#</a></h1><h2>My List<a class=\"headerlink\" href=\"#my-list\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#directories-flow-structure-organization\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Directories: Flow, Structure, &amp; Organization<a class=\"headerlink\" href=\"#directories-flow-structure-organization\" title=\"Permalink to this heading\">#</a></h2><p>Strongly recommend for a project folder to be organized like this schematic.</p>", "a[href=\"#automate-the-umbrella-windows\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Automate the Umbrella Windows<a class=\"headerlink\" href=\"#automate-the-umbrella-windows\" title=\"Permalink to this heading\">#</a></h2><p>Go back one directory to the <code class=\"docutils literal notranslate\"><span class=\"pre\">pm3/</span></code> folder</p>", "a[href=\"#notation-of-cv-rst\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Notation of <code class=\"docutils literal notranslate\"><span class=\"pre\">cv.rst</span></code><a class=\"headerlink\" href=\"#notation-of-cv-rst\" title=\"Permalink to this heading\">#</a></h3><p>Using all of that information, we can make the refernce file for <code class=\"docutils literal notranslate\"><span class=\"pre\">cv.rst</span></code>. The file looks like this:</p>", "a[href=\"#qm-mm-md-input-files\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">QM/MM MD Input files<a class=\"headerlink\" href=\"#qm-mm-md-input-files\" title=\"Permalink to this heading\">#</a></h3><p>We need at leat 2 MD input files. The first file (<code class=\"docutils literal notranslate\"><span class=\"pre\">step5.00_equilibration.mdin</span></code>) is for simulating the initial pathway, and only runs for a few picoseconds. The second file (<code class=\"docutils literal notranslate\"><span class=\"pre\">step6.00_equilibration.mdin</span></code>) is will restart from the previous <code class=\"docutils literal notranslate\"><span class=\"pre\">step5.00_equilibration.ncrst</span></code> for additional 10 ps.</p><p>The general format of a QM/MM MD input file differs from classical MD with the <code class=\"docutils literal notranslate\"><span class=\"pre\">&amp;qmmm</span></code> section.</p>", "a[href=\"#reference-files-to-input-directory\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Reference Files to <code class=\"docutils literal notranslate\"><span class=\"pre\">input/</span></code> Directory<a class=\"headerlink\" href=\"#reference-files-to-input-directory\" title=\"Permalink to this heading\">#</a></h2><p>Make the <code class=\"docutils literal notranslate\"><span class=\"pre\">input</span></code> directory. This is where we will store the PDB files and generate Amber inputs. Go into the folder, and use <code class=\"docutils literal notranslate\"><span class=\"pre\">pwd</span></code> to print the current working directory. We will copthe the output from <code class=\"docutils literal notranslate\"><span class=\"pre\">pwd</span></code> for our <code class=\"docutils literal notranslate\"><span class=\"pre\">scp</span></code> command later.</p>", "a[href=\"#running-the-qm-mm-simulations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Running the QM/MM Simulations<a class=\"headerlink\" href=\"#running-the-qm-mm-simulations\" title=\"Permalink to this heading\">#</a></h2><p>We have 2 files to make.</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../_images/iqmol_claisen.mov\"><img alt=\"../../_images/iqmol_claisen.mov\" src=\"../../_images/iqmol_claisen.mov\" style=\"width: 50%;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 5 </span><span class=\"caption-text\">Using IQmol to make the allyl vinyl ester PDB file.</span><a class=\"headerlink\" href=\"#id2\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#free-energy-profile-with-mbar\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Free Energy Profile with MBAR<a class=\"headerlink\" href=\"#free-energy-profile-with-mbar\" title=\"Permalink to this heading\">#</a></h2><p>To do this part, you need to:</p>", "a[href=\"#generate-parameters-for-allyl-vinyl-ether\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Generate Parameters for Allyl Vinyl Ether<a class=\"headerlink\" href=\"#generate-parameters-for-allyl-vinyl-ether\" title=\"Permalink to this heading\">#</a></h3><p>Since this is a simulation of a small molecule, we do not have Amber force field parameters for it.</p><p>To make a Amber topology and coordinate file for a small molecule, we need to:</p>", "a[href=\"#prepare-project-folder-on-the-cluster\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Prepare Project Folder on the Cluster<a class=\"headerlink\" href=\"#prepare-project-folder-on-the-cluster\" title=\"Permalink to this heading\">#</a></h2><p>Login to Pete with <code class=\"docutils literal notranslate\"><span class=\"pre\">ssh</span></code>:</p>", "a[href=\"#restraint-files-cv-rst\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Restraint Files <code class=\"docutils literal notranslate\"><span class=\"pre\">cv.rst</span></code><a class=\"headerlink\" href=\"#restraint-files-cv-rst\" title=\"Permalink to this heading\">#</a></h3><p>A restraint file (<code class=\"docutils literal notranslate\"><span class=\"pre\">cv.rst</span></code>) contains information about the parameters for each umbrella window.</p><p>The Amber protein has a lot of different restraints you can try, but for this reaction, we want to keep the bias on the bond breaking and bonding forming.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../_images/claisen.mp4\"><video src=\"../../_images/claisen.mp4\" title=\"../../_images/claisen.mp4\" width=\"50%\"><a href=\"../../_images/claisen.mp4\">../../_images/claisen.mp4</a></video></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 4 </span><span class=\"caption-text\">Trajectory of the claisen rearrangement reaction, allyl vinyl ether is shown in ball-and-stick, and the trajectory was viewed on VMD.</span><a class=\"headerlink\" href=\"#id1\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#visualize-the-trajectories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Visualize the Trajectories<a class=\"headerlink\" href=\"#visualize-the-trajectories\" title=\"Permalink to this heading\">#</a></h2><p>Prep some stuff from vmd here or converting</p>", "a[href=\"#simple-qm-mm-simulation-of-the-claisen-rearrangment-reaction\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Simple QM/MM Simulation of the Claisen Rearrangment Reaction<a class=\"headerlink\" href=\"#simple-qm-mm-simulation-of-the-claisen-rearrangment-reaction\" title=\"Permalink to this heading\">#</a></h1><p>In this tutorial, we will perform a QM/MM simulation of the claisen rearrangement reaction in Amber.</p><p>We will study the reaction under implicit solvent, where all ligand atoms included into the QM region, defined by the PM3 semi-empirical method. Umbrella Sampling will be used to explore the reaction coordinate and MBAR to to obtain the free energy profile.</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../_images/iqmol_claisen_num.png\"><img alt=\"../../_images/iqmol_claisen_num.png\" src=\"../../_images/iqmol_claisen_num.png\" style=\"width: 50%;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 6 </span><span class=\"caption-text\">Open  the file, step3_pbcsetup.pdb, you made with tleap. This PDB file is made by amber so the atom numbers also correspond to the topology and cooridnate files.</span><a class=\"headerlink\" href=\"#id3\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#use-iqmol-to-make-an-allyl-vinyl-ether-pdb\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Use IQmol to Make an <code class=\"docutils literal notranslate\"><span class=\"pre\">allyl_vinyl_ether.pdb</span></code><a class=\"headerlink\" href=\"#use-iqmol-to-make-an-allyl-vinyl-ether-pdb\" title=\"Permalink to this heading\">#</a></h2><p>Use IQmol to make a model of allyl vinyl ether, and save the file as <code class=\"docutils literal notranslate\"><span class=\"pre\">allyl_vinyl_ether.pdb</span></code>, remember to:</p>"}
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