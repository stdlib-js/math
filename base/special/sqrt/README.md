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

# Square Root

> Compute the principal [square root][square-root] of a double-precision floating-point number.

<section class="intro">

The principal [square root][square-root] is defined as

<!-- <equation class="equation" label="eq:principal_square_root" align="center" raw="\sqrt{x^2} = \begin{matrix} x, & \textrm{if}\ x \geq 0\end{matrix}" alt="Principal square root"> -->

```math
\sqrt{x^2} = \begin{matrix} x, & \textrm{if}\ x \geq 0\end{matrix}
```

<!-- <div class="equation" align="center" data-raw-text="\sqrt{x^2} = \begin{matrix} x, &amp; \textrm{if}\ x \geq 0\end{matrix}" data-equation="eq:principal_square_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/sqrt/docs/img/equation_principal_square_root.svg" alt="Principal square root">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sqrt = require( '@stdlib/math/base/special/sqrt' );
```

#### sqrt( x )

Computes the principal [square root][square-root] of a double-precision floating-point number.

```javascript
var v = sqrt( 4.0 );
// returns 2.0

v = sqrt( 9.0 );
// returns 3.0

v = sqrt( 0.0 );
// returns 0.0

v = sqrt( NaN );
// returns NaN
```

For negative numbers, the principal [square root][square-root] is **not** defined.

```javascript
var v = sqrt( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'sqrt(%d) = %0.4f', x, sqrt );
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
#include "stdlib/math/base/special/sqrt.h"
```

#### stdlib_base_sqrt( x )

Computes the principal [square root][square-root] of a double-precision floating-point number.

```c
double y = stdlib_base_sqrt( 9.0 );
// returns 3.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sqrt( const double x );
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
#include "stdlib/math/base/special/sqrt.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, 9.0, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_sqrt( x[ i ] );
        printf( "sqrt(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cbrt`][@stdlib/math/base/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/rsqrt`][@stdlib/math/base/special/rsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[square-root]: https://en.wikipedia.org/wiki/Square_root

<!-- <related-links> -->

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math/tree/main/base/special/cbrt

[@stdlib/math/base/special/rsqrt]: https://github.com/stdlib-js/math/tree/main/base/special/rsqrt

<!-- </related-links> -->

</section>

<!-- /.links -->
