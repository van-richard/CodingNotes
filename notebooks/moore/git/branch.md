<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Branching](#branching)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

