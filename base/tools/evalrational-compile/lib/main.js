/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var join = require( 'path' ).join;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var Float32Array = require( '@stdlib/array/float32' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

var opts = {
	'encoding': 'utf8'
};
var dir = join( __dirname, 'templates' );

// Templates:
var COEFFICIENT_RATIO_TEMPLATE = readFile( join( dir, 'coefficient_ratio.js.txt' ), opts ); // eslint-disable-line id-length

var EVALRATIONAL_TEMPLATE = readFile( join( dir, 'evalrational.js.txt' ), opts );
var EVALRATIONAL_FLOAT32_TEMPLATE = readFile( join( dir, 'evalrational.float32.js.txt' ), opts ); // eslint-disable-line id-length

var LOOP_TEMPLATE = readFile( join( dir, 'loop.js.txt' ), opts );
var LOOP_FLOAT32_TEMPLATE = readFile( join( dir, 'loop.float32.js.txt' ), opts );

var NAN_TEMPLATE = readFile( join( dir, 'nan.js.txt' ), opts );

var MAX_CHARS = 66; // max-len (80) - chars already in line ('2x tab': 8, 's1 = ': 5, ';': 1)


// FUNCTIONS //

/**
* Serializes a single value to a string.
*
* @private
* @param {number} x - value to serialize
* @returns {string} serialized value
*/
function value2string( x ) {
	var str = x.toString();
	if ( isInteger( x ) ) {
		str += '.0';
	}
	return str;
}

/**
* Serializes an array of numbers to an indented newline separated list.
*
* @private
* @param {NumericArray} x - array of numbers
* @returns {string} serialized value
*/
function array2list( x ) {
	var str;
	var n;
	var m;
	var i;

	n = x.length;
	m = n - 1;
	str = '';
	for ( i = 0; i < n; i++ ) {
		str += '\t' + x[ i ].toString();
		if ( isInteger( x[ i ] ) ) {
			str += '.0';
		}
		if ( i < m ) {
			str += ',\n';
		}
	}
	return str;
}

/**
* Serializes an array of coefficients to a string implementing Horner's method.
*
* @private
* @param {NumericArray} x - coefficients sorted in ascending degree
* @param {string} dtype - input value floating-point data type
* @returns {string} output string
*/
function hornerAscending( x, dtype ) {
	var str;
	var n;
	var m;
	var i;

	n = x.length;
	m = n - 1;
	if ( dtype === 'float32' ) {
		str = 'float64ToFloat32(';
	} else {
		str = '';
	}
	str += x[ 0 ].toString();
	if ( isInteger( x[ 0 ] ) ) {
		str += '.0';
	}
	for ( i = 1; i < n; i++ ) {
		if ( dtype === 'float32' ) {
			str += ' + float64ToFloat32(x * ';
			if ( i < m ) {
				str += 'float64ToFloat32(';
			}
		} else {
			str += ' + (x * ';
			if ( i < m ) {
				str += '(';
			}
		}
		str += x[ i ].toString();
		if ( isInteger( x[ i ] ) ) {
			str += '.0';
		}
	}
	// Close all the parentheses...
	for ( i = 0; i < (2*m)-1; i++ ) {
		str += ')';
	}
	if ( dtype === 'float32' ) {
		str += ')';
	}
	return str;
}

/**
* Serializes an array of coefficients to a string implementing Horner's method.
*
* @private
* @param {NumericArray} x - coefficients sorted in descending degree
* @param {string} dtype - input value floating-point data type
* @returns {string} output string
*/
function hornerDescending( x, dtype ) {
	var str;
	var m;
	var i;

	m = x.length - 1;
	if ( dtype === 'float32' ) {
		str = 'float64ToFloat32(';
	} else {
		str = '';
	}
	str += x[ m ].toString();
	if ( isInteger( x[ m ] ) ) {
		str += '.0';
	}
	for ( i = m-1; i >= 0; i-- ) {
		if ( dtype === 'float32' ) {
			str += ' + float64ToFloat32(x * ';
			if ( i > 0 ) {
				str += 'float64ToFloat32(';
			}
		} else {
			str += ' + (x * ';
			if ( i > 0 ) {
				str += '(';
			}
		}
		str += x[ i ].toString();
		if ( isInteger( x[ i ] ) ) {
			str += '.0';
		}
	}
	// Close all the parentheses...
	for ( i = 0; i < (2*m)-1; i++ ) {
		str += ')';
	}
	if ( dtype === 'float32' ) {
		str += ')';
	}
	return str;
}

/**
* Replaces the specified tag in a source string by the chosen replacement and adds directive to disable the maximum line length lint rule if necessary.
*
* @private
* @param {string} src - source string
* @param {string} target - target tag
* @param {string} str - replacement
* @returns {string} output string
*/
function replaceString( src, target, str ) {
	var out = replace( src, '{{'+target+'}}', str );
	if ( str.length > MAX_CHARS ) {
		out = replace( out, '{{'+target+'_ESLINT}}', ' // eslint-disable-line max-len' );
	} else {
		out = replace( out, '{{'+target+'_ESLINT}}', '' );
	}
	return out;
}


// MAIN //

/**
* Compiles a module string which exports a function for evaluating a rational function.
*
* @param {NumericArray} P - numerator polynomial coefficients sorted in ascending degree
* @param {NumericArray} Q - denominator polynomial coefficients sorted in ascending degree
* @param {Options} [options] - function options
* @param {string} [options.dtype='float64'] - input value floating-point data type
* @returns {string} module string exporting a function for evaluating a rational function
*
* @example
* var P = [ -6.0, -5.0 ];
* var Q = [ 3.0, 0.5 ];
*
* var str = compile( P, Q );
* // returns <string>
*/
function compile( P, Q, options ) {
	var opts;
	var tmpl;
	var str;
	var n;
	var r;

	opts = {
		'dtype': 'float64'
	};
	if ( arguments.length > 2 ) {
		opts.dtype = options.dtype || opts.dtype;
	}
	n = P.length;

	// If no coefficients, the function always returns NaN...
	if ( n === 0 ) {
		return NAN_TEMPLATE;
	}
	// If P and Q have different lengths, the function always returns NaN...
	if ( n !== Q.length ) {
		return NAN_TEMPLATE;
	}
	r = P[0] / Q[0];
	if ( opts.dtype === 'float32' ) {
		P = new Float32Array( P );
		Q = new Float32Array( Q );
		r = float64ToFloat32( r );
	}
	// If P and Q only have one coefficient, the function always returns the ratio of those coefficients...
	if ( n === 1 ) {
		return replace( COEFFICIENT_RATIO_TEMPLATE, '{{ratio}}', value2string( r ) );
	}
	// Avoid exceeding the maximum stack size on V8 by using a simple loop :(. Note that the choice of `500` was empirically determined...
	if ( n > 500 ) {
		if ( opts.dtype === 'float32' ) {
			tmpl = LOOP_FLOAT32_TEMPLATE;
		} else {
			tmpl = LOOP_TEMPLATE;
		}
		str = replace( tmpl, '{{P}}', array2list( P ) );
		str = replace( str, '{{Q}}', array2list( Q ) );
		return replace( str, '{{ratio}}', value2string( r ) );
	}
	// If more than one coefficient, apply Horner's method...
	if ( opts.dtype === 'float32' ) {
		tmpl = EVALRATIONAL_FLOAT32_TEMPLATE;
	} else {
		tmpl = EVALRATIONAL_TEMPLATE;
	}
	str = replaceString( tmpl, 'P_ASCENDING', hornerAscending( P, opts.dtype ) );
	str = replaceString( str, 'Q_ASCENDING', hornerAscending( Q, opts.dtype ) );
	str = replaceString( str, 'P_DESCENDING', hornerDescending( P, opts.dtype ) );
	str = replaceString( str, 'Q_DESCENDING', hornerDescending( Q, opts.dtype ) );
	return replace( str, '{{ratio}}', value2string( r ) );
}


// EXPORTS //

module.exports = compile;
