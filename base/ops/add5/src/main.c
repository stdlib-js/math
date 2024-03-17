/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/ops/add5.h"

/**
* Computes the sum of five double-precision floating-point numbers.
*
* @param x       first number
* @param y       second number
* @param z       third number
* @param w       fourth number
* @param u       fifth number
* @return        sum
*
* @example
* double z = stdlib_base_add5( -5.0, 3.0, 4.0, 2.0, 1.0 );
* // returns 5.0
*/
double stdlib_base_add5( const double x, const double y, const double z, const double w, const double u ) {
	return x + y + z + w + u;
}
