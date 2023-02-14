/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/math/base/ops/cmulf.h"
#include "stdlib/complex/float32.h"
#include "stdlib/complex/reimf.h"

/**
* Multiplies two single-precision complex floating-point numbers.
*
* @param z1       input value
* @param z2       input value
* @return         result
*
* @example
* #include "stdlib/complex/float32.h"
* #include "stdlib/complex/realf.h"
* #include "stdlib/complex/imagf.h"
*
* stdlib_complex64_t z1 = stdlib_complex64( 5.0f, 3.0f );
* stdlib_complex64_t z2 = stdlib_complex64( -2.0f, 1.0f );
*
* stdlib_complex64_t out = stdlib_base_cmulf( z1, z2 );
*
* float re = stdlib_realf( out );
* // returns -13.0f
*
* float im = stdlib_imagf( out );
* // returns -1.0f
*/
stdlib_complex64_t stdlib_base_cmulf( const stdlib_complex64_t z1, const stdlib_complex64_t z2 ) {
	float re1;
	float re2;
	float im1;
	float im2;
	float re;
	float im;

	stdlib_reimf( z1, &re1, &im1 );
	stdlib_reimf( z2, &re2, &im2 );

	re = (re1*re2) - (im1*im2);
	im = (re1*im2) + (im1*re2);

	return stdlib_complex64( re, im );
}
