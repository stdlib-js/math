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

#include "stdlib/math/base/special/fibonacci_indexf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_integerf.h"
#include "stdlib/math/base/special/lnf.h"
#include "stdlib/math/base/special/roundf.h"
#include "stdlib/constants/float32/phi.h"
#include "stdlib/constants/float32/pinf.h"
#include <stdbool.h>

static const float SQRT_5 = 2.23606797749979f;

/**
* Computes the Fibonacci number index of a single-precision floating-point number.
*
* ## Notes
*
* -   We use `roundf` instead of `floorf` due to errors introduced by floating-point precision.
*
* @param F    Fibonacci number
* @return     Fibonacci number index
*
* @example
* float out = stdlib_base_fibonacci_index( 2.0f );
* // returns 3.0f
*/
float stdlib_base_fibonacci_indexf( const float F ) {
	float x;

	if ( stdlib_base_is_nanf( F ) || stdlib_base_is_integerf( F ) == false || F <= 1.0f || F == STDLIB_CONSTANT_FLOAT32_PINF ) {
		return 0.0f / 0.0f; // NaN
	}
	x = ( F * SQRT_5 ) + 0.5f;
	return stdlib_base_roundf( stdlib_base_lnf( x ) / stdlib_base_lnf( STDLIB_CONSTANT_FLOAT32_PHI ) );
}
