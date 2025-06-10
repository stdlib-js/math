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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var Unary = require( './../../../../array/tools/unary' );


// MAIN //

/**
* Returns a function for applying a unary function to each element in a provided input array.
*
* @param {Function} fcn - unary function to apply
* @param {StringArray} idtypes - list of supported input data types
* @param {StringArray} odtypes - list of supported output data types
* @param {string} policy - output data type policy
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be an array of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} fourth argument must be a supported output data type policy
* @returns {Function} function for applying a unary function to each element in an array
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var abs = factory( base, dtypes, dtypes, 'same' );
* // returns <Function>
*
* var x = abs( [ -1.0, 2.0, -3.0, 4.0 ] );
* // returns [ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var abs = factory( base, dtypes, dtypes, 'same' );
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
function factory( fcn, idtypes, odtypes, policy ) {
	var f = new Unary( fcn, idtypes, odtypes, policy );
	setReadOnly( main, 'assign', assign );
	return main;

	/**
	* Applies a unary function to each element in a provided input array.
	*
	* @private
	* @param {Collection} x - input array
	* @param {Options} [options] - function options
	* @param {string} [options.dtype] - output array data type
	* @throws {TypeError} first argument must be a collection
	* @throws {TypeError} first argument must have a supported data type
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {Collection} output array
	*/
	function main( x, options ) {
		if ( arguments.length < 2 ) {
			return f.apply( x );
		}
		return f.apply( x, options );
	}

	/**
	* Applies a unary function to each element in a provided input array and assigns results to a provided output array.
	*
	* @private
	* @param {Collection} x - input array
	* @param {Collection} out - output array
	* @throws {TypeError} first argument must be a collection
	* @throws {TypeError} first argument must have a supported data type
	* @throws {TypeError} second argument must be a collection
	* @returns {Collection} output array
	*/
	function assign( x, out ) {
		return f.assign( x, out );
	}
}


// EXPORTS //

module.exports = factory;
