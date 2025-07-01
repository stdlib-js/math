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

#include "stdlib/math/base/special/cscf.h"
#include "stdlib/math/base/special/sinf.h"

/**
* Evaluates the cosecant of a single-precision floating-point number (in radians).
*
* @param x    input value (in radians)
* @return     cosecant
*
* @example
* float y = stdlib_base_cscf( 3.141592653589793f / 2.0f );
* // returns 1.0f
*/
float stdlib_base_cscf( const float x ) {
	return 1.0f / stdlib_base_sinf( x );
}
