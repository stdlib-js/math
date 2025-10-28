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

import abs = require( './../../../special/abs' );

/**
* Interface describing the `special` namespace.
*/
interface Namespace {
	/**
	* Computes the absolute value for each element in an ndarray.
	*
	* @param x - input ndarray
	* @param options - options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
	*
	* var y = ns.abs( x );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
	* var y = array( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] );
	*
	* var z = ns.abs.assign( x, y );
	* // returns <ndarray>
	*
	* var bool = ( z === y );
	* // returns true
	*
	* var arr = ndarray2array( y );
	* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
	*/
	abs: typeof abs;
}

/**
* Special math functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
