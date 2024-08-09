# `git` Examples (CC-ATS)

## Clone Github repository 

- Make a copy of the CC-ATS 'literature' Repository [https://github.com/cc-ats](https://github.com/cc-ats)
    
- Click the green button labeled `code`
- Copy the `ssh` or `html` link
- Run the following on your local machine
    - I keep this in a directory called `ccats`

```bash
cd ~
mkdir -p ccats 
cd ccats
git clone git@github.com:cc-ats/literature.git 
```

## Clone in sparse mode

- For new clones
- Only copy the group meeting directory

```bash
git clone --no-checkout git@github.com:cc-ats/literature.git
cd literature
git spare-checkout init --cone
git spare-checkout set group_meetings
git checkout master
```


## Updating the reposiory

- For research udpates
- `git pull` / `git push`

```bash
# go to the ~your~ research updates
cd ccats /literature/group_meetings/research_updates/$USER 
git add .                                                   
git commit -m "researach update"
git push
```


