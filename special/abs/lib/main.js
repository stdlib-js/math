/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var dispatch = require( '@stdlib/ndarray/dispatch' );
var setProps = require( '@stdlib/ndarray/base/meta-data-props' );
var ufunc = require( './../../../tools/unary' );
var unary = require( '@stdlib/ndarray/base/unary' );
var data = require( './data.js' );
var types = require( './types.json' );
var config = require( './config.js' );


// MAIN //

/**
* Computes the absolute value for each element in an ndarray.
*
* @name abs
* @type {Function}
* @param {ndarray} x - input ndarray
* @param {Options} [options] - options
* @param {string} [options.order] - output array order
* @param {string} [options.dtype] - output array dtype
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, -2.0 ], [ -3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var y = abs( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
var abs = ufunc( dispatch( unary, types, data, config.nargs, config.nin, config.nout ), [ config.idtypes ], config.odtypes, config.policies );
setProps( config, types, abs );
setProps( config, types, abs.assign );


// EXPORTS //

module.exports = abs;
