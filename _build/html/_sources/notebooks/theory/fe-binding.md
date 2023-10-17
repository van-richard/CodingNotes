---
orphan: true
---

# Binding Affinity

The binding affinity (energy of binding) between a ligand, $L$, to a receptor.

$$
R + L \rightleftarrows RL
$$

The binding constant ($K_b$) is the ratio of concentrations of the product ($[RL]$), and the reactants ($[R], [L]$).

$$
K_b = \frac{[RL]}{[R][L]}
$$

Thermodynamics activity can be approximated by concentrations. The standard Gibbs free energy of binding ($\Delta G_{bind}$) is given by:

$$
\Delta G_{bind} = -k_bT \ln K_{b}
$$

Where $k_b$ is the Boltzmann constand, and $T$ is the temerature of the system. However, this equation is not directly applicable for typical molecular simulations where, there is only a single receptor/ligand in a small box (i.e., using large concentrations).

One way to estimate the equilibrium constant is by directly simulating several binding and unbinding events and computing the probability of finding the receptor-ligand system in the bound state ($P(RL)$), or unbound state ($P(R+L)$).

Assuming, the volume change during binding is negligible, then the Gibbs free energy is approximately equal to the Helmholtz free energy. In an NVT simulation, we get:

$$
\Delta G_{bind} \approx \Delta A_{bind} = -k_bT \left( \ln \frac{P(RL)}{P(R+L)} + \ln \left( cNV \right) \right)
$$


## Simulating Binding Affinity

Using atomistic molecular modelling to predict protein-ligand binding is a growing area in many fields (drug discovery). When calculations are sufficiently fast and accurate, we can anticipate significant reduction in time and cost for the early stages of drug discovery and/or trial-and-error experimentation.

We have several methods to predict protein-ligand binding affinity, such as:

1. Docking
   1. Uses a simple scoring function to estimate binding affinity
2. MMGBSA/MMPBSA
   1. A MD post-processing technique, where the free energy of a state is calculated from the internal energy (MM) of the molecule and its interaction with an implicit representation of solvent (GBSA/PBSA)
3. Free Energy Perturbation (FEP)
   1. Evaluates free energy differences of a given configuration under a different Hamiltonian

Docking is relatively quick and easy calculation to do, but is often inaccurate, and limited to a small molecules. The error in docking scores for programs such AutoDock Vina is ~2 kcal/mol. 

In, MMPBSA/MMGBSA calculations, you run a short MD trajectory and then use those configurations for analysis.  They have been used successfully to reproduce and rationalize experimental findings and to improve the results of virtual screening and docking. However, they contain several crude and questionable approximations, for example, the lack of conformational entropy and information about the number and free energy of water molecules in the binding site. However, this approach represent a middle-ground between fast but very inaccurate docking and free-energy perturbation (FEP), which gives the best results at the expense of a tremendous computation time.

Free energy perurbation estimates the difference in free energy between two states by slowly changing one state to another through a number of nonphysical intermediate states, performing extended sampling at each intermediate state. Unfortunately, this method is extremely time con- suming and therefore more approximate methods have been developed. 


