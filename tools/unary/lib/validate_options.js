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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var format = require( '@stdlib/string/format' );
var POLICIES = require( './policies.json' );


// VARIABLES //

var isPolicy = contains( POLICIES );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Object} options - options
* @param {string} [options.output_dtype_policy] - policy for determining the output array data type
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'output_dtype_policy': 'float'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'output_dtype_policy' ) ) {
		opts.policy = options.output_dtype_policy;
		if ( !isPolicy( opts.policy ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a recognized/supported output array data type policy. Option: `%s`.', 'output_dtype_policy', opts.policy ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
