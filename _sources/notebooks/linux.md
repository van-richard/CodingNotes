# linux

```{tableofcontents}
```

## Reset GNOME Terminal Hotkeys

```
dconf reset -f /org/gnome/terminal/legacy/keybindings/
```

## Manging Multiple Compiler Versions

- for personal machines

For example, if you need multiple versions of gcc/g++ on a single machine running Ubuntu 22.04

- First install with `sudo apt-get`

```bash
sudo apt-get install gcc-11 gcc-10 gcc-9 g++-11 g++-10 g++-9 -y
 ```

- Use the `updalternativesate`  to create list of multiple gcc and g++ compiler alternatives
- Larger number = higher priority 
    - here, gcc and g++ 11 is default

 ```bash
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 0
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-9 0
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-10 1
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-10 1
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 2
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-11 2
```

- Check the available c and c++ compilers list on your system and select desired version by entering relevant selection number:

```bash
sudo update-alternatives --config gcc
sudo update-alternatives --config g++
```

- Sanity check

```bash
gcc --version
g++ --version
```
