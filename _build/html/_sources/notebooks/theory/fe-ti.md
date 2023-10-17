---
orphan: true
---

# Thermodynamic Integration

> "This method is used to compare the difference in free energy between two given states (e.g., A and B) whose potential energies have different dependences on the spatial coordinates. Because the free energy of a system is not simply a function of the phase space coordinates of the system, but is a function of the Boltzmann-weighted integral over phase space (i.e. partition function), the free energy difference between two states cannot be calculated directly from the potential energy of just two coordinate sets (for state A and B respectively)."

# Equations

For two systems, $A$ and $B$, with potential energies $U_A$ and $U_B$, which can be calculated from n ensemble average over configurations sampled from MD or MC with Boltzmann weighting. A new potential energy function could be defined as:

$$
U(\lamda) = U_A + \lambda(U_B - U_A)
$$

Where $\lambda$ is the coupling parameter between 0 ($A$) and 1 ($B$). In the canonical ensemble, the partition function of the system can be writted as:

$$
Q(N, V, T, \lambda) = \sum_{s} \exp [-U_s(\lambda)/k_{B}T]
$$

In this notation, <math>U_s(\lambda)</math> is the potential energy of state <math>s</math> in the ensemble with potential energy function <math>U(\lambda)</math> as defined above. The free energy of this system is defined as:

$$
F(N,V,T,\lambda)=-k_{B}T \ln Q(N,V,T,\lambda)
$$

If we take the derivative of F with respect to λ, we will get that it equals the ensemble average of the derivative of potential energy with respect to λ.

$$
\int_0^1 \left\langle U_B(\lambda) - U_A(\lambda) \right\rangle_{\lambda} d\lambda
\end{align}
$$