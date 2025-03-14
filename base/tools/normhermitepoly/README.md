<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Normalized Hermite Polynomial

> Evaluate a normalized [Hermite polynomial][hermite-polynomial] using double-precision floating-point arithmetic.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The normalized (aka "probabilist") [Hermite polynomials][hermite-polynomial] are given by

<!-- <equation class="equation" label="eq:normalized_hermite_polynomials" align="center" raw="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm d^{n}}{\mathrm d x^{n}} e^{-\frac{x^2}{2}}" alt="Equation for normalized Hermite polynomials."> -->

```math
He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm d^{n}}{\mathrm d x^{n}} e^{-\frac{x^2}{2}}
```

<!-- <div class="equation" align="center" data-raw-text="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm{d}^{n}}{\mathrm{d}x^n} e^{-\frac{x^2}{2}}" data-equation="eq:normalized_hermite_polynomials">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bea0101eb61892f160eec8d97dc79188fd937523/lib/node_modules/@stdlib/math/base/tools/normhermitepoly/docs/img/equation_normalized_hermite_polynomials.svg" alt="Equation for normalized Hermite polynomials.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var normhermitepoly = require( '@stdlib/math/base/tools/normhermitepoly' );
```

#### normhermitepoly( n, x )

Evaluates a normalized [Hermite polynomial][hermite-polynomial] of degree `n` using double-precision floating-point arithmetic.

```javascript
var v = normhermitepoly( 1, 1.0 );
// returns 1.0

v = normhermitepoly( 1, 0.5 );
// returns 0.5

v = normhermitepoly( 0, 0.5 );
// returns 1.0

v = normhermitepoly( 2, 0.5 );
// returns -0.75

v = normhermitepoly( -1, 0.5 );
// returns NaN
```

#### normhermitepoly.factory( n )

Returns a function for evaluating a normalized [Hermite polynomial][hermite-polynomial] of degree `n` using double-precision floating-point arithmetic.

```javascript
var polyval = normhermitepoly.factory( 2 );

var v = polyval( 0.5 );
// returns -0.75
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var zeros = require( '@stdlib/array/zeros' );
var dmap = require( '@stdlib/strided/base/dmap' );
var logEach = require( '@stdlib/console/log-each' );
var normhermitepoly = require( '@stdlib/math/base/tools/normhermitepoly' );

// Generate random values at which to evaluate a polynomial:
var x = uniform( 10, -50.0, 50.0, {
    'dtype': 'float64'
});

// Create a polynomial function of degree 1:
var f = normhermitepoly.factory( 1 );

// Allocate an output array:
var y = zeros( x.length, 'float64' );

// Evaluate the polynomial:
dmap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 1, x, y );

// Create a polynomial function of degree 2:
f = normhermitepoly.factory( 2 );

// Allocate an output array:
y = zeros( x.length, 'float64' );

// Evaluate the polynomial:
dmap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 2, x, y );

// Create a polynomial function of degree 3:
f = normhermitepoly.factory( 3 );

// Allocate an output array:
y = zeros( x.length, 'float64' );

// Evaluate the polynomial:
dmap( x.length, x, 1, y, 1, f );
logEach( 'He_%d(%.3f) = %.3f', 3, x, y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/tools/evalpoly`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial using double-precision floating-point arithmetic.</span>
-   <span class="package-name">[`@stdlib/math/base/tools/hermitepoly`][@stdlib/math/base/tools/hermitepoly]</span><span class="delimiter">: </span><span class="description">evaluate a physicist's Hermite polynomial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hermite-polynomial]: https://en.wikipedia.org/wiki/Hermite_polynomials

<!-- <related-links> -->

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math/tree/main/base/tools/evalpoly

[@stdlib/math/base/tools/hermitepoly]: https://github.com/stdlib-js/math/tree/main/base/tools/hermitepoly

<!-- </related-links> -->

</section>

<!-- /.links -->
