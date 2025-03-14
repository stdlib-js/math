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

#include "stdlib/math/base/assert/is_nonpositive_integer.h"
#include "stdlib/math/base/special/floor.h"

/**
* Tests if a finite double-precision floating-point number is a nonpositive integer.
*
* @param x    input value
* @return     output value
*
* @example
* #include <stdbool.h>
*
* bool out = stdlib_base_is_nonpositive_integer( 3.0 );
* // returns false
*/
bool stdlib_base_is_nonpositive_integer( const double x ) {
	return ( stdlib_base_floor( x ) == x && x <= 0 );
}
