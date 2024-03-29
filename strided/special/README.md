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

> Strided array special math functions.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/strided/special' );
```

#### ns

Namespace containing strided array special math functions.

```javascript
var special = ns;
// returns {...}
```

The namespace contains the following strided array functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`absBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/abs-by]</span><span class="delimiter">: </span><span class="description">compute the absolute value of each element retrieved from a strided input array via a callback function and assign each result to an element in a strided output array.</span>
-   <span class="signature">[`abs( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a strided array.</span>
-   <span class="signature">[`abs2By( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/abs2-by]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`abs2( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/abs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a strided array.</span>
-   <span class="signature">[`acosBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/acos-by]</span><span class="delimiter">: </span><span class="description">compute the arccosine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`acoshBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/acosh-by]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`acotBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/acot-by]</span><span class="delimiter">: </span><span class="description">compute the inverse cotangent of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`acothBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/acoth-by]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`acovercosBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/acovercos-by]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed cosine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`acoversinBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/acoversin-by]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed sine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`ahavercosBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/ahavercos-by]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed cosine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`ahaversinBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/ahaversin-by]</span><span class="delimiter">: </span><span class="description">compute the inverse half-value versed sine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`asinBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/asin-by]</span><span class="delimiter">: </span><span class="description">compute the arcsine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`asinhBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/asinh-by]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`atanBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/atan-by]</span><span class="delimiter">: </span><span class="description">compute the arctangent of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`atanhBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/atanh-by]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`avercosBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/avercos-by]</span><span class="delimiter">: </span><span class="description">compute the inverse versed cosine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`aversinBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/aversin-by]</span><span class="delimiter">: </span><span class="description">compute the inverse versed sine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`besselj0By( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/besselj0-by]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order zero for each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`besselj1By( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/besselj1-by]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order one for each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`bessely0By( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/bessely0-by]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order zero for each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`bessely1By( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/bessely1-by]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one for each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`binetBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/binet-by]</span><span class="delimiter">: </span><span class="description">evaluate Binet's formula extended to real numbers for each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`cbrtBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/cbrt-by]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`cbrt( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a strided array.</span>
-   <span class="signature">[`ceil( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/ceil]</span><span class="delimiter">: </span><span class="description">round each element in a strided array toward positive infinity.</span>
-   <span class="signature">[`cosBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/cos-by]</span><span class="delimiter">: </span><span class="description">compute the cosine for each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`dabs( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dabs2( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dcbrtBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/dcbrt-by]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element retrieved from a double-precision floating-point strided array via a callback function.</span>
-   <span class="signature">[`dcbrt( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dcbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dceil( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dceil]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward positive infinity.</span>
-   <span class="signature">[`ddeg2rad( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/ddeg2rad]</span><span class="delimiter">: </span><span class="description">convert each element in a double-precision floating-point strided array from degrees to radians.</span>
-   <span class="signature">[`deg2rad( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/deg2rad]</span><span class="delimiter">: </span><span class="description">convert each element in a strided array from degrees to radians.</span>
-   <span class="signature">[`dfloor( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dfloor]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward negative infinity.</span>
-   <span class="signature">[`dinv( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dinv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse for each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dmskabs( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`dmskabs2( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`dmskcbrt( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskcbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`dmskceil( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskceil]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward positive infinity according to a strided mask array.</span>
-   <span class="signature">[`dmskdeg2rad( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskdeg2rad]</span><span class="delimiter">: </span><span class="description">convert each element in a double-precision floating-point strided array from degrees to radians according to a strided mask array.</span>
-   <span class="signature">[`dmskfloor( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskfloor]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward negative infinity according to a strided mask array.</span>
-   <span class="signature">[`dmskinv( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskinv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`dmskramp( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`dmskrsqrt( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmskrsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`dmsksqrt( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmsksqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`dmsktrunc( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/dmsktrunc]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward zero according to a strided mask array.</span>
-   <span class="signature">[`dramp( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function for each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`drsqrt( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/drsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root for each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dsqrt( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dsqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dtrunc( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/dtrunc]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward zero.</span>
-   <span class="signature">[`floor( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/floor]</span><span class="delimiter">: </span><span class="description">round each element in a strided array toward negative infinity.</span>
-   <span class="signature">[`inv( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/inv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse for each element in a strided array.</span>
-   <span class="signature">[`ramp( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/ramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function for each element in a strided array.</span>
-   <span class="signature">[`rsqrt( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/rsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root for each element in a strided array.</span>
-   <span class="signature">[`sabs( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/sabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`sabs2( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/sabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`scbrt( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/scbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`sceil( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/sceil]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward positive infinity.</span>
-   <span class="signature">[`sdeg2rad( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/sdeg2rad]</span><span class="delimiter">: </span><span class="description">convert each element in a single-precision floating-point strided array from degrees to radians.</span>
-   <span class="signature">[`sfloor( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/sfloor]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward negative infinity.</span>
-   <span class="signature">[`sinBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/sin-by]</span><span class="delimiter">: </span><span class="description">compute the sine of each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`sinv( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/sinv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse for each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`smskabs( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`smskabs2( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`smskcbrt( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskcbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`smskceil( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskceil]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward positive infinity according to a strided mask array.</span>
-   <span class="signature">[`smskdeg2rad( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskdeg2rad]</span><span class="delimiter">: </span><span class="description">convert each element in a single-precision floating-point strided array from degrees to radians according to a strided mask array.</span>
-   <span class="signature">[`smskfloor( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskfloor]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward negative infinity according to a strided mask array.</span>
-   <span class="signature">[`smskinv( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskinv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`smskramp( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`smskrsqrt( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smskrsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`smsksqrt( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smsksqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="signature">[`smsktrunc( N, x, sx, m, sm, y, sy )`][@stdlib/math/strided/special/smsktrunc]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward zero according to a strided mask array.</span>
-   <span class="signature">[`sqrtBy( N, x, strideX, y, strideY, clbk[, thisArg] )`][@stdlib/math/strided/special/sqrt-by]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element retrieved from an input strided array via a callback function.</span>
-   <span class="signature">[`sqrt( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a strided array.</span>
-   <span class="signature">[`sramp( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/sramp]</span><span class="delimiter">: </span><span class="description">evaluate the ramp function for each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`srsqrt( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/srsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root for each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`ssqrt( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/ssqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`strunc( N, x, strideX, y, strideY )`][@stdlib/math/strided/special/strunc]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward zero.</span>
-   <span class="signature">[`trunc( N, dtypeX, x, strideX, dtypeY, y, strideY )`][@stdlib/math/strided/special/trunc]</span><span class="delimiter">: </span><span class="description">round each element in a strided array toward zero.</span>

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
var ns = require( '@stdlib/math/strided/special' );

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

[@stdlib/math/strided/special/abs-by]: https://github.com/stdlib-js/math/tree/main/strided/special/abs-by

[@stdlib/math/strided/special/abs]: https://github.com/stdlib-js/math/tree/main/strided/special/abs

[@stdlib/math/strided/special/abs2-by]: https://github.com/stdlib-js/math/tree/main/strided/special/abs2-by

[@stdlib/math/strided/special/abs2]: https://github.com/stdlib-js/math/tree/main/strided/special/abs2

[@stdlib/math/strided/special/acos-by]: https://github.com/stdlib-js/math/tree/main/strided/special/acos-by

[@stdlib/math/strided/special/acosh-by]: https://github.com/stdlib-js/math/tree/main/strided/special/acosh-by

[@stdlib/math/strided/special/acot-by]: https://github.com/stdlib-js/math/tree/main/strided/special/acot-by

[@stdlib/math/strided/special/acoth-by]: https://github.com/stdlib-js/math/tree/main/strided/special/acoth-by

[@stdlib/math/strided/special/acovercos-by]: https://github.com/stdlib-js/math/tree/main/strided/special/acovercos-by

[@stdlib/math/strided/special/acoversin-by]: https://github.com/stdlib-js/math/tree/main/strided/special/acoversin-by

[@stdlib/math/strided/special/ahavercos-by]: https://github.com/stdlib-js/math/tree/main/strided/special/ahavercos-by

[@stdlib/math/strided/special/ahaversin-by]: https://github.com/stdlib-js/math/tree/main/strided/special/ahaversin-by

[@stdlib/math/strided/special/asin-by]: https://github.com/stdlib-js/math/tree/main/strided/special/asin-by

[@stdlib/math/strided/special/asinh-by]: https://github.com/stdlib-js/math/tree/main/strided/special/asinh-by

[@stdlib/math/strided/special/atan-by]: https://github.com/stdlib-js/math/tree/main/strided/special/atan-by

[@stdlib/math/strided/special/atanh-by]: https://github.com/stdlib-js/math/tree/main/strided/special/atanh-by

[@stdlib/math/strided/special/avercos-by]: https://github.com/stdlib-js/math/tree/main/strided/special/avercos-by

[@stdlib/math/strided/special/aversin-by]: https://github.com/stdlib-js/math/tree/main/strided/special/aversin-by

[@stdlib/math/strided/special/besselj0-by]: https://github.com/stdlib-js/math/tree/main/strided/special/besselj0-by

[@stdlib/math/strided/special/besselj1-by]: https://github.com/stdlib-js/math/tree/main/strided/special/besselj1-by

[@stdlib/math/strided/special/bessely0-by]: https://github.com/stdlib-js/math/tree/main/strided/special/bessely0-by

[@stdlib/math/strided/special/bessely1-by]: https://github.com/stdlib-js/math/tree/main/strided/special/bessely1-by

[@stdlib/math/strided/special/binet-by]: https://github.com/stdlib-js/math/tree/main/strided/special/binet-by

[@stdlib/math/strided/special/cbrt-by]: https://github.com/stdlib-js/math/tree/main/strided/special/cbrt-by

[@stdlib/math/strided/special/cbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/cbrt

[@stdlib/math/strided/special/ceil]: https://github.com/stdlib-js/math/tree/main/strided/special/ceil

[@stdlib/math/strided/special/cos-by]: https://github.com/stdlib-js/math/tree/main/strided/special/cos-by

[@stdlib/math/strided/special/dabs]: https://github.com/stdlib-js/math/tree/main/strided/special/dabs

[@stdlib/math/strided/special/dabs2]: https://github.com/stdlib-js/math/tree/main/strided/special/dabs2

[@stdlib/math/strided/special/dcbrt-by]: https://github.com/stdlib-js/math/tree/main/strided/special/dcbrt-by

[@stdlib/math/strided/special/dcbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/dcbrt

[@stdlib/math/strided/special/dceil]: https://github.com/stdlib-js/math/tree/main/strided/special/dceil

[@stdlib/math/strided/special/ddeg2rad]: https://github.com/stdlib-js/math/tree/main/strided/special/ddeg2rad

[@stdlib/math/strided/special/deg2rad]: https://github.com/stdlib-js/math/tree/main/strided/special/deg2rad

[@stdlib/math/strided/special/dfloor]: https://github.com/stdlib-js/math/tree/main/strided/special/dfloor

[@stdlib/math/strided/special/dinv]: https://github.com/stdlib-js/math/tree/main/strided/special/dinv

[@stdlib/math/strided/special/dmskabs]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskabs

[@stdlib/math/strided/special/dmskabs2]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskabs2

[@stdlib/math/strided/special/dmskcbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskcbrt

[@stdlib/math/strided/special/dmskceil]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskceil

[@stdlib/math/strided/special/dmskdeg2rad]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskdeg2rad

[@stdlib/math/strided/special/dmskfloor]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskfloor

[@stdlib/math/strided/special/dmskinv]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskinv

[@stdlib/math/strided/special/dmskramp]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskramp

[@stdlib/math/strided/special/dmskrsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskrsqrt

[@stdlib/math/strided/special/dmsksqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/dmsksqrt

[@stdlib/math/strided/special/dmsktrunc]: https://github.com/stdlib-js/math/tree/main/strided/special/dmsktrunc

[@stdlib/math/strided/special/dramp]: https://github.com/stdlib-js/math/tree/main/strided/special/dramp

[@stdlib/math/strided/special/drsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/drsqrt

[@stdlib/math/strided/special/dsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/dsqrt

[@stdlib/math/strided/special/dtrunc]: https://github.com/stdlib-js/math/tree/main/strided/special/dtrunc

[@stdlib/math/strided/special/floor]: https://github.com/stdlib-js/math/tree/main/strided/special/floor

[@stdlib/math/strided/special/inv]: https://github.com/stdlib-js/math/tree/main/strided/special/inv

[@stdlib/math/strided/special/ramp]: https://github.com/stdlib-js/math/tree/main/strided/special/ramp

[@stdlib/math/strided/special/rsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/rsqrt

[@stdlib/math/strided/special/sabs]: https://github.com/stdlib-js/math/tree/main/strided/special/sabs

[@stdlib/math/strided/special/sabs2]: https://github.com/stdlib-js/math/tree/main/strided/special/sabs2

[@stdlib/math/strided/special/scbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/scbrt

[@stdlib/math/strided/special/sceil]: https://github.com/stdlib-js/math/tree/main/strided/special/sceil

[@stdlib/math/strided/special/sdeg2rad]: https://github.com/stdlib-js/math/tree/main/strided/special/sdeg2rad

[@stdlib/math/strided/special/sfloor]: https://github.com/stdlib-js/math/tree/main/strided/special/sfloor

[@stdlib/math/strided/special/sin-by]: https://github.com/stdlib-js/math/tree/main/strided/special/sin-by

[@stdlib/math/strided/special/sinv]: https://github.com/stdlib-js/math/tree/main/strided/special/sinv

[@stdlib/math/strided/special/smskabs]: https://github.com/stdlib-js/math/tree/main/strided/special/smskabs

[@stdlib/math/strided/special/smskabs2]: https://github.com/stdlib-js/math/tree/main/strided/special/smskabs2

[@stdlib/math/strided/special/smskcbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/smskcbrt

[@stdlib/math/strided/special/smskceil]: https://github.com/stdlib-js/math/tree/main/strided/special/smskceil

[@stdlib/math/strided/special/smskdeg2rad]: https://github.com/stdlib-js/math/tree/main/strided/special/smskdeg2rad

[@stdlib/math/strided/special/smskfloor]: https://github.com/stdlib-js/math/tree/main/strided/special/smskfloor

[@stdlib/math/strided/special/smskinv]: https://github.com/stdlib-js/math/tree/main/strided/special/smskinv

[@stdlib/math/strided/special/smskramp]: https://github.com/stdlib-js/math/tree/main/strided/special/smskramp

[@stdlib/math/strided/special/smskrsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/smskrsqrt

[@stdlib/math/strided/special/smsksqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/smsksqrt

[@stdlib/math/strided/special/smsktrunc]: https://github.com/stdlib-js/math/tree/main/strided/special/smsktrunc

[@stdlib/math/strided/special/sqrt-by]: https://github.com/stdlib-js/math/tree/main/strided/special/sqrt-by

[@stdlib/math/strided/special/sqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/sqrt

[@stdlib/math/strided/special/sramp]: https://github.com/stdlib-js/math/tree/main/strided/special/sramp

[@stdlib/math/strided/special/srsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/srsqrt

[@stdlib/math/strided/special/ssqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/ssqrt

[@stdlib/math/strided/special/strunc]: https://github.com/stdlib-js/math/tree/main/strided/special/strunc

[@stdlib/math/strided/special/trunc]: https://github.com/stdlib-js/math/tree/main/strided/special/trunc

<!-- </toc-links> -->

</section>

<!-- /.links -->
