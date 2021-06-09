/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name iterAbs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/abs}
*/
setReadOnly( ns, 'iterAbs', require( '@stdlib/math/iter/special/abs' ) );

/**
* @name iterAbs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/abs2}
*/
setReadOnly( ns, 'iterAbs2', require( '@stdlib/math/iter/special/abs2' ) );

/**
* @name iterAcos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/acos}
*/
setReadOnly( ns, 'iterAcos', require( '@stdlib/math/iter/special/acos' ) );

/**
* @name iterAcosh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/acosh}
*/
setReadOnly( ns, 'iterAcosh', require( '@stdlib/math/iter/special/acosh' ) );

/**
* @name iterAcot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/acot}
*/
setReadOnly( ns, 'iterAcot', require( '@stdlib/math/iter/special/acot' ) );

/**
* @name iterAcoth
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/acoth}
*/
setReadOnly( ns, 'iterAcoth', require( '@stdlib/math/iter/special/acoth' ) );

/**
* @name iterAcovercos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/acovercos}
*/
setReadOnly( ns, 'iterAcovercos', require( '@stdlib/math/iter/special/acovercos' ) );

/**
* @name iterAcoversin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/acoversin}
*/
setReadOnly( ns, 'iterAcoversin', require( '@stdlib/math/iter/special/acoversin' ) );

/**
* @name iterAhavercos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ahavercos}
*/
setReadOnly( ns, 'iterAhavercos', require( '@stdlib/math/iter/special/ahavercos' ) );

/**
* @name iterAhaversin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ahaversin}
*/
setReadOnly( ns, 'iterAhaversin', require( '@stdlib/math/iter/special/ahaversin' ) );

/**
* @name iterAsin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/asin}
*/
setReadOnly( ns, 'iterAsin', require( '@stdlib/math/iter/special/asin' ) );

/**
* @name iterAsinh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/asinh}
*/
setReadOnly( ns, 'iterAsinh', require( '@stdlib/math/iter/special/asinh' ) );

/**
* @name iterAtan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/atan}
*/
setReadOnly( ns, 'iterAtan', require( '@stdlib/math/iter/special/atan' ) );

/**
* @name iterAtan2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/atan2}
*/
setReadOnly( ns, 'iterAtan2', require( '@stdlib/math/iter/special/atan2' ) );

/**
* @name iterAtanh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/atanh}
*/
setReadOnly( ns, 'iterAtanh', require( '@stdlib/math/iter/special/atanh' ) );

/**
* @name iterAvercos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/avercos}
*/
setReadOnly( ns, 'iterAvercos', require( '@stdlib/math/iter/special/avercos' ) );

/**
* @name iterAversin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/aversin}
*/
setReadOnly( ns, 'iterAversin', require( '@stdlib/math/iter/special/aversin' ) );

/**
* @name iterBesselj0
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/besselj0}
*/
setReadOnly( ns, 'iterBesselj0', require( '@stdlib/math/iter/special/besselj0' ) );

/**
* @name iterBesselj1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/besselj1}
*/
setReadOnly( ns, 'iterBesselj1', require( '@stdlib/math/iter/special/besselj1' ) );

/**
* @name iterBessely0
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/bessely0}
*/
setReadOnly( ns, 'iterBessely0', require( '@stdlib/math/iter/special/bessely0' ) );

/**
* @name iterBessely1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/bessely1}
*/
setReadOnly( ns, 'iterBessely1', require( '@stdlib/math/iter/special/bessely1' ) );

/**
* @name iterBeta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/beta}
*/
setReadOnly( ns, 'iterBeta', require( '@stdlib/math/iter/special/beta' ) );

/**
* @name iterBetaln
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/betaln}
*/
setReadOnly( ns, 'iterBetaln', require( '@stdlib/math/iter/special/betaln' ) );

/**
* @name iterBinet
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/binet}
*/
setReadOnly( ns, 'iterBinet', require( '@stdlib/math/iter/special/binet' ) );

/**
* @name iterCbrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/cbrt}
*/
setReadOnly( ns, 'iterCbrt', require( '@stdlib/math/iter/special/cbrt' ) );

/**
* @name iterCeil
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ceil}
*/
setReadOnly( ns, 'iterCeil', require( '@stdlib/math/iter/special/ceil' ) );

/**
* @name iterCeil2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ceil2}
*/
setReadOnly( ns, 'iterCeil2', require( '@stdlib/math/iter/special/ceil2' ) );

/**
* @name iterCeil10
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ceil10}
*/
setReadOnly( ns, 'iterCeil10', require( '@stdlib/math/iter/special/ceil10' ) );

/**
* @name iterCos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/cos}
*/
setReadOnly( ns, 'iterCos', require( '@stdlib/math/iter/special/cos' ) );

/**
* @name iterCosh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/cosh}
*/
setReadOnly( ns, 'iterCosh', require( '@stdlib/math/iter/special/cosh' ) );

/**
* @name iterCosm1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/cosm1}
*/
setReadOnly( ns, 'iterCosm1', require( '@stdlib/math/iter/special/cosm1' ) );

/**
* @name iterCospi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/cospi}
*/
setReadOnly( ns, 'iterCospi', require( '@stdlib/math/iter/special/cospi' ) );

/**
* @name iterCovercos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/covercos}
*/
setReadOnly( ns, 'iterCovercos', require( '@stdlib/math/iter/special/covercos' ) );

/**
* @name iterCoversin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/coversin}
*/
setReadOnly( ns, 'iterCoversin', require( '@stdlib/math/iter/special/coversin' ) );

/**
* @name iterDeg2rad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/deg2rad}
*/
setReadOnly( ns, 'iterDeg2rad', require( '@stdlib/math/iter/special/deg2rad' ) );

/**
* @name iterDigamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/digamma}
*/
setReadOnly( ns, 'iterDigamma', require( '@stdlib/math/iter/special/digamma' ) );

/**
* @name iterDiracDelta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/dirac-delta}
*/
setReadOnly( ns, 'iterDiracDelta', require( '@stdlib/math/iter/special/dirac-delta' ) );

/**
* @name iterEta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/dirichlet-eta}
*/
setReadOnly( ns, 'iterEta', require( '@stdlib/math/iter/special/dirichlet-eta' ) );

/**
* @name iterEllipe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ellipe}
*/
setReadOnly( ns, 'iterEllipe', require( '@stdlib/math/iter/special/ellipe' ) );

/**
* @name iterEllipk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ellipk}
*/
setReadOnly( ns, 'iterEllipk', require( '@stdlib/math/iter/special/ellipk' ) );

/**
* @name iterErf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/erf}
*/
setReadOnly( ns, 'iterErf', require( '@stdlib/math/iter/special/erf' ) );

/**
* @name iterErfc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/erfc}
*/
setReadOnly( ns, 'iterErfc', require( '@stdlib/math/iter/special/erfc' ) );

/**
* @name iterErfcinv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/erfcinv}
*/
setReadOnly( ns, 'iterErfcinv', require( '@stdlib/math/iter/special/erfcinv' ) );

/**
* @name iterErfinv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/erfinv}
*/
setReadOnly( ns, 'iterErfinv', require( '@stdlib/math/iter/special/erfinv' ) );

/**
* @name iterExp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/exp}
*/
setReadOnly( ns, 'iterExp', require( '@stdlib/math/iter/special/exp' ) );

/**
* @name iterExp2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/exp2}
*/
setReadOnly( ns, 'iterExp2', require( '@stdlib/math/iter/special/exp2' ) );

/**
* @name iterExp10
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/exp10}
*/
setReadOnly( ns, 'iterExp10', require( '@stdlib/math/iter/special/exp10' ) );

/**
* @name iterExpit
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/expit}
*/
setReadOnly( ns, 'iterExpit', require( '@stdlib/math/iter/special/expit' ) );

/**
* @name iterExpm1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/expm1}
*/
setReadOnly( ns, 'iterExpm1', require( '@stdlib/math/iter/special/expm1' ) );

/**
* @name iterExpm1rel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/expm1rel}
*/
setReadOnly( ns, 'iterExpm1rel', require( '@stdlib/math/iter/special/expm1rel' ) );

/**
* @name iterFactorial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/factorial}
*/
setReadOnly( ns, 'iterFactorial', require( '@stdlib/math/iter/special/factorial' ) );

/**
* @name iterFactorialln
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/factorialln}
*/
setReadOnly( ns, 'iterFactorialln', require( '@stdlib/math/iter/special/factorialln' ) );

/**
* @name iterFloor
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/floor}
*/
setReadOnly( ns, 'iterFloor', require( '@stdlib/math/iter/special/floor' ) );

/**
* @name iterFloor2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/floor2}
*/
setReadOnly( ns, 'iterFloor2', require( '@stdlib/math/iter/special/floor2' ) );

/**
* @name iterFloor10
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/floor10}
*/
setReadOnly( ns, 'iterFloor10', require( '@stdlib/math/iter/special/floor10' ) );

/**
* @name iterFresnelc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/fresnelc}
*/
setReadOnly( ns, 'iterFresnelc', require( '@stdlib/math/iter/special/fresnelc' ) );

/**
* @name iterFresnels
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/fresnels}
*/
setReadOnly( ns, 'iterFresnels', require( '@stdlib/math/iter/special/fresnels' ) );

/**
* @name iterGamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/gamma}
*/
setReadOnly( ns, 'iterGamma', require( '@stdlib/math/iter/special/gamma' ) );

/**
* @name iterGamma1pm1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/gamma1pm1}
*/
setReadOnly( ns, 'iterGamma1pm1', require( '@stdlib/math/iter/special/gamma1pm1' ) );

/**
* @name iterGammaln
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/gammaln}
*/
setReadOnly( ns, 'iterGammaln', require( '@stdlib/math/iter/special/gammaln' ) );

/**
* @name iterHacovercos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/hacovercos}
*/
setReadOnly( ns, 'iterHacovercos', require( '@stdlib/math/iter/special/hacovercos' ) );

/**
* @name iterHacoversin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/hacoversin}
*/
setReadOnly( ns, 'iterHacoversin', require( '@stdlib/math/iter/special/hacoversin' ) );

/**
* @name iterHavercos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/havercos}
*/
setReadOnly( ns, 'iterHavercos', require( '@stdlib/math/iter/special/havercos' ) );

/**
* @name iterHaversin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/haversin}
*/
setReadOnly( ns, 'iterHaversin', require( '@stdlib/math/iter/special/haversin' ) );

/**
* @name iterInv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/inv}
*/
setReadOnly( ns, 'iterInv', require( '@stdlib/math/iter/special/inv' ) );

/**
* @name iterLn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ln}
*/
setReadOnly( ns, 'iterLn', require( '@stdlib/math/iter/special/ln' ) );

/**
* @name iterLog
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/log}
*/
setReadOnly( ns, 'iterLog', require( '@stdlib/math/iter/special/log' ) );

/**
* @name iterLog1mexp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/log1mexp}
*/
setReadOnly( ns, 'iterLog1mexp', require( '@stdlib/math/iter/special/log1mexp' ) );

/**
* @name iterLog1p
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/log1p}
*/
setReadOnly( ns, 'iterLog1p', require( '@stdlib/math/iter/special/log1p' ) );

/**
* @name iterLog1pexp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/log1pexp}
*/
setReadOnly( ns, 'iterLog1pexp', require( '@stdlib/math/iter/special/log1pexp' ) );

/**
* @name iterLog2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/log2}
*/
setReadOnly( ns, 'iterLog2', require( '@stdlib/math/iter/special/log2' ) );

/**
* @name iterLog10
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/log10}
*/
setReadOnly( ns, 'iterLog10', require( '@stdlib/math/iter/special/log10' ) );

/**
* @name iterLogit
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/logit}
*/
setReadOnly( ns, 'iterLogit', require( '@stdlib/math/iter/special/logit' ) );

/**
* @name iterPow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/pow}
*/
setReadOnly( ns, 'iterPow', require( '@stdlib/math/iter/special/pow' ) );

/**
* @name iterRad2deg
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/rad2deg}
*/
setReadOnly( ns, 'iterRad2deg', require( '@stdlib/math/iter/special/rad2deg' ) );

/**
* @name iterRamp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/ramp}
*/
setReadOnly( ns, 'iterRamp', require( '@stdlib/math/iter/special/ramp' ) );

/**
* @name iterZeta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/riemann-zeta}
*/
setReadOnly( ns, 'iterZeta', require( '@stdlib/math/iter/special/riemann-zeta' ) );

/**
* @name iterRound
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/round}
*/
setReadOnly( ns, 'iterRound', require( '@stdlib/math/iter/special/round' ) );

/**
* @name iterRound2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/round2}
*/
setReadOnly( ns, 'iterRound2', require( '@stdlib/math/iter/special/round2' ) );

/**
* @name iterRound10
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/round10}
*/
setReadOnly( ns, 'iterRound10', require( '@stdlib/math/iter/special/round10' ) );

/**
* @name iterRsqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/rsqrt}
*/
setReadOnly( ns, 'iterRsqrt', require( '@stdlib/math/iter/special/rsqrt' ) );

/**
* @name iterSignum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/signum}
*/
setReadOnly( ns, 'iterSignum', require( '@stdlib/math/iter/special/signum' ) );

/**
* @name iterSin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/sin}
*/
setReadOnly( ns, 'iterSin', require( '@stdlib/math/iter/special/sin' ) );

/**
* @name iterSinc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/sinc}
*/
setReadOnly( ns, 'iterSinc', require( '@stdlib/math/iter/special/sinc' ) );

/**
* @name iterSinh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/sinh}
*/
setReadOnly( ns, 'iterSinh', require( '@stdlib/math/iter/special/sinh' ) );

/**
* @name iterSinpi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/sinpi}
*/
setReadOnly( ns, 'iterSinpi', require( '@stdlib/math/iter/special/sinpi' ) );

/**
* @name iterSpence
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/spence}
*/
setReadOnly( ns, 'iterSpence', require( '@stdlib/math/iter/special/spence' ) );

/**
* @name iterSqrt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/sqrt}
*/
setReadOnly( ns, 'iterSqrt', require( '@stdlib/math/iter/special/sqrt' ) );

/**
* @name iterSqrt1pm1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/sqrt1pm1}
*/
setReadOnly( ns, 'iterSqrt1pm1', require( '@stdlib/math/iter/special/sqrt1pm1' ) );

/**
* @name iterTan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/tan}
*/
setReadOnly( ns, 'iterTan', require( '@stdlib/math/iter/special/tan' ) );

/**
* @name iterTanh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/tanh}
*/
setReadOnly( ns, 'iterTanh', require( '@stdlib/math/iter/special/tanh' ) );

/**
* @name iterTrigamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/trigamma}
*/
setReadOnly( ns, 'iterTrigamma', require( '@stdlib/math/iter/special/trigamma' ) );

/**
* @name iterTrunc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/trunc}
*/
setReadOnly( ns, 'iterTrunc', require( '@stdlib/math/iter/special/trunc' ) );

/**
* @name iterTrunc2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/trunc2}
*/
setReadOnly( ns, 'iterTrunc2', require( '@stdlib/math/iter/special/trunc2' ) );

/**
* @name iterTrunc10
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/trunc10}
*/
setReadOnly( ns, 'iterTrunc10', require( '@stdlib/math/iter/special/trunc10' ) );

/**
* @name iterVercos
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/vercos}
*/
setReadOnly( ns, 'iterVercos', require( '@stdlib/math/iter/special/vercos' ) );

/**
* @name iterVersin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/special/versin}
*/
setReadOnly( ns, 'iterVersin', require( '@stdlib/math/iter/special/versin' ) );


// EXPORTS //

module.exports = ns;
