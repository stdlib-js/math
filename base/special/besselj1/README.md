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

# j1

> Compute the [Bessel function of the first kind][bessel-first-kind] of order one.

<section class="intro">

The [Bessel function of the first kind][bessel-first-kind] of order one is defined as

<!-- <equation class="equation" label="eq:bessel_first_kind_order_one" align="center" raw="J_1 (x) = \frac{1}{2 \pi} \int_{-\pi}^\pi e^{i(\tau - x \sin(\tau))} \,d\tau" alt="Bessel function of the first kind of order one"> -->

```math
J_1 (x) = \frac{1}{2 \pi} \int_{-\pi}^\pi e^{i(\tau - x \sin(\tau))} \,d\tau
```

<!-- <div class="equation" align="center" data-raw-text="J_1 (x) = \frac{1}{2 \pi} \int_{-\pi}^\pi e^{i(\tau - x \sin(\tau))} \,d\tau" data-equation="eq:bessel_first_kind_order_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/besselj1/docs/img/equation_bessel_first_kind_order_one.svg" alt="Bessel function of the first kind of order one">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var j1 = require( '@stdlib/math/base/special/besselj1' );
```

#### j1( x )

Computes the [Bessel function of the first kind][bessel-first-kind] of order one at `x`.

```javascript
var v = j1( 0.0 );
// returns 0.0

v = j1( 1.0 );
// returns ~0.440

v = j1( Infinity );
// returns 0.0

v = j1( -Infinity );
// returns 0.0

v = j1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var besselj1 = require( '@stdlib/math/base/special/besselj1' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 100.0, opts );

logEachMap( 'besselj1(%0.4f) = %0.4f', x, besselj1 );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/besselj1.h"
```

#### stdlib_base_besselj1( x )

Computes the [Bessel function of the first kind][bessel-first-kind] of order one at `x`.

```c
double out = stdlib_base_besselj1( 0.0 );
// returns 0.0

out = stdlib_base_besselj1( 1.0 );
// returns ~0.440
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_besselj1( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/besselj1.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.005, 3.14, 10.0, 51.125, 99.99, 100.0 };
    double v;
    int i;

    for ( i = 0; i < 7; i++ ) {
        v = stdlib_base_besselj1( x[ i ] );
        printf( "besselj1(%lf) = %lf\n", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/besselj0`][@stdlib/math/base/special/besselj0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order zero.</span>
-   <span class="package-name">[`@stdlib/math/base/special/bessely0`][@stdlib/math/base/special/bessely0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order zero.</span>
-   <span class="package-name">[`@stdlib/math/base/special/bessely1`][@stdlib/math/base/special/bessely1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bessel-first-kind]: https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_first_kind:_J.CE.B1

<!-- <related-links> -->

[@stdlib/math/base/special/besselj0]: https://github.com/stdlib-js/math/tree/main/base/special/besselj0

[@stdlib/math/base/special/bessely0]: https://github.com/stdlib-js/math/tree/main/base/special/bessely0

[@stdlib/math/base/special/bessely1]: https://github.com/stdlib-js/math/tree/main/base/special/bessely1

<!-- </related-links> -->

</section>

<!-- /.links -->
