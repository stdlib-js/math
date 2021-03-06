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

# polar

> Compute the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a complex number.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cpolar = require( '@stdlib/math/base/special/cpolar' );
```

#### cpolar( \[out,] re, im )

Computes the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a complex number comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var o = cpolar( 5.0, 3.0 );
// returns [ ~5.83, ~0.5404 ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var o = cpolar( out, 5.0, 3.0 );
// returns <Float64Array>[ ~5.83, ~0.5404 ]

var bool = ( o === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cpolar = require( '@stdlib/math/base/special/cpolar' );

var re;
var im;
var z;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cpolar( real(z), imag(z) );
    z = z.toString();
    console.log( 'abs(%s) = %d. arg(%s) = %d', z, o[0], z, o[1] );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cabs`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute an absolute value of a complex number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cphase`][@stdlib/math/base/special/cphase]</span><span class="delimiter">: </span><span class="description">compute the argument of a complex number in radians.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math/tree/main/base/special/cabs

[@stdlib/math/base/special/cphase]: https://github.com/stdlib-js/math/tree/main/base/special/cphase

<!-- <related-links> -->

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math/tree/main/base/special/cabs

[@stdlib/math/base/special/cphase]: https://github.com/stdlib-js/math/tree/main/base/special/cphase

<!-- </related-links> -->

</section>

<!-- /.links -->
