## `git`: Version Control

```{sidebar}
is it possible for anyone to really knows this.....
```

- version control, i.e., helps manage code development 
- collaborate with others on code

>[GitHub](https://github.com) is a cloud-based hosting service that lets you manage `git` repositories. If you have open-source projects that use `git`, then GitHub is designed to help you better manage them.

### Installation

```
sudo apt install git # linux
brew install git # mac
conda install -c conda-forge git
```

### Setup

- Add github username

```
git config --global user.name "van-richard"
```

- Add github email

```
git config --global user.email "richard.scott.van@email.com"
```

- Set your preferred text editor, I chose `vim`

```
git config --global core.editor vim
```

### SSH Connection to GitHub

- [Make an SSH key, if you haven't done so](../../02-hpc/ssh-autologin.md)
- Check if SSH key is working

```
ssh -T git@github.com
```

