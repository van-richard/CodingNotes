# Load Amber Software

## PETE (OSU)

### Default Amber22 Programs

Compiled using original Amber22 programs

- sander / pmemd
- sander.MPI / pmemd.MPI
- AmberTools23

#### `source`

```bash
module load cmake3/3.24.3
module load gcc/11.2.0 # for pmemd-mpi
module load openmpi-4.1.1/gcc
module load cuda/10.2 # 12.1 not w/ amber, 11.0 lib problem
```

