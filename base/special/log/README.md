<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Logarithm

> Compute the base `b` [logarithm][logarithm] of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var log = require( '@stdlib/math/base/special/log' );
```

#### log( x, b )

Computes the base `b` logarithm of a double-precision floating-point number.

```javascript
var v = log( 100.0, 10.0 );
// returns 2.0

v = log( 16.0, 2.0 );
// returns 4.0

v = log( 5.0, 1.0 );
// returns Infinity
```

For negative `x` or `b`, the [logarithm][logarithm] is **not** defined.

```javascript
var v = log( -4.0, 1.0 );
// returns NaN

v = log( 2.0, -4.0 );
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
var log = require( '@stdlib/math/base/special/log' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 100, opts );
var b = discreteUniform( 100, 0, 5, opts );

logEachMap( 'log( %0.4f, %0.4f ) = %0.4f', x, b, log );
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
#include "stdlib/math/base/special/log.h"
```

#### stdlib_base_log( x, b )

Computes the base `b` logarithm of a double-precision floating-point number.

```c
double v = stdlib_base_log( 100.0, 10.0 );
// returns 2.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **b**: `[in] double` input value.

```c
double stdlib_base_log( const double x, const double b );
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
#include "stdlib/math/base/special/log.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double out;
    double x;
    double b;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        b = ( (double)rand() / (double)RAND_MAX ) * 5.0;
        out = stdlib_base_log( x, b );
        printf( "log(%lf, %lf) = %lf\n", x, b, out );
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

-   <span class="package-name">[`@stdlib/math/base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log10`][@stdlib/math/base/special/log10]</span><span class="delimiter">: </span><span class="description">common logarithm (base ten).</span>
-   <span class="package-name">[`@stdlib/math/base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log2`][@stdlib/math/base/special/log2]</span><span class="delimiter">: </span><span class="description">binary logarithm (base 2).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[logarithm]: https://en.wikipedia.org/wiki/Logarithm

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/log10]: https://github.com/stdlib-js/math/tree/main/base/special/log10

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math/tree/main/base/special/log1p

[@stdlib/math/base/special/log2]: https://github.com/stdlib-js/math/tree/main/base/special/log2

<!-- </related-links> -->

</section>

<!-- /.links -->
