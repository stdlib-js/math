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

# y0

> Compute the [Bessel function of the second kind][bessel-second-kind] of order zero.

<section class="intro">

The [Bessel function of the second kind][bessel-second-kind] of order zero is defined as

<!-- <equation class="equation" label="eq:bessel_second_kind_order_zero" align="center" raw="Y_0(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta) \, d\theta -\frac{2}{\pi} \int_0^\infty  e^{-x \sinh t} \, dt." alt="Bessel function of the second kind of order zero"> -->

```math
Y_0(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta) \, d\theta -\frac{2}{\pi} \int_0^\infty  e^{-x \sinh t} \, dt.
```

<!-- <div class="equation" align="center" data-raw-text="Y_0(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta) \, d\theta -\frac{2}{\pi} \int_0^\infty  e^{-x \sinh t} \, dt." data-equation="eq:bessel_second_kind_order_zero">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/bessely0/docs/img/equation_bessel_second_kind_order_zero.svg" alt="Bessel function of the second kind of order zero">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var y0 = require( '@stdlib/math/base/special/bessely0' );
```

#### y0( x )

Computes the [Bessel function of the second kind][bessel-second-kind] of order zero at `x`.

```javascript
var v = y0( 0.0 );
// returns -Infinity

v = y0( 1.0 );
// returns ~0.088

v = y0( Infinity );
// returns 0.0
```

If `x < 0` or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = y0( -1.0 );
// returns NaN

v = y0( -Infinity );
// returns NaN

v = y0( NaN );
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
var bessely0 = require( '@stdlib/math/base/special/bessely0' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 100.0, opts );

logEachMap( 'bessely0(%0.4f) = %0.4f', x, bessely0 );
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
#include "stdlib/math/base/special/bessely0.h"
```

#### stdlib_base_bessely0( x )

Computes the [Bessel function of the second kind][bessel-second-kind] of order zero at `x`.

```c
double out = stdlib_base_bessely0( 0.0 );
// returns -Infinity

out = stdlib_base_bessely0( 1.0 );
// returns ~0.088
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_bessely0( const double x );
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
#include "stdlib/math/base/special/bessely0.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 1.0, 2.0, 3.0, 4.0 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_bessely0( x[ i ] );
        printf( "bessely0(%lf) = %lf\n", x[ i ], y );
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
-   <span class="package-name">[`@stdlib/math/base/special/besselj1`][@stdlib/math/base/special/besselj1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order one.</span>
-   <span class="package-name">[`@stdlib/math/base/special/bessely1`][@stdlib/math/base/special/bessely1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bessel-second-kind]: https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_second_kind:_Y.CE.B1

<!-- <related-links> -->

[@stdlib/math/base/special/besselj0]: https://github.com/stdlib-js/math/tree/main/base/special/besselj0

[@stdlib/math/base/special/besselj1]: https://github.com/stdlib-js/math/tree/main/base/special/besselj1

[@stdlib/math/base/special/bessely1]: https://github.com/stdlib-js/math/tree/main/base/special/bessely1

<!-- </related-links> -->

</section>

<!-- /.links -->
