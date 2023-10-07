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

#include "stdlib/math/base/special/cexp.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"
#include <math.h>

/**
* Evaluates the exponential function of a double-precision complex floating-point number.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float64.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 0.0, 0.0 );
* stdlib_complex128_t out = stdlib_base_cexp( z );
*
* double re = stdlib_real( out );
* // returns 1.0
*
* double im = stdlib_imag( out );
* // returns 0.0
*/
stdlib_complex128_t stdlib_base_cexp( const stdlib_complex128_t z ) {
	double re;
	double im;
	double e;

	stdlib_reim( z, &re, &im );

	if ( isnan( re ) ){
		re = NAN;
		im = ( im == 0.0 ) ? im : re;
	} else if ( isinf( im ) ){
		if ( re == INFINITY ) {
			re = -re;
			im = NAN;
		} else if ( re == -INFINITY ) {
			re = -0.0;
			im = copysign( 0.0, im );
		} else {
			re = NAN;
			im = NAN;
		}
	} else {
		e = exp( re );
		if ( im == 0.0 ) {
			re = e;
		} else {
			re = cos( im ) * e;
			im = sin( im ) * e;
		}
	}
	return stdlib_complex128( re, im );
}
