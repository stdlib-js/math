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

/* eslint-disable max-lines */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace special
*/
var special = {};

/**
* @name abs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/abs}
*/
setReadOnly( special, 'abs', require( './../../../base/special/abs' ) );

/**
* @name abs2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/abs2}
*/
setReadOnly( special, 'abs2', require( './../../../base/special/abs2' ) );

/**
* @name abs2f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/abs2f}
*/
setReadOnly( special, 'abs2f', require( './../../../base/special/abs2f' ) );

/**
* @name absf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/absf}
*/
setReadOnly( special, 'absf', require( './../../../base/special/absf' ) );

/**
* @name absgammalnf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/absgammalnf}
*/
setReadOnly( special, 'absgammalnf', require( './../../../base/special/absgammalnf' ) );

/**
* @name acos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acos}
*/
setReadOnly( special, 'acos', require( './../../../base/special/acos' ) );

/**
* @name acosd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosd}
*/
setReadOnly( special, 'acosd', require( './../../../base/special/acosd' ) );

/**
* @name acosdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosdf}
*/
setReadOnly( special, 'acosdf', require( './../../../base/special/acosdf' ) );

/**
* @name acosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosf}
*/
setReadOnly( special, 'acosf', require( './../../../base/special/acosf' ) );

/**
* @name acosh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acosh}
*/
setReadOnly( special, 'acosh', require( './../../../base/special/acosh' ) );

/**
* @name acot
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acot}
*/
setReadOnly( special, 'acot', require( './../../../base/special/acot' ) );

/**
* @name acotd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acotd}
*/
setReadOnly( special, 'acotd', require( './../../../base/special/acotd' ) );

/**
* @name acotdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acotdf}
*/
setReadOnly( special, 'acotdf', require( './../../../base/special/acotdf' ) );

/**
* @name acotf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acotf}
*/
setReadOnly( special, 'acotf', require( './../../../base/special/acotf' ) );

/**
* @name acoth
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acoth}
*/
setReadOnly( special, 'acoth', require( './../../../base/special/acoth' ) );

/**
* @name acovercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acovercos}
*/
setReadOnly( special, 'acovercos', require( './../../../base/special/acovercos' ) );

/**
* @name acovercosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acovercosf}
*/
setReadOnly( special, 'acovercosf', require( './../../../base/special/acovercosf' ) );

/**
* @name acoversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acoversin}
*/
setReadOnly( special, 'acoversin', require( './../../../base/special/acoversin' ) );

/**
* @name acoversinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acoversinf}
*/
setReadOnly( special, 'acoversinf', require( './../../../base/special/acoversinf' ) );

/**
* @name acsc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acsc}
*/
setReadOnly( special, 'acsc', require( './../../../base/special/acsc' ) );

/**
* @name acscd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acscd}
*/
setReadOnly( special, 'acscd', require( './../../../base/special/acscd' ) );

/**
* @name acscdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acscdf}
*/
setReadOnly( special, 'acscdf', require( './../../../base/special/acscdf' ) );

/**
* @name acscf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acscf}
*/
setReadOnly( special, 'acscf', require( './../../../base/special/acscf' ) );

/**
* @name acsch
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/acsch}
*/
setReadOnly( special, 'acsch', require( './../../../base/special/acsch' ) );

/**
* @name ahavercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ahavercos}
*/
setReadOnly( special, 'ahavercos', require( './../../../base/special/ahavercos' ) );

/**
* @name ahavercosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ahavercosf}
*/
setReadOnly( special, 'ahavercosf', require( './../../../base/special/ahavercosf' ) );

/**
* @name ahaversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ahaversin}
*/
setReadOnly( special, 'ahaversin', require( './../../../base/special/ahaversin' ) );

/**
* @name ahaversinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ahaversinf}
*/
setReadOnly( special, 'ahaversinf', require( './../../../base/special/ahaversinf' ) );

/**
* @name asec
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asec}
*/
setReadOnly( special, 'asec', require( './../../../base/special/asec' ) );

/**
* @name asecd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asecd}
*/
setReadOnly( special, 'asecd', require( './../../../base/special/asecd' ) );

/**
* @name asecdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asecdf}
*/
setReadOnly( special, 'asecdf', require( './../../../base/special/asecdf' ) );

/**
* @name asecf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asecf}
*/
setReadOnly( special, 'asecf', require( './../../../base/special/asecf' ) );

/**
* @name asech
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asech}
*/
setReadOnly( special, 'asech', require( './../../../base/special/asech' ) );

/**
* @name asin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asin}
*/
setReadOnly( special, 'asin', require( './../../../base/special/asin' ) );

/**
* @name asind
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asind}
*/
setReadOnly( special, 'asind', require( './../../../base/special/asind' ) );

/**
* @name asindf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asindf}
*/
setReadOnly( special, 'asindf', require( './../../../base/special/asindf' ) );

/**
* @name asinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asinf}
*/
setReadOnly( special, 'asinf', require( './../../../base/special/asinf' ) );

/**
* @name asinh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/asinh}
*/
setReadOnly( special, 'asinh', require( './../../../base/special/asinh' ) );

/**
* @name atan
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atan}
*/
setReadOnly( special, 'atan', require( './../../../base/special/atan' ) );

/**
* @name atan2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atan2}
*/
setReadOnly( special, 'atan2', require( './../../../base/special/atan2' ) );

/**
* @name atan2d
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atan2d}
*/
setReadOnly( special, 'atan2d', require( './../../../base/special/atan2d' ) );

/**
* @name atan2f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atan2f}
*/
setReadOnly( special, 'atan2f', require( './../../../base/special/atan2f' ) );

/**
* @name atand
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atand}
*/
setReadOnly( special, 'atand', require( './../../../base/special/atand' ) );

/**
* @name atandf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atandf}
*/
setReadOnly( special, 'atandf', require( './../../../base/special/atandf' ) );

/**
* @name atanf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atanf}
*/
setReadOnly( special, 'atanf', require( './../../../base/special/atanf' ) );

/**
* @name atanh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/atanh}
*/
setReadOnly( special, 'atanh', require( './../../../base/special/atanh' ) );

/**
* @name avercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/avercos}
*/
setReadOnly( special, 'avercos', require( './../../../base/special/avercos' ) );

/**
* @name avercosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/avercosf}
*/
setReadOnly( special, 'avercosf', require( './../../../base/special/avercosf' ) );

/**
* @name aversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/aversin}
*/
setReadOnly( special, 'aversin', require( './../../../base/special/aversin' ) );

/**
* @name aversinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/aversinf}
*/
setReadOnly( special, 'aversinf', require( './../../../base/special/aversinf' ) );

/**
* @name bernoulli
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/bernoulli}
*/
setReadOnly( special, 'bernoulli', require( './../../../base/special/bernoulli' ) );

/**
* @name bernoullif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/bernoullif}
*/
setReadOnly( special, 'bernoullif', require( './../../../base/special/bernoullif' ) );

/**
* @name besselj0
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/besselj0}
*/
setReadOnly( special, 'besselj0', require( './../../../base/special/besselj0' ) );

/**
* @name besselj1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/besselj1}
*/
setReadOnly( special, 'besselj1', require( './../../../base/special/besselj1' ) );

/**
* @name bessely0
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/bessely0}
*/
setReadOnly( special, 'bessely0', require( './../../../base/special/bessely0' ) );

/**
* @name bessely1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/bessely1}
*/
setReadOnly( special, 'bessely1', require( './../../../base/special/bessely1' ) );

/**
* @name beta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/beta}
*/
setReadOnly( special, 'beta', require( './../../../base/special/beta' ) );

/**
* @name betainc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/betainc}
*/
setReadOnly( special, 'betainc', require( './../../../base/special/betainc' ) );

/**
* @name betaincinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/betaincinv}
*/
setReadOnly( special, 'betaincinv', require( './../../../base/special/betaincinv' ) );

/**
* @name betaln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/betaln}
*/
setReadOnly( special, 'betaln', require( './../../../base/special/betaln' ) );

/**
* @name binet
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/binet}
*/
setReadOnly( special, 'binet', require( './../../../base/special/binet' ) );

/**
* @name binomcoef
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/binomcoef}
*/
setReadOnly( special, 'binomcoef', require( './../../../base/special/binomcoef' ) );

/**
* @name binomcoeff
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/binomcoeff}
*/
setReadOnly( special, 'binomcoeff', require( './../../../base/special/binomcoeff' ) );

/**
* @name binomcoefln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/binomcoefln}
*/
setReadOnly( special, 'binomcoefln', require( './../../../base/special/binomcoefln' ) );

/**
* @name boxcox
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcox}
*/
setReadOnly( special, 'boxcox', require( './../../../base/special/boxcox' ) );

/**
* @name boxcox1p
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcox1p}
*/
setReadOnly( special, 'boxcox1p', require( './../../../base/special/boxcox1p' ) );

/**
* @name boxcox1pinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcox1pinv}
*/
setReadOnly( special, 'boxcox1pinv', require( './../../../base/special/boxcox1pinv' ) );

/**
* @name boxcoxinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/boxcoxinv}
*/
setReadOnly( special, 'boxcoxinv', require( './../../../base/special/boxcoxinv' ) );

/**
* @name cabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabs}
*/
setReadOnly( special, 'cabs', require( './../../../base/special/cabs' ) );

/**
* @name cabs2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabs2}
*/
setReadOnly( special, 'cabs2', require( './../../../base/special/cabs2' ) );

/**
* @name cabs2f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabs2f}
*/
setReadOnly( special, 'cabs2f', require( './../../../base/special/cabs2f' ) );

/**
* @name cabsf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cabsf}
*/
setReadOnly( special, 'cabsf', require( './../../../base/special/cabsf' ) );

/**
* @name cbrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cbrt}
*/
setReadOnly( special, 'cbrt', require( './../../../base/special/cbrt' ) );

/**
* @name cbrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cbrtf}
*/
setReadOnly( special, 'cbrtf', require( './../../../base/special/cbrtf' ) );

/**
* @name cceil
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cceil}
*/
setReadOnly( special, 'cceil', require( './../../../base/special/cceil' ) );

/**
* @name cceilf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cceilf}
*/
setReadOnly( special, 'cceilf', require( './../../../base/special/cceilf' ) );

/**
* @name cceiln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cceiln}
*/
setReadOnly( special, 'cceiln', require( './../../../base/special/cceiln' ) );

/**
* @name ccis
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ccis}
*/
setReadOnly( special, 'ccis', require( './../../../base/special/ccis' ) );

/**
* @name ceil
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceil}
*/
setReadOnly( special, 'ceil', require( './../../../base/special/ceil' ) );

/**
* @name ceil2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceil2}
*/
setReadOnly( special, 'ceil2', require( './../../../base/special/ceil2' ) );

/**
* @name ceil10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceil10}
*/
setReadOnly( special, 'ceil10', require( './../../../base/special/ceil10' ) );

/**
* @name ceilb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceilb}
*/
setReadOnly( special, 'ceilb', require( './../../../base/special/ceilb' ) );

/**
* @name ceilf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceilf}
*/
setReadOnly( special, 'ceilf', require( './../../../base/special/ceilf' ) );

/**
* @name ceiln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceiln}
*/
setReadOnly( special, 'ceiln', require( './../../../base/special/ceiln' ) );

/**
* @name ceilsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ceilsd}
*/
setReadOnly( special, 'ceilsd', require( './../../../base/special/ceilsd' ) );

/**
* @name cexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cexp}
*/
setReadOnly( special, 'cexp', require( './../../../base/special/cexp' ) );

/**
* @name cflipsign
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cflipsign}
*/
setReadOnly( special, 'cflipsign', require( './../../../base/special/cflipsign' ) );

/**
* @name cflipsignf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cflipsignf}
*/
setReadOnly( special, 'cflipsignf', require( './../../../base/special/cflipsignf' ) );

/**
* @name cfloor
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cfloor}
*/
setReadOnly( special, 'cfloor', require( './../../../base/special/cfloor' ) );

/**
* @name cfloorf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cfloorf}
*/
setReadOnly( special, 'cfloorf', require( './../../../base/special/cfloorf' ) );

/**
* @name cfloorn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cfloorn}
*/
setReadOnly( special, 'cfloorn', require( './../../../base/special/cfloorn' ) );

/**
* @name cinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cinv}
*/
setReadOnly( special, 'cinv', require( './../../../base/special/cinv' ) );

/**
* @name cinvf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cinvf}
*/
setReadOnly( special, 'cinvf', require( './../../../base/special/cinvf' ) );

/**
* @name clamp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/clamp}
*/
setReadOnly( special, 'clamp', require( './../../../base/special/clamp' ) );

/**
* @name clampf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/clampf}
*/
setReadOnly( special, 'clampf', require( './../../../base/special/clampf' ) );

/**
* @name copysign
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/copysign}
*/
setReadOnly( special, 'copysign', require( './../../../base/special/copysign' ) );

/**
* @name copysignf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/copysignf}
*/
setReadOnly( special, 'copysignf', require( './../../../base/special/copysignf' ) );

/**
* @name cos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cos}
*/
setReadOnly( special, 'cos', require( './../../../base/special/cos' ) );

/**
* @name cosd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosd}
*/
setReadOnly( special, 'cosd', require( './../../../base/special/cosd' ) );

/**
* @name cosdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosdf}
*/
setReadOnly( special, 'cosdf', require( './../../../base/special/cosdf' ) );

/**
* @name cosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosf}
*/
setReadOnly( special, 'cosf', require( './../../../base/special/cosf' ) );

/**
* @name cosh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosh}
*/
setReadOnly( special, 'cosh', require( './../../../base/special/cosh' ) );

/**
* @name cosm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosm1}
*/
setReadOnly( special, 'cosm1', require( './../../../base/special/cosm1' ) );

/**
* @name cosm1f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cosm1f}
*/
setReadOnly( special, 'cosm1f', require( './../../../base/special/cosm1f' ) );

/**
* @name cospi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cospi}
*/
setReadOnly( special, 'cospi', require( './../../../base/special/cospi' ) );

/**
* @name cospif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cospif}
*/
setReadOnly( special, 'cospif', require( './../../../base/special/cospif' ) );

/**
* @name cot
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cot}
*/
setReadOnly( special, 'cot', require( './../../../base/special/cot' ) );

/**
* @name cotd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cotd}
*/
setReadOnly( special, 'cotd', require( './../../../base/special/cotd' ) );

/**
* @name cotdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cotdf}
*/
setReadOnly( special, 'cotdf', require( './../../../base/special/cotdf' ) );

/**
* @name cotf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cotf}
*/
setReadOnly( special, 'cotf', require( './../../../base/special/cotf' ) );

/**
* @name coth
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/coth}
*/
setReadOnly( special, 'coth', require( './../../../base/special/coth' ) );

/**
* @name covercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/covercos}
*/
setReadOnly( special, 'covercos', require( './../../../base/special/covercos' ) );

/**
* @name covercosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/covercosf}
*/
setReadOnly( special, 'covercosf', require( './../../../base/special/covercosf' ) );

/**
* @name coversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/coversin}
*/
setReadOnly( special, 'coversin', require( './../../../base/special/coversin' ) );

/**
* @name coversinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/coversinf}
*/
setReadOnly( special, 'coversinf', require( './../../../base/special/coversinf' ) );

/**
* @name cphase
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cphase}
*/
setReadOnly( special, 'cphase', require( './../../../base/special/cphase' ) );

/**
* @name cphasef
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cphasef}
*/
setReadOnly( special, 'cphasef', require( './../../../base/special/cphasef' ) );

/**
* @name cpolar
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cpolar}
*/
setReadOnly( special, 'cpolar', require( './../../../base/special/cpolar' ) );

/**
* @name cpolarf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cpolarf}
*/
setReadOnly( special, 'cpolarf', require( './../../../base/special/cpolarf' ) );

/**
* @name cround
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cround}
*/
setReadOnly( special, 'cround', require( './../../../base/special/cround' ) );

/**
* @name croundf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/croundf}
*/
setReadOnly( special, 'croundf', require( './../../../base/special/croundf' ) );

/**
* @name croundn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/croundn}
*/
setReadOnly( special, 'croundn', require( './../../../base/special/croundn' ) );

/**
* @name csc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/csc}
*/
setReadOnly( special, 'csc', require( './../../../base/special/csc' ) );

/**
* @name cscd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cscd}
*/
setReadOnly( special, 'cscd', require( './../../../base/special/cscd' ) );

/**
* @name cscdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cscdf}
*/
setReadOnly( special, 'cscdf', require( './../../../base/special/cscdf' ) );

/**
* @name cscf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/cscf}
*/
setReadOnly( special, 'cscf', require( './../../../base/special/cscf' ) );

/**
* @name csch
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/csch}
*/
setReadOnly( special, 'csch', require( './../../../base/special/csch' ) );

/**
* @name csignum
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/csignum}
*/
setReadOnly( special, 'csignum', require( './../../../base/special/csignum' ) );

/**
* @name csignumf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/csignumf}
*/
setReadOnly( special, 'csignumf', require( './../../../base/special/csignumf' ) );

/**
* @name deg2rad
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/deg2rad}
*/
setReadOnly( special, 'deg2rad', require( './../../../base/special/deg2rad' ) );

/**
* @name deg2radf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/deg2radf}
*/
setReadOnly( special, 'deg2radf', require( './../../../base/special/deg2radf' ) );

/**
* @name digamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/digamma}
*/
setReadOnly( special, 'digamma', require( './../../../base/special/digamma' ) );

/**
* @name diracDelta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/dirac-delta}
*/
setReadOnly( special, 'diracDelta', require( './../../../base/special/dirac-delta' ) );

/**
* @name diracDeltaf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/dirac-deltaf}
*/
setReadOnly( special, 'diracDeltaf', require( './../../../base/special/dirac-deltaf' ) );

/**
* @name eta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/dirichlet-eta}
*/
setReadOnly( special, 'eta', require( './../../../base/special/dirichlet-eta' ) );

/**
* @name ellipe
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ellipe}
*/
setReadOnly( special, 'ellipe', require( './../../../base/special/ellipe' ) );

/**
* @name ellipj
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ellipj}
*/
setReadOnly( special, 'ellipj', require( './../../../base/special/ellipj' ) );

/**
* @name ellipk
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ellipk}
*/
setReadOnly( special, 'ellipk', require( './../../../base/special/ellipk' ) );

/**
* @name erf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erf}
*/
setReadOnly( special, 'erf', require( './../../../base/special/erf' ) );

/**
* @name erfc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfc}
*/
setReadOnly( special, 'erfc', require( './../../../base/special/erfc' ) );

/**
* @name erfcinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfcinv}
*/
setReadOnly( special, 'erfcinv', require( './../../../base/special/erfcinv' ) );

/**
* @name erfcx
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfcx}
*/
setReadOnly( special, 'erfcx', require( './../../../base/special/erfcx' ) );

/**
* @name erfinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/erfinv}
*/
setReadOnly( special, 'erfinv', require( './../../../base/special/erfinv' ) );

/**
* @name exp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/exp}
*/
setReadOnly( special, 'exp', require( './../../../base/special/exp' ) );

/**
* @name exp2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/exp2}
*/
setReadOnly( special, 'exp2', require( './../../../base/special/exp2' ) );

/**
* @name exp10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/exp10}
*/
setReadOnly( special, 'exp10', require( './../../../base/special/exp10' ) );

/**
* @name expit
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/expit}
*/
setReadOnly( special, 'expit', require( './../../../base/special/expit' ) );

/**
* @name expm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/expm1}
*/
setReadOnly( special, 'expm1', require( './../../../base/special/expm1' ) );

/**
* @name expm1rel
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/expm1rel}
*/
setReadOnly( special, 'expm1rel', require( './../../../base/special/expm1rel' ) );

/**
* @name factorial
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factorial}
*/
setReadOnly( special, 'factorial', require( './../../../base/special/factorial' ) );

/**
* @name factorial2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factorial2}
*/
setReadOnly( special, 'factorial2', require( './../../../base/special/factorial2' ) );

/**
* @name factorial2f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factorial2f}
*/
setReadOnly( special, 'factorial2f', require( './../../../base/special/factorial2f' ) );

/**
* @name factorialln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factorialln}
*/
setReadOnly( special, 'factorialln', require( './../../../base/special/factorialln' ) );

/**
* @name factoriallnf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/factoriallnf}
*/
setReadOnly( special, 'factoriallnf', require( './../../../base/special/factoriallnf' ) );

/**
* @name fallingFactorial
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/falling-factorial}
*/
setReadOnly( special, 'fallingFactorial', require( './../../../base/special/falling-factorial' ) );

/**
* @name fast
* @memberof special
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/base/special/fast}
*/
setReadOnly( special, 'fast', require( './../../../base/special/fast' ) );

/**
* @name fibonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fibonacci}
*/
setReadOnly( special, 'fibonacci', require( './../../../base/special/fibonacci' ) );

/**
* @name fibonacciIndex
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fibonacci-index}
*/
setReadOnly( special, 'fibonacciIndex', require( './../../../base/special/fibonacci-index' ) );

/**
* @name fibonacciIndexf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fibonacci-indexf}
*/
setReadOnly( special, 'fibonacciIndexf', require( './../../../base/special/fibonacci-indexf' ) );

/**
* @name fibonaccif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fibonaccif}
*/
setReadOnly( special, 'fibonaccif', require( './../../../base/special/fibonaccif' ) );

/**
* @name flipsign
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/flipsign}
*/
setReadOnly( special, 'flipsign', require( './../../../base/special/flipsign' ) );

/**
* @name flipsignf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/flipsignf}
*/
setReadOnly( special, 'flipsignf', require( './../../../base/special/flipsignf' ) );

/**
* @name floor
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floor}
*/
setReadOnly( special, 'floor', require( './../../../base/special/floor' ) );

/**
* @name floor2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floor2}
*/
setReadOnly( special, 'floor2', require( './../../../base/special/floor2' ) );

/**
* @name floor10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floor10}
*/
setReadOnly( special, 'floor10', require( './../../../base/special/floor10' ) );

/**
* @name floorb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorb}
*/
setReadOnly( special, 'floorb', require( './../../../base/special/floorb' ) );

/**
* @name floorf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorf}
*/
setReadOnly( special, 'floorf', require( './../../../base/special/floorf' ) );

/**
* @name floorn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorn}
*/
setReadOnly( special, 'floorn', require( './../../../base/special/floorn' ) );

/**
* @name floorsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/floorsd}
*/
setReadOnly( special, 'floorsd', require( './../../../base/special/floorsd' ) );

/**
* @name fmod
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fmod}
*/
setReadOnly( special, 'fmod', require( './../../../base/special/fmod' ) );

/**
* @name fmodf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fmodf}
*/
setReadOnly( special, 'fmodf', require( './../../../base/special/fmodf' ) );

/**
* @name fresnel
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fresnel}
*/
setReadOnly( special, 'fresnel', require( './../../../base/special/fresnel' ) );

/**
* @name fresnelc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fresnelc}
*/
setReadOnly( special, 'fresnelc', require( './../../../base/special/fresnelc' ) );

/**
* @name fresnels
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/fresnels}
*/
setReadOnly( special, 'fresnels', require( './../../../base/special/fresnels' ) );

/**
* @name frexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/frexp}
*/
setReadOnly( special, 'frexp', require( './../../../base/special/frexp' ) );

/**
* @name frexpf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/frexpf}
*/
setReadOnly( special, 'frexpf', require( './../../../base/special/frexpf' ) );

/**
* @name gamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma}
*/
setReadOnly( special, 'gamma', require( './../../../base/special/gamma' ) );

/**
* @name gammaDeltaRatio
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma-delta-ratio}
*/
setReadOnly( special, 'gammaDeltaRatio', require( './../../../base/special/gamma-delta-ratio' ) );

/**
* @name gammaLanczosSum
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma-lanczos-sum}
*/
setReadOnly( special, 'gammaLanczosSum', require( './../../../base/special/gamma-lanczos-sum' ) );

/**
* @name gammaLanczosSumExpGScaled
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled}
*/
setReadOnly( special, 'gammaLanczosSumExpGScaled', require( './../../../base/special/gamma-lanczos-sum-expg-scaled' ) );

/**
* @name gammaLanczosSumExpgScaledf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma-lanczos-sum-expg-scaledf}
*/
setReadOnly( special, 'gammaLanczosSumExpgScaledf', require( './../../../base/special/gamma-lanczos-sum-expg-scaledf' ) );

/**
* @name gamma1pm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gamma1pm1}
*/
setReadOnly( special, 'gamma1pm1', require( './../../../base/special/gamma1pm1' ) );

/**
* @name gammainc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammainc}
*/
setReadOnly( special, 'gammainc', require( './../../../base/special/gammainc' ) );

/**
* @name gammaincinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammaincinv}
*/
setReadOnly( special, 'gammaincinv', require( './../../../base/special/gammaincinv' ) );

/**
* @name gammaln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammaln}
*/
setReadOnly( special, 'gammaln', require( './../../../base/special/gammaln' ) );

/**
* @name gammasgn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammasgn}
*/
setReadOnly( special, 'gammasgn', require( './../../../base/special/gammasgn' ) );

/**
* @name gammasgnf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gammasgnf}
*/
setReadOnly( special, 'gammasgnf', require( './../../../base/special/gammasgnf' ) );

/**
* @name gcd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gcd}
*/
setReadOnly( special, 'gcd', require( './../../../base/special/gcd' ) );

/**
* @name gcdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/gcdf}
*/
setReadOnly( special, 'gcdf', require( './../../../base/special/gcdf' ) );

/**
* @name hacovercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hacovercos}
*/
setReadOnly( special, 'hacovercos', require( './../../../base/special/hacovercos' ) );

/**
* @name hacovercosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hacovercosf}
*/
setReadOnly( special, 'hacovercosf', require( './../../../base/special/hacovercosf' ) );

/**
* @name hacoversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hacoversin}
*/
setReadOnly( special, 'hacoversin', require( './../../../base/special/hacoversin' ) );

/**
* @name hacoversinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hacoversinf}
*/
setReadOnly( special, 'hacoversinf', require( './../../../base/special/hacoversinf' ) );

/**
* @name havercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/havercos}
*/
setReadOnly( special, 'havercos', require( './../../../base/special/havercos' ) );

/**
* @name havercosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/havercosf}
*/
setReadOnly( special, 'havercosf', require( './../../../base/special/havercosf' ) );

/**
* @name haversin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/haversin}
*/
setReadOnly( special, 'haversin', require( './../../../base/special/haversin' ) );

/**
* @name haversinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/haversinf}
*/
setReadOnly( special, 'haversinf', require( './../../../base/special/haversinf' ) );

/**
* @name heaviside
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/heaviside}
*/
setReadOnly( special, 'heaviside', require( './../../../base/special/heaviside' ) );

/**
* @name heavisidef
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/heavisidef}
*/
setReadOnly( special, 'heavisidef', require( './../../../base/special/heavisidef' ) );

/**
* @name hyp2f1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hyp2f1}
*/
setReadOnly( special, 'hyp2f1', require( './../../../base/special/hyp2f1' ) );

/**
* @name hypot
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hypot}
*/
setReadOnly( special, 'hypot', require( './../../../base/special/hypot' ) );

/**
* @name hypotf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/hypotf}
*/
setReadOnly( special, 'hypotf', require( './../../../base/special/hypotf' ) );

/**
* @name inv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/inv}
*/
setReadOnly( special, 'inv', require( './../../../base/special/inv' ) );

/**
* @name invf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/invf}
*/
setReadOnly( special, 'invf', require( './../../../base/special/invf' ) );

/**
* @name kernelBetainc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-betainc}
*/
setReadOnly( special, 'kernelBetainc', require( './../../../base/special/kernel-betainc' ) );

/**
* @name kernelBetaincinv
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-betaincinv}
*/
setReadOnly( special, 'kernelBetaincinv', require( './../../../base/special/kernel-betaincinv' ) );

/**
* @name kernelCos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-cos}
*/
setReadOnly( special, 'kernelCos', require( './../../../base/special/kernel-cos' ) );

/**
* @name kernelCosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-cosf}
*/
setReadOnly( special, 'kernelCosf', require( './../../../base/special/kernel-cosf' ) );

/**
* @name kernelLog1p
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-log1p}
*/
setReadOnly( special, 'kernelLog1p', require( './../../../base/special/kernel-log1p' ) );

/**
* @name kernelLog1pf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-log1pf}
*/
setReadOnly( special, 'kernelLog1pf', require( './../../../base/special/kernel-log1pf' ) );

/**
* @name kernelSin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-sin}
*/
setReadOnly( special, 'kernelSin', require( './../../../base/special/kernel-sin' ) );

/**
* @name kernelSincos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-sincos}
*/
setReadOnly( special, 'kernelSincos', require( './../../../base/special/kernel-sincos' ) );

/**
* @name kernelSincosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-sincosf}
*/
setReadOnly( special, 'kernelSincosf', require( './../../../base/special/kernel-sincosf' ) );

/**
* @name kernelSinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-sinf}
*/
setReadOnly( special, 'kernelSinf', require( './../../../base/special/kernel-sinf' ) );

/**
* @name kernelTan
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-tan}
*/
setReadOnly( special, 'kernelTan', require( './../../../base/special/kernel-tan' ) );

/**
* @name kernelTanf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kernel-tanf}
*/
setReadOnly( special, 'kernelTanf', require( './../../../base/special/kernel-tanf' ) );

/**
* @name kroneckerDelta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kronecker-delta}
*/
setReadOnly( special, 'kroneckerDelta', require( './../../../base/special/kronecker-delta' ) );

/**
* @name kroneckerDeltaf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/kronecker-deltaf}
*/
setReadOnly( special, 'kroneckerDeltaf', require( './../../../base/special/kronecker-deltaf' ) );

/**
* @name labs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/labs}
*/
setReadOnly( special, 'labs', require( './../../../base/special/labs' ) );

/**
* @name lcm
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/lcm}
*/
setReadOnly( special, 'lcm', require( './../../../base/special/lcm' ) );

/**
* @name lcmf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/lcmf}
*/
setReadOnly( special, 'lcmf', require( './../../../base/special/lcmf' ) );

/**
* @name ldexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ldexp}
*/
setReadOnly( special, 'ldexp', require( './../../../base/special/ldexp' ) );

/**
* @name ldexpf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ldexpf}
*/
setReadOnly( special, 'ldexpf', require( './../../../base/special/ldexpf' ) );

/**
* @name ln
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ln}
*/
setReadOnly( special, 'ln', require( './../../../base/special/ln' ) );

/**
* @name lnf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/lnf}
*/
setReadOnly( special, 'lnf', require( './../../../base/special/lnf' ) );

/**
* @name log
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log}
*/
setReadOnly( special, 'log', require( './../../../base/special/log' ) );

/**
* @name log1mexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1mexp}
*/
setReadOnly( special, 'log1mexp', require( './../../../base/special/log1mexp' ) );

/**
* @name log1p
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1p}
*/
setReadOnly( special, 'log1p', require( './../../../base/special/log1p' ) );

/**
* @name log1pexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1pexp}
*/
setReadOnly( special, 'log1pexp', require( './../../../base/special/log1pexp' ) );

/**
* @name log1pmx
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log1pmx}
*/
setReadOnly( special, 'log1pmx', require( './../../../base/special/log1pmx' ) );

/**
* @name log2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log2}
*/
setReadOnly( special, 'log2', require( './../../../base/special/log2' ) );

/**
* @name log10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/log10}
*/
setReadOnly( special, 'log10', require( './../../../base/special/log10' ) );

/**
* @name logaddexp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/logaddexp}
*/
setReadOnly( special, 'logaddexp', require( './../../../base/special/logaddexp' ) );

/**
* @name logf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/logf}
*/
setReadOnly( special, 'logf', require( './../../../base/special/logf' ) );

/**
* @name logit
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/logit}
*/
setReadOnly( special, 'logit', require( './../../../base/special/logit' ) );

/**
* @name logitf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/logitf}
*/
setReadOnly( special, 'logitf', require( './../../../base/special/logitf' ) );

/**
* @name lucas
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/lucas}
*/
setReadOnly( special, 'lucas', require( './../../../base/special/lucas' ) );

/**
* @name lucasf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/lucasf}
*/
setReadOnly( special, 'lucasf', require( './../../../base/special/lucasf' ) );

/**
* @name max
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/max}
*/
setReadOnly( special, 'max', require( './../../../base/special/max' ) );

/**
* @name maxabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxabs}
*/
setReadOnly( special, 'maxabs', require( './../../../base/special/maxabs' ) );

/**
* @name maxabsf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxabsf}
*/
setReadOnly( special, 'maxabsf', require( './../../../base/special/maxabsf' ) );

/**
* @name maxabsn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxabsn}
*/
setReadOnly( special, 'maxabsn', require( './../../../base/special/maxabsn' ) );

/**
* @name maxf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxf}
*/
setReadOnly( special, 'maxf', require( './../../../base/special/maxf' ) );

/**
* @name maxn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/maxn}
*/
setReadOnly( special, 'maxn', require( './../../../base/special/maxn' ) );

/**
* @name min
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/min}
*/
setReadOnly( special, 'min', require( './../../../base/special/min' ) );

/**
* @name minabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minabs}
*/
setReadOnly( special, 'minabs', require( './../../../base/special/minabs' ) );

/**
* @name minabsf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minabsf}
*/
setReadOnly( special, 'minabsf', require( './../../../base/special/minabsf' ) );

/**
* @name minabsn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minabsn}
*/
setReadOnly( special, 'minabsn', require( './../../../base/special/minabsn' ) );

/**
* @name minf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minf}
*/
setReadOnly( special, 'minf', require( './../../../base/special/minf' ) );

/**
* @name minmax
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmax}
*/
setReadOnly( special, 'minmax', require( './../../../base/special/minmax' ) );

/**
* @name minmaxabs
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxabs}
*/
setReadOnly( special, 'minmaxabs', require( './../../../base/special/minmaxabs' ) );

/**
* @name minmaxabsf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxabsf}
*/
setReadOnly( special, 'minmaxabsf', require( './../../../base/special/minmaxabsf' ) );

/**
* @name minmaxabsn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxabsn}
*/
setReadOnly( special, 'minmaxabsn', require( './../../../base/special/minmaxabsn' ) );

/**
* @name minmaxf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxf}
*/
setReadOnly( special, 'minmaxf', require( './../../../base/special/minmaxf' ) );

/**
* @name minmaxn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minmaxn}
*/
setReadOnly( special, 'minmaxn', require( './../../../base/special/minmaxn' ) );

/**
* @name minn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/minn}
*/
setReadOnly( special, 'minn', require( './../../../base/special/minn' ) );

/**
* @name modf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/modf}
*/
setReadOnly( special, 'modf', require( './../../../base/special/modf' ) );

/**
* @name modff
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/modff}
*/
setReadOnly( special, 'modff', require( './../../../base/special/modff' ) );

/**
* @name nanmax
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/nanmax}
*/
setReadOnly( special, 'nanmax', require( './../../../base/special/nanmax' ) );

/**
* @name nanmaxf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/nanmaxf}
*/
setReadOnly( special, 'nanmaxf', require( './../../../base/special/nanmaxf' ) );

/**
* @name nanmin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/nanmin}
*/
setReadOnly( special, 'nanmin', require( './../../../base/special/nanmin' ) );

/**
* @name nanminf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/nanminf}
*/
setReadOnly( special, 'nanminf', require( './../../../base/special/nanminf' ) );

/**
* @name negafibonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/negafibonacci}
*/
setReadOnly( special, 'negafibonacci', require( './../../../base/special/negafibonacci' ) );

/**
* @name negafibonaccif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/negafibonaccif}
*/
setReadOnly( special, 'negafibonaccif', require( './../../../base/special/negafibonaccif' ) );

/**
* @name negalucas
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/negalucas}
*/
setReadOnly( special, 'negalucas', require( './../../../base/special/negalucas' ) );

/**
* @name negalucasf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/negalucasf}
*/
setReadOnly( special, 'negalucasf', require( './../../../base/special/negalucasf' ) );

/**
* @name nonfibonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/nonfibonacci}
*/
setReadOnly( special, 'nonfibonacci', require( './../../../base/special/nonfibonacci' ) );

/**
* @name nonfibonaccif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/nonfibonaccif}
*/
setReadOnly( special, 'nonfibonaccif', require( './../../../base/special/nonfibonaccif' ) );

/**
* @name pdiff
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/pdiff}
*/
setReadOnly( special, 'pdiff', require( './../../../base/special/pdiff' ) );

/**
* @name pdifff
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/pdifff}
*/
setReadOnly( special, 'pdifff', require( './../../../base/special/pdifff' ) );

/**
* @name polygamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/polygamma}
*/
setReadOnly( special, 'polygamma', require( './../../../base/special/polygamma' ) );

/**
* @name pow
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/pow}
*/
setReadOnly( special, 'pow', require( './../../../base/special/pow' ) );

/**
* @name powm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/powm1}
*/
setReadOnly( special, 'powm1', require( './../../../base/special/powm1' ) );

/**
* @name rad2deg
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rad2deg}
*/
setReadOnly( special, 'rad2deg', require( './../../../base/special/rad2deg' ) );

/**
* @name rad2degf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rad2degf}
*/
setReadOnly( special, 'rad2degf', require( './../../../base/special/rad2degf' ) );

/**
* @name ramp
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/ramp}
*/
setReadOnly( special, 'ramp', require( './../../../base/special/ramp' ) );

/**
* @name rampf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rampf}
*/
setReadOnly( special, 'rampf', require( './../../../base/special/rampf' ) );

/**
* @name rcbrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rcbrt}
*/
setReadOnly( special, 'rcbrt', require( './../../../base/special/rcbrt' ) );

/**
* @name rcbrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rcbrtf}
*/
setReadOnly( special, 'rcbrtf', require( './../../../base/special/rcbrtf' ) );

/**
* @name rempio2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rempio2}
*/
setReadOnly( special, 'rempio2', require( './../../../base/special/rempio2' ) );

/**
* @name rempio2f
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rempio2f}
*/
setReadOnly( special, 'rempio2f', require( './../../../base/special/rempio2f' ) );

/**
* @name zeta
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/riemann-zeta}
*/
setReadOnly( special, 'zeta', require( './../../../base/special/riemann-zeta' ) );

/**
* @name risingFactorial
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rising-factorial}
*/
setReadOnly( special, 'risingFactorial', require( './../../../base/special/rising-factorial' ) );

/**
* @name round
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/round}
*/
setReadOnly( special, 'round', require( './../../../base/special/round' ) );

/**
* @name roundNearestEven
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/round-nearest-even}
*/
setReadOnly( special, 'roundNearestEven', require( './../../../base/special/round-nearest-even' ) );

/**
* @name round2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/round2}
*/
setReadOnly( special, 'round2', require( './../../../base/special/round2' ) );

/**
* @name round10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/round10}
*/
setReadOnly( special, 'round10', require( './../../../base/special/round10' ) );

/**
* @name roundb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/roundb}
*/
setReadOnly( special, 'roundb', require( './../../../base/special/roundb' ) );

/**
* @name roundf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/roundf}
*/
setReadOnly( special, 'roundf', require( './../../../base/special/roundf' ) );

/**
* @name roundn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/roundn}
*/
setReadOnly( special, 'roundn', require( './../../../base/special/roundn' ) );

/**
* @name roundsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/roundsd}
*/
setReadOnly( special, 'roundsd', require( './../../../base/special/roundsd' ) );

/**
* @name rsqrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rsqrt}
*/
setReadOnly( special, 'rsqrt', require( './../../../base/special/rsqrt' ) );

/**
* @name rsqrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/rsqrtf}
*/
setReadOnly( special, 'rsqrtf', require( './../../../base/special/rsqrtf' ) );

/**
* @name sec
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sec}
*/
setReadOnly( special, 'sec', require( './../../../base/special/sec' ) );

/**
* @name secd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/secd}
*/
setReadOnly( special, 'secd', require( './../../../base/special/secd' ) );

/**
* @name secdf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/secdf}
*/
setReadOnly( special, 'secdf', require( './../../../base/special/secdf' ) );

/**
* @name secf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/secf}
*/
setReadOnly( special, 'secf', require( './../../../base/special/secf' ) );

/**
* @name sech
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sech}
*/
setReadOnly( special, 'sech', require( './../../../base/special/sech' ) );

/**
* @name sici
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sici}
*/
setReadOnly( special, 'sici', require( './../../../base/special/sici' ) );

/**
* @name signum
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/signum}
*/
setReadOnly( special, 'signum', require( './../../../base/special/signum' ) );

/**
* @name signumf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/signumf}
*/
setReadOnly( special, 'signumf', require( './../../../base/special/signumf' ) );

/**
* @name sin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sin}
*/
setReadOnly( special, 'sin', require( './../../../base/special/sin' ) );

/**
* @name sinc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinc}
*/
setReadOnly( special, 'sinc', require( './../../../base/special/sinc' ) );

/**
* @name sincf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sincf}
*/
setReadOnly( special, 'sincf', require( './../../../base/special/sincf' ) );

/**
* @name sincos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sincos}
*/
setReadOnly( special, 'sincos', require( './../../../base/special/sincos' ) );

/**
* @name sincosd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sincosd}
*/
setReadOnly( special, 'sincosd', require( './../../../base/special/sincosd' ) );

/**
* @name sincosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sincosf}
*/
setReadOnly( special, 'sincosf', require( './../../../base/special/sincosf' ) );

/**
* @name sincospi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sincospi}
*/
setReadOnly( special, 'sincospi', require( './../../../base/special/sincospi' ) );

/**
* @name sind
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sind}
*/
setReadOnly( special, 'sind', require( './../../../base/special/sind' ) );

/**
* @name sindf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sindf}
*/
setReadOnly( special, 'sindf', require( './../../../base/special/sindf' ) );

/**
* @name sinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinf}
*/
setReadOnly( special, 'sinf', require( './../../../base/special/sinf' ) );

/**
* @name sinh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinh}
*/
setReadOnly( special, 'sinh', require( './../../../base/special/sinh' ) );

/**
* @name sinpi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinpi}
*/
setReadOnly( special, 'sinpi', require( './../../../base/special/sinpi' ) );

/**
* @name sinpif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sinpif}
*/
setReadOnly( special, 'sinpif', require( './../../../base/special/sinpif' ) );

/**
* @name spence
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/spence}
*/
setReadOnly( special, 'spence', require( './../../../base/special/spence' ) );

/**
* @name spencef
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/spencef}
*/
setReadOnly( special, 'spencef', require( './../../../base/special/spencef' ) );

/**
* @name sqrt
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrt}
*/
setReadOnly( special, 'sqrt', require( './../../../base/special/sqrt' ) );

/**
* @name sqrt1pm1
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrt1pm1}
*/
setReadOnly( special, 'sqrt1pm1', require( './../../../base/special/sqrt1pm1' ) );

/**
* @name sqrtf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrtf}
*/
setReadOnly( special, 'sqrtf', require( './../../../base/special/sqrtf' ) );

/**
* @name sqrtpi
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrtpi}
*/
setReadOnly( special, 'sqrtpi', require( './../../../base/special/sqrtpi' ) );

/**
* @name sqrtpif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/sqrtpif}
*/
setReadOnly( special, 'sqrtpif', require( './../../../base/special/sqrtpif' ) );

/**
* @name tan
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tan}
*/
setReadOnly( special, 'tan', require( './../../../base/special/tan' ) );

/**
* @name tand
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tand}
*/
setReadOnly( special, 'tand', require( './../../../base/special/tand' ) );

/**
* @name tandf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tandf}
*/
setReadOnly( special, 'tandf', require( './../../../base/special/tandf' ) );

/**
* @name tanf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tanf}
*/
setReadOnly( special, 'tanf', require( './../../../base/special/tanf' ) );

/**
* @name tanh
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tanh}
*/
setReadOnly( special, 'tanh', require( './../../../base/special/tanh' ) );

/**
* @name tribonacci
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tribonacci}
*/
setReadOnly( special, 'tribonacci', require( './../../../base/special/tribonacci' ) );

/**
* @name tribonaccif
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/tribonaccif}
*/
setReadOnly( special, 'tribonaccif', require( './../../../base/special/tribonaccif' ) );

/**
* @name trigamma
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trigamma}
*/
setReadOnly( special, 'trigamma', require( './../../../base/special/trigamma' ) );

/**
* @name trigammaf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trigammaf}
*/
setReadOnly( special, 'trigammaf', require( './../../../base/special/trigammaf' ) );

/**
* @name trunc
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trunc}
*/
setReadOnly( special, 'trunc', require( './../../../base/special/trunc' ) );

/**
* @name trunc2
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trunc2}
*/
setReadOnly( special, 'trunc2', require( './../../../base/special/trunc2' ) );

/**
* @name trunc10
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/trunc10}
*/
setReadOnly( special, 'trunc10', require( './../../../base/special/trunc10' ) );

/**
* @name truncb
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncb}
*/
setReadOnly( special, 'truncb', require( './../../../base/special/truncb' ) );

/**
* @name truncf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncf}
*/
setReadOnly( special, 'truncf', require( './../../../base/special/truncf' ) );

/**
* @name truncn
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncn}
*/
setReadOnly( special, 'truncn', require( './../../../base/special/truncn' ) );

/**
* @name truncsd
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/truncsd}
*/
setReadOnly( special, 'truncsd', require( './../../../base/special/truncsd' ) );

/**
* @name vercos
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/vercos}
*/
setReadOnly( special, 'vercos', require( './../../../base/special/vercos' ) );

/**
* @name vercosf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/vercosf}
*/
setReadOnly( special, 'vercosf', require( './../../../base/special/vercosf' ) );

/**
* @name versin
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/versin}
*/
setReadOnly( special, 'versin', require( './../../../base/special/versin' ) );

/**
* @name versinf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/versinf}
*/
setReadOnly( special, 'versinf', require( './../../../base/special/versinf' ) );

/**
* @name wrap
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/wrap}
*/
setReadOnly( special, 'wrap', require( './../../../base/special/wrap' ) );

/**
* @name wrapf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/wrapf}
*/
setReadOnly( special, 'wrapf', require( './../../../base/special/wrapf' ) );

/**
* @name xlog1py
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/xlog1py}
*/
setReadOnly( special, 'xlog1py', require( './../../../base/special/xlog1py' ) );

/**
* @name xlogy
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/xlogy}
*/
setReadOnly( special, 'xlogy', require( './../../../base/special/xlogy' ) );

/**
* @name xlogyf
* @memberof special
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/special/xlogyf}
*/
setReadOnly( special, 'xlogyf', require( './../../../base/special/xlogyf' ) );


// EXPORTS //

module.exports = special;
