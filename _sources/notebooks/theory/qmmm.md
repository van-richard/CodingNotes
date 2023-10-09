---
orphan: true
---

# QM/MM Simulations

## Overview

Reference: https://www.youtube.com/watch?v=VK0e6-ndodM

In general, a hybrid quantum mechanics/molecular mechanics (QM/MM) scheme requires:

- Small part of system is defined at quantum level (QM)
- Rest of system is defined at force field level (MM)

The potential energy contains 3 types of interactions:

1. Interaction between particles in QM region
2. Interactions between particles in MM region
3. Interaction between QM and MM particles

Points 1 and 2 are straightforward descriptions of the system. Point number 3 requires calculating the energy of the combined system, whic can be done in 2 ways:

1. Subtractive scheme

$$
E = E_\mathrm{QM}  + E_\mathrm{MM} - E_\mathrm{QM-MM}
$$

Pros: No communication between QM and MM routines.
Cons: Force field needed for QM. FF needs to be 'flexible' to describe change when reaction occurs. No QM polarization

2. Additive scheme

$$
E = E_\mathrm{QM} + E_\mathrm{QM-MM} + E_\mathrm{MM}
$$

QM energy ($E_\mathrm{QM}$) is from DFT Kohn-Sham Hamiltonian. MM energy ($E_\mathrm{MM}$) is from force field. QM-MM interaction energy ($E_\mathrm{QM-MM}$) is:

$$
E_\mathrm{QM-MM} = E_\mathrm{bonded}^\mathrm{QM-MM} + _\mathrm{nonbonded}^\mathrm{QM-MM}
$$

**The additive scheme is the most common approach**, and we will talk about the QM/MM bonded and non bonded terms

## Bonded Interactions

$$
E_\mathrm{bonded}^\mathrm{QM-MM}
$$

Bonded interactions are introduced when covalent bonds connecting QM and MM regions are cut.

This term is chosen at classical FF level.

Care has to be taken when evaluating the QM wave function, to address this, several approaches have been developed:

1) **Monovalent capping atom:** hydrogen atoms are placed along bond vector.
2) **Link atom pseudopotential:** linking atoms with scaled down psudopotential and requires a valence change which requires to constraint bond distance.
3) **Generalized hybrid orbitals:** hybrid orbitals are olacced on boundary atom and one participates in SCF calculation for wave function of QM region

## Nonbonded Interactions

Non bonded term is:

$$
E_\mathrm{nonbonded}^\mathrm{QM-MM} = E_\mathrm{perm.}^\mathrm{QM-MM} +E_\mathrm{pol.}^\mathrm{QM-MM}
$$

QM Polarization energy ($E_\mathrm{pol.}^\mathrm{QM-MM}$) describes the *electrostatic* interaction between MM charges and QM charge density. This can be calculated in one of three ways:

1) **Mechanical embedding:** No influence of MM charge on QM part, i.e.  QM calculation is gas-phase -like without additional potential due to MM atoms
    - This neglects. established by assigning fixed set of effective charges to QM region. QM partial charges re=computed at every integration step of simulation (least-squares fitting procedure  
2) **Electrostatic embedding:** QM polarization due to MM part included
    - Estimated through additional term to QM Hamiltonian, where it is taken into account in terms of external charge distribution
3) **Polarized embedding:** MM polarization due to QM part included as well
    - Non-self consistently or fully self-consistently

## Electrostatic Embedding

Electrostatic interactions between QM and MM subsystems are handled during computation of electronic wave function. Charged MM atoms near QM Hamiltonian are treated as one-electron operators.

$$
E_\mathrm{electrostatic}^\mathrm{QM-MM} = \sum_{i \in QM}{} \sum_{i \in MM}{} \frac{q^{e}}{|{{\textbf{r}_{i}} - {\textbf{R}_{i}}}|} \longrightarrow \sum_{i \in MM}{q \int{\frac{\rho(\textbf{r})}{|\textbf{r}_i - \textbf{R}_i|}}d\textbf{r}}
$$

Two problems arise due to the short-range and long-range behavior of this term..

1. Short-Range - Electron spill-out; problems at the boundary
2. Long-Range - Huge computational cost to evaluate the integral


### Short-Range

In electron spill-out, a problem may arise when using standard MM atomic charges to describe the charge distribution of the MM system, which results in over-polarization near the boundary.

- The point charges on the MM side of the interface may attract (or repel) the electrons too strongly.

These artifacts can become serious if a large basis set (e.g. with polarization and diffuse functions), or plane waves are used in the QM calculation..

This can be avoided by **smeared-out charges** instead of traditional point charges

$$
E_\mathrm{electrostatic}^\mathrm{QM-MM} = \sum_{i \in MM}{q \int{\frac{\rho(\textbf{r})v^{smear}(|\textbf{r}_i - \textbf{R}_i|)}{|\textbf{r}_i - \textbf{R}_i|}}d\textbf{r}}
$$

Where, the *smearing function* can be a Gaussian distrubtion or another suitable function centered at the MM atom.

$$
v^{smear}(r) = \frac{Erf(\frac{r}{r_{c,I}})}{r}
$$

- Smearing function in CP2P, where $r_{c,I}$ is the covalent radius of atom $I$


```python

```
