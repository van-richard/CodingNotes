# Installing helpme

## Prerequisites

- A Conda environment with QMHub installed. The examples below use `qmhub`.
- CMake and a C/C++ compiler available on `PATH`.

Set the installation location and environment name once:

```bash
HELPME_DIR="${HELPME_DIR:-$HOME/github/helpme}"
QM_ENV="${QM_ENV:-qmhub}"
```

## Clone and Activate Environment

```bash
mkdir -p "$(dirname "$HELPME_DIR")"
git clone https://github.com/andysim/helpme.git "$HELPME_DIR"
cd "$HELPME_DIR"

conda activate "$QM_ENV"
```

## Optional Python 3.12 `pybind11` Update

If the active Python version is newer than 3.11, replace the bundled `pybind11`
with a Python 3.12-compatible version before building.

```bash
cd "$HELPME_DIR"

mv external/pybind11 external/pybind11.old
git clone --depth 1 --branch v2.12.0 https://github.com/pybind/pybind11.git external/pybind11
```

## Build

Use Intel compilers when available, with GCC/G++ as the fallback.

```bash
cd "$HELPME_DIR"
rm -rf build
mkdir build
cd build

export CC="$(command -v icc || command -v icx || command -v gcc)"
export CXX="$(command -v icpc || command -v icpx || command -v g++)"

PKG_CONFIG_PATH="$CONDA_PREFIX/lib/pkgconfig:${PKG_CONFIG_PATH:-}" \
cmake .. \
  -DCMAKE_INSTALL_PREFIX="$CONDA_PREFIX" \
  -DPYTHON_EXECUTABLE="$(which python)" \
  -DENABLE_Python=ON \
  -DENABLE_fortran=OFF \
  -DENABLE_MPI=OFF \
  -DENABLE_BLAS=OFF \
  -DENABLE_OPENMP=ON \
  -DBUILD_TESTING=OFF

cmake --build . --target helpmelib
```

## Fix Extension Suffix If Needed

If the compiled file is named `helpmelibNone`, rename it to use Python's
expected extension suffix.

```bash
cd "$HELPME_DIR/build/python"

suffix="$(python -c 'import sysconfig; print(sysconfig.get_config_var("EXT_SUFFIX") or ".so")')"
mv helpmelibNone "helpmelib${suffix}"
```

## Test Import

```bash
cd "$HELPME_DIR/build/python"

python - <<'PY'
import sys
sys.path.insert(0, ".")
import helpmelib
print("helpmelib imported:", helpmelib.__file__)
PY
```

## Install Into QMHub

After the local import test succeeds, copy the built extension into the QMHub
package directory from the active Conda environment.

```bash
cd "$HELPME_DIR/build/python"

QMHub_DIR="$(python -c 'import pathlib, qmhub; print(pathlib.Path(qmhub.__file__).parent)')"
cp helpmelib*.so "$QMHub_DIR/"

python - <<'PY'
import qmhub
import helpmelib
print("qmhub:", qmhub.__file__)
print("helpmelib:", helpmelib.__file__)
print("OK")
PY
```

## Check Linked Libraries

```bash
QMHub_DIR="$(python -c 'import pathlib, qmhub; print(pathlib.Path(qmhub.__file__).parent)')"
ldd "$QMHub_DIR"/helpmelib*.so | grep -E "not found|mkl|fftw|iomp|gomp|stdc"
```
