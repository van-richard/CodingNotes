---
orphan: true
---

# Branching

List all branches in repository

```bash  
git branch
```

Make a new branch called *NAME* (does not check out!)

```bash
git branch *NAME* 
```

Delete the specified branch. This is a “safe” operation in that Git prevents you from deleting the branch if it has unmerged changes.

```bash
git branch -d *NAME*
```

Rename current branch

```bash
git branch -m *NEW_NAME*
```

Commits to branch needs `git checkout` followed by the usual `git add`, `git commit`, and `git push`.

