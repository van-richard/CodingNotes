# Branching

- Changes to code are saved with pointers to the commit snapshots

- Allowing you to revert to a prior version 

- The first branch is typically `main`

```bash  
git branch                          # List branches
git branch [BRANCH_NAME]            # Create a new branch
git branch -d [BRANCH_NAME]         # Deletes the branch
git branch -m [NEW_BRANCH_NAME]     # Renames the branch
```


- `-d` is a “safe” operation in that Git prevents you from deleting the branch if it has unmerged changes


- Commits to branch needs `git checkout` followed by the usual `git add`, `git commit`, and `git push`.

## Switch

- Moving to another branch 

```bash
git switch [BRANCH_NAME] # Move to a different branch
````

## Checkout

- To merge two branches, do:

    1. checkout
    2. git add .
    3. git commit -a 
    4. git push

```bash
git branch dev                          # Made a new branch called dev
git switch dev                          # Moved branches

.....                                   # After some time.... the code is ready 

git check main                          # Switch to main bringing commit history
git add .                               # Add new files
git commit -m "merging dev / main"      # Commit message
git push                                # Push changes
git switch dev                          # Go back to dev branch
```





