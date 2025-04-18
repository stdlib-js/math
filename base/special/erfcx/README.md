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

# erfcx

> Scaled [complementary error function][complementary-error-function].

<section class="intro">

The scaled [complementary error function][complementary-error-function] is defined as

<!-- <equation class="equation" label="eq:scaled_complementary_error_function" align="center" raw="\operatorname{erfcx}(x) = e^{x^2} \operatorname{erfc}(x)" alt="Scaled complementary error function."> -->

```math
\mathop{\mathrm{erfcx}}(x) = e^{x^2} \mathop{\mathrm{erfc}}(x)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erfcx}(x) = e^{x^2} \operatorname{erfc}(x)" data-equation="eq:scaled_complementary_error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d97f372ed0bdcad1d7d373fad56a663ec94abe9e/lib/node_modules/@stdlib/math/base/special/erfcx/docs/img/equation_scaled_complementary_error_function.svg" alt="Scaled complementary error function.">
    <br>
</div> -->

<!-- </equation> -->

For large values, the scaled [complementary error function][complementary-error-function] is approximately equal to

<!-- <equation class="equation" label="eq:scaled_complementary_error_function_approximation_large_x" align="center" raw="\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}" alt="Approximation for large x"> -->

```math
\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}
```

<!-- <div class="equation" align="center" data-raw-text="\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}" data-equation="eq:scaled_complementary_error_function_approximation_large_x">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ab78b6493866fa172404de2b5d087f050d7c8807/lib/node_modules/@stdlib/math/base/special/erfcx/docs/img/equation_scaled_complementary_error_function_approximation_large_x.svg" alt="Approximation for large x">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erfcx = require( '@stdlib/math/base/special/erfcx' );
```

#### erfcx( x )

Evaluates the scaled [complementary error function][complementary-error-function].

```javascript
var y = erfcx( 0.0 );
// returns 1.0

y = erfcx( 1.0 );
// returns ~0.4276

y = erfcx( -1.0 );
// returns ~5.01

y = erfcx( 50.0 );
// returns ~0.011

y = erfcx( -50.0 );
// returns +Infinity
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfcx( NaN );
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
var erfcx = require( '@stdlib/math/base/special/erfcx' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -30.0, 30.0, opts );

logEachMap( 'x: %0.4f, erfcx(x): %0.4f', x, erfcx );
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
#include "stdlib/math/base/special/erfcx.h"
```

#### stdlib_base_erfcx( x )

Evaluates the [scaled complementary error function][complementary-error-function].

```c
double y  = stdlib_base_erfcx( 0.0 );
// returns 1.0

y  = stdlib_base_erfcx( 1.0 );
// returns ~0.4276
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_erfcx( const double x );
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
#include "stdlib/math/base/special/erfcx.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.22, 0.44, 0.67, 0.89, 1.11, 1.33, 1.56, 1.78, 2.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_erfcx( x[ i ] );
        printf( "x: %lf, erfcx(x): %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/erfc`][@stdlib/math/base/special/erfc]</span><span class="delimiter">: </span><span class="description">complementary error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfcinv`][@stdlib/math/base/special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erf`][@stdlib/math/base/special/erf]</span><span class="delimiter">: </span><span class="description">error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfinv`][@stdlib/math/base/special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[complementary-error-function]: https://en.wikipedia.org/wiki/Error_function

<!-- <related-links> -->

[@stdlib/math/base/special/erfc]: https://github.com/stdlib-js/math/tree/main/base/special/erfc

[@stdlib/math/base/special/erfcinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfcinv

[@stdlib/math/base/special/erf]: https://github.com/stdlib-js/math/tree/main/base/special/erf

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfinv

<!-- </related-links> -->

</section>

<!-- /.links -->
