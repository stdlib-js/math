/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Evaluates a rational function using single-precision floating-point arithmetic.
*
* @param x - value at which to evaluate a rational function
* @returns evaluated rational function
*/
type PolynomialFunction = ( x: number ) => number;

/**
* Interface for evaluating rational functions.
*/
interface EvalRational {
	/**
	* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)) using single-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   Coefficients should be sorted in ascending degree.
	* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
	*
	* @param P - numerator polynomial coefficients sorted in ascending degree
	* @param Q - denominator polynomial coefficients sorted in ascending degree
	* @param x - value at which to evaluate the rational function
	* @returns evaluated rational function
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var P = new Float32Array( [ -6.0, -5.0 ] );
	* var Q = new Float32Array( [ 3.0, 0.5 ] );
	*
	* var v = evalrationalf( P, Q, 6.0 ); //  => ( -6*6^0 - 5*6^1 ) / ( 3*6^0 + 0.5*6^1 ) = (-6-30)/(3+3)
	* // returns -6.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* // 2x^3 + 4x^2 - 5x^1 - 6x^0 => degree 4
	* var P = new Float32Array( [ -6.0, -5.0, 4.0, 2.0 ] );
	*
	* // 0.5x^1 + 3x^0 => degree 2
	* var Q = new Float32Array( [ 3.0, 0.5, 0.0, 0.0 ] ); // zero-padded
	*
	* var v = evalrationalf( P, Q, 6.0 ); // => ( -6*6^0 - 5*6^1 + 4*6^2 + 2*6^3 ) / ( 3*6^0 + 0.5*6^1 + 0*6^2 + 0*6^3 ) = (-6-30+144+432)/(3+3)
	* // returns ~90.0
	*/
	( P: Collection<number>, Q: Collection<number>, x: number ): number;

	/**
	* Generates a function for evaluating a rational function using single-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   The compiled function uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
	*
	* @param P - numerator polynomial coefficients sorted in ascending degree
	* @param Q - denominator polynomial coefficients sorted in ascending degree
	* @returns function for evaluating a rational function
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var P = new Float32Array( [ 20.0, 8.0, 3.0 ] );
	* var Q = new Float32Array( [ 10.0, 9.0, 1.0 ] );
	*
	* var rational = evalrationalf.factory( P, Q );
	*
	* var v = rational( 10.0 ); // => (20*10^0 + 8*10^1 + 3*10^2) / (10*10^0 + 9*10^1 + 1*10^2) = (20+80+300)/(10+90+100)
	* // returns 2.0
	*
	* v = rational( 2.0 ); // => (20*2^0 + 8*2^1 + 3*2^2) / (10*2^0 + 9*2^1 + 1*2^2) = (20+16+12)/(10+18+4)
	* // returns 1.5
	*/
	factory( P: Collection<number>, Q: Collection<number> ): PolynomialFunction;
}

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)) using single-precision floating-point arithmetic.
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param P - numerator polynomial coefficients sorted in ascending degree
* @param Q - denominator polynomial coefficients sorted in ascending degree
* @param x - value at which to evaluate the rational function
* @returns evaluated rational function
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var P = new Float32Array( [ -6.0, -5.0 ] );
* var Q = new Float32Array( [ 3.0, 0.5 ] );
*
* var v = evalrationalf( P, Q, 6.0 ); //  => ( -6*6^0 - 5*6^1 ) / ( 3*6^0 + 0.5*6^1 ) = (-6-30)/(3+3)
* // returns -6.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var P = new Float32Array( [ 20.0, 8.0, 3.0 ] );
* var Q = new Float32Array( [ 10.0, 9.0, 1.0 ] );
*
* var rational = evalrationalf.factory( P, Q );
*
* var v = rational( 10.0 ); // => (20*10^0 + 8*10^1 + 3*10^2) / (10*10^0 + 9*10^1 + 1*10^2) = (20+80+300)/(10+90+100)
* // returns 2.0
*
* v = rational( 2.0 ); // => (20*2^0 + 8*2^1 + 3*2^2) / (10*2^0 + 9*2^1 + 1*2^2) = (20+16+12)/(10+18+4)
* // returns 1.5
*/
declare var evalrationalf: EvalRational;


// EXPORTS //

export = evalrationalf;
