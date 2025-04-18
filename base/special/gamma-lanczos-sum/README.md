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

# Gamma Lanczos Sum

> Calculate the Lanczos sum for the approximation of the [gamma function][gamma-function].

<section class="intro">

The [Lanczos approximation][lanczos-approximation] for the [gamma function][gamma-function] can be written in partial fraction form as follows:

<!-- <equation class="equation" label="eq:lanczos_approximation" align="center" raw="\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)" alt="Lanczos approximation for gamma function."> -->

```math
\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)
```

<!-- <div class="equation" align="center" data-raw-text="\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)" data-equation="eq:lanczos_approximation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gamma-lanczos-sum/docs/img/equation_lanczos_approximation.svg" alt="Lanczos approximation for gamma function.">
    <br>
</div> -->

<!-- </equation> -->

where `g` is an [arbitrary constant][@stdlib/constants/float64/gamma-lanczos-g] and `L_g(n)` is the Lanczos sum.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gammaLanczosSum = require( '@stdlib/math/base/special/gamma-lanczos-sum' );
```

#### gammaLanczosSum( x )

Calculates the Lanczos sum for the approximation of the [gamma function][gamma-function].

```javascript
var v = gammaLanczosSum( 4.0 );
// returns ~950.366

v = gammaLanczosSum( -1.5 );
// returns ~1373366.245

v = gammaLanczosSum( -0.5 );
// returns ~-699841.735

v = gammaLanczosSum( 0.5 );
// returns ~96074.186

v = gammaLanczosSum( 0.0 );
// returns Infinity

v = gammaLanczosSum( NaN );
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
var gammaLanczosSum = require( '@stdlib/math/base/special/gamma-lanczos-sum' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'x: %0.4f, f(x): %0.4f', x, gammaLanczosSum );
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
#include "stdlib/math/base/special/gamma_lanczos_sum.h"
```

#### stdlib_base_gamma_lanczos_sum( x )

Calculates the Lanczos sum for the approximation of the [gamma function][gamma-function].

```c
double out = stdlib_base_gamma_lanczos_sum( 4.0 );
// returns ~950.366

out = stdlib_base_gamma_lanczos_sum( -1.5 );
// returns ~1373366.245
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_gamma_lanczos_sum( const double x );
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
#include "stdlib/math/base/special/gamma_lanczos_sum.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    const double x[] = { 4.0, -1.5, -0.5, 0.5 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_gamma_lanczos_sum( x[ i ] );
        printf( "gamma_lanczos_sum(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled`][@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled]</span><span class="delimiter">: </span><span class="description">calculate a scaled Lanczos sum for the approximation of the gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/constants/float64/gamma-lanczos-g]: https://github.com/stdlib-js/constants-float64-gamma-lanczos-g

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[lanczos-approximation]: https://en.wikipedia.org/wiki/Lanczos_approximation

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math/tree/main/base/special/gamma

[@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled]: https://github.com/stdlib-js/math/tree/main/base/special/gamma-lanczos-sum-expg-scaled

<!-- </related-links> -->

</section>

<!-- /.links -->
