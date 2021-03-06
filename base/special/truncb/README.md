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

# truncb

> Round a numeric value to the nearest multiple of b^n toward zero.

<section class="usage">

## Usage

```javascript
var truncb = require( '@stdlib/math/base/special/truncb' );
```

#### truncb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` toward zero.

```javascript
// Round a value to 4 decimal places:
var v = truncb( 3.141592653589793, -4, 10 );
// returns 3.1415

// If n = 0 or b = 1, `truncb` behaves like `trunc`:
v = truncb( 3.141592653589793, 0, 2 );
// returns 3.0

// Round a value to the nearest multiple of two toward zero:
v = truncb( 5.0, 1, 2 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to rounding error in [floating-point numbers][ieee754], rounding may **not** be exact.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var truncb = require( '@stdlib/math/base/special/truncb' );

var x;
var n;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( (randu()*10.0) - 5.0 );
    b = round( randu()*10.0 );
    v = truncb( x, n, b );
    console.log( 'x: %d. %d^%d: %d. Rounded: %d.', x, b, n, pow( b, n ), v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorb`][@stdlib/math/base/special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundb`][@stdlib/math/base/special/roundb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n on a linear scale.</span>
-   <span class="package-name">[`@stdlib/math/base/special/trunc`][@stdlib/math/base/special/trunc]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward zero.</span>
-   <span class="package-name">[`@stdlib/math/base/special/truncn`][@stdlib/math/base/special/truncn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n toward zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math/tree/main/base/special/ceilb

[@stdlib/math/base/special/floorb]: https://github.com/stdlib-js/math/tree/main/base/special/floorb

[@stdlib/math/base/special/roundb]: https://github.com/stdlib-js/math/tree/main/base/special/roundb

[@stdlib/math/base/special/trunc]: https://github.com/stdlib-js/math/tree/main/base/special/trunc

[@stdlib/math/base/special/truncn]: https://github.com/stdlib-js/math/tree/main/base/special/truncn

<!-- </related-links> -->

</section>

<!-- /.links -->
