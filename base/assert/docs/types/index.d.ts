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

import isEvenInt32 = require( './../../../../base/assert/int32-is-even' );
import isOddInt32 = require( './../../../../base/assert/int32-is-odd' );
import isComposite = require( './../../../../base/assert/is-composite' );
import isCoprime = require( './../../../../base/assert/is-coprime' );
import isEven = require( './../../../../base/assert/is-even' );
import isFinite = require( './../../../../base/assert/is-finite' );
import isFinitef = require( './../../../../base/assert/is-finitef' );
import isInfinite = require( './../../../../base/assert/is-infinite' );
import isInfinitef = require( './../../../../base/assert/is-infinitef' );
import isInteger = require( './../../../../base/assert/is-integer' );
import isnan = require( './../../../../base/assert/is-nan' );
import isnanf = require( './../../../../base/assert/is-nanf' );
import isNegativeFinite = require( './../../../../base/assert/is-negative-finite' );
import isNegativeInteger = require( './../../../../base/assert/is-negative-integer' );
import isNegativeZero = require( './../../../../base/assert/is-negative-zero' );
import isNegativeZerof = require( './../../../../base/assert/is-negative-zerof' );
import isNonNegativeFinite = require( './../../../../base/assert/is-nonnegative-finite' );
import isNonNegativeInteger = require( './../../../../base/assert/is-nonnegative-integer' );
import isNonPositiveFinite = require( './../../../../base/assert/is-nonpositive-finite' );
import isNonPositiveInteger = require( './../../../../base/assert/is-nonpositive-integer' );
import isOdd = require( './../../../../base/assert/is-odd' );
import isPositiveFinite = require( './../../../../base/assert/is-positive-finite' );
import isPositiveInteger = require( './../../../../base/assert/is-positive-integer' );
import isPositiveZero = require( './../../../../base/assert/is-positive-zero' );
import isPositiveZerof = require( './../../../../base/assert/is-positive-zerof' );
import isPrime = require( './../../../../base/assert/is-prime' );
import isProbability = require( './../../../../base/assert/is-probability' );
import isSafeInteger = require( './../../../../base/assert/is-safe-integer' );
import isPow2Uint32 = require( './../../../../base/assert/uint32-is-pow2' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests if a 32-bit integer is even.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is even
	*
	* @example
	* var bool = ns.isEvenInt32( 5 );
	* // returns false
	*
	* @example
	* var bool = ns.isEvenInt32( -2 );
	* // returns true
	*
	* @example
	* var bool = ns.isEvenInt32( 0 );
	* // returns true
	*/
	isEvenInt32: typeof isEvenInt32;

	/**
	* Tests if a 32-bit integer is odd.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is odd
	*
	* @example
	* var bool = ns.isOddInt32( 5 );
	* // returns true
	*
	* @example
	* var bool = ns.isOddInt32( -2 );
	* // returns false
	*
	* @example
	* var bool = ns.isOddInt32( 0 );
	* // returns false
	*/
	isOddInt32: typeof isOddInt32;

	/**
	* Tests if a number is composite.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a composite number
	*
	* @example
	* var bool = ns.isComposite( 10.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isComposite( 11.0 );
	* // returns false
	*/
	isComposite: typeof isComposite;

	/**
	* Tests if two numbers are coprime.
	*
	* @param a - first value
	* @param b - second value
	* @returns boolean indicating whether the two values are coprime
	*
	* @example
	* var bool = ns.isCoprime( 14.0, 15.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isCoprime( 14.0, 21.0 );
	* // returns false
	*/
	isCoprime: typeof isCoprime;

	/**
	* Tests if a finite numeric value is an even number.
	*
	* ## Notes
	*
	* -   The function assumes a finite number. If provided positive or negative infinity, the function will return `true`, when, in fact, the result is undefined.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is an even number
	*
	* @example
	* var bool = ns.isEven( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isEven( -2.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isEven( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isEven( NaN );
	* // returns false
	*/
	isEven: typeof isEven;

	/**
	* Tests if a double-precision floating-point numeric value is finite.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is finite
	*
	* @example
	* var bool = ns.isFinite( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isFinite( -2.0e64 );
	* // returns true
	*
	* @example
	* var bool = ns.isFinite( Infinity );
	* // returns false
	*
	* @example
	* var bool = ns.isFinite( -Infinity );
	* // returns false
	*/
	isFinite: typeof isFinite;

	/**
	* Tests if a single-precision floating-point numeric value is finite.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is finite
	*
	* @example
	* var bool = ns.isFinitef( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isFinitef( -2.0e64 );
	* // returns true
	*
	* @example
	* var bool = ns.isFinitef( Infinity );
	* // returns false
	*
	* @example
	* var bool = ns.isFinitef( -Infinity );
	* // returns false
	*/
	isFinitef: typeof isFinitef;

	/**
	* Tests if a double-precision floating-point numeric value is infinite.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is infinite
	*
	* @example
	* var bool = ns.isInfinite( Infinity );
	* // returns true
	*
	* @example
	* var bool = ns.isInfinite( -Infinity );
	* // returns true
	*
	* @example
	* var bool = ns.isInfinite( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isInfinite( NaN );
	* // returns false
	*/
	isInfinite: typeof isInfinite;

	/**
	* Tests if a single-precision floating-point numeric value is infinite.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is infinite
	*
	* @example
	* var bool = ns.isInfinitef( Infinity );
	* // returns true
	*
	* @example
	* var bool = ns.isInfinitef( -Infinity );
	* // returns true
	*
	* @example
	* var bool = ns.isInfinitef( 5.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isInfinitef( NaN );
	* // returns false
	*/
	isInfinitef: typeof isInfinitef;

	/**
	* Tests if a finite double-precision floating-point number is an integer.
	*
	* ## Notes
	*
	* -   The function assumes a finite number. If provided positive or negative infinity, the function will return `true`, when, in fact, the result is undefined.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is an integer
	*
	* @example
	* var bool = ns.isInteger( 1.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isInteger( 3.14 );
	* // returns false
	*/
	isInteger: typeof isInteger;

	/**
	* Tests if a double-precision floating-point numeric value is `NaN`.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is `NaN`
	*
	* @example
	* var bool = ns.isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isnan( 7.0 );
	* // returns false
	*/
	isnan: typeof isnan;

	/**
	* Tests if a single-precision floating-point numeric value is `NaN`.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is `NaN`
	*
	* @example
	* var bool = ns.isnanf( NaN );
	* // returns true
	*
	* @example
	* var bool = ns.isnanf( 7.0 );
	* // returns false
	*/
	isnanf: typeof isnanf;

	/**
	* Tests if a double-precision floating-point numeric value is a negative finite number.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a negative finite number
	*
	* @example
	* var bool = ns.isNegativeFinite( -3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeFinite( -Infinity );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeFinite( 2.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeFinite( NaN );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeFinite( -0.0 );
	* // returns false
	*/
	isNegativeFinite: typeof isNegativeFinite;

	/**
	* Tests if a finite double-precision floating-point number is a negative integer.
	*
	* ## Notes
	*
	* -   The function assumes a finite number. If provided negative infinity, the function will return `true`, when, in fact, the result is undefined.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a negative integer
	*
	* @example
	* var bool = ns.isNegativeInteger( -1.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeInteger( 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isNegativeInteger( 10.0 );
	* // returns false
	*/
	isNegativeInteger: typeof isNegativeInteger;

	/**
	* Tests if a double-precision floating-point numeric value is negative zero.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is negative zero
	*
	* @example
	* var bool = ns.isNegativeZero( -0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeZero( 0.0 );
	* // returns false
	*/
	isNegativeZero: typeof isNegativeZero;

	/**
	* Tests if a single-precision floating-point numeric value is negative zero.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is negative zero
	*
	* @example
	* var bool = ns.isNegativeZerof( -0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNegativeZerof( 0.0 );
	* // returns false
	*/
	isNegativeZerof: typeof isNegativeZerof;

	/**
	* Tests if a double-precision floating-point numeric value is a nonnegative finite number.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a nonnegative finite number
	*
	* @example
	* var bool = ns.isNonNegativeFinite( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeFinite( 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeFinite( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeFinite( Infinity );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeFinite( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonNegativeFinite( NaN );
	* // returns false
	*/
	isNonNegativeFinite: typeof isNonNegativeFinite;

	/**
	* Tests if a finite double-precision floating-point number is a nonnegative integer.
	*
	* ## Notes
	*
	* -   The function assumes a finite number. If provided positive infinity, the function will return `true`, when, in fact, the result is undefined.
	* -   The function does not distinguish between positive and negative zero.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a nonnegative integer
	*
	* @example
	* var bool = ns.isNonNegativeInteger( 1.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeInteger( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonNegativeInteger( -10.0 );
	* // returns false
	*/
	isNonNegativeInteger: typeof isNonNegativeInteger;

	/**
	* Tests if a double-precision floating-point numeric value is a nonpositive finite number.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a nonpositive finite number
	*
	* @example
	* var bool = ns.isNonPositiveFinite( -3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveFinite( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveFinite( -Infinity );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveFinite( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isNonPositiveFinite( NaN );
	* // returns false
	*/
	isNonPositiveFinite: typeof isNonPositiveFinite;

	/**
	* Tests if a finite double-precision floating-point number is a nonpositive integer.
	*
	* ## Notes
	*
	* -   The function assumes a finite number. If provided negative infinity, the function will return `true`, when, in fact, the result is undefined.
	* -   The function does not distinguish between positive and negative zero.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a nonpositive integer
	*
	* @example
	* var bool = ns.isNonPositiveInteger( -1.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveInteger( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isNonPositiveInteger( 10.0 );
	* // returns false
	*/
	isNonPositiveInteger: typeof isNonPositiveInteger;

	/**
	* Tests if a finite numeric value is an odd number.
	*
	* ## Notes
	*
	* -   The function assumes a finite number. If provided positive or negative infinity, the function will return `true`, when, in fact, the result is undefined.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is an odd number
	*
	* @example
	* var bool = ns.isOdd( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isOdd( -2.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isOdd( 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isOdd( NaN );
	* // returns false
	*/
	isOdd: typeof isOdd;

	/**
	* Tests if a double-precision floating-point numeric value is a positive finite number.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a positive finite number
	*
	* @example
	* var bool = ns.isPositiveFinite( 5.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveFinite( 3.14 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveFinite( 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveFinite( Infinity );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveFinite( -3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveFinite( NaN );
	* // returns false
	*/
	isPositiveFinite: typeof isPositiveFinite;

	/**
	* Tests if a finite double-precision floating-point number is a positive integer.
	*
	* ## Notes
	*
	* -   The function assumes a finite number. If provided positive infinity, the function will return `true`, when, in fact, the result is undefined.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a positive integer
	*
	* @example
	* var bool = ns.isPositiveInteger( 1.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveInteger( 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.isPositiveInteger( -10.0 );
	* // returns false
	*/
	isPositiveInteger: typeof isPositiveInteger;

	/**
	* Tests if a double-precision floating-point numeric value is positive zero.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is positive zero
	*
	* @example
	* var bool = ns.isPositiveZero( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveZero( -0.0 );
	* // returns false
	*/
	isPositiveZero: typeof isPositiveZero;

	/**
	* Tests if a single-precision floating-point numeric value is positive zero.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is positive zero
	*
	* @example
	* var bool = ns.isPositiveZerof( 0.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPositiveZerof( -0.0 );
	* // returns false
	*/
	isPositiveZerof: typeof isPositiveZerof;

	/**
	* Tests if a number is prime.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a prime number
	*
	* @example
	* var bool = ns.isPrime( 11.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isPrime( 3.14 );
	* // returns false
	*/
	isPrime: typeof isPrime;

	/**
	* Tests if a double-precision floating-point number is a probability.
	*
	* ## Notes
	*
	* -   A probability is defined as a number on the closed interval `[0,1]`.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a probability
	*
	* @example
	* var bool = ns.isProbability( 0.5 );
	* // returns true
	*
	* @example
	* var bool = ns.isProbability( 3.14 );
	* // returns false
	*
	* @example
	* var bool = ns.isProbability( NaN );
	* // returns false
	*/
	isProbability: typeof isProbability;

	/**
	* Tests if a finite double-precision floating-point number is a safe integer.
	*
	* ## Notes
	*
	* -   An integer valued number is "safe" when the number can be exactly represented as a double-precision floating-point number.
	*
	* @param x - value to test
	* @returns boolean indicating whether the value is a safe integer
	*
	* @example
	* var bool = ns.isSafeInteger( 1.0 );
	* // returns true
	*
	* @example
	* var bool = ns.isSafeInteger( 2.0e200 );
	* // returns false
	*
	* @example
	* var bool = ns.isSafeInteger( 3.14 );
	* // returns false
	*/
	isSafeInteger: typeof isSafeInteger;

	/**
	* Tests whether an unsigned integer is a power of 2.
	*
	* @param x - value to test
	* @returns boolean indicating whether a value is a power of 2
	*
	* @example
	* var bool = ns.isPow2Uint32( 2 );
	* // returns true
	*
	* @example
	* var bool = ns.isPow2Uint32( 5 );
	* // returns false
	*/
	isPow2Uint32: typeof isPow2Uint32;
}

/**
* Base mathematical assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
