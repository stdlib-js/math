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

# erfinv

> [Inverse error function][inverse-error-function].

<section class="intro">

The [inverse error function][inverse-error-function] is defined in terms of the [Maclaurin series][maclaurin-series]

<!-- <equation class="equation" label="eq:inverse_error_function" align="center" raw="\operatorname{erf}^{-1}(z)=\sum_{k=0}^\infty\frac{c_k}{2k+1}\left (\frac{\sqrt{\pi}}{2}z\right )^{2k+1}" alt="Inverse error function."> -->

```math
\mathop{\mathrm{erf}}^{-1}(z)=\sum_{k=0}^\infty\frac{c_k}{2k+1}\left (\frac{\sqrt{\pi}}{2}z\right )^{2k+1}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erf}^{-1}(z)=\sum_{k=0}^\infty\frac{c_k}{2k+1}\left (\frac{\sqrt{\pi}}{2}z\right )^{2k+1}" data-equation="eq:inverse_error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/erfinv/docs/img/equation_inverse_error_function.svg" alt="Inverse error function.">
    <br>
</div> -->

<!-- </equation> -->

where `c_0 = 1` and

<!-- <equation class="equation" label="eq:inverse_error_function_series_coefficients" align="center" raw="c_k=\sum_{m=0}^{k-1}\frac{c_m c_{k-1-m}}{(m+1)(2m+1)} = \left\{1,1,\frac{7}{6},\frac{127}{90},\frac{4369}{2520},\frac{34807}{16200},\ldots\right\}" alt="Series coefficients."> -->

```math
c_k=\sum_{m=0}^{k-1}\frac{c_m c_{k-1-m}}{(m+1)(2m+1)} = \left\{1,1,\frac{7}{6},\frac{127}{90},\frac{4369}{2520},\frac{34807}{16200},\ldots\right\}
```

<!-- <div class="equation" align="center" data-raw-text="c_k=\sum_{m=0}^{k-1}\frac{c_m c_{k-1-m}}{(m+1)(2m+1)} = \left\{1,1,\frac{7}{6},\frac{127}{90},\frac{4369}{2520},\frac{34807}{16200},\ldots\right\}" data-equation="eq:inverse_error_function_series_coefficients">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/erfinv/docs/img/equation_inverse_error_function_series_coefficients.svg" alt="Series coefficients.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erfinv = require( '@stdlib/math/base/special/erfinv' );
```

#### erfinv( x )

Evaluates the [inverse error function][inverse-error-function].

```javascript
var y = erfinv( 0.5 );
// returns ~0.4769

y = erfinv( 0.8 );
// returns ~0.9062

y = erfinv( -1.0 );
// returns -Infinity

y = erfinv( 1.0 );
// returns Infinity
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var y = erfinv( -3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfinv( NaN );
// returns NaN
```

The [inverse error function][inverse-error-function] is an [odd function][odd-function]; i.e., `erfinv(-x) = -erfinv(x)`. Thus, in accordance with the [IEEE 754][ieee754] standard, if provided `-0`, the function returns `-0`.

```javascript
var y = erfinv( -0.0 );
// returns -0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var erfinv = require( '@stdlib/math/base/special/erfinv' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -1.0, 1.0, opts );

logEachMap( 'x: %0.4f, erfinv(x): %0.4f', x, erfinv );
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
#include "stdlib/math/base/special/erfinv.h"
```

#### stdlib_base_erfinv( x )

Evaluates the [inverse error function][inverse-error-function].

```c
double out = stdlib_base_erfinv( 0.5 );
// returns ~0.4769

out = stdlib_base_erfinv( 0.8 );
// returns ~0.9062
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_erfinv( const double x );
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
#include "stdlib/math/base/special/erfinv.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    const double x[] = { -1.0, -0.78, -0.56, -0.33, -0.11, 0.11, 0.33, 0.56, 0.78, 1.0 };
    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_erfinv( x[ i ] );
        printf( "x: %lf, erfinv(x): %lf\n", x[ i ], v );
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
-   <span class="package-name">[`@stdlib/math/base/special/erfc`][@stdlib/math/base/special/erfc]</span><span class="delimiter">: </span><span class="description">complementary error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfcinv`][@stdlib/math/base/special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[inverse-error-function]: https://en.wikipedia.org/wiki/Error_function#Inverse_functions

[maclaurin-series]: http://mathworld.wolfram.com/MaclaurinSeries.html

[odd-function]: https://en.wikipedia.org/wiki/Even_and_odd_functions

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/erf]: https://github.com/stdlib-js/math/tree/main/base/special/erf

[@stdlib/math/base/special/erfc]: https://github.com/stdlib-js/math/tree/main/base/special/erfc

[@stdlib/math/base/special/erfcinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfcinv

<!-- </related-links> -->

</section>

<!-- /.links -->
