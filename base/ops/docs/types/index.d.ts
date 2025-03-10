/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import caddf = require( '@stdlib/complex/float32/base/add' );
import cmulf = require( '@stdlib/complex/float32/base/mul' );
import cadd = require( '@stdlib/complex/float64/base/add' );
import cmul = require( '@stdlib/complex/float64/base/mul' );
import cdiv = require( './../../../../base/ops/cdiv' );
import cneg = require( './../../../../base/ops/cneg' );
import cnegf = require( './../../../../base/ops/cnegf' );
import csub = require( './../../../../base/ops/csub' );
import csubf = require( './../../../../base/ops/csubf' );
import divf = require( '@stdlib/number/float32/base/div' );
import div = require( '@stdlib/number/float64/base/div' );
import mul = require( '@stdlib/number/float64/base/mul' );
import sub = require( '@stdlib/number/float64/base/sub' );

/**
* Interface describing the `ops` namespace.
*/
interface Namespace {
	/**
	* Adds two single-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var z = new Complex64( 5.0, 3.0 );
	* // returns <Complex64>
	*
	* var out = ns.caddf( z, z );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns 10.0
	*
	* var im = imagf( out );
	* // returns 6.0
	*/
	caddf: typeof caddf;

	/**
	* Multiplies two single-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var z1 = new Complex64( 5.0, 3.0 );
	* // returns <Complex64>
	*
	* var z2 = new Complex64( -2.0, 1.0 );
	* // returns <Complex64>
	*
	* var out = ns.cmulf( z1, z2 );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns -13.0
	*
	* var im = imagf( out );
	* // returns -1.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 2 );
	* var v = ns.cmulf.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
	* // returns <Float32Array>[ -13.0, -1.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var z1 = new Float32Array( [ 5.0, 3.0 ] );
	* var z2 = new Float32Array( [ -2.0, 1.0 ] );
	*
	* var out = ns.cmulf.strided( z1, 1, 0, z2, 1, 0, new Float32Array( 2 ), 1, 0 );
	* // returns <Float32Array>[ -13.0, -1.0 ]
	*/
	cmulf: typeof cmulf;

	/**
	* Adds two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var out = ns.cadd( z, z );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 10.0
	*
	* var im = imag( out );
	* // returns 6.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = ns.cadd.assign( 5.0, 3.0, 5.0, 3.0, out, 1, 0 );
	* // returns <Float64Array>[ 10.0, 6.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var z1 = new Float64Array( [ 5.0, 3.0 ] );
	* var z2 = new Float64Array( [ 5.0, 3.0 ] );
	*
	* var out = ns.cadd.strided( z1, 1, 0, z2, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ 10.0, 6.0 ]
	*/
	cadd: typeof cadd;

	/**
	* Multiplies two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z1 = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var z2 = new Complex128( -2.0, 1.0 );
	* // returns <Complex128>
	*
	* var out = ns.cmul( z1, z2 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns -13.0
	*
	* var im = imag( out );
	* // returns -1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = ns.cmul.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
	* // returns <Float64Array>[ -13.0, -1.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var z1 = new Float64Array( [ 5.0, 3.0 ] );
	* var z2 = new Float64Array( [ -2.0, 1.0 ] );
	*
	* var out = ns.cmul.strided( z1, 1, 0, z2, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ -13.0, -1.0 ]
	*/
	cmul: typeof cmul;

	/**
	* Divides two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z1 = new Complex128( -13.0, -1.0 );
	* // returns <Complex128>
	*
	* var z2 = new Complex128( -2.0, 1.0 );
	* // returns <Complex128>
	*
	* var out = ns.cdiv( z1, z2 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 5.0
	*
	* var im = imag( out );
	* // returns 3.0
	*/
	cdiv: typeof cdiv;

	/**
	* Negates a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z1 = new Complex128( -4.2, 5.5 );
	* // returns <Complex128>
	*
	* var out = ns.cneg( z1 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 4.2
	*
	* var im = imag( out );
	* // returns -5.5
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z2 = new Complex128( 0.0, 0.0 );
	* // returns <Complex128>
	*
	* var out = ns.cneg( z2 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns -0.0
	*
	* var im = imag( out );
	* // returns -0.0
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z3 = new Complex128( NaN, NaN );
	* // returns <Complex128>
	*
	* var out = ns.cneg( z3 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns NaN
	*
	* var im = imag( out );
	* // returns NaN
	*/
	cneg: typeof cneg;

	/**
	* Negates a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var z = new Complex64( -4.2, 5.5 );
	* // returns <Complex64>
	*
	* var out = ns.cnegf( z );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns 4.2
	*
	* var im = imagf( out );
	* // returns -5.5
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var z = new Complex64( 0.0, 0.0 );
	* // returns <Complex64>
	*
	* var out = ns.cnegf( z );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns -0.0
	*
	* var im = imagf( out );
	* // returns -0.0
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var z = new Complex64( NaN, NaN );
	* // returns <Complex64>
	*
	* var out = ns.cnegf( z );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns NaN
	*
	* var im = imagf( out );
	* // returns NaN
	*/
	cnegf: typeof cnegf;

	/**
	* Subtracts two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z1 = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var z2 = new Complex128( -2.0, 1.0 );
	* // returns <Complex128>
	*
	* var out = ns.csub( z1, z2 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 7.0
	*
	* var im = imag( out );
	* // returns 2.0
	*/
	csub: typeof csub;

	/**
	* Subtracts two single-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var z1 = new Complex64( 5.0, 3.0 );
	* // returns <Complex64>
	*
	* var z2 = new Complex64( -2.0, 1.0 );
	* // returns <Complex64>
	*
	* var out = ns.csubf( z1, z2 );
	* // returns <Complex64>
	*
	* var re = realf( out );
	* // returns 7.0
	*
	* var im = imagf( out );
	* // returns 2.0
	*/
	csubf: typeof csubf;

	/**
	* Divides two single-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value (divided)
	* @param y - second input value (divisor)
	* @returns result
	*
	* @example
	* var v = ns.divf( -1.0, 5.0 );
	* // returns ~-0.2
	*
	* @example
	* var v = ns.divf( 2.0, 5.0 );
	* // returns ~0.4
	*
	* @example
	* var v = ns.divf( 0.0, 5.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.divf( -0.0, 5.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.divf( NaN, NaN );
	* // returns NaN
	*/
	divf: typeof divf;

	/**
	* Divides two double-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value (divided)
	* @param y - second input value (divisor)
	* @returns result
	*
	* @example
	* var v = ns.div( -1.0, 5.0 );
	* // returns -0.2
	*
	* @example
	* var v = ns.div( 2.0, 5.0 );
	* // returns 0.4
	*
	* @example
	* var v = ns.div( 0.0, 5.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.div( -0.0, 5.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.div( NaN, NaN );
	* // returns NaN
	*/
	div: typeof div;

	/**
	* Multiplies two double-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value
	* @param y - second input value
	* @returns result
	*
	* @example
	* var v = ns.mul( -1.0, 5.0 );
	* // returns -5.0
	*
	* @example
	* var v = ns.mul( 2.0, 5.0 );
	* // returns 10.0
	*
	* @example
	* var v = ns.mul( 0.0, 5.0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.mul( -0.0, 0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.mul( NaN, NaN );
	* // returns NaN
	*/
	mul: typeof mul;

	/**
	* Subtracts two double-precision floating-point numbers `x` and `y`.
	*
	* @param x - first input value
	* @param y - second input value
	* @returns result
	*
	* @example
	* var v = ns.sub( -1.0, 5.0 );
	* // returns -6.0
	*
	* @example
	* var v = ns.sub( 2.0, 5.0 );
	* // returns -3.0
	*
	* @example
	* var v = ns.sub( 0.0, 5.0 );
	* // returns -5.0
	*
	* @example
	* var v = ns.sub( -0.0, 0.0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.sub( NaN, NaN );
	* // returns NaN
	*/
	sub: typeof sub;
}

/**
* Base (i.e., lower-level) math operators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
