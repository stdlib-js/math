/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Inteface describing `frexpf`.
*/
interface Frexpf {
	/**
	* Splits a single-precision floating-point number into a normalized fraction and an integer power of two.
	*
	* ## Notes
	*
	* -   The first element of the returned array is the normalized fraction and the second is the exponent. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.
	* -   If provided positive or negative zero, `NaN`, or positive or negative infinity, the function returns a two-element array containing the input value and an exponent equal to zero.
	* -   For all other numeric input values, the absolute value of the normalized fraction resides on the interval [0.5,1).
	*
	* @param x - input value
	* @returns output array
	*
	* @example
	* var out = frexpf( 4.0 );
	* // returns [ 0.5, 3 ]
	*
	* @example
	* var out = frexpf( 0.0 );
	* // returns [ 0.0, 0 ]
	*
	* @example
	* var out = frexpf( -0.0 );
	* // returns [ -0.0, 0 ]
	*
	* @example
	* var out = frexpf( NaN );
	* // returns [ NaN, 0 ]
	*
	* @example
	* var out = frexpf( Infinity );
	* // returns [ Infinity , 0 ]
	*
	* @example
	* var out = frexpf( -Infinity );
	* // returns [ -Infinity , 0 ]
	*/
	( x: number ): [ number, number ];

	/**
	* Splits a single-precision floating-point number into a normalized fraction and an integer power of two and assigns results to a provided output array.
	*
	* ## Notes
	*
	* -   The first element of the returned array is the normalized fraction and the second is the exponent. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.
	* -   If provided positive or negative zero, `NaN`, or positive or negative infinity, the function returns a two-element array containing the input value and an exponent equal to zero.
	* -   For all other numeric input values, the absolute value of the normalized fraction resides on the interval [0.5,1).
	*
	* @param x - input value
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	*
	* var y = frexpf.assign( 4.0, out, 1, 0 );
	* // returns <Float32Array>[ 0.5, 3 ]
	*
	* var bool = ( y === out );
	* // returns true
	*/
	assign<T = unknown>( x: number, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;
}

/**
* Splits a single-precision floating-point number into a normalized fraction and an integer power of two.
*
* ## Notes
*
* -   The first element of the returned array is the normalized fraction and the second is the exponent. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.
* -   If provided positive or negative zero, `NaN`, or positive or negative infinity, the function returns a two-element array containing the input value and an exponent equal to zero.
* -   For all other numeric input values, the absolute value of the normalized fraction resides on the interval [0.5,1).
*
* @param x - input value
* @returns output array
*
* @example
* var out = frexpf( 4.0 );
* // returns [ 0.5, 3 ]
*
* @example
* var out = frexpf( 0.0 );
* // returns [ 0.0, 0 ]
*
* @example
* var out = frexpf( -0.0 );
* // returns [ -0.0, 0 ]
*
* @example
* var out = frexpf( NaN );
* // returns [ NaN, 0 ]
*
* @example
* var out = frexpf( Infinity );
* // returns [ Infinity , 0 ]
*
* @example
* var out = frexpf( -Infinity );
* // returns [ -Infinity , 0 ]
*/
declare var frexpf: Frexpf;


// EXPORTS //

export = frexpf;
