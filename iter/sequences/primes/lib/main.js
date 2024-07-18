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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var isPrime = require( './../../../../base/assert/is-prime' );
var validate = require( './validate.js' );


// VARIABLES //

var MAX_ITER = 245181918813464; // floor(FLOAT64_MAX_SAFE_INTEGER/ln(FLOAT64_MAX_SAFE_INTEGER)) => see https://en.wikipedia.org/wiki/Prime_number_theorem


// MAIN //

/**
* Returns an iterator which generates a sequence of prime numbers.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.iter=245181918813464] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var iter = iterPrimesSeq();
*
* var v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 5
*
* // ...
*/
function iterPrimesSeq( options ) {
	var opts;
	var iter;
	var FLG;
	var err;
	var n;
	var i;

	opts = {
		'iter': MAX_ITER
	};
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	i = 0;
	n = 1;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		i += 1;
		if ( FLG || i > opts.iter ) {
			return {
				'done': true
			};
		}
		if ( i < 2 ) {
			return {
				'value': 2,
				'done': false
			};
		}
		n += 2;
		while ( isPrime( n ) === false ) {
			n += 2;
		}
		return {
			'value': n,
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return iterPrimesSeq( opts );
	}
}


// EXPORTS //

module.exports = iterPrimesSeq;
