/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/math/strided/special/dmskabs.h"
#include "stdlib/strided/base/dmskmap.h"
#include "stdlib/math/base/special/abs.h"
#include <stdint.h>

/**
* Computes the absolute value for each element in a double-precision floating-point strided array `X` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `Y`.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     X stride length
* @param Mask        mask array
* @param strideMask  Mask stride length
* @param Y           destination array
* @param strideY     Y stride length
*
* @example
* include <stdint.h>
*
* // Create an input strided array:
* const double x[] = { -2.0, 1.0, -3.0, -5.0, 4.0, 0.0, -1.0, -3.0 };
*
* // Create a mask strided array:
* const uint8_t m[] = { 0, 0, 1, 0, 1, 1, 0, 0 };
*
* // Create an output strided array:
* double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* // Specify the number of elements:
* const int64_t N = 4;
*
* // Specify the stride lengths:
* const int64_t strideX = 2;
* const int64_t strideM = 2;
* const int64_t strideY = 2;
*
* // Compute the results:
* stdlib_strided_dmskabs( N, x, strideX, m, strideM, y, strideY );
*/
void stdlib_strided_dmskabs( const int64_t N, const double *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask, double *Y, const int64_t strideY ) {
	stdlib_strided_dmskmap( N, X, strideX, Mask, strideMask, Y, strideY, stdlib_base_abs );
}
