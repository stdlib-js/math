<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Gamma Scaled Lanczos Sum

> Calculate a scaled Lanczos sum for the approximation of the [gamma function][gamma-function] as a single precision floating-point number.

<section class="intro">

The [Lanczos approximation][lanczos-approximation] for the [gamma function][gamma-function] can be written in partial fraction form as follows:

<!-- <equation class="equation" label="eq:lanczos_approximation" align="center" raw="\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)" alt="Lanczos approximation for gamma function."> -->

```math
\Gamma ( n ) = \frac{(n+g-0.5)^{n-0.5}}{e^{n+g-0.5}} L_g(n)
```

<!-- </equation> -->

where `g` is an [arbitrary constant][@stdlib/constants/float32/gamma-lanczos-g] and `L_g(n)` is the Lanczos sum. The scaled Lanczos sum is given by

<!-- <equation class="equation" label="eq:scaled_lanczos_sum" align="center" raw="L_g(n) \cdot \exp(-g)" alt="Scaled Lanczos sum."> -->

```math
L_g(n) \cdot \exp(-g)
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var gammaLanczosSumExpGScaledf = require( '@stdlib/math/base/special/gamma-lanczos-sum-expg-scaledf' );
```

#### gammaLanczosSumExpGScaledf( x )

Calculates the Lanczos sum for the approximation of the [gamma function][gamma-function] (scaled by `exp(-g)`, where `g = 1.42845618724823`) as a single precision floating-point number.

<!-- eslint-disable id-length -->

```javascript
var v = gammaLanczosSumExpGScaledf( 4.0 );
// returns ~0.748

v = gammaLanczosSumExpGScaledf( -1.5 );
// returns ~0.193

v = gammaLanczosSumExpGScaledf( -0.5 );
// returns ~-0.558

v = gammaLanczosSumExpGScaledf( 0.5 );
// returns ~1.772

v = gammaLanczosSumExpGScaledf( 0.0 );
// returns Infinity

v = gammaLanczosSumExpGScaledf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var gammaLanczosSumExpGScaledf = require( '@stdlib/math/base/special/gamma-lanczos-sum-expg-scaledf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'x: %0.4f, f(x): %0.4f', x, gammaLanczosSumExpGScaledf );
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
#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaledf.h"
```

#### stdlib_base_gamma_lanczos_sum_expg_scaledf( x )

Calculates the Lanczos sum for the approximation of the [gamma function][gamma-function] (scaled by `exp(-g)`, where `g = 1.42845618724823`) as a single precision floating-point number.

```c
float out = stdlib_base_gamma_lanczos_sum_expg_scaledf( 4.0f );
// returns ~0.018f

out = stdlib_base_gamma_lanczos_sum_expg_scaledf( -1.5f );
// returns ~25.337f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_gamma_lanczos_sum_expg_scaledf( const float x );
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
#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaledf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 4.0f, -1.5f, -0.5f, 0.5f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_gamma_lanczos_sum_expg_scaledf( x[ i ] );
        printf( "gamma_lanczos_sum_expg_scaledf(%f) = %f\n", x[ i ], y );
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

[@stdlib/constants/float32/gamma-lanczos-g]: https://github.com/stdlib-js/constants-float32-gamma-lanczos-g

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[lanczos-approximation]: https://en.wikipedia.org/wiki/Lanczos_approximation

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
