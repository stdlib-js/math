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

#include "stdlib/math/base/special/secf.h"
#include "stdlib/math/base/special/cosf.h"

/**
* Evaluates the secant of a single-precision floating-point number (in radians).
*
* @param x    input value (in radians)
* @return     secant
*
* @example
* float y = stdlib_base_secf( 3.1415927410125732f );
* // returns -1.0f
*/
float stdlib_base_secf( const float x ) {
	return 1.0f / stdlib_base_cosf( x );
}
