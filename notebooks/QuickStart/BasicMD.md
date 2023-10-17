---
orphan: true
---
# Briefly, Molecular Dynamics

The general steps of molecular dynamics (MD) simulations are shown below, consider the following questions for each step:

1. System Preparations
     - What ions or molecules are in your system?
     - Is the force field for each type of ion/molecule sufficient?
     - What protonation states are your titratable residues?
2. Equilibrate the System
    - What is the target environmental conditions for your system?
    - Is temperature, pressure, and/or the energy of the sytem stable? 
3. Production Simulations 
    - How long do you need your simulation?
4. Analysis of Trajectories
    - What property of the system addresses your hypothesis?

## Classical Mechanics

Molecular dynamic (MD) simulations use classical Newtonian mechanics to describe the motions of atoms and molecules.

These simulations involve:

- Explicit a particles (atoms, ions)
- Particles interact via relatively simple analytical potential (i.e. *force field*)
- Newton’s equations of motion are integrated for all particles simultaneously
- Hundreds to millions of particles depending on model
- Simulation time could be from 10 ps to 1 μs depending on model (typically nanosecond)

Energy is:

$$
E_{total} = E_{bonded} + E_{nonbonded}
$$

The bonded and nonbonded terms are:

$$
E_{total} = E_{bonds} + E_{angles} + E_{torsion} + E_{vDW} + E_{Coulomb}
$$

and each energy contribution term has a potential function, for example, the van der waals term $E_{vDW}$ is defined by the Lennard-Jones potential:

$$
E_{vDW} = 4\epsilon  \left[ (\frac{\sigma}{r})^{12} - (\frac{\sigma}{r})^{6} \right]
$$

The potential functions have preset bonding arrangements, therefore, classical MD on its own cannot be used to model chemical reactions.  

A MD simulation generates a sequence of configurations phase space connected by time. These is called a *trajectoy* of all particles in the system as a function of time. Time averages and other properties can be calculated from a trajectory.

