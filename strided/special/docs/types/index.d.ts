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

import abs = require( './../../../../strided/special/abs' );
import absBy = require( './../../../../strided/special/abs-by' );
import abs2 = require( './../../../../strided/special/abs2' );
import abs2By = require( './../../../../strided/special/abs2-by' );
import acosBy = require( './../../../../strided/special/acos-by' );
import acoshBy = require( './../../../../strided/special/acosh-by' );
import acotBy = require( './../../../../strided/special/acot-by' );
import acothBy = require( './../../../../strided/special/acoth-by' );
import acovercosBy = require( './../../../../strided/special/acovercos-by' );
import acoversinBy = require( './../../../../strided/special/acoversin-by' );
import ahavercosBy = require( './../../../../strided/special/ahavercos-by' );
import ahaversinBy = require( './../../../../strided/special/ahaversin-by' );
import asinBy = require( './../../../../strided/special/asin-by' );
import asinhBy = require( './../../../../strided/special/asinh-by' );
import atanBy = require( './../../../../strided/special/atan-by' );
import atanhBy = require( './../../../../strided/special/atanh-by' );
import avercosBy = require( './../../../../strided/special/avercos-by' );
import aversinBy = require( './../../../../strided/special/aversin-by' );
import besselj0By = require( './../../../../strided/special/besselj0-by' );
import besselj1By = require( './../../../../strided/special/besselj1-by' );
import bessely0By = require( './../../../../strided/special/bessely0-by' );
import bessely1By = require( './../../../../strided/special/bessely1-by' );
import binetBy = require( './../../../../strided/special/binet-by' );
import cbrt = require( './../../../../strided/special/cbrt' );
import cbrtBy = require( './../../../../strided/special/cbrt-by' );
import ceil = require( './../../../../strided/special/ceil' );
import cosBy = require( './../../../../strided/special/cos-by' );
import dabs = require( './../../../../strided/special/dabs' );
import dabs2 = require( './../../../../strided/special/dabs2' );
import dcbrt = require( './../../../../strided/special/dcbrt' );
import dcbrtBy = require( './../../../../strided/special/dcbrt-by' );
import dceil = require( './../../../../strided/special/dceil' );
import ddeg2rad = require( './../../../../strided/special/ddeg2rad' );
import deg2rad = require( './../../../../strided/special/deg2rad' );
import dfloor = require( './../../../../strided/special/dfloor' );
import dinv = require( './../../../../strided/special/dinv' );
import dmskabs = require( './../../../../strided/special/dmskabs' );
import dmskabs2 = require( './../../../../strided/special/dmskabs2' );
import dmskcbrt = require( './../../../../strided/special/dmskcbrt' );
import dmskceil = require( './../../../../strided/special/dmskceil' );
import dmskdeg2rad = require( './../../../../strided/special/dmskdeg2rad' );
import dmskfloor = require( './../../../../strided/special/dmskfloor' );
import dmskinv = require( './../../../../strided/special/dmskinv' );
import dmskramp = require( './../../../../strided/special/dmskramp' );
import dmskrsqrt = require( './../../../../strided/special/dmskrsqrt' );
import dmsksqrt = require( './../../../../strided/special/dmsksqrt' );
import dmsktrunc = require( './../../../../strided/special/dmsktrunc' );
import dramp = require( './../../../../strided/special/dramp' );
import drsqrt = require( './../../../../strided/special/drsqrt' );
import dsqrt = require( './../../../../strided/special/dsqrt' );
import dtrunc = require( './../../../../strided/special/dtrunc' );
import floor = require( './../../../../strided/special/floor' );
import inv = require( './../../../../strided/special/inv' );
import ramp = require( './../../../../strided/special/ramp' );
import rsqrt = require( './../../../../strided/special/rsqrt' );
import sabs = require( './../../../../strided/special/sabs' );
import sabs2 = require( './../../../../strided/special/sabs2' );
import scbrt = require( './../../../../strided/special/scbrt' );
import sceil = require( './../../../../strided/special/sceil' );
import sdeg2rad = require( './../../../../strided/special/sdeg2rad' );
import sfloor = require( './../../../../strided/special/sfloor' );
import sinBy = require( './../../../../strided/special/sin-by' );
import sinv = require( './../../../../strided/special/sinv' );
import smskabs = require( './../../../../strided/special/smskabs' );
import smskabs2 = require( './../../../../strided/special/smskabs2' );
import smskcbrt = require( './../../../../strided/special/smskcbrt' );
import smskceil = require( './../../../../strided/special/smskceil' );
import smskdeg2rad = require( './../../../../strided/special/smskdeg2rad' );
import smskfloor = require( './../../../../strided/special/smskfloor' );
import smskinv = require( './../../../../strided/special/smskinv' );
import smskramp = require( './../../../../strided/special/smskramp' );
import smskrsqrt = require( './../../../../strided/special/smskrsqrt' );
import smsksqrt = require( './../../../../strided/special/smsksqrt' );
import smsktrunc = require( './../../../../strided/special/smsktrunc' );
import sqrt = require( './../../../../strided/special/sqrt' );
import sqrtBy = require( './../../../../strided/special/sqrt-by' );
import sramp = require( './../../../../strided/special/sramp' );
import srsqrt = require( './../../../../strided/special/srsqrt' );
import ssqrt = require( './../../../../strided/special/ssqrt' );
import strunc = require( './../../../../strided/special/strunc' );
import trunc = require( './../../../../strided/special/trunc' );

/**
* Interface describing the `special` namespace.
*/
interface Namespace {
	/**
	* Computes the absolute value for each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.abs( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.abs.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	abs: typeof abs;

	/**
	* Computes the absolute value of each element retrieved from a strided input array `x` via a callback function and assigns each result to an element in a strided output array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.absBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*
	* @example
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.absBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	absBy: typeof absBy;

	/**
	* Computes the squared absolute value for each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.abs2( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 4.0, 1.0, 9.0, 25.0, 16.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.abs2.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 4.0, 1.0, 9.0, 25.0, 16.0 ]
	*/
	abs2: typeof abs2;

	/**
	* Computes the squared absolute value of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.abs2By( x.length, x, 1, y, 1, accessor );
	* // y => [ 1.0, 4.0, 9.0, 16.0, 25.0 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.abs2By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 1.0, 4.0, 9.0, 16.0, 25.0 ]
	*/
	abs2By: typeof abs2By;

	/**
	* Computes the arccosine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 1.0, 0.707, 0.866, -0.707, -0.866 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acosBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~0.786, ~0.524, ~2.356, ~2.618 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 1.0, 0.707, 0.866, -0.707, -0.866 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acosBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~0.786, ~0.524, ~2.356, ~2.618 ]
	*/
	acosBy: typeof acosBy;

	/**
	* Computes the hyperbolic arccosine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 1.0, 1.5, 2.0, 2.5, 3.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acoshBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~0.962, ~1.317, ~1.567, ~1.763 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 1.0, 1.5, 2.0, 2.5, 3.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acoshBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~0.962, ~1.317, ~1.567, ~1.763 ]
	*/
	acoshBy: typeof acoshBy;

	/**
	* Computes the inverse cotangent of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ -2.5, -1.5, -0.5, 0.0, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acotBy( x.length, x, 1, y, 1, accessor );
	* // y => [ ~-0.381, ~-0.588, ~-1.107, ~1.571, ~1.107 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ -2.5, -1.5, -0.5, 0.0, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acotBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ ~-0.381, ~-0.588, ~-1.107, ~1.571, ~1.107 ]
	*/
	acotBy: typeof acotBy;

	/**
	* Computes the inverse hyperbolic cotangent of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ -5.0, -4.0, -3.0, -1.0, 1.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acothBy( x.length, x, 1, y, 1, accessor );
	* // y => [ ~-0.203, ~-0.255, ~-0.347, -Infinity, Infinity ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ -5.0, -4.0, -3.0, -1.0, 1.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acothBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ ~-0.203, ~-0.255, ~-0.347, -Infinity, Infinity ]
	*/
	acothBy: typeof acothBy;

	/**
	* Computes the inverse coversed cosine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -1.57, -0.5, -1.0, -1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acovercosBy( x.length, x, 1, y, 1, accessor );
	* // y => [ ~1.571, ~-0.607, ~0.524, 0.0, ~-0.253 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -1.57, -0.5, -1.0, -1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acovercosBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ ~1.571, ~-0.607, ~0.524, 0.0, ~-0.253 ]
	*/
	acovercosBy: typeof acovercosBy;

	/**
	* Computes the inverse coversed sine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.57, 0.5, 1.0, 1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acoversinBy( x.length, x, 1, y, 1, accessor );
	* // y => [ ~1.571, ~-0.607, ~0.524, 0.0, ~-0.253 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.57, 0.5, 1.0, 1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.acoversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ ~1.571, ~-0.607, ~0.524, 0.0, ~-0.253 ]
	*/
	acoversinBy: typeof acoversinBy;

	/**
	* Computes the inverse half-value versed cosine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 0.5, 1.0, 0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.ahavercosBy( x.length, x, 1, y, 1, accessor );
	* // y => [ ~3.142, ~1.571, 0.0, ~2.094, ~1.047 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 0.5, 1.0, 0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.ahavercosBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ ~3.142, ~1.571, 0.0, ~2.094, ~1.047 ]
	*/
	ahavercosBy: typeof ahavercosBy;

	/**
	* Computes the inverse half-value versed sine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 0.5, 1.0, 0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.ahaversinBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~1.571, ~3.142, ~1.047, ~2.094 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 0.5, 1.0, 0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.ahaversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~1.571, ~3.142, ~1.047, ~2.094 ]
	*/
	ahaversinBy: typeof ahaversinBy;

	/**
	* Computes the arcsine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.5, 1.0, -0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.asinBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~-0.524, ~1.571, ~-0.253, ~0.848 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.5, 1.0, -0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.asinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~-0.524, ~1.571, ~-0.253, ~0.848 ]
	*/
	asinBy: typeof asinBy;

	/**
	* Computes the hyperbolic arcsine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.0, 2.0, -2.0, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.asinhBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, 0.0, ~1.444, ~-1.444, ~0.693 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.0, 2.0, -2.0, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.asinhBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, 0.0, ~1.444, ~-1.444, ~0.693 ]
	*/
	asinhBy: typeof asinhBy;

	/**
	* Computes the arctangent of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.5, 1.0, -1.25, 3.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.atanBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~-0.464, ~0.785, ~-0.896, ~1.31 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.5, 1.0, -1.25, 3.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.atanBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~-0.464, ~0.785, ~-0.896, ~1.31 ]
	*/
	atanBy: typeof atanBy;

	/**
	* Computes the hyperbolic arctangent of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.5, 1.0, -0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.atanhBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~-0.549, Infinity, ~-0.255, ~0.973 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -0.5, 1.0, -0.25, 0.75 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.atanhBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~-0.549, Infinity, ~-0.255, ~0.973 ]
	*/
	atanhBy: typeof atanhBy;

	/**
	* Computes the inverse versed cosine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -1.57, -0.5, -1.0, -1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.avercosBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~2.177, ~1.047, ~1.571, ~1.823 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, -1.57, -0.5, -1.0, -1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.avercosBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~2.177, ~1.047, ~1.571, ~1.823 ]
	*/
	avercosBy: typeof avercosBy;

	/**
	* Computes the inverse versed sine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.57, 0.5, 1.0, 1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.aversinBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~2.177, ~1.047, ~1.571, ~1.823 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.57, 0.5, 1.0, 1.25 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.aversinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~2.177, ~1.047, ~1.571, ~1.823 ]
	*/
	aversinBy: typeof aversinBy;

	/**
	* Computes the Bessel function of the first kind of order zero for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.besselj0By( x.length, x, 1, y, 1, accessor );
	* // y => [ 1.0, ~0.765, ~0.998, ~0.984, ~0.938 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.besselj0By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 1.0, ~0.765, ~0.998, ~0.984, ~0.938 ]
	*/
	besselj0By: typeof besselj0By;

	/**
	* Computes the Bessel function of the first kind of order one for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.besselj1By( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~0.44, ~0.05, ~0.124, ~0.242 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.besselj1By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~0.44, ~0.05, ~0.124, ~0.242 ]
	*/
	besselj1By: typeof besselj1By;

	/**
	* Computes the Bessel function of the second kind of order zero for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.bessely0By( x.length, x, 1, y, 1, accessor );
	* // y => [ -Infinity, ~0.088, ~-1.534, ~-0.932, ~-0.445 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.bessely0By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ -Infinity, ~0.088, ~-1.534, ~-0.932, ~-0.445 ]
	*/
	bessely0By: typeof bessely0By;

	/**
	* Computes the Bessel function of the second kind of order one for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.bessely1By( x.length, x, 1, y, 1, accessor );
	* // y => [ -Infinity, ~-0.781, ~-6.459, ~-2.704, ~-1.471 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.bessely1By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ -Infinity, ~-0.781, ~-6.459, ~-2.704, ~-1.471 ]
	*/
	bessely1By: typeof bessely1By;

	/**
	* Evaluates Binet's formula extended to real numbers for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 2.0, 3.0, -1.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.binetBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, 1.0, 1.0, 2.0, 1.0 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 2.0, 3.0, -1.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.binetBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, 1.0, 1.0, 2.0, 1.0 ]
	*/
	binetBy: typeof binetBy;

	/**
	* Computes the cube root of each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.cbrt( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.cbrt.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	cbrt: typeof cbrt;

	/**
	* Computes the cube root of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 1.0, 9.0, -27.0, 81.0, -125.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.cbrtBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 1.0, 9.0, -27.0, 81.0, -125.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.cbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*/
	cbrtBy: typeof cbrtBy;

	/**
	* Rounds each element in a strided array `x` toward positive infinity and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ceil( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 2.0, 3.0, -3.0, 4.0, -5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ceil.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 2.0, 3.0, -3.0, 4.0, -5.0 ]
	*/
	ceil: typeof ceil;

	/**
	* Computes the cosine for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.cosBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 1.0, ~-1.0, ~-1.0, ~-0.839, ~-0.76 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.cosBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 1.0, ~-1.0, ~-1.0, ~-0.839, ~-0.76 ]
	*/
	cosBy: typeof cosBy;

	/**
	* Computes the absolute value for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dabs( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dabs: typeof dabs;

	/**
	* Computes the squared absolute value for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dabs2( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 4.0, 9.0, 16.0, 25.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dabs2.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 4.0, 9.0, 16.0, 25.0 ]
	*/
	dabs2: typeof dabs2;

	/**
	* Computes the cube root of each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dcbrt( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dcbrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	dcbrt: typeof dcbrt;

	/**
	* Computes the cube root of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns destination array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
	* var out = Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dcbrtBy( x.length, x, 1, out, 1, accessor );
	* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
	* var out = Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dcbrtBy.ndarray( x.length, x, 1, 0, out, 1, 0, accessor );
	* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*/
	dcbrtBy: typeof dcbrtBy;

	/**
	* Rounds each element in a double-precision floating-point strided array `x` toward positive infinity and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dceil( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 2.0, 3.0, -3.0, 4.0, -5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dceil.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 2.0, 3.0, -3.0, 4.0, -5.0 ]
	*/
	dceil: typeof dceil;

	/**
	* Converts each element in a double-precision floating-point strided array `x` from degrees to radians and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ddeg2rad( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ddeg2rad.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
	*/
	ddeg2rad: typeof ddeg2rad;

	/**
	* Converts each element in a strided array `x` from degrees to radians and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 30.0, 45.0, 90.0, 120.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.deg2rad( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 0.0, ~0.524, ~0.785, ~1.571, ~2.094 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 30.0, 45.0, 90.0, 120.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.deg2rad.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 0.0, ~0.524, ~0.785, ~1.571, ~2.094 ]
	*/
	deg2rad: typeof deg2rad;

	/**
	* Rounds each element in a double-precision floating-point strided array `x` toward negative infinity and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dfloor( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dfloor.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
	*/
	dfloor: typeof dfloor;

	/**
	* Computes the multiplicative inverse for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dinv( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ -0.05, -1.0, 0.5, 0.25, 0.1 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dinv.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ -0.05, -1.0, 0.5, 0.25, 0.1 ]
	*/
	dinv: typeof dinv;

	/**
	* Computes the absolute value for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskabs( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 2.0, 1.0, 0.0, 5.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskabs.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 2.0, 1.0, 0.0, 5.0, 0.0 ]
	*/
	dmskabs: typeof dmskabs;

	/**
	* Computes the squared absolute value for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskabs2( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 4.0, 1.0, 0.0, 25.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskabs2.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 4.0, 1.0, 0.0, 25.0, 0.0 ]
	*/
	dmskabs2: typeof dmskabs2;

	/**
	* Computes the cube root for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskcbrt( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 0.0, 1.0, 0.0, 3.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskcbrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 0.0, 1.0, 0.0, 3.0, 0.0 ]
	*/
	dmskcbrt: typeof dmskcbrt;

	/**
	* Rounds each element in a double-precision floating-point strided array `x` toward positive infinity according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskceil( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 2.0, 3.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskceil.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 2.0, 3.0, 0.0, 4.0, 0.0 ]
	*/
	dmskceil: typeof dmskceil;

	/**
	* Converts each element in a double-precision floating-point strided array `x` from degrees to radians according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskdeg2rad( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 0.0, ~0.524, 0.0, ~1.047, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskdeg2rad.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 0.0, ~0.524, 0.0, ~1.047, 0.0 ]
	*/
	dmskdeg2rad: typeof dmskdeg2rad;

	/**
	* Rounds each element in a double-precision floating-point strided array `x` toward negative infinity according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskfloor( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskfloor.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*/
	dmskfloor: typeof dmskfloor;

	/**
	* Computes the multiplicative inverse for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskinv( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ -0.05, -1.0, 0.0, 0.25, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskinv.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ -0.05, -1.0, 0.0, 0.25, 0.0 ]
	*/
	dmskinv: typeof dmskinv;

	/**
	* Evaluates the ramp function for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskramp( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 1.1, 2.5, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.1, 2.5, 0.0, 4.0, 0.0 ]
	*/
	dmskramp: typeof dmskramp;

	/**
	* Computes the reciprocal square root for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskrsqrt( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ Infinity, 0.5, 0.0, ~0.289, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmskrsqrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ Infinity, 0.5, 0.0, ~0.289, 0.0 ]
	*/
	dmskrsqrt: typeof dmskrsqrt;

	/**
	* Computes the principal square root for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmsksqrt( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 0.0, 2.0, 0.0, ~3.464, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmsksqrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 0.0, 2.0, 0.0, ~3.464, 0.0 ]
	*/
	dmsksqrt: typeof dmsksqrt;

	/**
	* Rounds each element in a double-precision floating-point strided array `x` toward zero according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmsktrunc( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dmsktrunc.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*/
	dmsktrunc: typeof dmsktrunc;

	/**
	* Evaluates the ramp function for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dramp( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.1, 2.5, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dramp.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.1, 2.5, 0.0, 4.0, 0.0 ]
	*/
	dramp: typeof dramp;

	/**
	* Computes the reciprocal square root for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.drsqrt( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.drsqrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
	*/
	drsqrt: typeof drsqrt;

	/**
	* Computes the principal square root for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dsqrt( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 0.0, 2.0, 3.0, ~3.464, ~4.899 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dsqrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 0.0, 2.0, 3.0, ~3.464, ~4.899 ]
	*/
	dsqrt: typeof dsqrt;

	/**
	* Rounds each element in a double-precision floating-point strided array `x` toward zero and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dtrunc( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, -3.0, 4.0, -5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.dtrunc.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, -3.0, 4.0, -5.0 ]
	*/
	dtrunc: typeof dtrunc;

	/**
	* Rounds each element in a strided array `x` toward negative infinity and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.floor( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ -2.0, 2.0, -4.0, 4.0, -5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.floor.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ -2.0, 2.0, -4.0, 4.0, -5.0 ]
	*/
	floor: typeof floor;

	/**
	* Computes the multiplicative inverse for each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.inv( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ -0.05, -1.0, 0.5, 0.25, 0.1 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.inv.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ -0.05, -1.0, 0.5, 0.25, 0.1 ]
	*/
	inv: typeof inv;

	/**
	* Evaluates the ramp function for each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ramp( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 1.1, 2.5, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ramp.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 1.1, 2.5, 0.0, 4.0, 0.0 ]
	*/
	ramp: typeof ramp;

	/**
	* Computes the reciprocal square root for each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.rsqrt( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.rsqrt.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
	*/
	rsqrt: typeof rsqrt;

	/**
	* Computes the absolute value for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sabs( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	sabs: typeof sabs;

	/**
	* Computes the squared absolute value for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sabs2( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 4.0, 9.0, 16.0, 25.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sabs2.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 4.0, 9.0, 16.0, 25.0 ]
	*/
	sabs2: typeof sabs2;

	/**
	* Computes the cube root of each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.scbrt( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.scbrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	scbrt: typeof scbrt;

	/**
	* Rounds each element in a single-precision floating-point strided array `x` toward positive infinity and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sceil( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 2.0, 3.0, -3.0, 4.0, -5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sceil.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 2.0, 3.0, -3.0, 4.0, -5.0 ]
	*/
	sceil: typeof sceil;

	/**
	* Converts each element in a single-precision floating-point strided array `x` from degrees to radians and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sdeg2rad( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sdeg2rad.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
	*/
	sdeg2rad: typeof sdeg2rad;

	/**
	* Rounds each element in a single-precision floating-point strided array `x` toward negative infinity and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sfloor( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sfloor.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
	*/
	sfloor: typeof sfloor;

	/**
	* Computes the sine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.sinBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~0.002, ~-0.002, ~-0.544, ~-0.65 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.sinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~0.002, ~-0.002, ~-0.544, ~-0.65 ]
	*/
	sinBy: typeof sinBy;

	/**
	* Computes the multiplicative inverse for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sinv( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ ~-0.05, -1.0, 0.5, 0.25, ~0.1 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sinv.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ ~-0.05, -1.0, 0.5, 0.25, ~0.1 ]
	*/
	sinv: typeof sinv;

	/**
	* Computes the absolute value for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskabs( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 2.0, 1.0, 0.0, 5.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskabs.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 2.0, 1.0, 0.0, 5.0, 0.0 ]
	*/
	smskabs: typeof smskabs;

	/**
	* Computes the squared absolute value for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskabs2( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 4.0, 1.0, 0.0, 25.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskabs2.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 4.0, 1.0, 0.0, 25.0, 0.0 ]
	*/
	smskabs2: typeof smskabs2;

	/**
	* Computes the cube root for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskcbrt( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 0.0, 1.0, 0.0, 3.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskcbrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 0.0, 1.0, 0.0, 3.0, 0.0 ]
	*/
	smskcbrt: typeof smskcbrt;

	/**
	* Rounds each element in a single-precision floating-point strided array `x` toward positive infinity according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskceil( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 2.0, 3.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskceil.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 2.0, 3.0, 0.0, 4.0, 0.0 ]
	*/
	smskceil: typeof smskceil;

	/**
	* Converts each element in a single-precision floating-point strided array `x` from degrees to radians according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskdeg2rad( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 0.0, ~0.524, 0.0, ~1.047, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskdeg2rad.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 0.0, ~0.524, 0.0, ~1.047, 0.0 ]
	*/
	smskdeg2rad: typeof smskdeg2rad;

	/**
	* Rounds each element in a single-precision floating-point strided array `x` toward negative infinity according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskfloor( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskfloor.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*/
	smskfloor: typeof smskfloor;

	/**
	* Computes the multiplicative inverse for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskinv( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ ~-0.05, -1.0, 0.0, 0.25, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskinv.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ ~-0.05, -1.0, 0.0, 0.25, 0.0 ]
	*/
	smskinv: typeof smskinv;

	/**
	* Evaluates the ramp function for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, -3.0, 4.0, -5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskramp( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, -3.0, 4.0, -5.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskramp.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*/
	smskramp: typeof smskramp;

	/**
	* Computes the reciprocal square root for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskrsqrt( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ Infinity, 0.5, 0.0, ~0.289, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smskrsqrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ Infinity, 0.5, 0.0, ~0.289, 0.0 ]
	*/
	smskrsqrt: typeof smskrsqrt;

	/**
	* Computes the principal square root for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smsksqrt( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 0.0, 2.0, 0.0, ~3.464, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smsksqrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 0.0, 2.0, 0.0, ~3.464, 0.0 ]
	*/
	smsksqrt: typeof smsksqrt;

	/**
	* Rounds each element in a single-precision floating-point strided array `x` toward zero according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param mask - mask array
	* @param strideMask - `mask` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smsktrunc( x.length, x, 1, m, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var Uint8Array = require( '@stdlib/array/uint8' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.smsktrunc.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*/
	smsktrunc: typeof smsktrunc;

	/**
	* Computes the principal square root for each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sqrt( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 0.0, 2.0, 3.0, ~3.464, ~4.899 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sqrt.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 0.0, 2.0, 3.0, ~3.464, ~4.899 ]
	*/
	sqrt: typeof sqrt;

	/**
	* Computes the principal square root for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 122.0, 50.0, 80.7 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.sqrtBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, 1.0, ~11.045, ~7.071, ~8.983 ]
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 1.0, 122.0, 50.0, 80.7 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* ns.sqrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, 1.0, ~11.045, ~7.071, ~8.983 ]
	*/
	sqrtBy: typeof sqrtBy;

	/**
	* Evaluates the ramp function for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, -3.0, 4.0, -5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sramp( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, -3.0, 4.0, -5.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.sramp.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 0.0 ]
	*/
	sramp: typeof sramp;

	/**
	* Computes the reciprocal square root for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.srsqrt( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 0.5, ~0.333, ~0.289, ~0.204 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.srsqrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 0.5, ~0.333, ~0.289, ~0.204 ]
	*/
	srsqrt: typeof srsqrt;

	/**
	* Computes the principal square root for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ssqrt( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 0.0, 2.0, 3.0, ~3.464, ~4.899 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ssqrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 0.0, 2.0, 3.0, ~3.464, ~4.899 ]
	*/
	ssqrt: typeof ssqrt;

	/**
	* Rounds each element in a single-precision floating-point strided array `x` toward zero and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.strunc( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, -3.0, 4.0, -5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.1, 2.5, -3.5, 4.0, -5.9 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.strunc.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, -3.0, 4.0, -5.0 ]
	*/
	strunc: typeof strunc;

	/**
	* Rounds each element in a strided array `x` toward zero and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.trunc( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, -3.0, 4.0, -5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.1, 2.5, -3.5, 4.0, -5.9] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.trunc.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, -3.0, 4.0, -5.0 ]
	*/
	trunc: typeof trunc;
}

/**
* Strided array special math functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
