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

# Absolute Difference

> Compute the [absolute difference][absolute-difference] of two real numbers.

<section class="intro">

The [absolute difference][absolute-difference] of two real `numbers` is defined as the absolute value of their difference.

<!-- <equation class="equation" label="eq:absolute_difference" align="center" raw="|\Delta| = | x - y |" alt="Absolute difference"> -->

```math
|\Delta| = | x - y |
```

<!-- <div class="equation" align="center" data-raw-text="|\Delta| = | x - y |" data-equation="eq:absolute_difference">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/utils/absolute-difference/docs/img/equation_absolute_difference.svg" alt="Absolute difference">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var absdiff = require( '@stdlib/math/base/utils/absolute-difference' );
```

#### absdiff( x, y )

Computes the [absolute difference][absolute-difference] of two real numbers.

```javascript
var d = absdiff( 2.0, 5.0 );
// returns 3.0

d = absdiff( -1.0, 3.14 );
// returns ~4.14

d = absdiff( 10.1, -2.05 );
// returns ~12.15

d = absdiff( -0.0, 0.0 );
// returns +0.0

d = absdiff( NaN, 5.0 );
// returns NaN

d = absdiff( 5.0, NaN );
// returns NaN

d = absdiff( Infinity, Infinity );
// returns NaN

d = absdiff( -Infinity, -Infinity );
// returns NaN

d = absdiff( Infinity, -Infinity );
// returns Infinity

d = absdiff( -Infinity, Infinity );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var absdiff = require( '@stdlib/math/base/utils/absolute-difference' );

var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*1.0e4) - 1.0e2;
    y = (randu()*1.0e4) - 1.0e2;
    d = absdiff( x, y );
    console.log( 'x = %d. y = %d. |x-y| = %d.', x, y, d );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/utils/relative-difference`][@stdlib/math/base/utils/relative-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/utils/float64-epsilon-difference`][@stdlib/math/base/utils/float64-epsilon-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers in units of double-precision floating-point epsilon.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[absolute-difference]: https://en.wikipedia.org/wiki/Absolute_difference

<!-- <related-links> -->

[@stdlib/math/base/utils/relative-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/relative-difference

[@stdlib/math/base/utils/float64-epsilon-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/float64-epsilon-difference

<!-- </related-links> -->

</section>

<!-- /.links -->
