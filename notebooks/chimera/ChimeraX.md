---
orphan: true
---

# Introduction to ChimeraX 

Chimera and [ChimeraX](https://www.cgl.ucsf.edu/chimerax/) are both great molecular visualization tools developed by UCSF.

ChimeraX is the newest program, and it can efficiently handle large data (i.e. PDBs with thousands of atoms). It is my prefered GUI when exploring new structures and making videos/figures.

Download the latest version of [ChimeraX](https://www.cgl.ucsf.edu/chimerax/download.html)! You will need to register for an account, otherwise you'll get a notification everytime you open the software.

## Opening PDBs from RCSB

On ChimeraX command line, type:

```bash
open *PDB_CODE*
```

Where *PDB_CODE* is the 4-letter code from [RCSB](https://www.google.com/search?client=safari&rls=en&q=rcsb&ie=UTF-8&oe=UTF-8).

```{note}
The ChimeraX command line is independent of model panel!
``` 

## Summary of Command Line Options

Rather than searching through the GUI (graphic user interface) for the function you need (i.e., Show/Hide atoms/ribbon/surface), you can use the commmand line interface to control the display.

**Command Line Options:**

| Option                  | Meaning |
| :-----                  | :------ |
| show [model #] [ribbon, atom, etc.] | Displays the selection in ribbon, atom, etc. | 
| hide [model #] [ribbon, atom, etc.] | Hides the selection in ribbon, atom, etc. | 
| color byhetero | Colors by hetero-atom |
| color bychain | Colors by chain |
| color bymodel | Colors by model # |
| split [option: model #] | Splits the model by chain |
| sel [model, chain, residue, or atom #] | Select the model, chain, residue, or atom |


# Movie Making

:::{Glossary}
Saving Images (ChimeraX)
    [](./images)

Fade (ChimeraX)
    [](./fade.md)

Morph (ChimeraX)
    [](./morph.md)

Rock (ChimeraX)
    [](./rock.md)

Spin (ChimeraX)
    [](./spin.md)
:::