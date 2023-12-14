selector_to_html = {"a[href=\"#primitive-datatypes-and-operators\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Primitive Datatypes and Operators<a class=\"headerlink\" href=\"#primitive-datatypes-and-operators\" title=\"Permalink to this heading\">#</a></h2><p>You have numbers</p>", "a[href=\"#multiple-inheritance\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">6.2 Multiple Inheritance<a class=\"headerlink\" href=\"#multiple-inheritance\" title=\"Permalink to this heading\">#</a></h2><p>Another class definition, <code class=\"docutils literal notranslate\"><span class=\"pre\">bat.py</span></code></p>", "a[href=\"#overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Overview<a class=\"headerlink\" href=\"#overview\" title=\"Permalink to this heading\">#</a></h1><h2>Primitive Datatypes and Operators<a class=\"headerlink\" href=\"#primitive-datatypes-and-operators\" title=\"Permalink to this heading\">#</a></h2><p>You have numbers</p>", "a[href=\"#classes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">5. Classes<a class=\"headerlink\" href=\"#classes\" title=\"Permalink to this heading\">#</a></h2><p>We use the \u201cclass\u201d statement to create a class</p>", "a[href=\"#variables-and-collections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">2. Variables and Collections<a class=\"headerlink\" href=\"#variables-and-collections\" title=\"Permalink to this heading\">#</a></h2><p>Python has a print function</p>", "a[href=\"#functions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">4. Functions<a class=\"headerlink\" href=\"#functions\" title=\"Permalink to this heading\">#</a></h2><p>Use \u201cdef\u201d to create new functions</p>", "a[href=\"#inheritance\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">6.1 Inheritance<a class=\"headerlink\" href=\"#inheritance\" title=\"Permalink to this heading\">#</a></h2><p>Inheritance allows new child classes to be defined that inherit methods and variables from their parent class.</p><p>Using the Human class defined above as the base or parent class, we can define a child class, Superhero, which inherits the class variables like \u201cspecies\u201d, \u201cname\u201d, and \u201cage\u201d, as well as methods, like \u201csing\u201d and \u201cgrunt\u201d from the Human class, but can also have its own unique properties.</p>", "a[href=\"#decorators\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Decorators<a class=\"headerlink\" href=\"#decorators\" title=\"Permalink to this heading\">#</a></h3><p>In this example <code class=\"docutils literal notranslate\"><span class=\"pre\">beg</span></code> wraps <code class=\"docutils literal notranslate\"><span class=\"pre\">say</span></code>. If say_please is True then it will change the returned message.</p>", "a[href=\"#control-flow-and-iterables\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">3. Control Flow and Iterables<a class=\"headerlink\" href=\"#control-flow-and-iterables\" title=\"Permalink to this heading\">#</a></h2><p>Let\u2019s just make a variable</p>", "a[href=\"#advanced\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">7. Advanced<a class=\"headerlink\" href=\"#advanced\" title=\"Permalink to this heading\">#</a></h2><p>Generators help you make lazy code.</p>"}
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
