/**
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

'use strict';

// MODULES //

var unaryFactory = require( './../../../../array/tools/unary-factory' );
var dtypes = require( '@stdlib/array/dtypes' );
var base = require( './../../../../base/special/abs' );


// VARIABLES //

var IDTYPES = dtypes( 'real_and_generic' );
var ODTYPES = dtypes( 'real_and_generic' );
var POLICY = 'same';


// MAIN //

/**
* Computes the absolute value for each element in an input array.
*
* @name abs
* @type {Function}
* @param {Collection} x - input array
* @param {Object} [options] - function options
* @param {string} [options.dtype] - output array data type
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(Array|TypedArray)} output array
*
* @example
* var out = abs( [ -1.0, -2.0, -3.0 ] );
* // returns [ 1.0, 2.0, 3.0 ]
*
* @example
* var opts = {
*     'dtype': 'float64'
* };
* var out = abs( [ -1.0, -2.0, -3.0 ], opts );
* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
*
* @example
* var y = [ 0.0, 0.0, 0.0 ];
*
* var out = abs.assign( [ -1.0, -2.0, -3.0 ], y );
* // returns [ 1.0, 2.0, 3.0 ]
*
* var bool = ( out === y );
*/
var abs = unaryFactory( base, IDTYPES, ODTYPES, POLICY );


// EXPORTS //

module.exports = abs;
