# Modules (Lmod/lua)

```bash
sudo apt update \
sudo apt install -y lua5.1 liblua5.1-0-dev lua-posix tcl tcl-dev make gcc g++
```

- (optional) remove the custom Lua that causes path confusion

```bash
sudo rm -rf /opt/apps/lua
```

- Rebuild Lmod against system lua

```bash
cd /tmp
wget -O lmod.tar.gz https://github.com/TACC/Lmod/archive/refs/tags/8.7.34.tar.gz
tar -xzf lmod.tar.gz && cd Lmod-8.7.34
./configure --prefix=/opt/apps/lmod --with-lua=/usr
make
sudo make install
```

- environment 

```bash
echo 'export LMOD_DIR=/opt/apps/lmod/lmod' >> ~/.bashrc
echo 'source $LMOD_DIR/init/profile' >> ~/.bashrc
source ~/.bashrc
```

- check modules

```bash
module avail
```
