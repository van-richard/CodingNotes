# Molcular Simulations 

Before running a simulation, ask yourself:

- What is the scientific question?
- Can the hypothesis be tested with MD?
- What experimental evidence is ther for the property of interest?
- Is the timescale of the property in attosecond? picosend? millisecond?

Molecular simulations methods uses a particle-based description of the system, and is propagated by deterministic or probabilistic rules to generate a trajectory describing its evolution over course of the simulation.

Properties can be calculated from *snapshots* (*i.e.* a configuration of the system, or *frame*), and then averaged over the trajectory to calculate estimates of said property.

General methods fit into 2 categories (*depending on how the system is propagated*):

1. Molecular Dynamics (MD) Simulations
2. Monte Carlo (MC) Simulations


<span style="font-size:1.5em;">**Molecular Dynamics (MD) Simulations**</span>

In this approach, Newton's equations of motion are numerically intergrated to generate the dynamic trajectory of the system.These simulations can be used to investigate structural, dynamic, and thermodynamic properties.


<span style="font-size:1.5em;">**Monte Carlo (MC) Simulations**</span>

In this approach, probabilistic rules are used to generate new configuration from the present configuration. This is repeated to generate sequences of states that be used to calculate structural and thermodynamic properties. The trajectory produced by MC simulations are an ensemble of configurations that reflect those that *could be* dynamically sampled.

```{note}
This approach does not calculate dynamical properties. MC simulations lack any concept of time.
```


## Molecular Descriptors

MD or MC simulations can be carried out with differnt underlying physical theories to describe the particle-base model of the system. For example:

1. **Molecular Mechanics (MM) Descriptors**
    - Also called *Classical Mechanics* or *Classical Descriptors*
    - Molecules represented by groups of atoms
    - Each atom is assigned an electric charge and potential energy function
    - Large number of empirical parameters fitted from experiment, QM, or other data used to calculate bonded and nonbonded interactions.
2. **Quantum Mechanics (QM) Descriptors**
    - Electrons are explicitly represented by solving the electronic structure of the molecules
    - No (or few) empirical parameters are used
    - Various approximations to the physics

Unless otherwise specified, MD simulations employ MM force fields, which calculate the forces that determine the system dynamics.

MM simulations are faster than quantum simulations, making this a popular appraoch to study condensed phase biomolecular systems. However, they are of lower accuracy than QM simulations, and generally cannot simulate bond rearrangements...

QM simjulations are too computationally expensive to allow for simulations of the time and length scales to describe most systems of interest. The size of the system also depends on the method chosen:

- High-level *ab inito* Methods (*i.e.* DFT)
- Semi-Empirical Methods (NDDO, PM3, AM1)

For context, a typical QM simulation could be perforemd with a hundred atoms or fewer. Whereas MM simulations routinely have tens to hundreds or thousands of atoms in the system.

## Properties of Interest

The size of the system alone does not dictate the use of classical descriptors. MM simulations are often used to calculate:

1. Free Energies 
2. Transport Properties at Lab Temperatures

These properties include entropic contributions. In other words, the fluctuations and correlations of motions within a system can affect the calculated property.

**Simluations not only samples single optimal states but must sample the correct distribution of states.** This requires simulations of *some length.* In protein simulations, relevant timescale of biological prosses are often nanoseconds to microseconds in length. For example, rearrangements of buried amino acid sidechains or conformation changes to a protein domain.


## Other Methods

<span style="font-size:1.5em;">Quantum Mechanics/Molecular Mechanics (QM/MM) Simulations</span>

In classical simulations, bond breaking/forming are generally not allowed. The topology, or chemistry, of the system is is constant as a function of time. In other words, the chemical identity of a molecular remains constant (with the exception of constant pH simulations). 

The hybrid QM/MM scheme or use of reactive force fields are generally used.


<span style="font-size:1.5em;">Course-Graining Method</span>s

Above the level of MM are course-graining methods. This method will reduce the resolution and computational cost.


<span style="font-size:1.5em;">Constant pH Simulation</span>s

Sample the titratable residues


## Literature

[Best Practices for Foundations in Molecular Simulations](https://doi.org/10.33011/livecoms.1.1.5957)

