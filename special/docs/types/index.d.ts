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
	* Computes the absolute value.
	*
	* @param x - input value
	* @param options - options
	* @returns result
	*
	* @example
	* var y = ns.abs( -1.0 );
	* // returns 1.0
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
	*
	* var y = ns.abs( x );
	* // returns <ndarray>
	*
	* var v = y.get( 0, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0 ] );
	*
	* var y = ns.abs( x );
	* // returns <Float64Array>[ 1.0, 2.0 ]
	*
	* @example
	* var x = [ -1.0, -2.0 ];
	*
	* var y = ns.abs( x );
	* // returns [ 1.0, 2.0 ]
	*
	* @example
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
	* var v = y.get( 0, 1 );
	* // returns 2.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* var z = ns.abs.assign( x, y );
	* // returns <Float64Array>[ 1.0, 2.0 ]
	*
	* var bool = ( z === y );
	* // returns true
	*/
	abs: typeof abs;
}

/**
* Special math functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
