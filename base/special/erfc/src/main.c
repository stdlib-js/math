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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/erfc.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/number/float64/base/set_low_word.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdint.h>

static const double TINY = 1.0e-300;

// 2**-56 = 1/(2**56) = 1/72057594037927940
static const double SMALL = 1.3877787807814457e-17;

static const double ERX = 8.45062911510467529297e-1;  // 0x3FEB0AC1, 0x60000000

static const double PPC = 1.28379167095512558561e-1;  // 0x3FC06EBA, 0x8214DB68
static const double QQC = 1.0;

static const double PAC = -2.36211856075265944077e-3; // 0xBF6359B8, 0xBEF77538
static const double QAC = 1.0;

static const double RAC = -9.86494403484714822705e-3; // 0xBF843412, 0x600D6435
static const double SAC = 1.0;

static const double RBC = -9.86494292470009928597e-3; // 0xBF843412, 0x39E86F4A
static const double SBC = 1.0;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_pa

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
static double polyval_pa( const double x ) {
	return 0.41485611868374833 + (x * (-0.3722078760357013 + (x * (0.31834661990116175 + (x * (-0.11089469428239668 + (x * (0.035478304325618236 + (x * -0.002166375594868791)))))))));
}

// END: polyval_pa

// BEGIN: polyval_pp

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
static double polyval_pp( const double x ) {
	return -0.3250421072470015 + (x * (-0.02848174957559851 + (x * (-0.005770270296489442 + (x * -0.000023763016656650163)))));
}

// END: polyval_pp

// BEGIN: polyval_qa

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
static double polyval_qa( const double x ) {
	return 0.10642088040084423 + (x * (0.540397917702171 + (x * (0.07182865441419627 + (x * (0.12617121980876164 + (x * (0.01363708391202905 + (x * 0.011984499846799107)))))))));
}

// END: polyval_qa

// BEGIN: polyval_qq

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
static double polyval_qq( const double x ) {
	return 0.39791722395915535 + (x * (0.0650222499887673 + (x * (0.005081306281875766 + (x * (0.00013249473800432164 + (x * -0.000003960228278775368)))))));
}

// END: polyval_qq

// BEGIN: polyval_ra

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
static double polyval_ra( const double x ) {
	return -0.6938585727071818 + (x * (-10.558626225323291 + (x * (-62.375332450326006 + (x * (-162.39666946257347 + (x * (-184.60509290671104 + (x * (-81.2874355063066 + (x * -9.814329344169145)))))))))));
}

// END: polyval_ra

// BEGIN: polyval_rb

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
static double polyval_rb( const double x ) {
	return -0.799283237680523 + (x * (-17.757954917754752 + (x * (-160.63638485582192 + (x * (-637.5664433683896 + (x * (-1025.0951316110772 + (x * -483.5191916086514)))))))));
}

// END: polyval_rb

// BEGIN: polyval_sa

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
static double polyval_sa( const double x ) {
	return 19.651271667439257 + (x * (137.65775414351904 + (x * (434.56587747522923 + (x * (645.3872717332679 + (x * (429.00814002756783 + (x * (108.63500554177944 + (x * (6.570249770319282 + (x * -0.0604244152148581)))))))))))));
}

// END: polyval_sa

// BEGIN: polyval_sb

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
static double polyval_sb( const double x ) {
	return 30.33806074348246 + (x * (325.7925129965739 + (x * (1536.729586084437 + (x * (3199.8582195085955 + (x * (2553.0504064331644 + (x * (474.52854120695537 + (x * -22.44095244658582)))))))))));
}

// END: polyval_sb

/* End auto-generated functions. */

/**
* Evaluates the complementary error function.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_erfc( 0.0 );
* // returns 1.0
*/
double stdlib_base_erfc( const double x ) {
	int32_t sign;
	double ax;
	double z;
	double r;
	double s;
	double y;
	double p;
	double q;

	// Special case: NaN
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	// Special case: +infinity
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0;
	}
	// Special case: -infinity
	if ( x == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return 2.0;
	}
	// Special case: +-0
	if ( x == 0.0 ) {
		return 1.0;
	}
	if ( x < 0.0 ) {
		sign = 1;
		ax = -x;
	} else {
		sign = 0;
		ax = x;
	}
	// |x| < 0.84375
	if ( ax < 0.84375 ) {
		if ( ax < SMALL ) {
			return 1.0 - x; // raise inexact
		}
		z = x * x;
		r = PPC + ( z * polyval_pp( z ) );
		s = QQC + ( z * polyval_qq( z ) );
		y = r / s;

		// x < 1/4
		if ( x < 0.25 ) {
			return 1.0 - ( x + ( x * y ) );
		}
		r = x * y;
		r += x - 0.5;
		return 0.5 - r;
	}
	// 0.84375 <= |x| < 1.25
	if ( ax < 1.25 ) {
		s = ax - 1.0;
		p = PAC + ( s * polyval_pa( s ) );
		q = QAC + ( s * polyval_qa( s ) );
		if ( sign == 1 ) {
			return 1.0 + ERX + ( p / q );
		}
		return 1.0 - ERX - ( p / q );
	}
	// |x| < 28
	if ( ax < 28.0 ) {
		s = 1.0 / ( ax * ax );

		// |x| < 1/0.35 ~ 2.857143
		if ( ax < 2.857142857142857 ) {
			r = RAC + ( s * polyval_ra( s ) );
			s = SAC + ( s * polyval_sa( s ) );
		}
		// |x| >= 1/0.35 ~ 2.857143
		else {
			// x < -6
			if ( x < -6.0 ) {
				return 2.0 - TINY; // raise inexact
			}
			r = RBC + ( s * polyval_rb( s ) );
			s = SBC + ( s * polyval_sb( s ) );
		}
		z = ax;
		stdlib_base_float64_set_low_word( 0, &z ); // pseudo-single (20-bit) precision x
		r = stdlib_base_exp( -( z * z ) - 0.5625 ) * stdlib_base_exp( ( ( z - ax ) * ( z + ax ) ) + ( r / s ) );
		if ( sign == 1 ) {
			return 2.0 - ( r / ax );
		}
		return r / ax;
	}
	if ( sign == 1 ) {
		return 2.0 - TINY; // raise inexact; ~2
	}
	return TINY * TINY; // raise inexact; ~0
}
