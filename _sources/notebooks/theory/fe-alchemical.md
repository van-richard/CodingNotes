---
orphan: true
---

:::{note}
For more information, refer to the
[Best Practices for Alchemical Free Energy Calculations](https://livecomsjournal.org/index.php/livecoms/article/view/v2i1e18378) paper by Xu et. al.
:::

# Alchemical Free Energy

Alchemical free energy calculations use unphysical intermediate states to estimate the free energy of the physical process we're investigating.

> Alchemical calculations can be used in a variety of scenarios, such as:
> * computing the free energy of a conformational change for a molecule with a high barrier to interconversion (Fig. 1A);
> * computing partition (log P) or distribution (log D) coeffi- cients between environments (Fig. 1B) [3, 4]
> * determining partitioning between compartments into membranes (Fig. 1C) [5].
>
> Furthermore, alchemical calculations are frequently used to estimate changes in free energies upon modifying a ligand or protein:
>
> * a protein residue can be alchemically mutated to probe the impact on binding affinity (Fig. 1D)[6, 7] or changes in protein thermostability [8–11];
> * the entire ligand can be alchemically transferred from protein to solvent in an absolute binding free energy calculation (Fig. 1E) [12–14];
> * small alchemical modifications can be made between chemically related ligands to estimate relative differ- ences in binding free energies (Fig. 1F) [15–19].
> -- Xu et. al, Best Practices for Alchemical Free Energy Calculations.


## Free Energy Difference Equation

$$
\Delta H_{ij} = -k_B T \ln \frac{Q_j}{Q_i} = -k_B T \ln \frac{\int_{\Gamma_j} e^{-\frac{U_j(\vec{q})}{k_B T}} d\vec{q}}{\int_{\Gamma_i} e^{-\frac{U_i(\vec{q})}{k_B T}}d\vec{q}} 
$$

where,
* $\Delta H_{ij}$ is the Helmholtz free energy difference between state $i$ and state $j$
* $k_B$ the Boltzmann constant 
* $T$ is the temperature, 
* $Q$ is the canonical partition function for state $i$ or $j$
* $U_i \mathrm{ and } U_j$ are the potential energies as a function of the coordinates and momenta, $\vec{q}$, for two states
* $\Gamma_i \mathrm{ and } \Gamma_j$ are the phase space volumes of $\vec{q}$ over which we sample, or the total set of all allowed positions and momenta of the system

## Soft-core Potentials

$$
U(\lambda,r) = 4\epsilon\lambda^n \left[\left(\alpha(1-\lambda)^m + \left(\frac{r}{\sigma}\right)^6\right)^{-2}  - \left(\alpha(1-\lambda)^m + \left(\frac{r}{\sigma}\right)^6\right)^{-1}\right]
$$

> "Linearly scaling Lennard-Jones interactions back as a function of $\lambda$ for insertion/deletion of particles is formally incorrect for numerical integration and leads to wrong estimates of free energy differences. While more complicated schemes involving $\lambda^{k}$ scaling can be formally correct, there are serious concerns regarding their accuracy. Soft-core potentials provide a rigorously correct, efficient alternative to these and should be used whenever particles are inserted or deleted, preferably with a specific functional form and parameters[11], unless future work finds a still more efficient set of parameters."
> -- [alchemistry.org](http://alchemistry.org/wiki/Constructing_a_Pathway_of_Intermediate_States#Soft_Core_Potentials)