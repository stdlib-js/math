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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/tanh.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/exp.h"

// log(2**127)
static const double MAXLOG = 8.8029691931113054295988e+01;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: rational_pq

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_pq( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.3333333333333332;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -1614.6876844170845 + (x * (-99.28772310019185 + (x * (-0.9643991794250523 + (x * 0.0)))));
		s2 = 4844.063053251255 + (x * (2235.4883906010045 + (x * (112.81167849163293 + (x * 1.0)))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (-0.9643991794250523 + (ix * (-99.28772310019185 + (ix * -1614.6876844170845)))));
		s2 = 1.0 + (ix * (112.81167849163293 + (ix * (2235.4883906010045 + (ix * 4844.063053251255)))));
	}
	return s1 / s2;
}

// END: rational_pq

/* End auto-generated functions. */

/**
* Computes the hyperbolic tangent of a number.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_tanh( 0.0 );
* // returns 0.0
*/
double stdlib_base_tanh( const double x ) {
    double s;
    double z;
    z = stdlib_base_abs( x );
    if ( z > 0.5 * MAXLOG ) {
        return ( x < 0.0 ) ? -1.0 : 1.0;
    }
    if ( z >= 0.625 ) {
        s = stdlib_base_exp( 2.0 * z );
        z = 1.0 - ( 2.0 / ( s + 1.0 ) );
        if ( x < 0.0 ) {
            z = -z;
        }
    } else {
        if ( x == 0.0 ) {
            return x; // Handle `+-0`
        }
        s = x * x;
        z = x + ( x * s * rational_pq( s ) );
    }
    return z;
}
