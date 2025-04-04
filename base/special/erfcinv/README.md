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

# erfcinv

> [Inverse complementary error function][erfcinv].

<section class="intro">

The [inverse complementary error function][erfcinv] is defined as

<!-- <equation class="equation" label="eq:inverse_complementary_error_function" align="center" raw="\operatorname{erfc}^{-1}(1-z) = \operatorname{erf}^{-1}(z)" alt="Inverse complementary error function."> -->

```math
\mathop{\mathrm{erfc}}^{-1}(1-z) = \mathop{\mathrm{erf}}^{-1}(z)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erfc}^{-1}(1-z) = \operatorname{erf}^{-1}(z)" data-equation="eq:inverse_complementary_error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/erfcinv/docs/img/equation_inverse_complementary_error_function.svg" alt="Inverse complementary error function.">
    <br>
</div> -->

<!-- </equation> -->

where `erf^{-1}(z)` is the [inverse error function][@stdlib/math/base/special/erfinv].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erfcinv = require( '@stdlib/math/base/special/erfcinv' );
```

#### erfcinv( x )

Evaluates the [inverse complementary error function][erfcinv].

```javascript
var y = erfcinv( 0.5 );
// returns ~0.4769

y = erfcinv( 0.8 );
// returns ~0.1791

y = erfcinv( 0.0 );
// returns Infinity

y = erfcinv( 2.0 );
// returns -Infinity
```

The domain of `x` is restricted to `[0,2]`. If `x` is outside this interval, the function returns `NaN`.

```javascript
var y = erfcinv( -3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfcinv( NaN );
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
var erfcinv = require( '@stdlib/math/base/special/erfcinv' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 2.0, opts );

logEachMap( 'x: %0.4f, erfcinv(x): %0.4f', x, erfcinv );
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
#include "stdlib/math/base/special/erfcinv.h"
```

#### stdlib_base_erfcinv( x )

Evaluates the [inverse complementary error function][erfcinv].

```c
double out = stdlib_base_erfcinv( 0.5 );
// returns ~0.4769

out = stdlib_base_erfcinv( 0.8 );
// returns ~0.1791
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_erfcinv( const double x );
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
#include "stdlib/math/base/special/erfcinv.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.22, 0.44, 0.67, 0.89, 1.11, 1.33, 1.56, 1.78, 2.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_erfcinv( x[ i ] );
        printf( "x: %lf, erfcinv(x): %lf\n", x[ i ], v );
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
-   <span class="package-name">[`@stdlib/math/base/special/erfinv`][@stdlib/math/base/special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/erfcx`][@stdlib/math/base/special/erfcx]</span><span class="delimiter">: </span><span class="description">scaled complementary error function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[erfcinv]: https://en.wikipedia.org/wiki/Error_function#Inverse_functions

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math/tree/main/base/special/erfinv

<!-- <related-links> -->

[@stdlib/math/base/special/erf]: https://github.com/stdlib-js/math/tree/main/base/special/erf

[@stdlib/math/base/special/erfc]: https://github.com/stdlib-js/math/tree/main/base/special/erfc

[@stdlib/math/base/special/erfcx]: https://github.com/stdlib-js/math/tree/main/base/special/erfcx

<!-- </related-links> -->

</section>

<!-- /.links -->
