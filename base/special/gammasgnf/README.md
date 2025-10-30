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

# gammasgnf

> Sign of the [gamma function][@stdlib/math/base/special/gamma] for a single-precision floating-point number.

<section class="intro">

The sign of the [gamma-function][@stdlib/math/base/special/gamma] is defined as

<!-- <equation class="equation" label="eq:gamma_sign_function" align="center" raw="\operatorname{gammasgn} ( x ) = \begin{cases} 1 & \textrm{if}\ \Gamma > 0 \\ -1 & \textrm{if}\ \Gamma < 0 \\ 0 & \textrm{otherwise}\ \end{cases}" alt="Sign of the gamma function"> -->

```math
\mathop{\mathrm{gammasgn}} ( x ) = \begin{cases} 1 & \textrm{if}\ \Gamma > 0 \\ -1 & \textrm{if}\ \Gamma < 0 \\ 0 & \textrm{otherwise}\ \end{cases}
```

<!-- </equation> -->

The [gamma function][@stdlib/math/base/special/gamma] can be computed as the product of `gammasgn(x)` and `exp(gammaln(x))`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gammasgnf = require( '@stdlib/math/base/special/gammasgnf' );
```

#### gammasgnf( x )

Computes the sign of the [gamma function][@stdlib/math/base/special/gamma] for a single-precision floating-point number.

```javascript
var v = gammasgnf( 1.0 );
// returns 1.0

v = gammasgnf( -2.5 );
// returns -1.0

v = gammasgnf( 0.0 );
// returns 0.0

v = gammasgnf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The [gamma function][@stdlib/math/base/special/gamma] is not defined for negative integer values (i.e., `gamma(x) === NaN` when `x` is a negative integer). The [natural logarithm of the gamma function][@stdlib/math/base/special/gammaln] is defined for negative integer values (i.e., `gammaln(x) === Infinity` when `x` is a negative integer). Accordingly, in order for the equality `gamma(x) === gammasgn(x) * exp(gammaln(x))` to hold (i.e., return `NaN`), `gammasgn` needs to either return `NaN` or `0`. By convention, this function returns `0`.

</section>

<!-- /. notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logEachMap = require( '@stdlib/console/log-each-map' );
var uniform = require( '@stdlib/random/array/uniform' );
var gammasgnf = require( '@stdlib/math/base/special/gammasgnf' );

var x = uniform( 100, -10.0, 10.0, {
    'dtype': 'float32'
});

logEachMap( 'x: %0.4f, f(x): %0.4f', x, gammasgnf );
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
#include "stdlib/math/base/special/gammasgnf.h"
```

#### stdlib_base_gammasgnf( x )

Computes the sign of the [gamma function][@stdlib/math/base/special/gamma] for a single-precision floating-point number.

```c
float out = stdlib_base_gammasgnf( 1.0f );
// returns 1.0f

out = stdlib_base_gammasgnf( -2.5f );
// returns -1.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_gammasgnf( const float x );
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
#include "stdlib/math/base/special/gammasgnf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x;
    float v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (float)rand() / (float)RAND_MAX ) * 100.0f;
        v = stdlib_base_gammasgnf( x );
        printf( "gammasgnf(%f) = %f\n", x, v );
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

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math/tree/main/base/special/gamma

[@stdlib/math/base/special/gammaln]: https://github.com/stdlib-js/math/tree/main/base/special/gammaln

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
