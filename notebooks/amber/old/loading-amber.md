# Source Amber (OLD APPROACH)

To-Do:
- [ ] Combine Amber22 and Amber/QMhub source
- [ ] Compile this for OSCER
- [ ] Build pmemd.cuda.mpi for (testing 3+ gpu simulation)

I made several files to with setting up the environment for different Amber compilations. Just source the file by running:

  ```
  source /PATH/TO/VAN/SCRIPTS/SOURCEFILE.sh
  ```

Example with Amber22 on PETE:

  ```
  #!/bin/bash
  #SBATCH ...

  source /scratch/van/scripts/pete-qmhub.sh

  # sander / pmemd
  # sander.MPI/pmemd.MPI
  # pmemd.cuda

  # MD INPUTS ...

  ```

## PETE (OSU)

### Amber22 (Original Code)

```{note}
---
class: sidebar
---
QUICK was excluded in this build because CUDA = 12
```

- The following have been compiled, and should run..

  - [x] sander / pmemd
  - [x] sander.MPI / pmemd.MPI
  - [x] pmemd.cuda
  - [] pmemd.cuda.MPI
  - [x] AmberTools

- Source file:
  
  ```
  source /scratch/van/Scripts/pete-amber22.sh
  ```


### Amber22 + QMHub

- The following have been compiled, and should run..

  - [x] sander / pmemd
  - [x] sander.MPI / pmemd.MPI
  - [x] pmemd.cuda
  - [] pmemd.cuda.MPI
  - [x] AmberTools

- Source file:
  
  ```
  source /scratch/van/Scripts/pete-qmhub.sh
  ```

### Amber22 + QMHub + QChem

- The following have been compiled, and should run..

  - [x] sander / pmemd
  - [x] sander.MPI / pmemd.MPI
  - [] pmemd.cuda
  - [] pmemd.cuda.MPI
  - [] AmberTools

- Source file:
  
  ```
  source /scratch/van/Scripts/pete-qmhub-qchem.sh
  ```
