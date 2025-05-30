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

#include "stdlib/math/base/special/acovercosf.h"
#include "stdlib/math/base/special/asinf.h"

/**
* Computes the inverse coversed cosine of a single-precision floating-point number (in radians).
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_acovercosf( 0.0f );
* // returns ~-1.5708f
*/
float stdlib_base_acovercosf( const float x ) {
	return stdlib_base_asinf( x - 1.0f );
}
