/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/math/strided/special/ssqrt.h"
#include "stdlib/strided/base/smap.h"
#include "stdlib/math/base/special/sqrtf.h"
#include <stdint.h>

/**
* Computes the principal square root for each element in a single-precision floating-point strided array `X` and assigns the results to elements in a single-precision floating-point strided array `Y`.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        destination array
* @param strideY  Y stride length
*
* @example
* #include <stdint.h>
*
* // Create an input strided array:
* const float x[] = { 0.0, 4.0, 9.0, 12.0, 24.0, 64.0, 81.0, 101.0 };
*
* // Create an output strided array:
* float y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* // Specify the number of elements:
* const int64_t N = 4;
*
* // Specify the stride lengths:
* const int64_t strideX = 2;
* const int64_t strideY = 2;
*
* // Compute the results:
* stdlib_strided_ssqrt( N, x, strideX, y, strideY );
*/
void stdlib_strided_ssqrt( const int64_t N, const float *X, const int64_t strideX, float *Y, const int64_t strideY ) {
	stdlib_strided_smap( N, X, strideX, Y, strideY, stdlib_base_sqrtf );
}
