# Molecular Structure Files

The structures of proteins and small-molecules can be solved via experimental methods, NMR, some examples include NMR, X-ray crystallography, and Cryo-EM. There are many databases for different approaches to solving molecular structures, but I will limit this dicussion to `.pdb` and `.xyz` files.

:::{Glossary}
PDB Files
    Protein structures are saved and shared via the [Protein Data Bank at the Research Collaboratory for Structural Bioinformatics (RCSB)](https://www.rcsb.org) as `.pdb` files. These files follow a text file standard discussed later

XYZ Files
     A simple and widely used file format in computational chemistry and molecular modeling. Often used to represent the three-dimensional coordinates of atoms or small molecules. The `.xyz` files are plain text files that contain atomic coordinates, atom types, and sometimes additional information about the system. These files are often used in Quantum Mechanics (QM) calculations!
:::


## What are PDB files?

These are files which contain atomic coordinates and other information which descripes biological molecules. Structural biologist use experimental methods such as X-ray crystallography, Nuclear Magnetic Resonace spectroscopy, and Cryo-electron microscopy to determine the location of atoms in the structure. The information is then deposited to a [RCSB](https://www.org). 

Each structure will have a unique 4-letter/number code. Inside each file, the Protein Data Bank format consists of lines of information in a text file. Each line of information in the file is called a record. A file generally contains several different types of records, which are arranged in a specific order to describe a structure.


## What are XYZ Files?

The XYZ file format is a text-file format. Unlike PDB files, there is no formal standard and several variations exist. However, a typical XYZ format specifies the molecule geometry by giving the number of atoms with Cartesian coordinates that will be read on the first line, a comment on the second, and the lines of atomic coordinates in the following lines. 

Typically, we use these files to store molecular geometries in Quantum Mechanical (QM) calculations. These files generally contain up to a few hundred atoms. For example, let's build the small molecule alanine dipeptide, and store this data in `.xyz`.
