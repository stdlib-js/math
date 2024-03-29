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

#include "stdlib/math/base/special/minabs.h"
#include "stdlib/math/base/special/min.h"
#include "stdlib/math/base/special/abs.h"

/**
* Returns the minimum absolute value.
*
* @param x       first number
* @param y       second number
* @return        minimum absolute value
*
* @example
* double v = stdlib_base_minabs( 3.14, -4.2 );
* // returns 3.14
*
* @example
* double v = stdlib_base_minabs( 0.0, -0.0 );
* // returns +0.0
*/
double stdlib_base_minabs( const double x, const double y ) {
	return stdlib_base_min( stdlib_base_abs( x ), stdlib_base_abs( y ) );
}
