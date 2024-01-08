<style>
  .gradient-custom {
    /* fallback for old browsers */
    /* background: #a18cd1; */

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
      45deg,
      rgba(29, 236, 197, 0.6),
      rgba(91, 14, 214, 0.6) 100%
    );

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
      45deg,
      rgba(29, 236, 197, 0.6),
      rgba(91, 14, 214, 0.6) 100%
    );
  }
</style>

<!-- Background image -->
<div
  class="bg-image"
  style="
    background-image: url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/011.webp');
    height: 100vh;
  "
>
  <div class="mask gradient-custom">
    <div class="d-flex justify-content-center align-items-center h-100">
      <h1 class="text-white mb-0">Page title</h1>
    </div>
  </div>
</div>
<!-- Background image -->

# CodingNotes

**Notes I wish I had showed me when I started**

:::{figure} https://raw.githubusercontent.com/van-richard/CodingNotes/main/_static/images/van-wordmark.svg
---
width: 100%
align: center
---
:::


This collection was an attempt to consolidated my experiences in computational chemistry. Entering the field with no background in mathematics or computers, a lot was learned through trial and error. Despite these shortcomings, I am forever grateful to the exceptional guidance and continued support of Dr. Genwei Zhang, Dr. Zheng Pei, Dr. Xiaoliang Pan, and Dr. Yihan Shao.

I hope many of you will find this information useful in your future endeavors.

1. [A (Not So) Quick Start Guide](notebooks/quickstart/00overview)
    * Introduction to Terminal, Shell, and Bash
    * Navigating Supercomputers
    * Basic Python Programming 
    * Molecular Structures and File Formats


2. Programming Examples
    *  bash
    *  SLURM & ssh
    *  GitHub & git
    *  Python & Conda



3. Molecular Visualization
    * ChimeraX
    * VMD


4.  Tutorials
    * Molecular Simulations with Amber
    * Analysis technique