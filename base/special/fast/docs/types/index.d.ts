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

import abs = require( './../../../../../base/special/fast/abs' );
import acosh = require( './../../../../../base/special/fast/acosh' );
import ampbm = require( './../../../../../base/special/fast/alpha-max-plus-beta-min' );
import asinh = require( './../../../../../base/special/fast/asinh' );
import atanh = require( './../../../../../base/special/fast/atanh' );
import hypot = require( './../../../../../base/special/fast/hypot' );
import max = require( './../../../../../base/special/fast/max' );
import min = require( './../../../../../base/special/fast/min' );
import powint = require( './../../../../../base/special/fast/pow-int' );
import log2Uint32 = require( './../../../../../base/special/fast/uint32-log2' );
import sqrtUint32 = require( './../../../../../base/special/fast/uint32-sqrt' );

/**
* Interface describing the `fast` namespace.
*/
interface Namespace {
	/**
	* Computes the absolute value of `x`.
	*
	* ## Notes
	*
	* -   This implementation is not IEEE 754 compliant. If provided `-0`, the function returns `-0`.
	*
	* @param x - input value
	* @returns absolute value
	*
	* @example
	* var v = ns.abs( -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.abs( 2.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.abs( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.abs( -0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.abs( NaN );
	* // returns NaN
	*/
	abs: typeof abs;

	/**
	* Computes the hyperbolic arccosine of a number.
	*
	* ## Notes
	*
	* -   The domain of `x` is restricted to `[1,+infinity)`. If `x < 1`, the function will return `NaN`.
	*
	* @param x - input value
	* @returns hyperbolic arccosine (in radians)
	*
	* @example
	* var v = ns.acosh( 1.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.acosh( 2.0 );
	* // returns ~1.317
	*
	* @example
	* var v = ns.acosh( NaN );
	* // returns NaN
	*/
	acosh: typeof acosh;

	/**
	* Computes the hypotenuse using the alpha max plus beta min algorithm.
	*
	* @param x - number
	* @param y - number
	* @returns hypotenuse
	*
	* @example
	* var h = ns.ampbm( -5.0, 12.0 );
	* // returns ~13.5
	*
	* @example
	* var ns.ampbm = ns.ampbm.factory( 1.0, 0.5 );
	* // returns <Function>
	*
	* var h = ns.ampbm( -5.0, 12.0 );
	* // returns 14.5
	*/
	ampbm: typeof ampbm;

	/**
	* Computes the hyperbolic arcsine of a number.
	*
	* @param x - input value
	* @returns hyperbolic arcsine (in radians)
	*
	* @example
	* var v = ns.asinh( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.asinh( 2.0 );
	* // returns ~1.444
	*
	* @example
	* var v = ns.asinh( -2.0 );
	* // returns ~-1.444
	*
	* @example
	* var v = ns.asinh( NaN );
	* // returns NaN
	*/
	asinh: typeof asinh;

	/**
	* Computes the hyperbolic arctangent of a number.
	*
	* ## Notes
	*
	* -   The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @returns hyperbolic arctangent (in radians)
	*
	* @example
	* var v = ns.atanh( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.atanh( 0.9 );
	* // returns ~1.472
	*
	* @example
	* var v = ns.atanh( 1.0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.atanh( -1.0 );
	* // returns -Infinity
	*
	* @example
	* var v = ns.atanh( NaN );
	* // returns NaN
	*/
	atanh: typeof atanh;

	/**
	* Computes the hypotenuse.
	*
	* @param x - number
	* @param y - number
	* @returns hypotenuse
	*
	* @example
	* var h = ns.hypot( -5.0, 12.0 );
	* // returns 13.0
	*/
	hypot: typeof hypot;

	/**
	* Returns the maximum value.
	*
	* ## Notes
	*
	* -   The function ignores the sign of `0` and does not check for `NaN` arguments.
	*
	* @param x - first number
	* @param y - second number
	* @returns maximum value
	*
	* @example
	* var v = ns.max( 3.14, 4.2 );
	* // returns 4.2
	*
	* @example
	* var v = ns.max( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.max( NaN, 3.14 );
	* // returns 3.14
	*
	* @example
	* var v = ns.max( -0.0, +0.0 );
	* // returns +0.0
	*
	* @example
	* var v = ns.max( +0.0, -0.0 );
	* // returns -0.0
	*/
	max: typeof max;

	/**
	* Returns the minimum value.
	*
	* ## Notes
	*
	* -   The function ignores the sign of `0` and does not check for `NaN` arguments.
	*
	* @param x - first number
	* @param y - second number
	* @returns minimum value
	*
	* @example
	* var v = ns.min( 3.14, 4.2 );
	* // returns 3.14
	*
	* @example
	* var v = ns.min( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = ns.min( NaN, 3.14 );
	* // returns 3.14
	*
	* @example
	* var v = ns.min( -0.0, +0.0 );
	* // returns +0.0
	*
	* @example
	* var v = ns.min( +0.0, -0.0 );
	* // returns -0.0
	*/
	min: typeof min;

	/**
	* Evaluates the exponential function given a signed 32-bit integer exponent.
	*
	* ## Notes
	*
	* -   This function is not recommended for high-precision applications due to error accumulation.
	*
	* -   If provided a negative exponent, the function first computes the reciprocal of the base and then evaluates the exponential function. This can introduce significant error.
	*
	* @param x - base
	* @param y - 32-bit integer exponent
	* @returns function value
	*
	* @example
	* var v = ns.powint( 2.0, 3 );
	* // returns 8.0
	*
	* @example
	* var v = ns.powint( 3.14, 0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.powint( 2.0, -2 );
	* // returns 0.25
	*
	* @example
	* var v = ns.powint( 0.0, 0 );
	* // returns 1.0
	*
	* @example
	* var v = ns.powint( -3.14, 1 );
	* // returns -3.14
	*
	* @example
	* var v = ns.powint( NaN, 0 );
	* // returns NaN
	*/
	powint: typeof powint;

	/**
	* Computes an integer binary logarithm (base two).
	*
	* ## Method
	*
	* 1.  Note that the largest unsigned 32-bit integer is `4294967295`, which is `2^{32}-1`. Hence, the integer binary logarithm cannot exceed `31` (i.e., `16 + 8 + 4 + 2 + 1`), which corresponds to the bit sequence
	*
	*     ```binarystring
	*     00000000000000000000000000011111
	*     ```
	*
	* 2.  Initialize a return variable with the value zero.
	*
	* 3.  If at least one of the first sixteen most significant bits of the input 32-bit integer `x` is turned on, we know that the power to which the number `2` must be raised to obtain `x` is at least `16` (i.e., `x > 65536`). Hence, activate the corresponding bit of the return variable. Mutate `x` by shifting sixteen bits to the right, discarding the bits shifted off.
	*
	* 4.  Carry out the following steps with `B` in `[ 8, 4, 2, 1 ]`:
	*
	*     -   If at least one of the next `B` most significant bits of the current `x` is turned on, we know that the power to which the number `2` must be raised to obtain `x` has to be increased by `B`.
	*     -   Activate the bit of the return variable that corresponds to `B`.
	*     -   Mutate `x` by shifting `B` bits to the right, discarding the bits shifted off.
	*
	* 5.  The final value of the return variable is the integer binary logarithm of `x`.
	*
	*
	* @param x - unsigned 32-bit integer
	* @returns integer binary logarithm
	*
	* @example
	* var v = ns.log2Uint32( 4 >>> 0 );
	* // returns 2
	*
	* @example
	* var v = ns.log2Uint32( 8 >>> 0 );
	* // returns 3
	*
	* @example
	* var v = ns.log2Uint32( 9 >>> 0 );
	* // returns 3
	*/
	log2Uint32: typeof log2Uint32;

	/**
	* Returns an integer square root.
	*
	* @param x - unsigned 32-bit integer
	* @returns integer square root
	*
	* @example
	* var v = ns.sqrtUint32( 9 >>> 0 );
	* // returns 3
	*
	* @example
	* var v = ns.sqrtUint32( 2 >>> 0 );
	* // returns 1
	*
	* @example
	* var v = ns.sqrtUint32( 3 >>> 0 );
	* // returns 1
	*
	* @example
	* var v = ns.sqrtUint32( 0 >>> 0 );
	* // returns 0
	*/
	sqrtUint32: typeof sqrtUint32;
}

/**
* Fast math special functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
