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
var cadd = require( './../../../../base/ops/cadd' );
var resolve = require( '@stdlib/strided/base/dtype-resolve-str' );
var Complex64 = require( '@stdlib/complex/float32' );
var Complex128 = require( '@stdlib/complex/float64' );
var types = require( './types.js' );


// VARIABLES //

var T = 'number';


// FUNCTIONS //

/**
* Wraps a function accepting complex number arguments to support providing both real and complex numbers.
*
* ## Notes
*
* -   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.
*
* @private
* @param {Function} fcn - function to wrap
* @param {NonNegativeInteger} nargs - number of arguments
* @param {Function} ctor - complex number constructor
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a constructor function
* @returns {Function} wrapped function
*
* @example
* var Complex64 = require( '@stdlib/complex/float32' );
* var cadd = require( '@stdlib/math/base/ops/cadd' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var f = wrap( cadd, 2, Complex64 );
*
* // ...
*
* var z = f( 3.0, 4.0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 7.0
*
* var im = imag( z );
* // returns 0.0
*/
function wrap( fcn, nargs, ctor ) { /* eslint-disable valid-typeof */
	var fcns;
	if ( typeof fcn !== 'function' ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( typeof nargs !== 'number' ) {
		throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer. Value: `' + nargs + '`.' );
	}
	if ( typeof ctor !== 'function' ) {
		throw new TypeError( 'invalid argument. Third argument must be a constructor function. Value: `' + ctor + '`.' );
	}
	fcns = [ fcn0, fcn1, fcn2, fcn3, fcn4, fcn5 ];
	return ( nargs <= 5 ) ? fcns[ nargs ] : fcnN;

	/**
	* Invokes a nullary function.
	*
	* @private
	* @returns {Complex} result
	*/
	function fcn0() {
		return fcn();
	}

	/**
	* Invokes a unary function.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @returns {Complex} result
	*/
	function fcn1( x ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		return fcn( x );
	}

	/**
	* Invokes a binary function.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @returns {Complex} result
	*/
	function fcn2( x, y ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		return fcn( x, y );
	}

	/**
	* Invokes a ternary function.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @param {(number|Complex)} z - input value
	* @returns {Complex} result
	*/
	function fcn3( x, y, z ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		if ( typeof z === T ) {
			z = new ctor( z, 0.0 );
		}
		return fcn( x, y, z );
	}

	/**
	* Invokes a quaternary function.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @param {(number|Complex)} z - input value
	* @param {(number|Complex)} w - input value
	* @returns {Complex} result
	*/
	function fcn4( x, y, z, w ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		if ( typeof z === T ) {
			z = new ctor( z, 0.0 );
		}
		if ( typeof w === T ) {
			w = new ctor( w, 0.0 );
		}
		return fcn( x, y, z, w );
	}

	/**
	* Invokes a quinary function.
	*
	* @private
	* @param {(number|Complex)} x - input value
	* @param {(number|Complex)} y - input value
	* @param {(number|Complex)} z - input value
	* @param {(number|Complex)} w - input value
	* @param {(number|Complex)} v - input value
	* @returns {Complex} result
	*/
	function fcn5( x, y, z, w, v ) {
		if ( typeof x === T ) {
			x = new ctor( x, 0.0 );
		}
		if ( typeof y === T ) {
			y = new ctor( y, 0.0 );
		}
		if ( typeof z === T ) {
			z = new ctor( z, 0.0 );
		}
		if ( typeof w === T ) {
			w = new ctor( w, 0.0 );
		}
		if ( typeof v === T ) {
			v = new ctor( v, 0.0 );
		}
		return fcn( x, y, z, w, v );
	}

	/**
	* Invokes a function accepting an arbitrary number of input arguments.
	*
	* @private
	* @param {...(number|Complex)} args - input values
	* @returns {Complex} result
	*/
	function fcnN() {
		var args;
		var v;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			v = arguments[ i ];
			if ( typeof v === T ) {
				v = new ctor( v, 0.0 );
			}
			args.push( v );
		}
		return fcn.apply( null, args );
	}
}

/**
* Assigns callbacks to binary interfaces.
*
* ## Notes
*
* -   For now, we can simply use the callback for `float64`, even for `float32`, as we shouldn't need to explicitly downcast strided array values (e.g., the only time we need to return `float32` values is when input arrays are already `float32` or of a type which can be safely represented in `float32` without concern for truncation).
*
* @private
* @param {Array} dtypes - list of dtype signatures
* @returns {Array} list of callbacks
*/
function callbacks( dtypes ) {
	var out;
	var t1;
	var t2;
	var t3;
	var f;
	var i;

	out = [];
	for ( i = 0; i < dtypes.length; i += 3 ) {
		t1 = resolve( dtypes[ i ] );
		t2 = resolve( dtypes[ i+1 ] );
		t3 = resolve( dtypes[ i+2 ] );
		if ( t3 === 'complex64' ) {
			if ( t1 === t2 && t2 === t3 ) {
				f = cadd;
			} else {
				f = wrap( cadd, 2, Complex64 );
			}
		} else if ( t3 === 'complex128' ) {
			if ( t1 === t2 && t2 === t3 ) {
				f = cadd; // FIXME: zadd
			} else {
				f = wrap( cadd, 2, Complex128 ); // FIXME: zadd
			}
		} else {
			f = add;
		}
		out.push( f );
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
