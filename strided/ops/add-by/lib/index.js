/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/**
* Perform element-wise addition of two strided arrays via a callback function and assign each result to an element in an output strided array.
*
* @module @stdlib/math/strided/ops/add-by
*
* @example
* var addBy = require( '@stdlib/math/strided/ops/add-by' );
*
* function accessor( values ) {
*     return values;
* }
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* addBy( x.length, x, 1, y, 1, z, 1, accessor );
*
* console.log( z );
* // => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
*
* @example
* var addBy = require( '@stdlib/math/strided/ops/add-by' );
*
* function accessor( values ) {
*     return values;
* }
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* addBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
*
* console.log( z );
* // => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
