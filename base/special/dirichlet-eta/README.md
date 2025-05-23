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

# Dirichlet Eta Function

> [Dirichlet eta][eta-function] function.

<section class="intro">

The [Dirichlet eta][eta-function] function is defined by the [Dirichlet series][dirichlet-series]

<!-- <equation class="equation" label="eq:dirichlet_eta_function" align="center" raw="\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots" alt="Dirichlet eta function"> -->

```math
\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots
```

<!-- <div class="equation" align="center" data-raw-text="\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots" data-equation="eq:dirichlet_eta_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/dirichlet-eta/docs/img/equation_dirichlet_eta_function.svg" alt="Dirichlet eta function">
    <br>
</div> -->

<!-- </equation> -->

where `s` is a complex variable equal to `σ + ti`. The series is convergent for all complex numbers having a real part greater than `0`.

Note that the [Dirichlet eta][eta-function] function is also known as the **alternating zeta function** and denoted `ζ*(s)`. The series is an alternating sum corresponding to the Dirichlet series expansion of the [Riemann zeta][@stdlib/math/base/special/riemann-zeta] function. Accordingly, the following relation holds:

<!-- <equation class="equation" label="eq:dirichlet_riemann_relation" align="center" raw="\eta(s) = (1-2^{1-s})\zeta(s)" alt="Dirichlet-Riemann zeta relation"> -->

```math
\eta(s) = (1-2^{1-s})\zeta(s)
```

<!-- <div class="equation" align="center" data-raw-text="\eta(s) = (1-2^{1-s})\zeta(s)" data-equation="eq:dirichlet_riemann_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/dirichlet-eta/docs/img/equation_dirichlet_riemann_relation.svg" alt="Dirichlet-Riemann zeta relation">
    <br>
</div> -->

<!-- </equation> -->

where `ζ(s)` is the [Riemann zeta][@stdlib/math/base/special/riemann-zeta] function.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var eta = require( '@stdlib/math/base/special/dirichlet-eta' );
```

#### eta( s )

Evaluates the Dirichlet eta function for a double-precision floating-point number `s`.

```javascript
var v = eta( 0.0 ); // Abel sum of 1-1+1-1+...
// returns 0.5

v = eta( -1.0 ); // Abel sum of 1-2+3-4+...
// returns 0.25

v = eta( 1.0 ); // alternating harmonic series => ln(2)
// returns 0.6931471805599453

v = eta( 3.14 );
// returns ~0.9096

v = eta( NaN );
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
var eta = require( '@stdlib/math/base/special/dirichlet-eta' );

var opts = {
    'dtype': 'float64'
};
var s = uniform( 200, -50.0, 50.0, opts );

logEachMap( 's: %0.4f, η(s): %0.4f', s, eta );
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
#include "stdlib/math/base/special/dirichlet_eta.h"
```

#### stdlib_base_eta( s )

Evaluates the Dirichlet eta function for a double-precision floating-point number `s`.

```c
double y = stdlib_base_eta( 0.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **s**: `[in] double` input value.

```c
double stdlib_base_eta( const double s );
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
#include "stdlib/math/base/special/dirichlet_eta.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 45.0, 90.0, 0.0, 0.0 / 0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_eta( x[ i ] );
        printf( "η(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[eta-function]: https://en.wikipedia.org/wiki/Dirichlet_eta_function

[dirichlet-series]: https://en.wikipedia.org/wiki/Dirichlet_series

[@stdlib/math/base/special/riemann-zeta]: https://github.com/stdlib-js/math/tree/main/base/special/riemann-zeta

</section>

<!-- /.links -->
