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

import iterAbs = require( './../../../../iter/special/abs' );
import iterAbs2 = require( './../../../../iter/special/abs2' );
import iterAcos = require( './../../../../iter/special/acos' );
import iterAcosh = require( './../../../../iter/special/acosh' );
import iterAcot = require( './../../../../iter/special/acot' );
import iterAcoth = require( './../../../../iter/special/acoth' );
import iterAcovercos = require( './../../../../iter/special/acovercos' );
import iterAcoversin = require( './../../../../iter/special/acoversin' );
import iterAhavercos = require( './../../../../iter/special/ahavercos' );
import iterAhaversin = require( './../../../../iter/special/ahaversin' );
import iterAsin = require( './../../../../iter/special/asin' );
import iterAsinh = require( './../../../../iter/special/asinh' );
import iterAtan = require( './../../../../iter/special/atan' );
import iterAtan2 = require( './../../../../iter/special/atan2' );
import iterAtanh = require( './../../../../iter/special/atanh' );
import iterAvercos = require( './../../../../iter/special/avercos' );
import iterAversin = require( './../../../../iter/special/aversin' );
import iterBesselj0 = require( './../../../../iter/special/besselj0' );
import iterBesselj1 = require( './../../../../iter/special/besselj1' );
import iterBessely0 = require( './../../../../iter/special/bessely0' );
import iterBessely1 = require( './../../../../iter/special/bessely1' );
import iterBeta = require( './../../../../iter/special/beta' );
import iterBetaln = require( './../../../../iter/special/betaln' );
import iterBinet = require( './../../../../iter/special/binet' );
import iterCbrt = require( './../../../../iter/special/cbrt' );
import iterCeil = require( './../../../../iter/special/ceil' );
import iterCeil2 = require( './../../../../iter/special/ceil2' );
import iterCeil10 = require( './../../../../iter/special/ceil10' );
import iterCos = require( './../../../../iter/special/cos' );
import iterCosh = require( './../../../../iter/special/cosh' );
import iterCosm1 = require( './../../../../iter/special/cosm1' );
import iterCospi = require( './../../../../iter/special/cospi' );
import iterCovercos = require( './../../../../iter/special/covercos' );
import iterCoversin = require( './../../../../iter/special/coversin' );
import iterDeg2rad = require( './../../../../iter/special/deg2rad' );
import iterDigamma = require( './../../../../iter/special/digamma' );
import iterDiracDelta = require( './../../../../iter/special/dirac-delta' );
import iterEta = require( './../../../../iter/special/dirichlet-eta' );
import iterEllipe = require( './../../../../iter/special/ellipe' );
import iterEllipk = require( './../../../../iter/special/ellipk' );
import iterErf = require( './../../../../iter/special/erf' );
import iterErfc = require( './../../../../iter/special/erfc' );
import iterErfcinv = require( './../../../../iter/special/erfcinv' );
import iterErfinv = require( './../../../../iter/special/erfinv' );
import iterExp = require( './../../../../iter/special/exp' );
import iterExp2 = require( './../../../../iter/special/exp2' );
import iterExp10 = require( './../../../../iter/special/exp10' );
import iterExpit = require( './../../../../iter/special/expit' );
import iterExpm1 = require( './../../../../iter/special/expm1' );
import iterExpm1rel = require( './../../../../iter/special/expm1rel' );
import iterFactorial = require( './../../../../iter/special/factorial' );
import iterFactorialln = require( './../../../../iter/special/factorialln' );
import iterFloor = require( './../../../../iter/special/floor' );
import iterFloor2 = require( './../../../../iter/special/floor2' );
import iterFloor10 = require( './../../../../iter/special/floor10' );
import iterFresnelc = require( './../../../../iter/special/fresnelc' );
import iterFresnels = require( './../../../../iter/special/fresnels' );
import iterGamma = require( './../../../../iter/special/gamma' );
import iterGamma1pm1 = require( './../../../../iter/special/gamma1pm1' );
import iterGammaln = require( './../../../../iter/special/gammaln' );
import iterHacovercos = require( './../../../../iter/special/hacovercos' );
import iterHacoversin = require( './../../../../iter/special/hacoversin' );
import iterHavercos = require( './../../../../iter/special/havercos' );
import iterHaversin = require( './../../../../iter/special/haversin' );
import iterInv = require( './../../../../iter/special/inv' );
import iterLn = require( './../../../../iter/special/ln' );
import iterLog = require( './../../../../iter/special/log' );
import iterLog1mexp = require( './../../../../iter/special/log1mexp' );
import iterLog1p = require( './../../../../iter/special/log1p' );
import iterLog1pexp = require( './../../../../iter/special/log1pexp' );
import iterLog2 = require( './../../../../iter/special/log2' );
import iterLog10 = require( './../../../../iter/special/log10' );
import iterLogit = require( './../../../../iter/special/logit' );
import iterPow = require( './../../../../iter/special/pow' );
import iterRad2deg = require( './../../../../iter/special/rad2deg' );
import iterRamp = require( './../../../../iter/special/ramp' );
import iterZeta = require( './../../../../iter/special/riemann-zeta' );
import iterRound = require( './../../../../iter/special/round' );
import iterRound2 = require( './../../../../iter/special/round2' );
import iterRound10 = require( './../../../../iter/special/round10' );
import iterRsqrt = require( './../../../../iter/special/rsqrt' );
import iterSignum = require( './../../../../iter/special/signum' );
import iterSin = require( './../../../../iter/special/sin' );
import iterSinc = require( './../../../../iter/special/sinc' );
import iterSinh = require( './../../../../iter/special/sinh' );
import iterSinpi = require( './../../../../iter/special/sinpi' );
import iterSpence = require( './../../../../iter/special/spence' );
import iterSqrt = require( './../../../../iter/special/sqrt' );
import iterSqrt1pm1 = require( './../../../../iter/special/sqrt1pm1' );
import iterTan = require( './../../../../iter/special/tan' );
import iterTanh = require( './../../../../iter/special/tanh' );
import iterTrigamma = require( './../../../../iter/special/trigamma' );
import iterTrunc = require( './../../../../iter/special/trunc' );
import iterTrunc2 = require( './../../../../iter/special/trunc2' );
import iterTrunc10 = require( './../../../../iter/special/trunc10' );
import iterVercos = require( './../../../../iter/special/vercos' );
import iterVersin = require( './../../../../iter/special/versin' );

/**
* Interface describing the `special` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator which iteratively computes the absolute value.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterAbs( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAbs: typeof iterAbs;

	/**
	* Returns an iterator which iteratively computes the squared absolute value.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterAbs2( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAbs2: typeof iterAbs2;

	/**
	* Returns an iterator which iteratively computes the arccosine.
	*
	* ## Notes
	*
	* -   The domain of arccosine is restricted to `[-1,1]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAcos( uniform( -1.0, 1.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAcos: typeof iterAcos;

	/**
	* Returns an iterator which iteratively computes the hyperbolic arccosine.
	*
	* ## Notes
	*
	* -   The domain of hyperbolic arccosine is restricted to `[1,+infinity)`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAcosh( uniform( 1.0, 10.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAcosh: typeof iterAcosh;

	/**
	* Returns an iterator which iteratively computes the inverse cotangent.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAcot( uniform( -5.0, 5.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAcot: typeof iterAcot;

	/**
	* Returns an iterator which iteratively computes the inverse hyperbolic cotangent.
	*
	* ## Notes
	*
	* -   The domain of inverse hyperbolic cotangent is restricted to `(-inf,-1]` and `[1,inf)`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAcoth( uniform( 1.0, 10.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAcoth: typeof iterAcoth;

	/**
	* Returns an iterator which iteratively computes the inverse coversed cosine.
	*
	* ## Notes
	*
	* -   The domain of inverse coversed cosine is restricted to `[-2,0]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAcovercos( uniform( -2.0, 0.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAcovercos: typeof iterAcovercos;

	/**
	* Returns an iterator which iteratively computes the inverse coversed sine.
	*
	* ## Notes
	*
	* -   The domain of inverse coversed sine is restricted to `[0,2]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAcoversin( uniform( 0.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAcoversin: typeof iterAcoversin;

	/**
	* Returns an iterator which iteratively computes the inverse half-value versed cosine.
	*
	* ## Notes
	*
	* -   The domain of inverse half-value versed cosine is restricted to `[0,1]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAhavercos( uniform( 0.0, 1.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAhavercos: typeof iterAhavercos;

	/**
	* Returns an iterator which iteratively computes the inverse half-value versed sin.
	*
	* ## Notes
	*
	* -   The domain of inverse half-value versed sin is restricted to `[0,1]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAhaversin( uniform( 0.0, 1.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAhaversin: typeof iterAhaversin;

	/**
	* Returns an iterator which iteratively computes the arcsine.
	*
	* ## Notes
	*
	* -   The domain of arcsine is restricted to `[-1,1]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAsin( uniform( -1.0, 1.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAsin: typeof iterAsin;

	/**
	* Returns an iterator which iteratively computes the hyperbolic arcsine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAsinh( uniform( -2.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAsinh: typeof iterAsinh;

	/**
	* Returns an iterator which iteratively computes the arctangent.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAtan( uniform( -2.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAtan: typeof iterAtan;

	/**
	* Returns an iterator which iteratively computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
	*
	* ## Notes
	*
	* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
	* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param y - input iterator
	* @param x - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAtan2( uniform( -2.0, 2.0 ), uniform( -2.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAtan2: typeof iterAtan2;

	/**
	* Returns an iterator which iteratively computes the hyperbolic arctangent.
	*
	* ## Notes
	*
	* -   The domain of hyperbolic arctangent is restricted to `[-1,1]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAtanh( uniform( -1.0, 1.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAtanh: typeof iterAtanh;

	/**
	* Returns an iterator which iteratively computes the inverse versed cosine.
	*
	* ## Notes
	*
	* -   The domain of inverse versed cosine is restricted to `[-2,0]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAvercos( uniform( -2.0, 0.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAvercos: typeof iterAvercos;

	/**
	* Returns an iterator which iteratively computes the inverse versed sine.
	*
	* ## Notes
	*
	* -   The domain of inverse versed sine is restricted to `[0,2]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterAversin( uniform( 0.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterAversin: typeof iterAversin;

	/**
	* Returns an iterator which iteratively evaluates the Bessel function of the first kind of order zero.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterBesselj0( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBesselj0: typeof iterBesselj0;

	/**
	* Returns an iterator which iteratively evaluates the Bessel function of the first kind of order one.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterBesselj1( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBesselj1: typeof iterBesselj1;

	/**
	* Returns an iterator which iteratively evaluates the Bessel function of the second kind of order zero.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterBessely0( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBessely0: typeof iterBessely0;

	/**
	* Returns an iterator which iteratively evaluates the Bessel function of the second kind of order one.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterBessely1( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBessely1: typeof iterBessely1;

	/**
	* Returns an iterator which iteratively evaluates the beta function.
	*
	* ## Notes
	*
	* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
	* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param x - input iterator
	* @param y - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterBeta( uniform( 0.0, 2.0 ), uniform( 0.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBeta: typeof iterBeta;

	/**
	* Returns an iterator which iteratively evaluates the natural logarithm of the beta function.
	*
	* ## Notes
	*
	* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
	* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param x - input iterator
	* @param y - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterBetaln( uniform( 0.0, 2.0 ), uniform( 0.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBetaln: typeof iterBetaln;

	/**
	* Returns an iterator which iteratively evaluates Binet's formula extended to real numbers.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterBinet( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterBinet: typeof iterBinet;

	/**
	* Returns an iterator which iteratively computes the cube root.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterCbrt( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCbrt: typeof iterCbrt;

	/**
	* Returns an iterator which rounds each iterated value toward positive infinity.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterCeil( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCeil: typeof iterCeil;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of two toward positive infinity.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterCeil2( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCeil2: typeof iterCeil2;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of 10 toward positive infinity.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterCeil10( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCeil10: typeof iterCeil10;

	/**
	* Returns an iterator which iteratively computes the cosine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterCos( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCos: typeof iterCos;

	/**
	* Returns an iterator which iteratively computes the hyperbolic cosine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterCosh( uniform( -5.0, 5.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCosh: typeof iterCosh;

	/**
	* Returns an iterator which iteratively computes `cos(x) - 1`.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterCosm1( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCosm1: typeof iterCosm1;

	/**
	* Returns an iterator which computes the cosine of each iterated value times π.
	*
	* ## Notes
	*
	* -   Computes `cos(πx)` more accurately than `cos(pi*x)`, especially for large `x`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterCospi( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCospi: typeof iterCospi;

	/**
	* Returns an iterator which iteratively computes the coversed cosine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterCovercos( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCovercos: typeof iterCovercos;

	/**
	* Returns an iterator which iteratively computes the coversed sine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterCoversin( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterCoversin: typeof iterCoversin;

	/**
	* Returns an iterator which iteratively converts an angle from degrees to radians.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterDeg2rad( uniform( -360.0, 360.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterDeg2rad: typeof iterDeg2rad;

	/**
	* Returns an iterator which iteratively evaluates the digamma function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterDigamma( uniform( 0.01, 5.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterDigamma: typeof iterDigamma;

	/**
	* Returns an iterator which iteratively evaluates the Dirac delta function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterDiracDelta( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterDiracDelta: typeof iterDiracDelta;

	/**
	* Returns an iterator which iteratively evaluates the Dirichlet eta function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterEta( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterEta: typeof iterEta;

	/**
	* Returns an iterator which iteratively computes the complete elliptic integral of the second kind.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterEllipe( uniform( -1.0, 1.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterEllipe: typeof iterEllipe;

	/**
	* Returns an iterator which iteratively computes the complete elliptic integral of the first kind.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterEllipk( uniform( -1.0, 1.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterEllipk: typeof iterEllipk;

	/**
	* Returns an iterator which iteratively evaluates the error function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterErf( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterErf: typeof iterErf;

	/**
	* Returns an iterator which iteratively evaluates the complementary error function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterErfc( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterErfc: typeof iterErfc;

	/**
	* Returns an iterator which iteratively evaluates the inverse complementary error function.
	*
	* ## Notes
	*
	* -   The domain of inverse complementary error function is restricted to `[0,2]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterErfcinv( uniform( 0.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterErfcinv: typeof iterErfcinv;

	/**
	* Returns an iterator which iteratively evaluates the inverse error function.
	*
	* ## Notes
	*
	* -   The domain of inverse error function is restricted to `[-1,1]`. If an iterated value is outside of the domain, the returned iterator returns `NaN`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterErfinv( uniform( -1.0, 1.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterErfinv: typeof iterErfinv;

	/**
	* Returns an iterator which iteratively evaluates the natural exponential function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterExp( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterExp: typeof iterExp;

	/**
	* Returns an iterator which iteratively evaluates the base `2` exponential function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterExp2( uniform( -50.0, 50.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterExp2: typeof iterExp2;

	/**
	* Returns an iterator which iteratively evaluates the base `10` exponential function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterExp10( uniform( -50.0, 50.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterExp10: typeof iterExp10;

	/**
	* Returns an iterator which iteratively evaluates the standard logistic function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterExpit( uniform( 0.0, 1.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterExpit: typeof iterExpit;

	/**
	* Returns an iterator which iteratively computes `exp(x) - 1`.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterExpm1( uniform( -5.0, 5.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterExpm1: typeof iterExpm1;

	/**
	* Returns an iterator which iteratively evaluates the relative error exponential.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterExpm1rel( uniform( -50.0, 50.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterExpm1rel: typeof iterExpm1rel;

	/**
	* Returns an iterator which iteratively evaluates the factorial function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterFactorial( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFactorial: typeof iterFactorial;

	/**
	* Returns an iterator which iteratively evaluates the natural logarithm of the factorial function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterFactorialln( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFactorialln: typeof iterFactorialln;

	/**
	* Returns an iterator which rounds each iterated value toward negative infinity.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterFloor( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFloor: typeof iterFloor;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of two toward negative infinity.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterFloor2( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFloor2: typeof iterFloor2;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of 10 toward negative infinity.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterFloor10( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFloor10: typeof iterFloor10;

	/**
	* Returns an iterator which iteratively computes the Fresnel integral C(x).
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterFresnelc( uniform( 0.0, 10.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFresnelc: typeof iterFresnelc;

	/**
	* Returns an iterator which iteratively computes the Fresnel integral S(x).
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterFresnels( uniform( 0.0, 10.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFresnels: typeof iterFresnels;

	/**
	* Returns an iterator which iteratively evaluates the gamma function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterGamma( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterGamma: typeof iterGamma;

	/**
	* Returns an iterator which iteratively computes `gamma(x+1) - 1` without cancellation errors for small `x`.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterGamma1pm1( uniform( -5.0, 5.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterGamma1pm1: typeof iterGamma1pm1;

	/**
	* Returns an iterator which iteratively evaluates the natural logarithm of the gamma function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterGammaln( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterGammaln: typeof iterGammaln;

	/**
	* Returns an iterator which iteratively computes the half-value coversed cosine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterHacovercos( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterHacovercos: typeof iterHacovercos;

	/**
	* Returns an iterator which iteratively computes the half-value coversed sine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterHacoversin( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterHacoversin: typeof iterHacoversin;

	/**
	* Returns an iterator which iteratively computes the half-value versed cosine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterHavercos( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterHavercos: typeof iterHavercos;

	/**
	* Returns an iterator which iteratively computes the half-value versed sine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterHaversin( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterHaversin: typeof iterHaversin;

	/**
	* Returns an iterator which iteratively computes the multiplicative inverse.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterInv( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterInv: typeof iterInv;

	/**
	* Returns an iterator which iteratively evaluates the natural logarithm.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterLn( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLn: typeof iterLn;

	/**
	* Returns an iterator which iteratively computes the base `b` logarithm.
	*
	* ## Notes
	*
	* -   For negative `b` or `x` iterated values, the returned iterator returns `NaN`.
	* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
	* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param x - input iterator
	* @param b - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterLog( uniform( 0.0, 100.0 ), uniform( 0.0, 10.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLog: typeof iterLog;

	/**
	* Returns an iterator which iteratively evaluates the natural logarithm of \\( 1-\exp(-|x|) \\).
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterLog1mexp( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLog1mexp: typeof iterLog1mexp;

	/**
	* Returns an iterator which iteratively evaluates the natural logarithm of `1+x`.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterLog1p( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLog1p: typeof iterLog1p;

	/**
	* Returns an iterator which iteratively evaluates the natural logarithm of \\( 1+\exp(x) \\).
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterLog1pexp( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLog1pexp: typeof iterLog1pexp;

	/**
	* Returns an iterator which iteratively evaluates the binary logarithm.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterLog2( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLog2: typeof iterLog2;

	/**
	* Returns an iterator which iteratively evaluates the common logarithm (logarithm with base 10).
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterLog10( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLog10: typeof iterLog10;

	/**
	* Returns an iterator which iteratively evaluates the logit function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterLogit( uniform( 0.0, 1.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterLogit: typeof iterLogit;

	/**
	* Returns an iterator which iteratively evaluates the exponential function.
	*
	* ## Notes
	*
	* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
	* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param base - input iterator
	* @param exponent - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterPow( uniform( 0.0, 2.0 ), uniform( -2.0, 2.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterPow: typeof iterPow;

	/**
	* Returns an iterator which iteratively converts an angle from radians to degrees.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterRad2deg( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterRad2deg: typeof iterRad2deg;

	/**
	* Returns an iterator which iteratively evaluates the ramp function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterRamp( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterRamp: typeof iterRamp;

	/**
	* Returns an iterator which iteratively evaluates the Riemann zeta function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterZeta( uniform( 1.1, 50.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterZeta: typeof iterZeta;

	/**
	* Returns an iterator which rounds each iterated value to the nearest integer.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterRound( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterRound: typeof iterRound;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of two on a linear scale.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterRound2( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterRound2: typeof iterRound2;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of 10 on a linear scale.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterRound10( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterRound10: typeof iterRound10;

	/**
	* Returns an iterator which iteratively computes the reciprocal (inverse) square root.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterRsqrt( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterRsqrt: typeof iterRsqrt;

	/**
	* Returns an iterator which iteratively evaluates the signum function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterSignum( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSignum: typeof iterSignum;

	/**
	* Returns an iterator which iteratively computes the sine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterSin( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSin: typeof iterSin;

	/**
	* Returns an iterator which iteratively computes the normalized cardinal sine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterSinc( uniform( -5.0, 5.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSinc: typeof iterSinc;

	/**
	* Returns an iterator which iteratively evaluates the hyperbolic sine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterSinh( uniform( -5.0, 5.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSinh: typeof iterSinh;

	/**
	* Returns an iterator which computes the sine of each iterated value times π.
	*
	* ## Notes
	*
	* -   Computes `sin(πx)` more accurately than `sin(pi*x)`, especially for large `x`.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterSinpi( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSinpi: typeof iterSinpi;

	/**
	* Returns an iterator which iteratively evaluates Spence's function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterSpence( uniform( 0.0, 100.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSpence: typeof iterSpence;

	/**
	* Returns an iterator which iteratively computes the principal square root.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterSqrt( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSqrt: typeof iterSqrt;

	/**
	* Returns an iterator which iteratively computes `sqrt(1+x) - 1` more accurately for small `x`.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterSqrt1pm1( uniform( 0.0, 100.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSqrt1pm1: typeof iterSqrt1pm1;

	/**
	* Returns an iterator which iteratively evaluates the tangent.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterTan( uniform( -1.57, 1.57 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterTan: typeof iterTan;

	/**
	* Returns an iterator which iteratively evaluates the hyperbolic tangent.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterTanh( uniform( -4.0, 4.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterTanh: typeof iterTanh;

	/**
	* Returns an iterator which iteratively evaluates the trigamma function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterTrigamma( uniform( 0.01, 50.0 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterTrigamma: typeof iterTrigamma;

	/**
	* Returns an iterator which rounds each iterated value toward zero.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterTrunc( randu() );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterTrunc: typeof iterTrunc;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of two toward zero.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterTrunc2( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterTrunc2: typeof iterTrunc2;

	/**
	* Returns an iterator which rounds each iterated value to the nearest power of 10 toward zero.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterTrunc10( uniform( -100.0, 100.0 ) );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterTrunc10: typeof iterTrunc10;

	/**
	* Returns an iterator which iteratively computes the versed cosine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterVercos( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterVercos: typeof iterVercos;

	/**
	* Returns an iterator which iteratively computes the versed sine.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random/iter/uniform' );
	*
	* var iter = ns.iterVersin( uniform( 0.0, 6.28 ) );
	*
	* var v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* v = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterVersin: typeof iterVersin;
}

/**
* Math iterators for special functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
