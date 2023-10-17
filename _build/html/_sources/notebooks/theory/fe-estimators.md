---
orphan: true
---

# Free Energy Estimators

```{Glossary}
Free Energy Perturbation (FEP)
   A method based on statistical mechanics for computing free energy differences from MD or MC simulations.

```

The FEP method, as introduced by Robert W. Zwanzig in 1954, relates the free energy difference between an initial (reference) and a final (target) state of a system to an average of a function of their energy difference evaluated by sampling for the initial state (Zwanzig equation):

$$
\Delta F(\mathbf{A} \rightarrow \mathbf{B}) = F_\mathbf{B} - F_\mathbf{A} = -k_\mathrm{B} T \ln \left \langle \exp \left ( - \frac{E_\mathbf{B} - E_\mathbf{A}}{k_\mathrm{B} T} \right ) \right \rangle _\mathbf{A}
$$

Where $T$ is the temperature, $k_B$ is Boltzmann's constant, and the angular brackets ($\langle \rangle$) denote an average over a simulation run for state A. 

The difference between states A and B could be the:

1. Atom types involved
2. Differences of geometry

Then the free energy difference ($\Delta F$) in **1.** would be obtained for "mutating" one molecule onto another, while a free energy map along one or more reaction coordinates would be obtained for **2.**.

This free energy map along some reaction coordinate is also known as a potential of mean force (PMF).

:::{important}
Free energy perturbation calculations only converge properly when the difference between the two states is small enough. Therefore it is usually divided the perturbation into a series of smaller "windows", __which are computed independently.__
:::
