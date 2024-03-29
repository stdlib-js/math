/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import absdiff = require( './../../../../base/utils/absolute-difference' );
import epsdiff = require( './../../../../base/utils/float64-epsilon-difference' );
import reldiff = require( './../../../../base/utils/relative-difference' );

/**
* Interface describing the `utils` namespace.
*/
interface Namespace {
	/**
	* Computes the absolute difference.
	*
	* @param x - first number
	* @param y - second number
	* @returns absolute difference
	*
	* @example
	* var d = ns.absdiff( 2.0, 5.0 );
	* // returns 3.0
	*
	* @example
	* var d = ns.absdiff( -1.0, 3.14 );
	* // returns ~4.14
	*
	* @example
	* var d = ns.absdiff( 10.1, -2.05 );
	* // returns ~12.15
	*
	* @example
	* var d = ns.absdiff( -0.0, 0.0 );
	* // returns +0.0
	*
	* @example
	* var d = ns.absdiff( NaN, 5.0 );
	* // returns NaN
	*
	* @example
	* var d = ns.absdiff( Infinity, -Infinity  );
	* // returns Infinity
	*
	* @example
	* var d = ns.absdiff( Infinity, Infinity  );
	* // returns NaN
	*/
	absdiff: typeof absdiff;

	/**
	* Computes the relative difference in units of double-precision floating-point epsilon.
	*
	* ## Notes
	*
	* -   By default, the function scales the absolute difference by dividing the absolute difference by the maximum absolute value of `x` and `y`. To scale by a different function, specify a scale function name or custom scale function.
	* -   If computing the relative difference in units of epsilon will result in overflow, the function returns the maximum double-precision floating-point number.
	* -   If the absolute difference of `x` and `y` is `0`, the relative difference is always `0`.
	* -   If `|x| = |y| = infinity`, the function returns `NaN`.
	* -   If `|x| = |-y| = infinity`, the relative difference is `+infinity`.
	* -   If a `scale` function returns `0`, the function returns `NaN`.
	*
	* @param x - first number
	* @param y - second number
	* @param scale - scale function (default: 'max-abs')
	* @returns relative difference in units of double-precision floating-point epsilon
	*
	* @example
	* var d = ns.epsdiff( 12.15, 12.149999999999999 ); // => ~0.658ε
	* // returns ~0.658
	*
	* @example
	* var d = ns.epsdiff( 2.4341309458983933, 2.4341309458633909, 'mean-abs' ); // => ~64761.5ε => ~1.438e-11
	* // returns ~64761.5
	*
	* @example
	* function scale( x, y ) {
	*      // Return the minimum value:
	*      return ( x > y ) ? y : x;
	* }
	*
	* var d = ns.epsdiff( 1.0000000000000002, 1.0000000000000100, scale ); // => ~44ε
	* // returns ~44
	*/
	epsdiff: typeof epsdiff;

	/**
	* Computes the relative difference of two real numbers.
	*
	* ## Notes
	*
	* -   By default, the function scales the absolute difference by dividing the absolute difference by the maximum absolute value of `x` and `y`. To scale by a different function, specify a scale function name or custom scale function.
	* -   If the absolute difference of `x` and `y` is `0`, the relative difference is always `0`.
	* -   If `|x| = |y| = infinity`, the function returns `NaN`.
	* -   If `|x| = |-y| = infinity`, the relative difference is `+infinity`.
	* -   If a `scale` function returns `0`, the function returns `NaN`.
	*
	* @param x - first number
	* @param y - second number
	* @param scale - scale function (default: 'max-abs')
	* @throws must provide a recognized scale function name
	* @returns relative difference
	*
	* @example
	* var d = ns.reldiff( 2.0, 5.0 ); // => 3/5
	* // returns 0.6
	*
	* @example
	* var d = ns.reldiff( -1.0, 3.14 ); // => 4.14/3.14
	* // returns ~1.318
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'max-abs' ); // => |-7/5|
	* // returns 1.4
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'max' ); // => |-7/5|
	* // returns 1.4
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'min-abs' ); // => |-7/2|
	* // returns 3.5
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'min' ); // => |-7/-2|
	* // returns 3.5
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'mean-abs' ); // => |-7/3.5|
	* // returns 2.0
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'mean' ); // => |-7/1.5|
	* // returns ~4.67
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'x' ); // => |-7/-2|
	* // returns 3.5
	*
	* @example
	* var d = ns.reldiff( 5.0, -2.0, 'x' ); // => |7/5|
	* // returns 1.4
	*
	* @example
	* var d = ns.reldiff( -2.0, 5.0, 'y' ); // => |-7/5|
	* // returns 1.4
	*
	* @example
	* var d = ns.reldiff( 5.0, -2.0, 'y' ); // => |7/-2|
	* // returns 3.5
	*/
	reldiff: typeof reldiff;
}

/**
* Base math utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
