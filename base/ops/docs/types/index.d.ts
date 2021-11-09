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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import add = require( './../../../../base/ops/add' );
import addf = require( './../../../../base/ops/addf' );
import cadd = require( './../../../../base/ops/cadd' );
import cdiv = require( './../../../../base/ops/cdiv' );
import cmul = require( './../../../../base/ops/cmul' );
import cneg = require( './../../../../base/ops/cneg' );
import csub = require( './../../../../base/ops/csub' );
import imul = require( './../../../../base/ops/imul' );
import imuldw = require( './../../../../base/ops/imuldw' );
import mul = require( './../../../../base/ops/mul' );
import sub = require( './../../../../base/ops/sub' );
import subf = require( './../../../../base/ops/subf' );
import umul = require( './../../../../base/ops/umul' );
import umuldw = require( './../../../../base/ops/umuldw' );

/**
* Interface describing the `ops` namespace.
*/
interface Namespace {
	/**
	* Computes the sum of two double-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value
	* @param y - second input value
	* @returns sum
	*
	* @example
	* var v = ns.add( -1.0, 5.0 );
	* // returns 4.0
	*
	* @example
	* var v = ns.add( 2.0, 5.0 );
	* // returns 7.0
	*
	* @example
	* var v = ns.add( 0.0, 5.0 );
	* // returns 5.0
	*
	* @example
	* var v = ns.add( -0.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.add( NaN, NaN );
	* // returns NaN
	*/
	add: typeof add;

	/**
	* Computes the sum of two single-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value
	* @param y - second input value
	* @returns sum
	*
	* @example
	* var v = ns.addf( -1.0, 5.0 );
	* // returns 4.0
	*
	* @example
	* var v = ns.addf( 2.0, 5.0 );
	* // returns 7.0
	*
	* @example
	* var v = ns.addf( 0.0, 5.0 );
	* // returns 5.0
	*
	* @example
	* var v = ns.addf( -0.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.addf( NaN, NaN );
	* // returns NaN
	*/
	addf: typeof addf;

	/**
	* Adds two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.cadd( 5.0, 3.0, -2.0, 1.0 );
	// returns [ 3.0, 4.0 ]
	*/
	cadd: typeof cadd;

	/**
	* Divides two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.cdiv( -13.0, -1.0, -2.0, 1.0 );
	// returns [ 5.0, 3.0 ]
	*/
	cdiv: typeof cdiv;

	/**
	* Multiplies two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.cmul( 5.0, 3.0, -2.0, 1.0 );
	// returns [ -13.0, -1.0 ]
	*/
	cmul: typeof cmul;

	/**
	* Negates a complex number.
	*
	* @param re - real component
	* @param im - imaginary component
	* @returns real and imaginary components
	*
	* @example
	* var v = ns.cneg( -4.2, 5.5 );
	* // returns [ 4.2, -5.5 ]
	*
	* @example
	* var v = ns.cneg( 0.0, 0.0 );
	* // returns [ -0.0, -0.0 ]
	*
	* @example
	* var v = ns.cneg( NaN, NaN );
	* // returns [ NaN, NaN ]
	*/
	cneg: typeof cneg;

	/**
	* Subtracts two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.csub( 5.0, 3.0, -2.0, 1.0 );
	// returns [ 7.0, 2.0 ]
	*/
	csub: typeof csub;

	/**
	* Performs C-like multiplication of two signed 32-bit integers.
	*
	* @param a - signed 32-bit integer
	* @param b - signed 32-bit integer
	* @returns product
	*
	* @example
	* var v = ns.imul( -10|0, 4|0 );
	* // returns -40
	*/
	imul: typeof imul;

	/**
	* Performs multiplication of two signed 32-bit integers and returns an array of two signed 32-bit integers which represents the signed 64-bit integer product.
	*
	* ## Notes
	*
	* -   When computing the product of 32-bit integer values in double-precision floating-point format (the default JavaScript numeric data type), computing the double word product is necessary in order to avoid exceeding the maximum safe double-precision floating-point integer value.
	*
	* @param a - integer
	* @param b - integer
	* @returns output array
	*
	* @example
	* var v = ns.imuldw( 0xAAAAAAAA, 0x55555555 );
	* // returns [ -477218589, 1908874354 ]
	*/
	imuldw: typeof imuldw;

	/**
	* Multiplies two double-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value
	* @param y - second input value
	* @returns result
	*
	* @example
	* var v = ns.mul( -1.0, 5.0 );
	* // returns -5.0
	*
	* @example
	* var v = ns.mul( 2.0, 5.0 );
	* // returns 10.0
	*
	* @example
	* var v = ns.mul( 0.0, 5.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.mul( -0.0, 0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.mul( NaN, NaN );
	* // returns NaN
	*/
	mul: typeof mul;

	/**
	* Subtracts two double-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value
	* @param y - second input value
	* @returns result
	*
	* @example
	* var v = ns.sub( -1.0, 5.0 );
	* // returns -6.0
	*
	* @example
	* var v = ns.sub( 2.0, 5.0 );
	* // returns -3.0
	*
	* @example
	* var v = ns.sub( 0.0, 5.0 );
	* // returns -5.0
	*
	* @example
	* var v = ns.sub( -0.0, 0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.sub( NaN, NaN );
	* // returns NaN
	*/
	sub: typeof sub;

	/**
	* Subtracts two single-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value
	* @param y - second input value
	* @returns result
	*
	* @example
	* var v = ns.subf( -1.0, 5.0 );
	* // returns -6.0
	*
	* @example
	* var v = ns.subf( 2.0, 5.0 );
	* // returns -3.0
	*
	* @example
	* var v = ns.subf( 0.0, 5.0 );
	* // returns -5.0
	*
	* @example
	* var v = ns.subf( -0.0, 0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.subf( NaN, NaN );
	* // returns NaN
	*/
	subf: typeof subf;

	/**
	* Performs C-like multiplication of two unsigned 32-bit integers.
	*
	* @param a - unsigned 32-bit integer
	* @param b - Unsigned 32-bit integer
	* @returns product
	*
	* @example
	* var v = ns.umul( 10>>>0, 4>>>0 );
	* // returns 40
	*/
	umul: typeof umul;

	/**
	* Performs multiplication of two unsigned 32-bit integers and returns an array of two unsigned 32-bit integers which represents the unsigned 64-bit integer product.
	*
	* ## Notes
	*
	* -   When computing the product of 32-bit integer values in double-precision floating-point format (the default JavaScript numeric data type), computing the double word product is necessary in order to avoid exceeding the maximum safe double-precision floating-point integer value.
	*
	* @param a - integer
	* @param b - integer
	* @returns double word product (in big endian order; i.e., the first element corresponds to the most significant bits and the second element to the least significant bits)
	*
	* @example
	* var v = ns.umuldw( 0xAAAAAAAA, 0x55555555 );
	* // returns [ 954437176, 1908874354 ]
	*/
	umuldw: typeof umuldw;
}

/**
* Base (i.e., lower-level) math operators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
