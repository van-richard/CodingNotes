# Clone the CC-ATS Group Repository

[https://github.com/cc-ats](https://github.com/cc-ats)

- Navigate to the `literature` repository
- Click the green button labeled `code`
- Copy the `ssh` or `html` link

- On the local computer, I usually our group repository in a `ccats` folder

```bash
cd ~/                                       # Make sure you're home
mkdir -p ccats                              # Make ccats directory
cd ccats                                    # Go inside new dir
git clone git@github.com:cc-ats/~~~~ .      # Clone the repo.. it'll take ~30 min lol
```


- Make a research_update directory and push changes to GitHub

```bash
cd ccats/literature/group_meetings/research_updates         # Path to research update directory
mkdir [FIRST_LAST_NAME]                                     # Make your new folder 
cd [FIRST_LAST_NAME]                                        # Go in
cp /path/to/research/update.pptx .                          # Copy a file or past preseentation to the new directory
git add .                                                   # Add changes
git commit -m "researach update"                            # Commit message
git push                                                    # upload
```
dklf
