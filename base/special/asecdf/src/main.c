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

#include "stdlib/math/base/special/asecdf.h"
#include "stdlib/math/base/special/asecf.h"
#include "stdlib/math/base/special/rad2degf.h"

/**
* Computes the arcsecant (in degrees) of a single-precision floating-point number.
*
* @param x    input value
* @return     arcsecant (in degrees)
*
* @example
* float v = stdlib_base_asecdf( 1.0f );
* // returns 0.0f
*/
float stdlib_base_asecdf( const float x ) {
	return stdlib_base_rad2degf( stdlib_base_asecf( x ) );
}
