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

'use strict';

// MODULES //

var MAX_SAFE_INTEGER = require( '@stdlib/constants/float32/max-safe-integer' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var isIntegerf = require( './../../../../base/assert/is-integer' );
var isnanf = require( './../../../../base/assert/is-nan' );
var isOddf = require( './../../../../base/assert/is-odd' );
var floorf = require( './../../../../base/special/floorf' );
var gcdf = require( './../../../../base/special/gcdf' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the binomial coefficient of two integers as a single-precision floating-point number.
*
* @param {integer} n - input value
* @param {integer} k - second input value
* @returns {integer} function value
*
* @example
* var v = binomcoeff( 8, 2 );
* // returns 28
*
* @example
* var v = binomcoeff( 0, 0 );
* // returns 1
*
* @example
* var v = binomcoeff( -4, 2 );
* // returns 10
*
* @example
* var v = binomcoeff( NaN, 3 );
* // returns NaN
*
* @example
* var v = binomcoeff( 5, NaN );
* // returns NaN
*
* @example
* var v = binomcoeff( NaN, NaN );
* // returns NaN
*/
function binomcoeff( n, k ) {
	var res;
	var sgn;
	var b;
	var c;
	var d;
	var g;
	var s;
	if ( isnanf( n ) || isnanf( k ) ) {
		return NaN;
	}
	if ( !isIntegerf( n ) || !isIntegerf( k ) ) {
		return NaN;
	}
	if ( k < 0 ) {
		return float64ToFloat32( 0.0 );
	}
	sgn = float64ToFloat32( 1.0 );
	if ( n < 0 ) {
		n = -n + k - 1;
		if ( isOddf( k ) ) {
			sgn *= float64ToFloat32( -1.0 );
		}
	}
	if ( k > n ) {
		return float64ToFloat32( 0.0 );
	}
	if ( k === 0 || k === n ) {
		return float64ToFloat32( sgn );
	}
	if ( k === 1 || k === n - 1 ) {
		return float64ToFloat32( float64ToFloat32(sgn) * float64ToFloat32(n) );
	}
	// Minimize the number of computed terms by leveraging symmetry:
	if ( n - k < k ) {
		k = n - k;
	}
	s = floorf( MAX_SAFE_INTEGER / n );

	// Use a standard algorithm for computing the binomial coefficient (e.g., see Knuth's "The Art of Computer Programming, 3rd Edition, Volume 2: Seminumerical Algorithms")...
	res = float64ToFloat32( 1.0 );
	for ( d = 1; d <= k; d++ ) {
		// Check for potential overflow...
		if ( res > s ) {
			break;
		}
		res *= float64ToFloat32( n );
		res /= float64ToFloat32( d );
		n -= 1;
	}
	// If we did not early exit from the previous loop, the answer is exact, and we can simply return...
	if ( d > k ) {
		return float64ToFloat32( float64ToFloat32(sgn) * float64ToFloat32(res) );
	}
	/*
	* Let `N` equal the provided `n`.
	*
	* We want to calculate C(N,k), and, at this point, we have calculated
	*
	*   res = C(N,n) = C(N,N-n) = C(N,d-1)
	*
	* where `N-n = d-1` and, hence, `n = N - d + 1`.
	*
	* Given the following identity,
	*
	*   C(N,k) = C(N,d-1) * C(N-d+1,k-d+1) / C(k,k-d+1)
	*          = C(N,d-1) * C(n,k-d+1) / C(k,k-d+1)
	*
	* we can leverage recursion to perform argument reduction.
	*/
	b = binomcoeff( n, k-d+1 );
	if ( b === PINF ) {
		return float64ToFloat32( float64ToFloat32(sgn) * float64ToFloat32(b) );
	}
	c = binomcoeff( k, k-d+1 );

	/*
	* At this point, the result should be `res*b/c`.
	*
	* To help guard against overflow and precision loss, we calculate the greatest common divisor (gcdf). In this case, we pick `b`, as `b` should be less than `res` in most (if not all) cases.
	*/
	g = gcdf( b, c );
	b /= g;
	c /= g;
	res /= c;
	return float64ToFloat32( float64ToFloat32(sgn) * float64ToFloat32(res) * float64ToFloat32(b) );
}


// EXPORTS //

module.exports = binomcoeff;
