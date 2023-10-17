---
orphan: true
---

# Alchemical States

How do we define an "alchemical path"? You can think of it as defining the thermodynamic path where we modify, remove, or add various forces on an atom.

Because the atoms changed their interactions with the surroundings without being removed or added from the system, we have directly modified the atoms to create our alchemical path.

Most alchemical transformations can be defined by alchemically scaling the potential in some manner. The simplest of these is the linear transformation, which says that the net potential energy, $U(\vec q; \vec{\lambda})$, is the sum of the alchemically modified two end states' potentials, $U_A$ and $U_b$, plus the parts of the potential that are unaffected by the alchemical transformation, $U_{\mathrm{unaffected}}(\vec{q})$; or

$$
U(\lambda,\vec{q}) = (1-\lambda) U_0(\vec{q}) + \lambda U_1(\vec{q}) + U_{\mathrm{unaffected}}(\vec{q})
$$

where the alchemical variable linearly modifies the confrontational information from each state of interest.

There are some problems with this though...

## Soft-core Potentials
A standard method has been developed to alchemically change molecules to get around the numeric instabilities called a "soft-core potential." In these potentials, the configuration variable, $r$, is now coupled to the alchemical variable, $\lambda$ , smoothing out the singularity and looks like

$$
U(\lambda,r) = 4\epsilon\lambda^n \left[\left(\alpha(1-\lambda)^m + \left(\frac{r}{\sigma}\right)^6\right)^{-2}  - \left(\alpha(1-\lambda)^m + \left(\frac{r}{\sigma}\right)^6\right)^{-1}\right]
$$

> "Linearly scaling Lennard-Jones interactions back as a function of $\lambda$ for insertion/deletion of particles is formally incorrect for numerical integration and leads to wrong estimates of free energy differences. While more complicated schemes involving $\lambda^{k}$ scaling can be formally correct, there are serious concerns regarding their accuracy. Soft-core potentials provide a rigorously correct, efficient alternative to these and should be used whenever particles are inserted or deleted, preferably with a specific functional form and parameters[11], unless future work finds a still more efficient set of parameters."
> -- [alchemistry.org](http://alchemistry.org/wiki/Constructing_a_Pathway_of_Intermediate_States#Soft_Core_Potentials)
