/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/math/base/special/fast/abs.h"

/**
* Computes the absolute value of `x`.
*
* @param x    input value
* @return     absolute value
*
* @example
* double v = stdlib_base_fast_abs( -1.0 );
* // returns 1.0
*/
double stdlib_base_fast_abs( const double x ) {
	if ( x < 0.0 ) {
		return -x;
	}
	return x;
}
