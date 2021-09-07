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

# Flipsign

> Return a complex number with the same magnitude as `z` and the sign of `y*z`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var cflipsign = require( '@stdlib/math/base/special/cflipsign' );
```

#### cflipsign( \[out,] re, im, y )

Returns a complex number with the same magnitude as `z` and the sign of `y*z`.

```javascript
var v = cflipsign( -4.2, 5.5, -4 );
// returns [ 4.2, -5.5 ]

v = cflipsign( 0.0, 0.0, 5 );
// returns [ 0.0, 0.0 ]

v = cflipsign( NaN, NaN, 6 );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = cflipsign( out, -4.2, 5.5, 77 );
// returns <Float64Array>[ -4.2, 5.5 ]

var bool = ( v === out );
// returns true
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
var Complex128 = require( '@stdlib/complex/float64' );
var randu = require( '@stdlib/random/base/randu' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cflipsign = require( '@stdlib/math/base/special/cflipsign' );

var re;
var im;
var z;
var o;
var w;
var i;
var y;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    y = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cflipsign( real(z), imag(z), y );
    w = new Complex128( o[ 0 ], o[ 1 ] );
    console.log( 'flipsign(%s) = %s', z.toString(), w.toString() );
}
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

-   <span class="package-name">[`@stdlib/math/base/ops/cneg`][@stdlib/math/base/ops/cneg]</span><span class="delimiter">: </span><span class="description">negate a complex number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/csignum`][@stdlib/math/base/special/csignum]</span><span class="delimiter">: </span><span class="description">evaluate the signum function of a complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/ops/cneg]: https://github.com/stdlib-js/math/tree/main/base/ops/cneg

[@stdlib/math/base/special/csignum]: https://github.com/stdlib-js/math/tree/main/base/special/csignum

<!-- </related-links> -->

</section>

<!-- /.links -->
