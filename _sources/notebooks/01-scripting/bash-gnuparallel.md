# GNU Parallel 

```{margin}
If you write loops in shell, GNU parallel can replace them (while being faster)!
```

- Tool for executing jobs in parallel on one or more computer

- Jobs can be single commands, scripts or parallelized jobs themselves

- Helpful for running repetitive tasks or utilizing computing resources better

## Running Parallel on HPCs

- Most clusters should have one installed, check with `module av` or `module spider parallel`, if available then `module load`

- You can also install your own. Here is an example, installed into `~/Programs`

    1) Vist the GNU website [https://www.gnu.org/software/parallel/](https://www.gnu.org/software/parallel/)
    2) Find the download links HTTPS, HTTP, FTP
    3) Right-click and copy the link
    4) In Terminal, login to the cluster and navigate to `cd ~/.Programs`
    5) Copy the link here with `wget WWW....`
    6) Decompress the folder with `tar xf parallel-202...`
    7) Go to the directory and configure `cd  parallel-202...`  and configure `./configure --prefix=~/Programs && make && make install`

## Parallel Umbrella Sampling Windows for MD Simulations


```bash
#!/bin/bash
#SBATCH -p long
#SBATCH -t 5-00:00:00
#SBATCH -n 1
#SBATCH --ntasks-per-node=32
#SBATCH --output=%j.out
#SBATCH --error=%j.err
#SBATCH --job-name=${name}${job}

date
module load parallel 

w_i=0   # First window 
w_f=42  # last window
jobs=8  # number of cores for each simulation

parallel --jobs ${JOBS} bash runmd.sh {} ::: $(seq -f"%02g" w_i w_f)

date
```

