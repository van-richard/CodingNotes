# git Overview 

`git` is a version control system. 
`git` helps you keep track of code changes. 
`git` is used to collaborate on code. 

[GitHub](https://github.com) is a cloud-based hosting service that lets you manage `git` repositories. If you have open-source projects that use `git`, then GitHub is designed to help you better manage them.

## Basics

### Copy repository from GitHub

```bash
git clone <githublink>
```

### Push your changes

Make sure you update your copy first with:

```bash
git pull
```

then

```bash
git add .
git commit -a
git push
```
 
## Commands

Quickly check available commands

```bash
git help
```

Check all available commands

```bash
git help -a
```

Command specific help - user manual

```bash
git help <command_here>
git help add
git help commit
git help init
# or git <command_here> --help
git add --help
git commit --help
git init --help

echo "temp/" >> .gitignore
echo "private_key" >> .gitignore
```

Will display the branch, untracked files, changes and other differences

```bash
git status
```

To learn other "tid bits" about git status

```bash
git help status
```

List tags
```bash
git tag
```

Create a annotated tag. The -m specifies a tagging message, which is stored with the tag. If you don’t specify a message for an annotated tag, Git launches your editor so you can type it in.

```bash
git tag -a v2.0 -m 'my version 2.0'
```

Show info about tag that shows the tagger information, the date the commit was tagged, and the annotation message before showing the commit information.

```bash
git show v2.0
```

Show difference between your working dir and the index

```bash
git diff
```

Show differences between the index and the most recent commit.

```bash
git diff --cached
```

Show differences between your working dir and the most recent commit

```bash
git diff HEAD
```

Search for "variableName" in all java files

```bash
git grep 'variableName' -- '*.java'
```

Search for a line that contains "arrayListName" and, "add" or "remove"

```bash
git grep -e 'arrayListName' --and \( -e add -e remove \)
```

Show all commits

```bash
git log
```

Show only commit message & ref

```bash
git log --oneline
```

Show merge commits only

```bash
git log --merges
```
