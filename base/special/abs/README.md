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

# abs

> Compute the [absolute value][absolute-value] of a double-precision floating-point number.

<section class="intro">

The [absolute value][absolute-value] is defined as

<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

```math
|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="|x| = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ -x &amp; \textrm{if}\ x &lt; 0\end{cases}" data-equation="eq:absolute_value">
    <img src="" alt="Absolute value">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
```

#### abs( x )

Computes the [absolute value][absolute-value] of a double-precision floating-point number.

```javascript
var v = abs( -1.0 );
// returns 1.0

v = abs( 2.0 );
// returns 2.0

v = abs( 0.0 );
// returns 0.0

v = abs( -0.0 );
// returns 0.0

v = abs( NaN );
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
var abs = require( '@stdlib/math/base/special/abs' );

var x = discreteUniform( 100, -100, 100, {
    'dtype': 'float64'
});

logEachMap( 'abs(%d) = %d', x, abs );
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
#include "stdlib/math/base/special/abs.h"
```

#### stdlib_base_abs( x )

Computes the absolute value of a double-precision floating-point number.

```c
double y = stdlib_base_abs( -5.0 );
// returns 5.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_abs( const double x );
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
#include "stdlib/math/base/special/abs.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_abs( x[ i ] );
        printf( "|%lf| = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/abs2`][@stdlib/math/base/special/abs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/absf`][@stdlib/math/base/special/absf]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/labs`][@stdlib/math/base/special/labs]</span><span class="delimiter">: </span><span class="description">compute an absolute value of a signed 32-bit integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

<!-- <related-links> -->

[@stdlib/math/base/special/abs2]: https://github.com/stdlib-js/math/tree/main/base/special/abs2

[@stdlib/math/base/special/absf]: https://github.com/stdlib-js/math/tree/main/base/special/absf

[@stdlib/math/base/special/labs]: https://github.com/stdlib-js/math/tree/main/base/special/labs

<!-- </related-links> -->

</section>

<!-- /.links -->
