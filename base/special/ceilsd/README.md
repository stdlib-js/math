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

# ceilsd

> Round a numeric value to the nearest number toward positive infinity with N significant figures.

<section class="usage">

## Usage

```javascript
var ceilsd = require( '@stdlib/math/base/special/ceilsd' );
```

#### ceilsd( x, n, b )

Rounds a `numeric` value to the nearest `number` toward positive infinity with `n` significant figures.

```javascript
var v = ceilsd( 3.141592653589793, 5, 10 );
// returns 3.1416

v = ceilsd( 3.141592653589793, 1, 10 );
// returns 4.0

v = ceilsd( 12368.0, 2, 10 );
// returns 13000.0

v = ceilsd( 0.0313, 2, 2 );
// returns 0.046875
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var ceilsd = require( '@stdlib/math/base/special/ceilsd' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5000.0, 5000.0, opts );

logEachMap( 'x: %0.4f. y: %d. z: %d. Rounded: %0.4f.', x, 5, 10, ceilsd );
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
#include "stdlib/math/base/special/ceilsd.h"
```

#### stdlib_base_ceilsd( x, n, b )

Rounds a `numeric` value to the nearest `number` toward positive infinity with `n` significant figures.

```c
double out = stdlib_base_ceilsd( 0.0313, 2, 2 );
// returns 0.046875
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` number of significant figures.
-   **b**: `[in] int32_t` base.

```c
double stdlib_base_ceilsd( const double x, const int32_t n, const int32_t b );
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
#include "stdlib/math/base/special/ceilsd.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };
    const int32_t n[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    const int32_t b[] = { 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_ceilsd( x[ i ], n[ i ], b[ i ] );
        printf( "ceilsd(%lf, %d, %d) = %lf\n", x[ i ], n[ i ], b[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceil`][@stdlib/math/base/special/ceil]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorsd`][@stdlib/math/base/special/floorsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward negative infinity with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundsd`][@stdlib/math/base/special/roundsd]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest value with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math/base/special/truncsd`][@stdlib/math/base/special/truncsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward zero with N significant figures.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ceil]: https://github.com/stdlib-js/math/tree/main/base/special/ceil

[@stdlib/math/base/special/floorsd]: https://github.com/stdlib-js/math/tree/main/base/special/floorsd

[@stdlib/math/base/special/roundsd]: https://github.com/stdlib-js/math/tree/main/base/special/roundsd

[@stdlib/math/base/special/truncsd]: https://github.com/stdlib-js/math/tree/main/base/special/truncsd

<!-- </related-links> -->

</section>

<!-- /.links -->
