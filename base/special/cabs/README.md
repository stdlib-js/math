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

# Absolute Value

> Compute an [absolute value][absolute-value] of a complex number.

<section class="intro">

The [absolute value][absolute-value] of a complex number is defined as

<!-- <equation class="equation" label="eq:absolute_value_complex" align="center" raw="|a + bi| = \sqrt{a^2 + b^2}" alt="Absolute value"> -->

<div class="equation" align="center" data-raw-text="|a + bi| = \sqrt{a^2 + b^2}" data-equation="eq:absolute_value_complex">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/cabs/docs/img/equation_absolute_value_complex.svg" alt="Absolute value">
    <br>
</div>

<!-- </equation> -->

which corresponds to the length of a vector from the origin to a complex value plotted in the complex plane.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cabs = require( '@stdlib/math/base/special/cabs' );
```

#### cabs( re, im )

Computes an [absolute value][absolute-value] of a `complex` number comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var y = cabs( 5.0, 3.0 );
// returns ~5.83
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
var cabs = require( '@stdlib/math/base/special/cabs' );

var re;
var im;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    console.log( 'cabs(%s) = %d', z.toString(), cabs( real(z), imag(z) ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cabs2`][@stdlib/math/base/special/cabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a complex number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/abs`][@stdlib/math/base/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

<!-- <related-links> -->

[@stdlib/math/base/special/cabs2]: https://github.com/stdlib-js/math/tree/main/base/special/cabs2

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

<!-- </related-links> -->

</section>

<!-- /.links -->
