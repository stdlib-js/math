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

# acotd

> Compute the [arccotangent][arccotangent] in degrees of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acotd = require( '@stdlib/math/base/special/acotd' );
```

#### acotd( x )

Computes the [arccotangent][arccotangent] (in degrees) of a double-precision floating-point number.

```javascript
var sqrt = require( '@stdlib/math/base/special/sqrt' );

var v = acotd( 0.0 );
// returns 90.0

v = acotd( sqrt( 3 ) );
// returns ~30.0

v = acotd( 1 );
// returns 45.0

v = acotd( sqrt( 3 ) / 3 );
// returns ~60.0

v = acotd( NaN );
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
var acotd = require( '@stdlib/math/base/special/acotd' );

var x = uniform( 100, -1.0, 1.0, {
    'dtype': 'float64'
});

logEachMap( 'acotd(%0.4f) = %0.4f', x, acotd );
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/acotd.h"
```

#### stdlib_base_acotd( x )

Computes the [arccotangent][arccotangent] (in degrees) of a double-precision floating-point number.

```c
double out = stdlib_base_acotd( 0.0 );
// returns 90.0

out = stdlib_base_acotd( 3.0 );
// returns ~30.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_acotd( const double x );
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
#include "stdlib/math/base/special/acotd.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acotd( x[ i ] );
        printf( "acotd(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acot`][@stdlib/math/base/special/acot]</span><span class="delimiter">: </span><span class="description">compute the inverse cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acotdf`][@stdlib/math/base/special/acotdf]</span><span class="delimiter">: </span><span class="description">compute the arccotangent (in degrees) of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acoth`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atand`][@stdlib/math/base/special/atand]</span><span class="delimiter">: </span><span class="description">compute the arctangent (in degrees) of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cotd`][@stdlib/math/base/special/cotd]</span><span class="delimiter">: </span><span class="description">compute the cotangent of an angle measured in degrees.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arccotangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acot]: https://github.com/stdlib-js/math/tree/main/base/special/acot

[@stdlib/math/base/special/acotdf]: https://github.com/stdlib-js/math/tree/main/base/special/acotdf

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math/tree/main/base/special/acoth

[@stdlib/math/base/special/atand]: https://github.com/stdlib-js/math/tree/main/base/special/atand

[@stdlib/math/base/special/cotd]: https://github.com/stdlib-js/math/tree/main/base/special/cotd

<!-- </related-links> -->

</section>

<!-- /.links -->
