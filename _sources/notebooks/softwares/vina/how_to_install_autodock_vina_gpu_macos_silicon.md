# How to install AutoDock-GPU on Apple silicon

> **Note:** The binary used here is from the Scripps **AutoDock-GPU** release, not the separate AutoDock Vina codebase. This guide follows the working installation path for the Apple Silicon OpenCL/OpenMP binary:
>
> `adgpu-v1.6_omp_macos_aarch64_ocl_128wi`

This guide assumes you are installing on an Apple Silicon Mac, such as an M1, M2, M3, or newer Mac. The example below was tested on an M2 Pro Mac.

---

## 1. Install Homebrew if needed

If Homebrew is not already installed, install it from the command line:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, make sure Homebrew is available in your shell. On Apple Silicon Macs, Homebrew is usually installed under `/opt/homebrew`.

You can test it with:

```bash
brew --version
```

---

## 2. Install the required OpenMP runtime

The `omp_macos` AutoDock-GPU binary expects `libomp.dylib` to be available from Homebrew LLVM.

Install LLVM with:

```bash
brew install llvm
```

Install OpenMP:

```bash
brew install libomp
```

Verify that the OpenMP library exists:

```bash
ls -l /opt/homebrew/opt/llvm/lib/libomp.dylib
```

If this file exists, the required runtime dependency is installed.

---

## 3. Download the Apple Silicon AutoDock-GPU binary

Download the Apple Silicon OpenCL/OpenMP binary from the official
[AutoDock-GPU GitHub releases page](https://github.com/ccsb-scripps/AutoDock-GPU/releases):

```text
adgpu-v1.6_omp_macos_aarch64_ocl_128wi
```

For example, the downloaded file may initially be in:

```bash
$HOME/Downloads/adgpu-v1.6_omp_macos_aarch64_ocl_128wi
```

---

## 4. Create a program directory for AutoDock-GPU

Create a dedicated directory under `$HOME/Programs`:

```bash
mkdir -p $HOME/Programs/autodock
mkdir -p $HOME/Programs/bin
```

---

## 5. Move the downloaded binary into place

Move the downloaded file into the AutoDock program directory:

```bash
mv $HOME/Downloads/adgpu-v1.6_omp_macos_aarch64_ocl_128wi \
   $HOME/Programs/autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi
```

Make the binary executable:

```bash
chmod +x $HOME/Programs/autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi
```

Remove the macOS quarantine attribute if the file was downloaded through a browser:

```bash
xattr -d com.apple.quarantine \
  $HOME/Programs/autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi 2>/dev/null || true
```

---

## 6. Create a convenient command-line symlink

Go to your personal binary directory:

```bash
cd $HOME/Programs/bin
```

Create a symbolic link named `vina_gpu`:

```bash
ln -sf ../autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi vina_gpu
```

This allows you to run the AutoDock-GPU binary using the shorter command:

```bash
vina_gpu
```

---

## 7. Add `$HOME/Programs/bin` to your PATH

If `$HOME/Programs/bin` is not already in your `PATH`, add it to your shell startup file.

For the default macOS `zsh` shell:

```bash
echo 'export PATH="$HOME/Programs/bin:$PATH"' >> $HOME/.zshrc
source $HOME/.zshrc
```

Confirm that the command is found:

```bash
which vina_gpu
```

The output should be similar to:

```text
/Users/YOUR_USERNAME/Programs/bin/vina_gpu
```

---

## 8. Test the installation

Run:

```bash
vina_gpu --help
```

or:

```bash
vina_gpu
```

If the installation worked, AutoDock-GPU should print its usage information or command-line options.

---

## 9. Example run command

A typical AutoDock-GPU command uses an AutoDock grid map descriptor file and a ligand PDBQT file:

```bash
vina_gpu \
  --ffile receptor.maps.fld \
  --lfile ligand.pdbqt \
  --nrun 20
```

The key required inputs are:

- `--ffile` or `-M`: the AutoDock grid map field file, usually ending in `.maps.fld`
- `--lfile` or `-L`: the ligand file in `.pdbqt` format
- `--nrun`: the number of docking runs to perform

---

## 10. Troubleshooting

### Error: `Library not loaded: /opt/homebrew/opt/llvm/lib/libomp.dylib`

Install LLVM with Homebrew:

```bash
brew install llvm
```

Then verify:

```bash
ls -l /opt/homebrew/opt/llvm/lib/libomp.dylib
```

Try again:

```bash
vina_gpu --help
```

### Error: permission denied

Make sure the binary is executable:

```bash
chmod +x $HOME/Programs/autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi
```

### Error: macOS says the file cannot be opened

Remove the quarantine attribute:

```bash
xattr -d com.apple.quarantine \
  $HOME/Programs/autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi 2>/dev/null || true
```

### Check what libraries the binary needs

Use `otool`:

```bash
otool -L $HOME/Programs/autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi
```

To specifically check OpenMP linkage:

```bash
otool -L $HOME/Programs/autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi | grep omp
```

---

## Final installed layout

After following this guide, the installation should look like this:

```text
$HOME/Programs/
├── autodock/
│   └── adgpu-v1.6_omp_macos_aarch64_ocl_128wi
└── bin/
    └── vina_gpu -> ../autodock/adgpu-v1.6_omp_macos_aarch64_ocl_128wi
```

You can then run AutoDock-GPU from anywhere using:

```bash
vina_gpu
```
