---
orphan: true
---
# Classical Molecular Dynamics
 
## Potential Energy

Energy of a system is composed of bonded and nonbonded interactions:

$$
E _{total} = E_{bonded} + E_{nonbonded} 
$$

The bonded interactions ($E_{bonded}$) are:

$$
E_{bonded} = E_{bonds} + E_{angles} + E_{torsion}
$$

Nonbonded interactions ($E_{nonbonded}$) are:

$$
E_{nonbonded} = E_{vdw} + E_{elec.}
$$

How these functions are written will depend on the simulation package (i.e. Amber, NAMD, OpenMM, Gromacs, etc.). 

Amber uses the following definitions:

$E_{bonds} = \sum_{bonds} k_b (r - r_{eq})^2$
$E_{angles} = \sum_{angles} k_{a} (\theta - \theta_{eq})^2$
$E_{torsion} = \sum_{torsion} \frac{V_n}{2} (1 + cos(n\phi - \delta) $
$E_{vdw} = \sum_{nonbonded_{ij}} \frac{A_{ij}}{r_{ij}^12} - \frac{B_{ij}}{r_{ij}^6} $
$E_{elec} = \sum_{nonbonded_{ij}} \frac{q_i q_j}{r_{ij}}$



## Force Fields


```python

```


```python

```
