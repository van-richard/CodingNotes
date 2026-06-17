# run_cmake (sander only)

```bash
#!/bin/bash

#  This file gives some sample cmake invocations.  You may wish to
#  edit some options that are chosen here.

#  For information on how to get cmake, visit this page:
#  https://ambermd.org/pmwiki/pmwiki.php/Main/CMake-Quick-Start

#  For information on common options for cmake, visit this page:
#  http://ambermd.org/pmwiki/pmwiki.php/Main/CMake-Common-Options

#  (Note that you can change the value of CMAKE_INSTALL_PREFIX from what
#  is suggested below, but it cannot coincide with the ambertools26_src
#  folder.)

AMBER_PREFIX=$(dirname $(dirname `pwd`))
BUILDNAME="sander26"
PLUMED_ROOT="/home/van/Programs/plumed-2.9.4"

export PATH="${PLUMED_ROOT}/bin:${PATH}"
export LD_LIBRARY_PATH="${PLUMED_ROOT}/lib:${PLUMED_ROOT}/lib64:${LD_LIBRARY_PATH:-}"

if [[ -f "${PLUMED_ROOT}/lib/libplumed.so" ]]; then
    PLUMED_LIBDIR="${PLUMED_ROOT}/lib"
elif [[ -f "${PLUMED_ROOT}/lib64/libplumed.so" ]]; then
    PLUMED_LIBDIR="${PLUMED_ROOT}/lib64"
else
    echo "Could not find libplumed.so under ${PLUMED_ROOT}/lib or lib64"
    exit 1
fi

PLUMED_INCLUDEDIR="${PLUMED_ROOT}/include/plumed"
if [[ ! -f "${PLUMED_INCLUDEDIR}/wrapper/Plumed.h" ]]; then
    echo "Could not find ${PLUMED_INCLUDEDIR}/wrapper/Plumed.h"
    exit 1
fi

#     -DCMAKE_C_COMPILER=icc \
#     -DCMAKE_CXX_COMPILER=icpc \
#     -DCMAKE_Fortran_COMPILER=ifort \
#     -DMPI=TRUE \
#     -DMPI_C_COMPILER=mpiicc \
#     -DMPI_CXX_COMPILER=mpiicpc \
#     -DMPI_Fortran_COMPILER=mpiifort \
  cmake $AMBER_PREFIX/${BUILDNAME}_src -Wno-dev \
    -DCMAKE_INSTALL_PREFIX=/home/van/Programs/${BUILDNAME} \
    -DCMAKE_BUILD_TYPE=RELEASE \
    -DCOLOR_CMAKE_MESSAGES=FALSE \
    -DCOMPILER=GNU \
    -DOPENMP=FALSE \
    -DMKL_MULTI_THREADED=FALSE \
    -DBUILD_SHARED_LIBS=TRUE \
    -DBUILD_GUI=FALSE \
    -DDOWNLOAD_MINICONDA=FALSE \
    -DBUILD_PYTHON=FALSE \
    -DBUILD_PERL=FALSE \
    -DINSTALL_TESTS=FALSE \
    -DBUILD_QUICK=TRUE \
    -DBUILD_SANDER_LES=FALSE \
    -DBUILD_SANDER_API=FALSE \
    -DBUILD_SANDER_APBS=FALSE \
    -DBUILD_SANDER_PUPIL=FALSE \
    -DUSE_FFT=FALSE \
    -DPLUMED_ROOT="${PLUMED_ROOT}" \
    -DPLUMED_LIBRARY="${PLUMED_LIBDIR}/libplumed.so" \
    -DPLUMED_KERNEL_LIBRARY="${PLUMED_LIBDIR}/libplumedKernel.so" \
    -DPLUMED_INCLUDES="${PLUMED_INCLUDEDIR}" \
    -DCMAKE_PREFIX_PATH="${PLUMED_ROOT}" \
    -DCMAKE_INSTALL_RPATH_USE_LINK_PATH=TRUE \
    -DCMAKE_INSTALL_RPATH="${PLUMED_LIBDIR}" \
    "-DFORCE_EXTERNAL_LIBS=plumed" \
    "-DFORCE_INTERNAL_LIBS=fftw" \
    "-DFORCE_DISABLE_LIBS=boost;perlmol;mbx;pnetcdf" \
    "-DDISABLE_TOOLS=gbnsr6;cifparse;addles;nmr_aux;nmode;antechamber;ndiff-2.00;gem.pmemd;xray;cpptraj;ambpdb;etc;mdgx;xtalutil;saxs;mm_pbsa;paramfit;FEW;cphstats;tcpb-cpp;tcpb-cpp/pytcpb;reaxff_puremd;nfe-umbrella-slice;leap;parmed;mmpbsa_py;pymsmt;pysander;pytraj;pdb4amber;packmol_memgen;packmol_memgen/web;PyPE_RESP;proprep;rismtools;moft;gpu_utils;pmemd;nabc;fe-toolkit;modXNA;rism" \
    2>&1 | tee  cmake.log

if [ ! -s cmake.log ]; then
  echo ""
  echo "Error:  No cmake.log file created: you may need to edit run_cmake"
  exit 1
fi

echo ""
echo "If errors are reported, search for 'CMake Error' in the cmake.log file."
echo ""
echo "If the cmake build report looks OK, you should now do the following:"
echo ""
echo "    make install"
echo "    source $AMBER_PREFIX/${BUILDNAME}/amber.sh"
echo ""
echo "Consider adding the last line to your login startup script, e.g. ~/.bashrc"
echo ""
```
