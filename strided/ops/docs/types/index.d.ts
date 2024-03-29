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

import add = require( './../../../../strided/ops/add' );
import addBy = require( './../../../../strided/ops/add-by' );
import mul = require( './../../../../strided/ops/mul' );
import mulBy = require( './../../../../strided/ops/mul-by' );
import sub = require( './../../../../strided/ops/sub' );
import subBy = require( './../../../../strided/ops/sub-by' );

/**
* Interface describing the `ops` namespace.
*/
interface Namespace {
	/**
	* Adds each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - input array
	* @param strideY - `y` stride length
	* @param dtypeZ - `z` data type
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws ninth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `z`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.add( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
	* // z => <Float64Array>[ -1.0, 3.0, 6.0, -1.0, 9.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.add.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
	* // z => <Float64Array>[ -1.0, 3.0, 6.0, -1.0, 9.0 ]
	*/
	add: typeof add;

	/**
	* Performs element-wise addition of two strided arrays via a callback function and assigns each result to an element in an output strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.addBy( x.length, x, 1, y, 1, z, 1, accessor );
	* // z => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.addBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	* // z => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
	*/
	addBy: typeof addBy;

	/**
	* Multiplies each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - input array
	* @param strideY - `y` stride length
	* @param dtypeZ - `z` data type
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws ninth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `z`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.mul( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
	* // z => <Float64Array>[ -2.0, 2.0, 9.0, -20.0, 20.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.mul.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
	* // z => <Float64Array>[ -2.0, 2.0, 9.0, -20.0, 20.0 ]
	*/
	mul: typeof mul;

	/**
	* Performs element-wise multiplication of two strided arrays via a callback function and assigns each result to an element in an output strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.mulBy( x.length, x, 1, y, 1, z, 1, accessor );
	* // z => [ 11.0, 24.0, 39.0, 56.0, 75.0 ]
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.mulBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	* // z => [ 11.0, 24.0, 39.0, 56.0, 75.0 ]
	*/
	mulBy: typeof mulBy;

	/**
	* Subtracts each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - input array
	* @param strideY - `y` stride length
	* @param dtypeZ - `z` data type
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws ninth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `z`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
	* // z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
	* // z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
	*/
	sub: typeof sub;

	/**
	* Performs element-wise subtraction of two strided arrays via a callback function and assigns each result to an element in an output strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var y = [ 8.0, 7.0, 6.0, 5.0, 4.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.subBy( x.length, x, 1, y, 1, z, 1, accessor );
	* // z => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var y = [ 8.0, 7.0, 6.0, 5.0, 4.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.subBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	* // z => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*/
	subBy: typeof subBy;
}

/**
* Strided array math operations.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
