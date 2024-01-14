<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [BAR & MBAR](#bar--mbar)
  - [Bennett Acceptance Ratio (BAR)](#bennett-acceptance-ratio-bar)
  - [Derivations](#derivations)
  - [Multistate Bennett Acceptance Ratio (MBAR)](#multistate-bennett-acceptance-ratio-mbar)
  - [Derivations](#derivations-1)
    - [Reduced Potentials ($u(x)$)](#reduced-potentials-ux)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# BAR & MBAR

Bennett Acceptance Ratio (BAR) method draws on data from multiple states to estimate the free energy difference. 

While, TI requires the ensemble average from a *single* state to estimate free energies (TI needs the derivatives at state), it does not require the configurations from any neighboring state.

However, BAR, requires configuration information from two states to estimate free energy differences.

## Bennett Acceptance Ratio (BAR)

BAR works under the principal that at the same configuration, $\vec q$, at two separate states, $A$ and $B$, there is a pathway connecting the two potentials and a difference of $\Delta U_{ij}(\vec{q})$. Because the states are in the same configuration, there is a exact relationship between the distributions of potential energy differences between $\Delta U_{ij}(\vec{q})$ of states sampled from $i$, and $\Delta U_{ji}(\vec{q})$ the distribution of potential energy differences sampled from the state $j$. Since it's an exact function of distributions, statistics can be applied to find the optimal way to use the information between two states, improving the free energy estimate. 

## Derivations

This derivation starts from a slightly modified version of the free energy equation

$$
\Delta A_{ij} = -k_{B} T \ln \frac{Q_j}{Q_i} = k_{B}T \ln \frac{\left\langle\alpha(\vec{q}) \exp[-\beta U_{i}(\vec{q})]\right\rangle_j}{\left\langle\alpha(\vec{q}) \exp[-\beta U_{j}(\vec{q})]\right\rangle_i}
$$

which is true for any $\alpha(\vec{q})\gt 0$ for all $\vec{q}$. This was Bennett's start point and he then used variational calculus to select the value of $\alpha(\vec{q})$ minimizing the variance of the free energy. The end result is an implicit function of the free energy, and the number of samples at each state, $n_i$ and $n_j$, and is

$$
\sum_{i=1}^{n_i} \frac{1}{1 + \exp(\ln(n_i/n_j) + \beta \Delta U_{ij} - \beta \Delta A))} - \sum_{j=1}^{n_j} \frac{1}{1 + \exp(\ln(n_j/n_i) - \beta \Delta U_{ji} + \beta \Delta A))} = 0
$$

 This is the full BAR equation and its full derivation can be found in [Bennett's paper](https://www.sciencedirect.com/science/article/abs/pii/0021999176900784)

## Multistate Bennett Acceptance Ratio (MBAR)

> "The Multistate Bennett Acceptance Ratio (MBAR) is a direct extension to BAR as it allows for assessing data from all states, and predicting the free energy at an unsampled state. MBAR reduces to BAR in the limit that only two states are sampled.Much like WHAM, the free energies provided by this method are only a statistical estimator, however, MBAR has been shown to have the lowest variance estimator to date."

Esseentially, it is a generalization of the  that calculates the (relative) free energies of several multi-states. It  reduces to the BAR method when only two super states are involved.

## Derivations

<!-- MBAR is derived from a set of $K x K$ weighting functions, $\alpha_{i,j}(\vec{q})$ that minimized the variance during the reweighting across the board.  -->

Starting from our core free energy equation, we have

$$
\Delta A_{ij} = -\beta^{-1} \ln\frac{Q_j}{Q_i} 
$$

Using Bennett's approach, we can come to the relation

$$
Q_i\left\langle\alpha_{ij}\exp\left(-\beta U_j\right)\right\rangle_i = Q_j\left\langle\alpha_{ij}\exp\left(-\beta U_i\right)\right\rangle_j
$$

and from here, we can write,

$$
\sum\limits_{j=1}^K \frac{\hat{Q_i}}{N_i} \sum\limits_{n=1}^{N_i} \alpha_{ij}\exp\left(-\beta U_j(\vec{q}_{i,n})\right) = \sum\limits_{j=1}^K \frac{\hat{Q_j}}{N_j} \sum\limits_{n=1}^{N_j} \alpha_{ij}\exp\left(-\beta U_i(\vec{q}_{j,n})\right)
$$

**assuming we use the empirical estimator for the expectation values of**

$$
\left\langle g \right\rangle_i = N_i^{-1}\sum_{n=1}^{N_i}g(\vec{q}_{i,n})
$$

Choosing the optimal $\alpha_{ij}$ can be done by looking through the literature at extended bridge sampling. We then get:

$$
\alpha_{ij} = \frac{N_j \hat{c_j}^{-1}}{\sum\limits_{k=1}^K N_k \hat{c_k}^{-1} \exp\left(-\beta U_k \right)} 
$$

After making some substitutions, we get an expression for an estimated free energy of

$$
\hat{A_i} = -\beta^{-1} \ln \sum\limits_{j=1}^K \sum\limits_{n=1}^{N_j} \frac{\exp\left[-\beta U_i\right]}{\sum_{k=1}^K N_k \exp\left[\beta\hat{A_k} - \beta U_k\right]}
$$

```{important}
One of the first things you should notice is that we have a single free energy, not a difference. The free energies for a given set of states is only uniquely determined up to an additive constant. 

Because of this, one free energy must be taken in reference and thus we are once again calculating free energy differences.
```

It is important to note that the $U$ that appears in the MBAR derivation and equation is not only valid for potential energies, but any generalized/reduced potential as a function of pressure, volume, chemical potential, and number of particles.

### Reduced Potentials ($u(x)$)

In a general form, you can take some subset of the additive terms in the following to define the reduced potential $u_i(x)$ for thermodynamic state $i$:

$$
u_i(x) \equiv \beta_i [ U_i(x) + P_i V(x) + {\bf \mu}_i^\mathrm{T} {\bf N}(x) ]
$$

The reduced potential function is uniquely defined by some combination of thermodynamic parameters $\beta$ denoting the inverse temperature, $U$ denoting the potential energy function, $P$ denoting the pressure, and $\mu$ denoting the chemical potential of one or more components of the system. These latter two thermodynamic variables are conjugate to the box volume $V$ and particle numbers $N$. Use of the reduced potential simplifies the MBAR equations and generalizes them to the computation of arbitrary reduced free energy differences $\Delta f_{ij} \equiv \beta_j A_j - \beta_i A_i$ among states.

::::{margin}
:::{note}
Remember always the free energy will change depending on which reduced potential you use, so please take this into account when working with MBAR.
:::
::::