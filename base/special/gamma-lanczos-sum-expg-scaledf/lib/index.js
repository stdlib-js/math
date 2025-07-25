/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Calculate the Lanczos sum for the approximation of the gamma function (scaled by `exp(-g)`, where `g = 1.42845618724823`) as a single precision floating-point number.
*
* @module @stdlib/math/base/special/gamma-lanczos-sum-expg-scaledf
*
* @example
* var gammaLanczosSumExpGScaledf = require( '@stdlib/math/base/special/gamma-lanczos-sum-expg-scaledf' );
*
* var v = gammaLanczosSumExpGScaledf( 4.0 );
* // returns ~0.748
*
* v = gammaLanczosSumExpGScaledf( -1.5 );
* // returns ~0.193
*
* v = gammaLanczosSumExpGScaledf( -0.5 );
* // returns ~-0.558
*
* v = gammaLanczosSumExpGScaledf( 0.5 );
* // returns ~1.772
*
* v = gammaLanczosSumExpGScaledf( 0.0 );
* // returns Infinity
*
* v = gammaLanczosSumExpGScaledf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
