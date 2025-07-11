<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Absolute Value

> Compute the [absolute value][absolute-value] of a single-precision floating-point number.

<section class="intro">

The [absolute value][absolute-value] is defined as

<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

```math
|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="|x| = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ -x &amp; \textrm{if}\ x &lt; 0\end{cases}" data-equation="eq:absolute_value">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5b4ee1217697eb737011e0d588fddbb119806753/lib/node_modules/@stdlib/math/base/special/absf/docs/img/equation_absolute_value.svg" alt="Absolute value">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var absf = require( '@stdlib/math/base/special/absf' );
```

#### absf( x )

Computes the [absolute value][absolute-value] of a single-precision floating-point number.

```javascript
var v = absf( -1.0 );
// returns 1.0

v = absf( 2.0 );
// returns 2.0

v = absf( 0.0 );
// returns 0.0

v = absf( -0.0 );
// returns 0.0

v = absf( NaN );
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
var absf = require( '@stdlib/math/base/special/absf' );

var x = discreteUniform( 100, -50, 50, {
    'dtype': 'float32'
});

logEachMap( 'absf(%d) = %d', x, absf );
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
#include "stdlib/math/base/special/absf.h"
```

#### stdlib_base_absf( x )

Computes the absolute value of a single-precision floating-point number.

```c
float y = stdlib_base_absf( -5.0f );
// returns 5.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_absf( const float x );
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
#include "stdlib/math/base/special/absf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_absf( x[ i ] );
        printf( "|%f| = %f\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/abs`][@stdlib/math/base/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/abs2f`][@stdlib/math/base/special/abs2f]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/labs`][@stdlib/math/base/special/labs]</span><span class="delimiter">: </span><span class="description">compute an absolute value of a signed 32-bit integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

<!-- <related-links> -->

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

[@stdlib/math/base/special/abs2f]: https://github.com/stdlib-js/math/tree/main/base/special/abs2f

[@stdlib/math/base/special/labs]: https://github.com/stdlib-js/math/tree/main/base/special/labs

<!-- </related-links> -->

</section>

<!-- /.links -->
