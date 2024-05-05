# General Use Cases 

[GitHub](https://github.com) is a cloud-based hosting service that lets you manage `git` repositories. If you have open-source projects that use `git`, then GitHub is designed to help you better manage them.

```bash
# Download a copy of some repository from GitHub
git clone <githublink> 

# Update your local copy with any changes that were uploaded (pushed)
cd /to/local/git/repsository
git pull 
# Update your local copy with any changes that were uploaded (pushed)
````

- To push changes from your local repository to GitHub

```{warning}
Make sure your local copy is updated before you push...

```

```bash
git add .               # Add changes
git commit -m "update"  # Commit message
git push                # Push 

# helper
git help <command_here>
git help add
git help commit
git help init

# or git <command_here> --help
git add --help
git commit --help
git init --help
```

- Specifiy private or intentionally untracked files by adding the name to a `.gitignore` file

```bash
echo "temp/" >> .gitignore
echo "private_key" >> .gitignore
```

- Will display the branch, untracked files, changes and other differences

```bash
git status

# List tags
git tag

# Create a annotated tag
git tag -a v2.0 -m 'my version 2.0'

# Show info about tag that shows the tagger information, the date the commit was tagged, and the annotation message 
git show v2.0

# Show difference between your working dir and the index
git diff

# Show differences between the index and the most recent commit.
git diff --cached

# Show differences between your working dir and the most recent commit
git diff HEAD
```

```bash
# Search for "variableName" in all java files
git grep 'variableName' -- '*.java'

# Search for a line that contains "arrayListName" and, "add" or "remove"
git grep -e 'arrayListName' --and \( -e add -e remove \)
```

```bash
git log                     # Commit history
git log --oneline           # Only show commit message / ref
git log --merges            #  Show merge commits only
```
