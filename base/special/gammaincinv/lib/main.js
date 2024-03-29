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

/*
* Translated from the Fortran module by
* ----------------------------------------------------------------------
* Authors:
*  Amparo Gil    (U. Cantabria, Santander, Spain)
*                 e-mail: amparo.gil@unican.es
*  Javier Segura (U. Cantabria, Santander, Spain)
*                 e-mail: javier.segura@unican.es
*  Nico M. Temme (CWI, Amsterdam, The Netherlands)
*                 e-mail: nico.temme@cwi.nl
* ---------------------------------------------------------------------
*/

// MODULES //

var isnan = require( './../../../../base/assert/is-nan' );
var FLOAT32_SMALLEST = require( '@stdlib/constants/float32/smallest-normal' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var compute = require( './compute.js' );


// MAIN //

/**
* Inverts the lower gamma function; i.e., computes `xr` such that `P(a,xr) = p`.
*
* ## Method
*
* The present code uses different methods of computation depending on the values of the input values: Taylor, asymptotic expansions and high-order Newton methods.
*
* ## Notes
*
* -   The claimed accuracy obtained using this inversion routine is near `1e-12`.
*
* ## References
*
* -   A. Gil, J. Segura and N.M. Temme, GammaCHI: a package for the inversion and computation of the gamma and chi-square distribution functions (central and noncentral). Computer Physics Commun
* -   A. Gil, J. Segura and N.M. Temme. Efficient and accurate algorithms for the computation and inversion of the incomplete gamma function ratios. SIAM J Sci Comput. (2012) 34(6), A2965-A2981
*
* @param {Probability} p - probability value
* @param {number} a - scale parameter
* @param {boolean} [upper=false] - boolean indicating if the function should invert the upper tail of the incomplete gamma function instead; i.e., compute `xr` such that `Q(a,xr) = p`.
* @returns {number} function value of the inverse
*/
function gammaincinv( p, a, upper ) {
	if ( isnan( p ) || isnan( a ) ) {
		return NaN;
	}
	if ( a < FLOAT32_SMALLEST ) {
		return NaN;
	}
	if ( p > 1.0 || p < 0.0 ) {
		return NaN;
	}
	// Case: invert upper gamma function
	if ( upper === true ) {
		if ( p === 0.0 ) {
			return PINF;
		}
		if ( p === 1.0 ) {
			return 0.0;
		}
		return compute( a, 1.0-p, p );
	}
	// Default: invert lower gamma function
	if ( p === 0.0 ) {
		return 0.0;
	}
	if ( p === 1.0 ) {
		return PINF;
	}
	return compute( a, p, 1.0-p );
}


// EXPORTS //

module.exports = gammaincinv;
