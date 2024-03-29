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

import unary = require( './../../../tools/unary' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Returns a function which dispatches to specified functions based on input argument types.
	*
	* @param table - resolution table object
	* @throws must provide valid table fields
	* @throws table field values must be array-like objects having an even number of elements
	* @throws table field values must consist of dtype-function pairs
	* @returns dispatch function
	*
	* @example
	* var nabs = require( './../../../base/special/abs' );
	* var dabs = require( './../../../strided/special/dabs' );
	* var sabs = require( './../../../strided/special/sabs' );
	* var gabs = require( './../../../strided/special/abs' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var table = {
	*     'scalar': [
	*         'number', nabs
	*     ],
	*     'array': [
	*         'float64', dabs,
	*         'float32', sabs,
	*         'generic', gabs
	*     ],
	*     'ndarray': [
	*         'float64', dabs.ndarray,
	*         'float32', sabs.ndarray,
	*         'generic', gabs.ndarray
	*     ]
	* };
	*
	* var abs = ns.unary( table );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	* var y = abs( x );
	* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	unary: typeof unary;
}

/**
* Math tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
