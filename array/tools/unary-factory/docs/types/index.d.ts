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

import { DataType, ArrayLike, AccessorArrayLike } from '@stdlib/types/array';
import { OutputPolicy } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = ArrayLike<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<U> = ArrayLike<U> | AccessorArrayLike<U>;

/**
* Interface defining options.
*/
interface Options {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Unary function.
*
* @param value - input value
* @returns result
*/
type Unary<T, U> = ( x: T ) => U;

/**
* Interface for applying a unary function to each element in an input array.
*/
interface UnaryFunction<T, U> {
	/**
	* Applies a unary function to each element in a provided input array.
	*
	* @param x - input array
	* @param options - function options
	* @returns output array
	*
	* @example
	* var base = require( './../../../../../base/special/abs' );
	* var dtypes = require( '@stdlib/array/dtypes' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = idt;
	* var policy = 'same';
	*
	* var abs = factory( base, idt, odt, policy );
	*
	* var x = [ -1.0, -2.0, -3.0 ];
	*
	* var y = abs.apply( x );
	* // returns [ 1.0, 2.0, 3.0 ]
	*/
	( x: InputArray<T>, options?: Options ): OutputArray<U>; // NOTE: we lose type specificity here, but retaining specificity would likely be difficult and/or tedious to completely enumerate, as the output array data type is dependent on how `x` interacts with output data type policy and whether that policy has been overridden by `options.dtype`. In principle, as well, based on the policy, it is possible to know more exactly which `InputArray` types are actually allowed.

	/**
	* Applies a unary function to each element in a provided input array and assigns results to a provided output array.
	*
	* @param x - input array
	* @param out - output array
	* @returns output array
	*
	* @example
	* var base = require( './../../../../../base/special/abs' );
	* var dtypes = require( '@stdlib/array/dtypes' );
	*
	* var idt = dtypes( 'real_and_generic' );
	* var odt = idt;
	* var policy = 'same';
	*
	* var abs = factory( base, idt, odt, policy );
	*
	* var x = [ -1.0, -2.0, -3.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* var out = abs.assign( x, y );
	* // returns [ 1.0, 2.0, 3.0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<V extends OutputArray<U>>( x: InputArray<T>, out: V ): V;
}

/**
* Creates a function for applying a unary function to each element in a provided array.
*
* @param fcn - unary function to apply
* @param idtypes - list of supported input data types
* @param odtypes - list of supported output data types
* @param policy - output data type policy
* @returns function for applying a unary function
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dtypes = require( '@stdlib/array/dtypes' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var abs = factory( base, idt, odt, policy );
*
* var x = [ -1.0, -2.0, -3.0 ];
*
* var y = abs( x );
* // returns [ 1.0, 2.0, 3.0 ]
*/
declare function factory<T = unknown, U = unknown>( fcn: Unary<T, U>, idtypes: ArrayLike<DataType>, odtypes: ArrayLike<DataType>, policy: OutputPolicy ): UnaryFunction<T, U>;


// EXPORTS //

export = factory;
