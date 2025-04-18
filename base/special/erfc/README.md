<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# erfc

> [Complementary error function][complementary-error-function].

<section class="intro">

The [complementary error function][complementary-error-function] is defined as

<!-- <equation class="equation" label="eq:complementary_error_function" align="center" raw="\operatorname{erfc}(x) = 1 - \operatorname{erf}(x) = \frac{2}{\sqrt\pi} \int_x^{\infty} e^{-t^2}\, dt" alt="Complementary error function."> -->

```math
\mathop{\mathrm{erfc}}(x) = 1 - \mathop{\mathrm{erf}}(x) = \frac{2}{\sqrt\pi} \int_x^{\infty} e^{-t^2}\, dt
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erfc}(x) = 1 - \operatorname{erf}(x) = \frac{2}{\sqrt\pi} \int_x^{\infty} e^{-t^2}\, dt" data-equation="eq:complementary_error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/erfc/docs/img/equation_complementary_error_function.svg" alt="Complementary error function.">
    <br>
</div> -->

<!-- </equation> -->

The [complementary error function][complementary-error-function] can also be expressed using Craig's formula

<!-- <equation class="equation" label="eq:craigs_formula" align="center" raw="\operatorname{erfc}(x) = \frac{2}{\pi} \int_0^{\frac{\pi}{2}} \exp \left( - \frac{x^2}{\sin^2 \theta} \right) d\theta" alt="Craig's formula of the complementary error function."> -->

```math
\mathop{\mathrm{erfc}}(x) = \frac{2}{\pi} \int_0^{\frac{\pi}{2}} \exp \left( - \frac{x^2}{\sin^2 \theta} \right) d\theta
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erfc}(x) = \frac{2}{\pi} \int_0^{\frac{\pi}{2}} \exp \left( - \frac{x^2}{\sin^2 \theta} \right) d\theta" data-equation="eq:craigs_formula">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/erfc/docs/img/equation_craigs_formula.svg" alt="Craig's formula of the complementary error function.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erfc = require( '@stdlib/math/base/special/erfc' );
```

#### erfc( x )

Evaluates the [complementary error function][complementary-error-function].

```javascript
var y = erfc( 2.0 );
// returns ~0.0047

y = erfc( -1.0 );
// returns ~1.8427

y = erfc( Infinity );
// returns 0.0

y = erfc( -Infinity );
// returns 2.0
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfc( NaN );
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
var erfc = require( '@stdlib/math/base/special/erfc' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'x: %0.4f, erfc(x): %0.4f', x, erfc );
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
#include "stdlib/math/base/special/erfc.h"
```

#### stdlib_base_erfc( x )

Evaluates the [complementary error function][complementary-error-function].

```c
double out = stdlib_base_erfc( 2.0 );
// returns ~0.0047

out = stdlib_base_erfc( -1.0 );
// returns ~1.8427
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_erfc( const double x );
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
#include "stdlib/math/base/special/erfc.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    const double x[] = { -10.0, -7.78, -5.56, -3.33, -1.11, 1.11, 3.33, 5.56, 7.78, 10.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_erfc( x[ i ] );
        printf( "x: %lf, erfc(x): %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/erf`][@stdlib/math/base/special/erf]</span><span class="delimiter">: </span><span class="description">error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfinv`][@stdlib/math/base/special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfcinv`][@stdlib/math/base/special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfcx`][@stdlib/math/base/special/erfcx]</span><span class="delimiter">: </span><span class="description">scaled complementary error function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[complementary-error-function]: https://en.wikipedia.org/wiki/Error_function

<!-- <related-links> -->

[@stdlib/math/base/special/erf]: https://github.com/stdlib-js/math/tree/main/base/special/erf

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfinv

[@stdlib/math/base/special/erfcinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfcinv

[@stdlib/math/base/special/erfcx]: https://github.com/stdlib-js/math/tree/main/base/special/erfcx

<!-- </related-links> -->

</section>

<!-- /.links -->
