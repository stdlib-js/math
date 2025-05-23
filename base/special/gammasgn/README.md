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

# gammasgn

> Sign of the [gamma function][@stdlib/math/base/special/gamma].

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
var gammasgn = require( '@stdlib/math/base/special/gammasgn' );
```

#### gammasgn( x )

Returns the sign of the [gamma function][@stdlib/math/base/special/gamma].

```javascript
var v = gammasgn( 1.0 );
// returns 1.0

v = gammasgn( -2.5 );
// returns -1.0

v = gammasgn( 0.0 );
// returns 0.0

v = gammasgn( NaN );
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
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var gammasgn = require( '@stdlib/math/base/special/gammasgn' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'x: %0.4f, f(x): %0.4f', x, gammasgn );
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
#include "stdlib/math/base/special/gammasgn.h"
```

#### stdlib_base_gammasgn( x )

Returns the sign of the [gamma-function][@stdlib/math/base/special/gamma].

```c
double out = stdlib_base_gammasgn( 1.0 );
// returns 1.0

out = stdlib_base_gammasgn( -2.5 );
// returns -1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_gammasgn( const double x );
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
#include "stdlib/math/base/special/gammasgn.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        v = stdlib_base_gammasgn( x );
        printf( "gammasgn(%lf) = %lf\n", x, v );
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
