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

# erf

> [Error function][error-function].

<section class="intro">

The [error function][error-function] is defined as

<!-- <equation class="equation" label="eq:error_function" align="center" raw="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" alt="Error function."> -->

```math
\mathop{\mathrm{erf}}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" data-equation="eq:error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/erf/docs/img/equation_error_function.svg" alt="Error function.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erf = require( '@stdlib/math/base/special/erf' );
```

#### erf( x )

Evaluates the [error function][error-function].

```javascript
var y = erf( 2.0 );
// returns ~0.9953

y = erf( -1.0 );
// returns ~-0.8427
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erf( NaN );
// returns NaN
```

The [error function][error-function] is an [odd function][odd-function]; i.e., `erf(-x) = -erf(x)`. Thus, in accordance with the [IEEE 754][ieee754] standard, if provided `-0`, the function returns `-0`.

```javascript
var y = erf( -0.0 );
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
var erf = require( '@stdlib/math/base/special/erf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'x: %0.4f, erf(x): %0.4f', x, erf );
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
#include "stdlib/math/base/special/erf.h"
```

#### stdlib_base_erf( x )

Evaluates the [error function][error-function].

```c
double out = stdlib_base_erf( 2.0 );
// returns ~0.9953

out = stdlib_base_erf( -1.0 );
// returns ~-0.8427
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_erf( const double x );
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
#include "stdlib/math/base/special/erf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -10.0, -7.78, -5.56, -3.33, -1.11, 1.11, 3.33, 5.56, 7.78, 10.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_erf( x[ i ] );
        printf( "x: %lf, erf(x): %lf\n", x[ i ], v );
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
-   <span class="package-name">[`@stdlib/math/base/special/erfinv`][@stdlib/math/base/special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfcinv`][@stdlib/math/base/special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[error-function]: https://en.wikipedia.org/wiki/Error_function

[odd-function]: https://en.wikipedia.org/wiki/Even_and_odd_functions

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/erfc]: https://github.com/stdlib-js/math/tree/main/base/special/erfc

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfinv

[@stdlib/math/base/special/erfcinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfcinv

<!-- </related-links> -->

</section>

<!-- /.links -->
