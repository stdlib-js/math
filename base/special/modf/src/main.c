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

#include "stdlib/math/base/special/modf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/number/float64/base/from_words.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/high_word_exponent_mask.h"
#include "stdlib/constants/float64/high_word_significand_mask.h"
#include "stdlib/constants/float64/num_high_word_significand_bits.h"

// 4294967295 => 0xffffffff => 11111111111111111111111111111111
static const uint32_t ALL_ONES = 4294967295;

/**
* Decomposes a double-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value.
*
* @param x           input value
* @param integral    destination pointer for the integral part
* @param frac        destination pointer for the fractional part
*
* @example
* double x = 3.141592653589793;
*
* double integral;
* double frac;
* stdlib_base_modf( x, &integral, &frac );
*/
void stdlib_base_modf( const double x, double* integral, double* frac ) {
	uint32_t high;
	uint32_t low;
	int32_t exp;
	int32_t i;
	double j;

	// Special cases...
	if ( x < 1.0 ) {
		if ( x < 0.0 ) {
			stdlib_base_modf( -x, integral, frac );
			*integral *= -1.0;
			*frac *= -1.0;
			return;
		}
		if ( x == 0.0 ) { // [ +-0, +-0 ]
			*integral = x;
			*frac = x;
			return;
		}
		*integral = 0.0;
		*frac = x;
		return;
	}
	if ( stdlib_base_is_nan( x ) ) {
		*integral = 0.0 / 0.0; // NaN
		*frac = 0.0 / 0.0; // NaN
		return;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		*integral = STDLIB_CONSTANT_FLOAT64_PINF;
		*frac = 0.0;
		return;
	}
	// Decompose |x|...

	// Extract the high and low words:
	stdlib_base_float64_to_words( x, &high, &low );

	// Extract the unbiased exponent from the high word:
	exp = ( ( high & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) >> STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS );
	exp -= ( STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS );

	// Handle smaller values (x < 2**20 = 1048576)...
	if( exp < STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS ) {
		i = ( STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK >> exp );

		// Determine if `x` is integral by checking for significand bits which cannot be exponentiated away...
		if ( ( ( high & i ) | low ) == 0 ) {
			*integral = x;
			*frac = 0.0;
			return;
		}
		// Turn off all the bits which cannot be exponentiated away:
		high &= ( ~i );

		// Generate the integral part:
		stdlib_base_float64_from_words( high, 0, &j );
		*integral = j;
		*frac = x - j;
		return;
	}
	// Check if `x` can even have a fractional part...
	if ( exp > 51 ) {
		// `x` is integral:
		*integral = x;
		*frac = 0.0;
		return;
	}
	i = ALL_ONES >> ( exp - STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS );

	// Determine if `x` is integral by checking for less significant significand bits which cannot be exponentiated away...
	if ( ( low & i ) == 0 ) {
		*integral = x;
		*frac = 0.0;
		return;
	}
	// Turn off all the bits which cannot be exponentiated away:
	low &= ( ~i );

	// Generate the integral part:
	stdlib_base_float64_from_words( high, low, &j );
	*integral = j;
	*frac = x - j;
	return;
}
