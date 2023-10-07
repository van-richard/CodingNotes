# QM/MM: Enzyme Reaction

<center>
    <video src="../../_static/" width="50%" height="50%" controls>
    </video>
</center>

In this tutorial, we will perform QM/MM simulations modelling th DNA cleavage mechanism in the HNH-like domain of I-Ppo1. To accelerate the simulation, we utilize the multiple time step approach, (Outer time step: B3LYP/6-31G*, and inner step: PM3), and SINR thermostat. 

Additionally, we will use QMHub to add long-range electrostatics.

We define the reaction coordinate as the difference in bond breaking (P - O) and bond forming9O - P) distances, and calculate the free energy profile using umbrella sampling and MBAR.

## Input Files

Make a new working directory.

```bash
mkdir ippoi
cd ippoi
```

Make an `input` directory. This is where we will store the PDB files and generate Amber inputs.

```bash
mkdir input
cd input
```

Now we can use tleap to make our `.parm7` and `.rst7` files.

```bash
```

Run tleap, and you should get step3_pbcsetup.parm7 and step3_pbcsetup.rst7.

```bash
tleap -sf tleap.in
```


```python

```
