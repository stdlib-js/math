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

#include "stdlib/math/base/special/cabsf.h"
#include "stdlib/math/base/special/hypotf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"

/**
* Computes the absolute value of a single-precision complex floating-point number.
*
* @param z       number
* @return        result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
*
* stdlib_complex64_t z = stdlib_complex64( 5.0f, 3.0f );
*
* float y = stdlib_base_cabsf( z );
* // returns ~5.83f
*/
float stdlib_base_cabsf( const stdlib_complex64_t z ) {
	float re;
	float im;
	stdlib_complex64_reim( z, &re, &im );
	return stdlib_base_hypotf( re, im );
}
