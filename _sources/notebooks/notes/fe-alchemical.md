---
orphan: true
---

:::{important}
:class: dropdown

For more information, refer to the
[Best Practices for Alchemical Free Energy Calculations](https://livecomsjournal.org/index.php/livecoms/article/view/v2i1e18378) paper by Xu et. al.

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
:::

# Alchemical Free Energy

Alchemical free energy calculations use unphysical intermediate states to estimate the free energy of the physical process we're investigating.

Here, the quantity of interest is the change in binding affinity between a compound A and a related compound B, (e.g., by modifying one of the drug scaffold’s substituents) is given by:

\begin{align}
\Delta \Delta G_{bind,AB}& = \Delta G_{bind,B} - \Delta G_{bind,A} \\
                         & \approx -k_bT \left( \ln \frac{Z(RB)}{Z(R+B)} - \ln \frac{Z(RA)}{Z(R+A)} \right)
\end{align}

Alchemical relative free energy calculations avoids the need to simulate binding and unbinding events by making use of the fact that the free energy is a state function and exploiting the thermodynamic cycle.

::::{sidebar}
:::{figure} ../../_static/images/fe-alchem-thermo-cycle.png
---
align: center
figwidth: 100%
---

Example of thermodynamic cycle from the paper. 
:::
::::

\begin{align}
\Delta \Delta G_{bind,AB}& \approx -k_bT \left( \ln \frac{Z(RB)}{Z(RA)} - \ln \frac{Z(R+B)}{Z(R+A)} \right) \\
                         & = -k_bT \left( \ln \frac{Z(RB)}{Z(RA)} - \ln \frac{Z(B)}{Z(A)} \right) \\
                         & = \Delta G_{bound} - \Delta_{unbound}
\end{align}

Where $\Delta G_{bound/unbound}$ is the free energy of mutating $A$ to $B$ Eq. 9 and Fig. 2 tell us that the difference in free energy of binding can be computed by running two independent calculations estimating the free energy cost of mutating A into B in the binding pocket ($\Delta G_{bound}$) and in solvent ($\Delta G_{unbound}$), saving us the need to simulate the physical binding process of the two.

```{note}
:class: dropdown

Note that, when A and B have a different number of atoms, the factors $\ln \frac{Z(RB)}{Z(B)} \mathrm{and} \ln \frac{Z(RA)}{Z(A)}$, appear with units of volume in logarithms, but these factors exactly cancel between the terms.
```

In practice, the mutation of A to B is carried out by introducing one or more parameters $\vec \lambda$ controlling the potential energy function $U(\vec q; \vec \lambda)$ such that the potential of compounds A and B is recovered at two particular values $\vec \lambda_A$ and  $\vec \lambda_B$. 

Briefly, this is achieved by simulating a “chimeric” molecule composed of enough atoms to represent both A and B. A subset of the energetic terms in $U(\vec q; \vec \lambda)$ is then modulated by $\vec \lambda$ so that at $\vec \lambda_A$, the atoms that form molecule A are activated and those belonging exclusively to B are non-interacting “dummy atoms”, while the opposite occurs at  $\vec \lambda_B$.

We can rigorously account for fluctuations in other thermodynamic parameters such as, changes in volume $V$ when simulating at constant pressure $P$, or changes in number of molecules, $n_i$ of species $i$ at constant chemical potential $\mu_i$ (e.g., number of waters or ions) by introducing the reduced potential.

$$
u(\vec q; \vec \lambda) \equiv \beta \left[ U(\vec q; \vec \lambda) + PR(\vec q) + \sum_{i} \mu_i n_i(\vec q) + ... \right]
$$

Where, the thermodynamic and alchemical parameters ${\beta , \vec \lambda, P, \mu, ...}$ gives us the thermodynamic state. In an alchemical calculation, which the thermodynamic state only vary in $\vec \lambda$, are referred to as alchemical states. The free energy of mutating A to B in any environment (binding pocket, solvent..) can then be computed as (free energy difference equation?)

$$
\Delta G_{env} = -k_B T \ln \frac{Z(\vec \lambda_B)}{Z(\vec \lambda_A)} = -k_B T \ln \frac{\int_{\Gamma_j} \mathrm{exp} (u( \vec{q}; \vec \lambda_B)) d\vec{q}}{\int_{\Gamma_i} \mathrm{exp} (u(\vec q; \vec \lambda_A))d\vec{q}} 
$$

over the configurational space of the enviornment ($\Gamma_{env}$). While it is generally not feasible to compute the two partition functions $Z(\vec \lambda_$, several free energy estimators have been devised to robustly estimate the ratio of partition functions.

