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

#include "stdlib/math/base/special/ccis.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/reim.h"
#include "stdlib/math/base/special/exp.h"
#include <math.h>


/**
* Evaluates the cis function for a double-precision complex floating-point number.
*
* @param z        input value
* @return         result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 0.0, 0.0 );
*
* stdlib_complex128_t out = stdlib_base_ccis( z );
*
* double re = stdlib_real( out );
* // returns 1.0
*
* double im = stdlib_imag( out );
* // returns 0.0
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 1.0, 0.0 );
*
* stdlib_complex128_t out = stdlib_base_ccis( z );
*
* double re = stdlib_real( out );
* // returns ~0.540
*
* double im = stdlib_imag( out );
* // returns ~0.841
*/
stdlib_complex128_t stdlib_base_ccis( const stdlib_complex128_t z ) {
	double re;
	double im;
	double y;
	double x;
	double e;

	stdlib_reim( z, &re, &im );

	y = sin( re ); //TODO: use stdlib function once available
	x = cos( re ); //TODO: use stdlib function once available
	if( im != 0.0 ){
		e = stdlib_base_exp( -im );
		y *= e;
		x *= e;
	}
	return stdlib_complex128( x, y );
}
