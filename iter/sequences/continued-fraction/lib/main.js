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

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isFinite = require( '@stdlib/assert/is-finite' ).isPrimitive; // eslint-disable-line stdlib/no-redeclare
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var format = require( '@stdlib/string/format' );
var floor = require( './../../../../base/special/floor' );
var abs = require( './../../../../base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var FIFO = require( '@stdlib/dstructs/fifo' );
var validate = require( './validate.js' );


// VARIABLES //

var TINY = 1.0e-50;
var RESULT_FUNCTION = {
	'terms': terms,
	'convergents': convergents,
	'*': both
};


// FUNCTIONS //

/**
* Returns a continued fraction term result.
*
* @private
* @param {number} term - continued fraction term
* @param {number} convergent - continued fraction convergent
* @param {boolean} negative - boolean indicating whether the input value is negative
* @returns {number} term
*/
function terms( term, convergent, negative ) {
	return ( negative && term > 0 ) ? -term : term;
}

/**
* Returns a continued fraction convergent result.
*
* @private
* @param {number} term - continued fraction term
* @param {number} convergent - continued fraction convergent
* @param {boolean} negative - boolean indicating whether the input value is negative
* @returns {number} convergent
*/
function convergents( term, convergent, negative ) {
	return ( negative && term > 0 ) ? -convergent : convergent;
}

/**
* Returns a result as two-element array consisting of a continued fraction term and its associated convergent.
*
* @private
* @param {number} term - continued fraction term
* @param {number} convergent - continued fraction convergent
* @param {boolean} negative - boolean indicating whether the input value is negative
* @returns {Array<number>} result
*/
function both( term, convergent, negative ) {
	return ( negative && term > 0 ) ? [ -term, -convergent ] : [ term, convergent ]; // eslint-disable-line max-len
}


// MAIN //

/**
* Returns an iterator which generates a list of all continued fraction terms which can be obtained given the precision of `x`.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param {number} x - input value
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.iter=1e308] - maximum number of iterations
* @param {PositiveNumber} [options.tol] - tolerance at which to terminate further evaluation of the continued fraction
* @param {string} [options.returns='terms'] - specifies the type of result to return (must be one of `'terms'`, `'convergents'`, or `'*'`)
* @throws {TypeError} first argument must be a finite number
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var iter = iterContinuedFractionSeq( 3.245 );
*
* var v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* v = iter.next().value;
* // returns 12
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/
function iterContinuedFractionSeq( x, options ) {
	var result;
	var delta;
	var orig;
	var opts;
	var iter;
	var FLG;
	var err;
	var neg;
	var bi;
	var fi;
	var Ci;
	var Di;
	var q;
	var v;
	var r;
	var i;

	if ( !isFinite( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a finite number. Value: `%s`.', x ) );
	}
	opts = {
		'iter': 1e308,
		'tol': EPS,
		'returns': 'terms'
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	result = RESULT_FUNCTION[ opts.returns ];
	FLG = 0;
	orig = x;

	// If `x < 0`, we choose to negate the terms (i.e., [b0; b1, b2, ..., bn] => [-b0; -b1, -b2, ..., -bn]), thus allowing the evaluation of those terms to return the input value. This differs from an alternative approach of having only a negative `b0` and the rest `{b1, ..., bn}` be positive. When doing the latter, floating-point rounding error can prevent recovering the original value...
	if ( x < 0 ) {
		neg = true;
		x = -x;
	} else {
		neg = false;
	}
	i = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	// Continued fractions may not be unique (e.g., [b0; b1, ..., bn, 1] = [b0; b1, ..., bn+1]). Accordingly, in order to ensure we return a canonical representation (i.e., the shorter representation), returned values must lag by two terms, as we'll need to peek ahead to determine if we need to canonicalize before returning the last term. In which case, let's create a FIFO queue for storing terms and their associated convergents...
	q = new FIFO();

	// Extract the integer part of the provided value:
	bi = floor( x );
	q.push( [ bi, bi ] ); // b0 is both the first term and the first convergent
	if ( bi === x ) {
		// We've been provided an integer value, so no continued fractions to compute...
		FLG = 1;
		return iter;
	}
	// For `0 < x < 1`, leverage the fact that continued fraction representations of a positive rational number and its reciprocal are identical, except for shifting one place to the right (i.e., [b0; b1, b1, ..., bn] and [0; b0, b1, b2, ..., bn] are reciprocals)...
	if ( bi === 0 ) {
		x = 1.0 / x;
		bi = floor( x );
		q.push( [ bi, 1.0/bi ] );
		if ( bi === x ) {
			// No more continued fractions to compute...
			FLG = 1;
			return iter;
		}
	}
	// Compute the next term of the continued fraction...
	r = x - bi;
	v = 1.0 / r;

	// Initialize parameters of the modified Lentz's algorithm...
	fi = bi;
	Ci = fi;
	Di = 0.0;

	// Compute the next two terms:
	q.push( nextTerm() );
	q.push( nextTerm() );

	return iter;

	/**
	* Computes the next term of the continued fraction.
	*
	* @private
	* @returns {number} next term
	*/
	function nextTerm() {
		var fj = fi;

		// Compute the next term of the continued fraction...
		bi = floor( v );
		r = v - bi;
		v = 1.0 / r;

		// Use the modified Lentz's algorithm to find the next convergent...
		Di += bi;             // b_j + a_j*D_{j-1}, where a_j = 1.0 for all j
		if ( Di === 0.0 ) {
			Di = TINY;
		}
		Ci = bi + ( 1.0/Ci ); // b_j + a_j/C_{j-1}, where a_j = 1.0 for all j
		if ( Ci === 0.0 ) {
			Ci = TINY;
		}
		Di = 1.0 / Di;
		delta = Ci * Di;
		fi *= delta;

		// Check whether we can terminate computation...
		if ( abs( delta - 1.0 ) <= opts.tol ) {
			FLG = 1;
			if ( fj === fi ) {
				// Return a sentinel value to indicate that the last term did not improve the approximation:
				return [ -1, fi ];
			}
		}
		return [ bi, fi ];
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var item;
		var term;
		var f;

		i += 1;
		if ( FLG > 0 ) {
			if ( FLG === 1 && q.length > 0 ) {
				item = q.pop();
				term = item[ 0 ];
				f = item[ 1 ];
				if ( term === -1 ) {
					return {
						'done': true
					};
				}
				// Check whether we need to adjust the current term to ensure canonical representation...
				item = q.first();
				if ( q.length === 2 && item[ 0 ] === 1 ) {
					term += 1;
					f = item[ 1 ];
					q.clear();
				}
				return {
					'value': result( term, f, neg ),
					'done': false
				};
			}
			FLG = 2;
			return {
				'done': true
			};
		}
		if ( i === opts.iter ) {
			item = q.pop();
			term = item[ 0 ];
			f = item[ 1 ];

			// Check whether we need to adjust the final term to ensure canonical representation...
			item = q.first();
			if ( item[ 0 ] === 1 ) {
				term += 1;
				f = item[ 1 ];
			}
			q.clear();
			FLG = 2;
			return {
				'value': result( term, f, neg ),
				'done': false
			};
		}
		item = q.push( nextTerm() ).pop();
		return {
			'value': result( item[ 0 ], item[ 1 ], neg ),
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
		FLG = 2;
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
		return iterContinuedFractionSeq( orig, opts );
	}
}


// EXPORTS //

module.exports = iterContinuedFractionSeq;
