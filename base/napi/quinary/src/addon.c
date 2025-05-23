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

#include "stdlib/math/base/napi/quinary.h"

/**
* Adds double-precision floating-point numbers.
*
* @param x   input value
* @param y   input value
* @param z   input value
* @param w   input value
* @param u   input value
* @return    sum
*/
static double add( const double x, const double y, const double z, const double w, const double u ) {
	return x + y + z + w + u;
}

STDLIB_MATH_BASE_NAPI_MODULE_DDDDD_D( add )
