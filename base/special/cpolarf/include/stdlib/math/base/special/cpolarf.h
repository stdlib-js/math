/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#ifndef STDLIB_MATH_BASE_SPECIAL_CPOLARF_H
#define STDLIB_MATH_BASE_SPECIAL_CPOLARF_H

#include "stdlib/complex/float32/ctor.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the absolute value and the phase of a single-precision complex floating-point number.
*/
void stdlib_base_cpolarf( const stdlib_complex64_t z, float *cabsf, float *cphasef );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_SPECIAL_CPOLARF_H
