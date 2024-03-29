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

import continuedFraction = require( './../../../../base/tools/continued-fraction' );
import evalpoly = require( './../../../../base/tools/evalpoly' );
import evalpolyf = require( './../../../../base/tools/evalpolyf' );
import evalrational = require( './../../../../base/tools/evalrational' );
import evalrationalf = require( './../../../../base/tools/evalrationalf' );
import fibpoly = require( './../../../../base/tools/fibpoly' );
import hermitepoly = require( './../../../../base/tools/hermitepoly' );
import lucaspoly = require( './../../../../base/tools/lucaspoly' );
import normhermitepoly = require( './../../../../base/tools/normhermitepoly' );
import sumSeries = require( './../../../../base/tools/sum-series' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Evaluates the continued fraction approximation for the supplied series generator using the modified Lentz algorithm.
	*
	* ## References
	*
	* -   Lentz, William J. 1976. "Generating bessel functions in Mie scattering calculations using continued fractions." _Applied Optics_ 15 (3): 668–71. doi:[10.1364/AO.15.000668](https://doi.org/10.1364/AO.15.000668).
	*
	* @param generator - function returning terms of continued fraction expansion
	* @param options - function options
	* @param options.maxIter - maximum number of iterations (default: 1000)
	* @param options.tolerance - further terms are only added as long as the next term is greater than current term times the tolerance (default: 2.22e-16)
	* @param options.keep - whether to keep the leading b term (default: false)
	* @returns value of continued fraction
	*
	* @example
	* // Continued fraction for (e-1)^(-1):
	* var gen = generator();
	* var out = ns.continuedFraction( gen );
	* // returns ~0.582
	*
	* function* generator() {
	*    var i = 0;
	*    while ( true ) {
	*        i++;
	*        yield [ i, i ];
	*    }
	* }
	*/
	continuedFraction: typeof continuedFraction;

	/**
	* Evaluates a polynomial using double-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
	*
	*
	* @param c - polynomial coefficients sorted in ascending degree
	* @param x - value at which to evaluate the polynomial
	* @returns evaluated polynomial
	*
	* @example
	* var v = ns.evalpoly( [ 3.0, 2.0, 1.0 ], 10.0 ); // 3*10^0 + 2*10^1 + 1*10^2
	* // returns 123.0
	*
	* @example
	* var polyval = ns.evalpoly.factory( [ 3.0, 2.0, 1.0 ] );
	*
	* var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
	* // returns 123.0
	*
	* v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
	* // returns 38.0
	*/
	evalpoly: typeof evalpoly;

	/**
	* Evaluates a polynomial using single-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
	*
	*
	* @param c - polynomial coefficients sorted in ascending degree
	* @param x - value at which to evaluate the polynomial
	* @returns evaluated polynomial
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var v = ns.evalpolyf( new Float32Array( [ 3.0, 2.0, 1.0 ] ), 10.0 ); // 3*10^0 + 2*10^1 + 1*10^2
	* // returns 123.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var polyval = ns.evalpolyf.factory( new Float32Array( [ 3.0, 2.0, 1.0 ] ) );
	*
	* var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
	* // returns 123.0
	*
	* v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
	* // returns 38.0
	*/
	evalpolyf: typeof evalpolyf;

	/**
	* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)) using double-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   Coefficients should be sorted in ascending degree.
	* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
	*
	* @param P - numerator polynomial coefficients sorted in ascending degree
	* @param Q - denominator polynomial coefficients sorted in ascending degree
	* @param x - value at which to evaluate the rational function
	* @returns evaluated rational function
	*
	* @example
	* var P = [ -6.0, -5.0 ];
	* var Q = [ 3.0, 0.5 ];
	*
	* var v = ns.evalrational( P, Q, 6.0 ); //  => ( -6*6^0 - 5*6^1 ) / ( 3*6^0 + 0.5*6^1 ) = (-6-30)/(3+3)
	* // returns -6.0
	*
	* @example
	* var P = [ 20.0, 8.0, 3.0 ];
	* var Q = [ 10.0, 9.0, 1.0 ];
	*
	* var rational = ns.evalrational.factory( P, Q );
	*
	* var v = rational( 10.0 ); // => (20*10^0 + 8*10^1 + 3*10^2) / (10*10^0 + 9*10^1 + 1*10^2) = (20+80+300)/(10+90+100)
	* // returns 2.0
	*
	* v = rational( 2.0 ); // => (20*2^0 + 8*2^1 + 3*2^2) / (10*2^0 + 9*2^1 + 1*2^2) = (20+16+12)/(10+18+4)
	* // returns 1.5
	*/
	evalrational: typeof evalrational;

	/**
	* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)) using single-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   Coefficients should be sorted in ascending degree.
	* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
	*
	* @param P - numerator polynomial coefficients sorted in ascending degree
	* @param Q - denominator polynomial coefficients sorted in ascending degree
	* @param x - value at which to evaluate the rational function
	* @returns evaluated rational function
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var P = new Float32Array( [ -6.0, -5.0 ] );
	* var Q = new Float32Array( [ 3.0, 0.5 ] );
	*
	* var v = ns.evalrationalf( P, Q, 6.0 ); //  => ( -6*6^0 - 5*6^1 ) / ( 3*6^0 + 0.5*6^1 ) = (-6-30)/(3+3)
	* // returns -6.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var P = new Float32Array( [ 20.0, 8.0, 3.0 ] );
	* var Q = new Float32Array( [ 10.0, 9.0, 1.0 ] );
	*
	* var rational = ns.evalrationalf.factory( P, Q );
	*
	* var v = rational( 10.0 ); // => (20*10^0 + 8*10^1 + 3*10^2) / (10*10^0 + 9*10^1 + 1*10^2) = (20+80+300)/(10+90+100)
	* // returns 2.0
	*
	* v = rational( 2.0 ); // => (20*2^0 + 8*2^1 + 3*2^2) / (10*2^0 + 9*2^1 + 1*2^2) = (20+16+12)/(10+18+4)
	* // returns 1.5
	*/
	evalrationalf: typeof evalrationalf;

	/**
	* Evaluates a Fibonacci polynomial.
	*
	* @param n - Fibonacci polynomial to evaluate
	* @param x - value at which to evaluate a Fibonacci polynomial
	* @returns result
	*
	* @example
	* var v = ns.fibpoly( 5, 1.0 );
	* // returns 5.0
	*
	* @example
	* var ns.fibpolyval = ns.fibpoly.factory( 5 );
	*
	* var v = ns.fibpolyval( 1.0 );
	* // returns 5.0
	*
	* v = ns.fibpolyval( 2.0 );
	* // returns 29.0
	*/
	fibpoly: typeof fibpoly;

	/**
	* Evaluates a physicist's Hermite polynomial.
	*
	* @param n - nonnegative polynomial degree
	* @param x - evaluation point
	* @returns function value
	*
	* @example
	* var v = ns.hermitepoly( 1, 1.0 );
	* // returns 2.0
	*
	* @example
	* var v = ns.hermitepoly( 1, 0.5 );
	* // returns 1.0
	*
	* @example
	* var polyval = ns.hermitepoly.factory( 2 );
	*
	* var v = polyval( 0.5 );
	* // returns -1.0
	*/
	hermitepoly: typeof hermitepoly;

	/**
	* Evaluates a Lucas polynomial.
	*
	* @param n - Lucas polynomial to evaluate
	* @param x - value at which to evaluate a Lucas polynomial
	* @returns result
	*
	* @example
	* var v = ns.lucaspoly( 5, 1.0 );
	* // returns 11.0
	*
	* @example
	* var polyval = ns.lucaspoly.factory( 5 );
	*
	* var v = polyval( 1.0 );
	* // returns 11.0
	*
	* v = polyval( 2.0 );
	* // returns 82.0
	*/
	lucaspoly: typeof lucaspoly;

	/**
	* Evaluates a normalized Hermite polynomial using double-precision floating-point arithmetic.
	*
	* @param n - nonnegative polynomial degree
	* @param x - evaluation point
	* @returns function value
	*
	* @example
	* var v = ns.normhermitepoly( 1, 0.5 );
	* // returns 0.5
	*
	* @example
	* var polyval = ns.normhermitepoly.factory( 2 );
	*
	* var v = polyval( 0.5 );
	* // returns -0.75
	*/
	normhermitepoly: typeof normhermitepoly;

	/**
	* Sum the elements of the series given by the supplied function.
	*
	* @param generator - series function
	* @param options - function options
	* @param options.maxTerms - maximum number of terms to be added (default: 1000000)
	* @param options.tolerance - further terms are only added as long as the next term is greater than current term times the tolerance (default: 2.22e-16)
	* @param options.initialValue - initial value of the resulting sum (default: 0)
	* @returns sum of all series terms
	*
	* @example
	* var pow = require( './../../../../base/special/pow' );
	* var gen = geometricSeriesGenerator( 0.9 );
	* var out = ns.sumSeries( gen );
	* // returns 10.0
	*
	* function* geometricSeriesGenerator( x ) {
	*     var exponent = 0;
	*     while ( true ) {
	*         yield pow( x, exponent );
	*         exponent += 1;
	*     }
	* }
	*/
	sumSeries: typeof sumSeries;
}

/**
* Base math tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
