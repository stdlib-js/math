/**
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

'use strict';

// MODULES //

var add = require( './../../../../base/ops/add' );
var types = require( './types.js' );


// FUNCTIONS //

/**
* Assigns callbacks to binary interfaces.
*
* @private
* @param {Array} dtypes - list of dtype signatures
* @returns {Array} list of callbacks
*/
function callbacks( dtypes ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < dtypes.length; i += 3 ) {
		// NOTE: in the future, in order to handle, e.g., complex numbers, we'll need to explicitly check each interface signature and assign an appropriate callback. For now, we can simply use the callback for `float64`, even for `float32`, as we shouldn't need to explicitly downcast strided array values (e.g., the only time we need to return `float32` values is when input arrays are already `float32` or of a type which can be safely represented in `float32` without concern for truncation).
		out.push( add );
	}
	return out;
}


// MAIN //

/**
* Binary callbacks to apply to strided arrays.
*
* @private
* @name data
* @constant
* @type {Array}
*/
var data = callbacks( types ); // eslint-disable-line vars-on-top


// EXPORTS //

module.exports = data;
