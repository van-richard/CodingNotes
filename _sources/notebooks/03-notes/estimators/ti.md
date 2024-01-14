<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Thermodynamic Integration](#thermodynamic-integration)
  - [Derivations](#derivations)
  - [Estimating Free Energy](#estimating-free-energy)
  - [Statistical Errors](#statistical-errors)
  - [Problems](#problems)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
orphan: true
---

# Thermodynamic Integration

> "This method is used to compare the difference in free energy between two given states (e.g., A and B) whose potential energies ($U_A \mathrm{and} U_B$) have different dependences on the spatial coordinates. Because the free energy of a system is a function of the Boltzmann-weighted integral over phase space (i.e. partition function), the free energy difference between two states cannot be calculated directly from the potential energy of just two coordinate sets (for state A and B, respectively)."

The free energy difference therefore calculated by defining a thermodynamic path between the states and integrating over ensemble-averaged enthalpy changes along the path. 

This paths can either be real chemical processes or alchemical processes.

## Derivations

For two systems, $A$ and $B$, with potential energies $U_A$ and $U_B$, which can be calculated from n ensemble average over configurations sampled from MD or MC with Boltzmann weighting. A new potential energy function could be defined as:

$$
U(\lambda) = U_A + \lambda(U_B - U_A)
$$

Where $\lambda$ is the coupling parameter between 0 ($A$) and 1 ($B$). In the canonical ensemble, the partition function of the system can be writted as:

$$
Q(N, V, T, \lambda) = \sum_{s} \exp [-U_s(\lambda)/k_{B}T]
$$

In this notation, $U_s(\lambda)$ is the potential energy of state, $s$, in the ensemble with potential energy function $U(\lambda)$ as defined above. The free energy of this system is defined as:

$$
F(N,V,T,\lambda) = -k_{B}T \ln Q(N,V,T,\lambda)
$$

If we take the derivative of F with respect to $\lambda$, we will get that it equals the ensemble average of the derivative of potential energy with respect to $\lambda$.

\begin{align}
\Delta F(A \rightarrow B)
 &= \int_0^1 \frac{\partial F(\lambda)}{\partial\lambda} d\lambda \\
 &= -\int_0^1 \frac{k_{B}T}{Q} \frac{\partial Q}{\partial\lambda} d\lambda \\
 &= \int_0^1 \frac{k_{B}T}{Q} \sum_{s} \frac{1}{k_{B}T} \exp[- U_s(\lambda)/k_{B}T ] \frac{\partial U_s(\lambda)}{\partial \lambda} d\lambda \\
 &= \int_0^1 \left\langle\frac{\partial U(\lambda)}{\partial\lambda}\right\rangle_{\lambda} d\lambda \\
 &=  \int_0^1 \left\langle U_B(\lambda) - U_A(\lambda) \right\rangle_{\lambda} d\lambda
\end{align}

## Estimating Free Energy

Information from only a single state is needed to calculate the derivative above. Since we can only perform simulations at a number of $\lambda$ states, numeric integration schemes are required

$$
\Delta A \approx \sum_{k=1}^K w_k \left\langle \frac{dU(\lambda,\vec{q})}{d\lambda}\right\rangle_k 
$$

Where the weights, $w_k$, will depend on which numeric integration style is chosen. A simple calculation using the trapezoid rule is straightforward and maximizes flexibility in choice of $\lambda$ spacing. Under the trapezoid rule, even lambda spacing weights are $w_1 = w_k = 1/[2(K-1)]$ and $w_{k \ne 1,K} = 1/(K-1)$.

## Statistical Errors

To get the correct statistical error, each individual average should be multiplied by $\sqrt{2\tau}$ to correct for the correlation time at each state; error is then

$$
\sqrt{\mathrm{var}\left(\Delta A_{i,K}\right)}
$$

## Problems

If the curvature of $\frac{dU}{d\lambda}$ is large, the bias introduced by discrete  states becomes significant. So when using TI it is very important to verify if you gathered enough data from a sufficient numbers of states, such that the free energy becomes independent of the number of states to within statistical precision!

The linear transformation will always have an infinite potential at $r = 0$ leading to numeric instabilities for evaluating $\frac{dU}{d\lambda}$. Although there are ways to get around this, they do not converge very well. However, if with a soft core potential, this problem can be mostly avoided.