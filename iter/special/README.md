<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Special Functions

> Math iterators for special functions.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/iter/special' );
```

#### ns

Namespace containing math iterators for special functions.

```javascript
var iterators = ns;
// returns {...}
```

The namespace contains the following functions for creating iterator protocol-compliant iterators:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`iterAbs( iterator )`][@stdlib/math/iter/special/abs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the absolute value.</span>
-   <span class="signature">[`iterAbs2( iterator )`][@stdlib/math/iter/special/abs2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the squared absolute value.</span>
-   <span class="signature">[`iterAcos( iterator )`][@stdlib/math/iter/special/acos]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the arccosine.</span>
-   <span class="signature">[`iterAcosh( iterator )`][@stdlib/math/iter/special/acosh]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the hyperbolic arccosine.</span>
-   <span class="signature">[`iterAcot( iterator )`][@stdlib/math/iter/special/acot]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse cotangent.</span>
-   <span class="signature">[`iterAcoth( iterator )`][@stdlib/math/iter/special/acoth]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse hyperbolic cotangent.</span>
-   <span class="signature">[`iterAcovercos( iterator )`][@stdlib/math/iter/special/acovercos]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse coversed cosine.</span>
-   <span class="signature">[`iterAcoversin( iterator )`][@stdlib/math/iter/special/acoversin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse coversed sine.</span>
-   <span class="signature">[`iterAhavercos( iterator )`][@stdlib/math/iter/special/ahavercos]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse half-value versed cosine.</span>
-   <span class="signature">[`iterAhaversin( iterator )`][@stdlib/math/iter/special/ahaversin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse half-value versed sine.</span>
-   <span class="signature">[`iterAsin( iterator )`][@stdlib/math/iter/special/asin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the arcsine.</span>
-   <span class="signature">[`iterAsinh( iterator )`][@stdlib/math/iter/special/asinh]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the hyperbolic arcsine.</span>
-   <span class="signature">[`iterAtan( iterator )`][@stdlib/math/iter/special/atan]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the arctangent.</span>
-   <span class="signature">[`iterAtan2( y, x )`][@stdlib/math/iter/special/atan2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.</span>
-   <span class="signature">[`iterAtanh( iterator )`][@stdlib/math/iter/special/atanh]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the hyperbolic arctangent.</span>
-   <span class="signature">[`iterAvercos( iterator )`][@stdlib/math/iter/special/avercos]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse versed cosine.</span>
-   <span class="signature">[`iterAversin( iterator )`][@stdlib/math/iter/special/aversin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the inverse versed sine.</span>
-   <span class="signature">[`iterBesselj0( iterator )`][@stdlib/math/iter/special/besselj0]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the Bessel function of the first kind of order zero.</span>
-   <span class="signature">[`iterBesselj1( iterator )`][@stdlib/math/iter/special/besselj1]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the Bessel function of the first kind of order one.</span>
-   <span class="signature">[`iterBessely0( iterator )`][@stdlib/math/iter/special/bessely0]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the Bessel function of the second kind of order zero.</span>
-   <span class="signature">[`iterBessely1( iterator )`][@stdlib/math/iter/special/bessely1]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the Bessel function of the second kind of order one.</span>
-   <span class="signature">[`iterBeta( x, y )`][@stdlib/math/iter/special/beta]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the beta function.</span>
-   <span class="signature">[`iterBetaln( x, y )`][@stdlib/math/iter/special/betaln]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural logarithm of the beta function.</span>
-   <span class="signature">[`iterBinet( iterator )`][@stdlib/math/iter/special/binet]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates Binet's formula extended to real numbers.</span>
-   <span class="signature">[`iterCbrt( iterator )`][@stdlib/math/iter/special/cbrt]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the cube root.</span>
-   <span class="signature">[`iterCeil( iterator )`][@stdlib/math/iter/special/ceil]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value toward positive infinity.</span>
-   <span class="signature">[`iterCeil10( iterator )`][@stdlib/math/iter/special/ceil10]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of 10 toward positive infinity.</span>
-   <span class="signature">[`iterCeil2( iterator )`][@stdlib/math/iter/special/ceil2]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of two toward positive infinity.</span>
-   <span class="signature">[`iterCos( iterator )`][@stdlib/math/iter/special/cos]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the cosine.</span>
-   <span class="signature">[`iterCosh( iterator )`][@stdlib/math/iter/special/cosh]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the hyperbolic cosine for each iterated value.</span>
-   <span class="signature">[`iterCosm1( iterator )`][@stdlib/math/iter/special/cosm1]</span><span class="delimiter">: </span><span class="description">create an iterator which computes `cos(x) - 1` for each iterated value.</span>
-   <span class="signature">[`iterCospi( iterator )`][@stdlib/math/iter/special/cospi]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the cosine of each iterated value times π.</span>
-   <span class="signature">[`iterCovercos( iterator )`][@stdlib/math/iter/special/covercos]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the coversed cosine for each iterated value.</span>
-   <span class="signature">[`iterCoversin( iterator )`][@stdlib/math/iter/special/coversin]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the coversed sine for each iterated value.</span>
-   <span class="signature">[`iterDeg2rad( iterator )`][@stdlib/math/iter/special/deg2rad]</span><span class="delimiter">: </span><span class="description">create an iterator which converts an angle from degrees to radians for each iterated value.</span>
-   <span class="signature">[`iterDigamma( iterator )`][@stdlib/math/iter/special/digamma]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the digamma function for each iterated value.</span>
-   <span class="signature">[`iterDiracDelta( iterator )`][@stdlib/math/iter/special/dirac-delta]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the Dirac delta function.</span>
-   <span class="signature">[`iterEta( iterator )`][@stdlib/math/iter/special/dirichlet-eta]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the Dirichlet eta function.</span>
-   <span class="signature">[`iterEllipe( iterator )`][@stdlib/math/iter/special/ellipe]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the complete elliptic integral of the second kind for each iterated value.</span>
-   <span class="signature">[`iterEllipk( iterator )`][@stdlib/math/iter/special/ellipk]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the complete elliptic integral of the first kind for each iterated value.</span>
-   <span class="signature">[`iterErf( iterator )`][@stdlib/math/iter/special/erf]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the error function.</span>
-   <span class="signature">[`iterErfc( iterator )`][@stdlib/math/iter/special/erfc]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the complementary error function.</span>
-   <span class="signature">[`iterErfcinv( iterator )`][@stdlib/math/iter/special/erfcinv]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the inverse complementary error function.</span>
-   <span class="signature">[`iterErfinv( iterator )`][@stdlib/math/iter/special/erfinv]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the inverse error function.</span>
-   <span class="signature">[`iterExp( iterator )`][@stdlib/math/iter/special/exp]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural exponential function.</span>
-   <span class="signature">[`iterExp10( iterator )`][@stdlib/math/iter/special/exp10]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the base 10 exponential function for each iterated value.</span>
-   <span class="signature">[`iterExp2( iterator )`][@stdlib/math/iter/special/exp2]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the base 2 exponential function for each iterated value.</span>
-   <span class="signature">[`iterExpit( iterator )`][@stdlib/math/iter/special/expit]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the standard logistic function for each iterated value.</span>
-   <span class="signature">[`iterExpm1( iterator )`][@stdlib/math/iter/special/expm1]</span><span class="delimiter">: </span><span class="description">create an iterator which computes `exp(x) - 1` for each iterated value.</span>
-   <span class="signature">[`iterExpm1rel( iterator )`][@stdlib/math/iter/special/expm1rel]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the relative error exponential for each iterated value.</span>
-   <span class="signature">[`iterFactorial( iterator )`][@stdlib/math/iter/special/factorial]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the factorial function.</span>
-   <span class="signature">[`iterFactorialln( iterator )`][@stdlib/math/iter/special/factorialln]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural logarithm of the factorial function.</span>
-   <span class="signature">[`iterFloor( iterator )`][@stdlib/math/iter/special/floor]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value toward negative infinity.</span>
-   <span class="signature">[`iterFloor10( iterator )`][@stdlib/math/iter/special/floor10]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of 10 toward negative infinity.</span>
-   <span class="signature">[`iterFloor2( iterator )`][@stdlib/math/iter/special/floor2]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of two toward negative infinity.</span>
-   <span class="signature">[`iterFresnelc( iterator )`][@stdlib/math/iter/special/fresnelc]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the Fresnel integral C(x) for each iterated value.</span>
-   <span class="signature">[`iterFresnels( iterator )`][@stdlib/math/iter/special/fresnels]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the Fresnel integral S(x) for each iterated value.</span>
-   <span class="signature">[`iterGamma( iterator )`][@stdlib/math/iter/special/gamma]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the gamma function.</span>
-   <span class="signature">[`iterGamma1pm1( iterator )`][@stdlib/math/iter/special/gamma1pm1]</span><span class="delimiter">: </span><span class="description">create an iterator which computes `gamma(x+1) - 1` for each iterated value.</span>
-   <span class="signature">[`iterGammaln( iterator )`][@stdlib/math/iter/special/gammaln]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural logarithm of the gamma function.</span>
-   <span class="signature">[`iterHacovercos( iterator )`][@stdlib/math/iter/special/hacovercos]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the half-value coversed cosine for each iterated value.</span>
-   <span class="signature">[`iterHacoversin( iterator )`][@stdlib/math/iter/special/hacoversin]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the half-value coversed sine for each iterated value.</span>
-   <span class="signature">[`iterHavercos( iterator )`][@stdlib/math/iter/special/havercos]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the half-value versed cosine for each iterated value.</span>
-   <span class="signature">[`iterHaversin( iterator )`][@stdlib/math/iter/special/haversin]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the half-value versed sine for each iterated value.</span>
-   <span class="signature">[`iterInv( iterator )`][@stdlib/math/iter/special/inv]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the multiplicative inverse.</span>
-   <span class="signature">[`iterLn( iterator )`][@stdlib/math/iter/special/ln]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural logarithm.</span>
-   <span class="signature">[`iterLog( x, b )`][@stdlib/math/iter/special/log]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the base `b` logarithm.</span>
-   <span class="signature">[`iterLog10( iterator )`][@stdlib/math/iter/special/log10]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the common logarithm (logarithm with base 10).</span>
-   <span class="signature">[`iterLog1mexp( iterator )`][@stdlib/math/iter/special/log1mexp]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural logarithm of `1-exp(-|x|)`.</span>
-   <span class="signature">[`iterLog1p( iterator )`][@stdlib/math/iter/special/log1p]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural logarithm of `1+x`.</span>
-   <span class="signature">[`iterLog1pexp( iterator )`][@stdlib/math/iter/special/log1pexp]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the natural logarithm of `1+exp(x)`.</span>
-   <span class="signature">[`iterLog2( iterator )`][@stdlib/math/iter/special/log2]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the binary logarithm.</span>
-   <span class="signature">[`iterLogit( iterator )`][@stdlib/math/iter/special/logit]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the logit function for each iterated value.</span>
-   <span class="signature">[`iterPow( base, exponent )`][@stdlib/math/iter/special/pow]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the exponential function.</span>
-   <span class="signature">[`iterRad2deg( iterator )`][@stdlib/math/iter/special/rad2deg]</span><span class="delimiter">: </span><span class="description">create an iterator which converts an angle from radians to degrees for each iterated value.</span>
-   <span class="signature">[`iterRamp( iterator )`][@stdlib/math/iter/special/ramp]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the ramp function.</span>
-   <span class="signature">[`iterZeta( iterator )`][@stdlib/math/iter/special/riemann-zeta]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the Riemann zeta function for each iterated value.</span>
-   <span class="signature">[`iterRound( iterator )`][@stdlib/math/iter/special/round]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest integer.</span>
-   <span class="signature">[`iterRound10( iterator )`][@stdlib/math/iter/special/round10]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of 10 on a linear scale.</span>
-   <span class="signature">[`iterRound2( iterator )`][@stdlib/math/iter/special/round2]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of two on a linear scale.</span>
-   <span class="signature">[`iterRsqrt( iterator )`][@stdlib/math/iter/special/rsqrt]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the reciprocal (inverse) square root.</span>
-   <span class="signature">[`iterSignum( iterator )`][@stdlib/math/iter/special/signum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively evaluates the signum function.</span>
-   <span class="signature">[`iterSin( iterator )`][@stdlib/math/iter/special/sin]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the sine.</span>
-   <span class="signature">[`iterSinc( iterator )`][@stdlib/math/iter/special/sinc]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the normalized cardinal sine for each iterated value.</span>
-   <span class="signature">[`iterSinh( iterator )`][@stdlib/math/iter/special/sinh]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the hyperbolic sine for each iterated value.</span>
-   <span class="signature">[`iterSinpi( iterator )`][@stdlib/math/iter/special/sinpi]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the sine of each iterated value times π.</span>
-   <span class="signature">[`iterSpence( iterator )`][@stdlib/math/iter/special/spence]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates Spence's function for each iterated value.</span>
-   <span class="signature">[`iterSqrt( iterator )`][@stdlib/math/iter/special/sqrt]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the principal square root.</span>
-   <span class="signature">[`iterSqrt1pm1( iterator )`][@stdlib/math/iter/special/sqrt1pm1]</span><span class="delimiter">: </span><span class="description">create an iterator which computes `sqrt(1+x) - 1` for each iterated value.</span>
-   <span class="signature">[`iterTan( iterator )`][@stdlib/math/iter/special/tan]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the tangent for each iterated value.</span>
-   <span class="signature">[`iterTanh( iterator )`][@stdlib/math/iter/special/tanh]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the hyperbolic tangent for each iterated value.</span>
-   <span class="signature">[`iterTrigamma( iterator )`][@stdlib/math/iter/special/trigamma]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the trigamma function for each iterated value.</span>
-   <span class="signature">[`iterTrunc( iterator )`][@stdlib/math/iter/special/trunc]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value toward zero.</span>
-   <span class="signature">[`iterTrunc10( iterator )`][@stdlib/math/iter/special/trunc10]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of 10 toward zero.</span>
-   <span class="signature">[`iterTrunc2( iterator )`][@stdlib/math/iter/special/trunc2]</span><span class="delimiter">: </span><span class="description">create an iterator which rounds each iterated value to the nearest power of two toward zero.</span>
-   <span class="signature">[`iterVercos( iterator )`][@stdlib/math/iter/special/vercos]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the versed cosine for each iterated value.</span>
-   <span class="signature">[`iterVersin( iterator )`][@stdlib/math/iter/special/versin]</span><span class="delimiter">: </span><span class="description">create an iterator which computes the versed sine for each iterated value.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/math/iter/special' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/math/iter/special/abs]: https://github.com/stdlib-js/math/tree/main/iter/special/abs

[@stdlib/math/iter/special/abs2]: https://github.com/stdlib-js/math/tree/main/iter/special/abs2

[@stdlib/math/iter/special/acos]: https://github.com/stdlib-js/math/tree/main/iter/special/acos

[@stdlib/math/iter/special/acosh]: https://github.com/stdlib-js/math/tree/main/iter/special/acosh

[@stdlib/math/iter/special/acot]: https://github.com/stdlib-js/math/tree/main/iter/special/acot

[@stdlib/math/iter/special/acoth]: https://github.com/stdlib-js/math/tree/main/iter/special/acoth

[@stdlib/math/iter/special/acovercos]: https://github.com/stdlib-js/math/tree/main/iter/special/acovercos

[@stdlib/math/iter/special/acoversin]: https://github.com/stdlib-js/math/tree/main/iter/special/acoversin

[@stdlib/math/iter/special/ahavercos]: https://github.com/stdlib-js/math/tree/main/iter/special/ahavercos

[@stdlib/math/iter/special/ahaversin]: https://github.com/stdlib-js/math/tree/main/iter/special/ahaversin

[@stdlib/math/iter/special/asin]: https://github.com/stdlib-js/math/tree/main/iter/special/asin

[@stdlib/math/iter/special/asinh]: https://github.com/stdlib-js/math/tree/main/iter/special/asinh

[@stdlib/math/iter/special/atan]: https://github.com/stdlib-js/math/tree/main/iter/special/atan

[@stdlib/math/iter/special/atan2]: https://github.com/stdlib-js/math/tree/main/iter/special/atan2

[@stdlib/math/iter/special/atanh]: https://github.com/stdlib-js/math/tree/main/iter/special/atanh

[@stdlib/math/iter/special/avercos]: https://github.com/stdlib-js/math/tree/main/iter/special/avercos

[@stdlib/math/iter/special/aversin]: https://github.com/stdlib-js/math/tree/main/iter/special/aversin

[@stdlib/math/iter/special/besselj0]: https://github.com/stdlib-js/math/tree/main/iter/special/besselj0

[@stdlib/math/iter/special/besselj1]: https://github.com/stdlib-js/math/tree/main/iter/special/besselj1

[@stdlib/math/iter/special/bessely0]: https://github.com/stdlib-js/math/tree/main/iter/special/bessely0

[@stdlib/math/iter/special/bessely1]: https://github.com/stdlib-js/math/tree/main/iter/special/bessely1

[@stdlib/math/iter/special/beta]: https://github.com/stdlib-js/math/tree/main/iter/special/beta

[@stdlib/math/iter/special/betaln]: https://github.com/stdlib-js/math/tree/main/iter/special/betaln

[@stdlib/math/iter/special/binet]: https://github.com/stdlib-js/math/tree/main/iter/special/binet

[@stdlib/math/iter/special/cbrt]: https://github.com/stdlib-js/math/tree/main/iter/special/cbrt

[@stdlib/math/iter/special/ceil]: https://github.com/stdlib-js/math/tree/main/iter/special/ceil

[@stdlib/math/iter/special/ceil10]: https://github.com/stdlib-js/math/tree/main/iter/special/ceil10

[@stdlib/math/iter/special/ceil2]: https://github.com/stdlib-js/math/tree/main/iter/special/ceil2

[@stdlib/math/iter/special/cos]: https://github.com/stdlib-js/math/tree/main/iter/special/cos

[@stdlib/math/iter/special/cosh]: https://github.com/stdlib-js/math/tree/main/iter/special/cosh

[@stdlib/math/iter/special/cosm1]: https://github.com/stdlib-js/math/tree/main/iter/special/cosm1

[@stdlib/math/iter/special/cospi]: https://github.com/stdlib-js/math/tree/main/iter/special/cospi

[@stdlib/math/iter/special/covercos]: https://github.com/stdlib-js/math/tree/main/iter/special/covercos

[@stdlib/math/iter/special/coversin]: https://github.com/stdlib-js/math/tree/main/iter/special/coversin

[@stdlib/math/iter/special/deg2rad]: https://github.com/stdlib-js/math/tree/main/iter/special/deg2rad

[@stdlib/math/iter/special/digamma]: https://github.com/stdlib-js/math/tree/main/iter/special/digamma

[@stdlib/math/iter/special/dirac-delta]: https://github.com/stdlib-js/math/tree/main/iter/special/dirac-delta

[@stdlib/math/iter/special/dirichlet-eta]: https://github.com/stdlib-js/math/tree/main/iter/special/dirichlet-eta

[@stdlib/math/iter/special/ellipe]: https://github.com/stdlib-js/math/tree/main/iter/special/ellipe

[@stdlib/math/iter/special/ellipk]: https://github.com/stdlib-js/math/tree/main/iter/special/ellipk

[@stdlib/math/iter/special/erf]: https://github.com/stdlib-js/math/tree/main/iter/special/erf

[@stdlib/math/iter/special/erfc]: https://github.com/stdlib-js/math/tree/main/iter/special/erfc

[@stdlib/math/iter/special/erfcinv]: https://github.com/stdlib-js/math/tree/main/iter/special/erfcinv

[@stdlib/math/iter/special/erfinv]: https://github.com/stdlib-js/math/tree/main/iter/special/erfinv

[@stdlib/math/iter/special/exp]: https://github.com/stdlib-js/math/tree/main/iter/special/exp

[@stdlib/math/iter/special/exp10]: https://github.com/stdlib-js/math/tree/main/iter/special/exp10

[@stdlib/math/iter/special/exp2]: https://github.com/stdlib-js/math/tree/main/iter/special/exp2

[@stdlib/math/iter/special/expit]: https://github.com/stdlib-js/math/tree/main/iter/special/expit

[@stdlib/math/iter/special/expm1]: https://github.com/stdlib-js/math/tree/main/iter/special/expm1

[@stdlib/math/iter/special/expm1rel]: https://github.com/stdlib-js/math/tree/main/iter/special/expm1rel

[@stdlib/math/iter/special/factorial]: https://github.com/stdlib-js/math/tree/main/iter/special/factorial

[@stdlib/math/iter/special/factorialln]: https://github.com/stdlib-js/math/tree/main/iter/special/factorialln

[@stdlib/math/iter/special/floor]: https://github.com/stdlib-js/math/tree/main/iter/special/floor

[@stdlib/math/iter/special/floor10]: https://github.com/stdlib-js/math/tree/main/iter/special/floor10

[@stdlib/math/iter/special/floor2]: https://github.com/stdlib-js/math/tree/main/iter/special/floor2

[@stdlib/math/iter/special/fresnelc]: https://github.com/stdlib-js/math/tree/main/iter/special/fresnelc

[@stdlib/math/iter/special/fresnels]: https://github.com/stdlib-js/math/tree/main/iter/special/fresnels

[@stdlib/math/iter/special/gamma]: https://github.com/stdlib-js/math/tree/main/iter/special/gamma

[@stdlib/math/iter/special/gamma1pm1]: https://github.com/stdlib-js/math/tree/main/iter/special/gamma1pm1

[@stdlib/math/iter/special/gammaln]: https://github.com/stdlib-js/math/tree/main/iter/special/gammaln

[@stdlib/math/iter/special/hacovercos]: https://github.com/stdlib-js/math/tree/main/iter/special/hacovercos

[@stdlib/math/iter/special/hacoversin]: https://github.com/stdlib-js/math/tree/main/iter/special/hacoversin

[@stdlib/math/iter/special/havercos]: https://github.com/stdlib-js/math/tree/main/iter/special/havercos

[@stdlib/math/iter/special/haversin]: https://github.com/stdlib-js/math/tree/main/iter/special/haversin

[@stdlib/math/iter/special/inv]: https://github.com/stdlib-js/math/tree/main/iter/special/inv

[@stdlib/math/iter/special/ln]: https://github.com/stdlib-js/math/tree/main/iter/special/ln

[@stdlib/math/iter/special/log]: https://github.com/stdlib-js/math/tree/main/iter/special/log

[@stdlib/math/iter/special/log10]: https://github.com/stdlib-js/math/tree/main/iter/special/log10

[@stdlib/math/iter/special/log1mexp]: https://github.com/stdlib-js/math/tree/main/iter/special/log1mexp

[@stdlib/math/iter/special/log1p]: https://github.com/stdlib-js/math/tree/main/iter/special/log1p

[@stdlib/math/iter/special/log1pexp]: https://github.com/stdlib-js/math/tree/main/iter/special/log1pexp

[@stdlib/math/iter/special/log2]: https://github.com/stdlib-js/math/tree/main/iter/special/log2

[@stdlib/math/iter/special/logit]: https://github.com/stdlib-js/math/tree/main/iter/special/logit

[@stdlib/math/iter/special/pow]: https://github.com/stdlib-js/math/tree/main/iter/special/pow

[@stdlib/math/iter/special/rad2deg]: https://github.com/stdlib-js/math/tree/main/iter/special/rad2deg

[@stdlib/math/iter/special/ramp]: https://github.com/stdlib-js/math/tree/main/iter/special/ramp

[@stdlib/math/iter/special/riemann-zeta]: https://github.com/stdlib-js/math/tree/main/iter/special/riemann-zeta

[@stdlib/math/iter/special/round]: https://github.com/stdlib-js/math/tree/main/iter/special/round

[@stdlib/math/iter/special/round10]: https://github.com/stdlib-js/math/tree/main/iter/special/round10

[@stdlib/math/iter/special/round2]: https://github.com/stdlib-js/math/tree/main/iter/special/round2

[@stdlib/math/iter/special/rsqrt]: https://github.com/stdlib-js/math/tree/main/iter/special/rsqrt

[@stdlib/math/iter/special/signum]: https://github.com/stdlib-js/math/tree/main/iter/special/signum

[@stdlib/math/iter/special/sin]: https://github.com/stdlib-js/math/tree/main/iter/special/sin

[@stdlib/math/iter/special/sinc]: https://github.com/stdlib-js/math/tree/main/iter/special/sinc

[@stdlib/math/iter/special/sinh]: https://github.com/stdlib-js/math/tree/main/iter/special/sinh

[@stdlib/math/iter/special/sinpi]: https://github.com/stdlib-js/math/tree/main/iter/special/sinpi

[@stdlib/math/iter/special/spence]: https://github.com/stdlib-js/math/tree/main/iter/special/spence

[@stdlib/math/iter/special/sqrt]: https://github.com/stdlib-js/math/tree/main/iter/special/sqrt

[@stdlib/math/iter/special/sqrt1pm1]: https://github.com/stdlib-js/math/tree/main/iter/special/sqrt1pm1

[@stdlib/math/iter/special/tan]: https://github.com/stdlib-js/math/tree/main/iter/special/tan

[@stdlib/math/iter/special/tanh]: https://github.com/stdlib-js/math/tree/main/iter/special/tanh

[@stdlib/math/iter/special/trigamma]: https://github.com/stdlib-js/math/tree/main/iter/special/trigamma

[@stdlib/math/iter/special/trunc]: https://github.com/stdlib-js/math/tree/main/iter/special/trunc

[@stdlib/math/iter/special/trunc10]: https://github.com/stdlib-js/math/tree/main/iter/special/trunc10

[@stdlib/math/iter/special/trunc2]: https://github.com/stdlib-js/math/tree/main/iter/special/trunc2

[@stdlib/math/iter/special/vercos]: https://github.com/stdlib-js/math/tree/main/iter/special/vercos

[@stdlib/math/iter/special/versin]: https://github.com/stdlib-js/math/tree/main/iter/special/versin

<!-- </toc-links> -->

</section>

<!-- /.links -->
