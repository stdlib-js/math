/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log10.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/log10.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/number/float64/base/set_low_word.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_significand_mask.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/ninf.h"

static const double TWO54 = 1.80143985094819840000e+16;     // 0x43500000, 0x00000000
static const double IVLN10HI = 4.34294481878168880939e-01;  // 0x3fdbcb7b, 0x15200000
static const double IVLN10LO = 2.50829467116452752298e-11;  // 0x3dbb9438, 0xca9aadd5
static const double LOG10_2HI = 3.01029995663611771306e-01; // 0x3FD34413, 0x509F6000
static const double LOG10_2LO = 3.69423907715893078616e-13; // 0x3D59FEF3, 0x11F12B36

// 0x7ff00000 = 2146435072 => 0 11111111111 00000000000000000000 => biased exponent: 2047 = 1023+1023 => 2^1023
static const int32_t HIGH_MAX_NORMAL_EXP = 0x7ff00000;

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000 => biased exponent: 1 = -1022+1023 => 2^-1022
static const int32_t HIGH_MIN_NORMAL_EXP = 0x00100000;

// 0x3ff00000 = 1072693248 => 0 01111111111 00000000000000000000 => biased exponent: 1023 = 0+1023 => 2^0 = 1
static const int32_t HIGH_BIASED_EXP_0 = 0x3ff00000;

// 1/3
static const double ONE_THIRD = 0.33333333333333333;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_p

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_p( const double x ) {
	return 0.3999999999940942 + (x * (0.22222198432149784 + (x * 0.15313837699209373)));
}

// END: polyval_p

// BEGIN: polyval_q

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_q( const double x ) {
	return 0.6666666666666735 + (x * (0.2857142874366239 + (x * (0.1818357216161805 + (x * 0.14798198605116586)))));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Return `log(x) - (x-1)` for `x` in `~[sqrt(2)/2, sqrt(2)]`.
*
* @param {number} x - input value
* @returns {number} function value
*/
static double klog( const double x ) {
	double hfsq;
	uint32_t hx;
	int32_t ihx;
	int32_t i;
	int32_t j;
	double t1;
	double t2;
	double f;
	double s;
	double z;
	double R;
	double w;

	stdlib_base_float64_get_high_word( x, &hx );
	ihx = (int32_t)hx;
	f = x - 1.0;
	if ( ( STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK & ( 2 + ihx ) ) < 3 ) {
		// Case: -2**-20 <= f < 2**-20
		if ( f == 0.0 ) {
			return 0.0;
		}
		return f * f * ( ( ONE_THIRD * f ) - 0.5 );
	}
	s = f / ( 2.0 + f );
	z = s * s;
	ihx &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK;
	i = (ihx - 0x6147a);
	w = z * z;
	j = ( 0x6b851 - ihx );
	t1 = w * polyval_p( w );
	t2 = z * polyval_q( w );
	i |= j;
	R = t2 + t1;
	if ( i > 0 ) {
		hfsq = 0.5 * f * f;
		return ( s * ( hfsq + R ) ) - hfsq;
	}
	return s * ( R - f );
}

/**
* Evaluates the common logarithm (base ten).
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_log10( 4.0 );
* // returns ~0.602
*/
double stdlib_base_log10( const double x ) {
	int32_t ihx;
	int32_t ilx;
	uint32_t hx;
	uint32_t lx;
	int32_t i;
	int32_t k;
	double xc;
	double hi;
	double lo;
	double f;
	double y;
	double z;

	xc = x;
	stdlib_base_float64_to_words( x, &hx, &lx );
	ihx = (int32_t)hx;
	ilx = (int32_t)lx;
	k = 0;

	// Case: 0 < x < 2**-1022
	if ( ihx < HIGH_MIN_NORMAL_EXP ) {
		if ( ( ( ihx & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK ) | ilx ) == 0 ) {
			return STDLIB_CONSTANT_FLOAT64_NINF;
		}
		if ( ihx < 0 ) {
			return 0.0 / 0.0; // NaN
		}
		// Subnormal number, scale up `x`...
		k -= 54;
		xc *= TWO54;
		stdlib_base_float64_get_high_word( xc, &hx );
		ihx = (int32_t)hx;
	}
	if ( ihx >= HIGH_MAX_NORMAL_EXP ) {
		return x + x;
	}
	k += ( ( ihx>>20 ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS );
	ihx &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK;
	i = ( ihx + 0x95f64 ) & 0x100000;

	// Normalize `x` or `x/2`...
	stdlib_base_float64_set_high_word( ihx | ( i ^ HIGH_BIASED_EXP_0 ), &xc );
	k += i >> 20;
	y = (double)k;
	f = klog( xc );
	xc -= 1.0;
	hi = xc;
	stdlib_base_float64_set_low_word( 0, &hi );
	lo = xc - hi;
	z = ( y * LOG10_2LO ) + ( ( xc + f ) * IVLN10LO );
	z += ( ( lo + f ) * IVLN10HI ) + ( hi * IVLN10HI );
	return z + ( y * LOG10_2HI );
}
