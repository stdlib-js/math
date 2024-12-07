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

#include "stdlib/math/base/assert/is_odd.h"
#include "stdlib/math/base/assert/is_even.h"

/**
* Tests if a finite double-precision floating-point number is an odd number.
*
* @param x    input value
* @return	  output value
*
* @example
* #include <stdbool.h>
*
* bool out = stdlib_base_is_odd( 3.0 );
* // returns true
*/
bool stdlib_base_is_odd( const double x ) {
	// Check sign to prevent overflow...
	if ( x > 0.0 ) {
		return stdlib_base_is_even( x - 1.0 );
	}
	return stdlib_base_is_even( x + 1.0 );
}
