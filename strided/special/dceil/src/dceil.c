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

#include "stdlib/math/strided/special/dceil.h"
#include "stdlib/strided/base/dmap.h"
#include "stdlib/math/base/special/ceil.h"
#include <stdint.h>

/**
* Rounds each element in a double-precision floating-point strided array `X` toward positive infinity and assigns the results to elements in a double-precision floating-point strided array `Y`.
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
* const double x[] = { 1.1, 2.5, -3.5, 4.0, -5.9, 6.4, -7.0, 8.2 };
*
* // Create an output strided array:
* double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* // Specify the number of elements:
* const int64_t N = 4;
*
* // Specify the stride lengths:
* const int64_t strideX = 2;
* const int64_t strideY = 2;
*
* // Compute the results:
* stdlib_strided_dceil( N, x, strideX, y, strideY );
*/
void stdlib_strided_dceil( const int64_t N, const double *X, const int64_t strideX, double *Y, const int64_t strideY ) {
	stdlib_strided_dmap( N, X, strideX, Y, strideY, stdlib_base_ceil );
}
