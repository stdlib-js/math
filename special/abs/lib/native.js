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

'use strict';

// MODULES //

var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var serialize = require( '@stdlib/ndarray/base/serialize-meta-data' );
var setProps = require( '@stdlib/ndarray/base/meta-data-props' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var ufunc = require( './../../../tools/unary' );
var addon = require( './../src/addon.node' );
var meta = require( './meta.json' );
var types = require( './types.json' );
var policies = require( './policies.json' );
var js = require( './main.js' );


// VARIABLES //

var idtypes = dtypes( 'numeric_and_generic' );
var odtypes = dtypes( 'real_and_generic' );


// FUNCTIONS //

/**
* Applies a unary function to an input ndarray and assigns results to an output ndarray.
*
* @private
* @param {ndarray} x - input array
* @param {ndarray} y - output array
* @returns {ndarray} output array
*/
function unary( x, y ) { // FIXME: move to separate package
	var xdata = getData( x );
	var ydata = getData( y );

	// WARNING: we assume that, if we're provided something which has a data buffer resembling a typed array, we're provided a typed ndarray buffer; however, this can lead to potential unintended errors as the native add-on cannot work with non-typed array objects (e.g., generic arrays)...
	if ( !( isTypedArrayLike( xdata ) && isTypedArrayLike( ydata ) ) ) {
		return js( x, y );
	}
	addon( xdata, serialize( x ), ydata, serialize( y ) );
	return y;
}


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
var abs = ufunc( unary, [ idtypes ], odtypes, policies ); // eslint-disable-line vars-on-top
setProps( meta, types, abs );
setProps( meta, types, abs.assign );


// EXPORTS //

module.exports = abs;
