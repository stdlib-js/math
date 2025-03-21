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

# asecd

> Compute the [arcsecant][arcsecant] (in degrees) of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var asecd = require( '@stdlib/math/base/special/asecd' );
```

#### asecd( x )

Computes the [arcsecant][arcsecant] (in degrees) of a double-precision floating-point number.

```javascript
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var v = asecd( 1 );
// returns 0.0

v = asecd( 2 * sqrt( 3 ) / 3 );
// returns ~30.0

v = asecd( sqrt( 2 ) );
// returns ~45.0

v = asecd( 2 );
// returns ~60.0

v = asecd( Infinity );
// returns 90.0

v = asecd( NaN );
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
var asecd = require( '@stdlib/math/base/special/asecd' );

var x = uniform( 100, -10.0, 10.0, {
    'dtype': 'float64'
});

logEachMap( 'asecd(%0.4f) = %0.4f', x, asecd );
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
#include "stdlib/math/base/special/asecd.h"
```

#### stdlib_base_asecd( x )

Computes the [arcsecant][arcsecant] (in degrees) of a double-precision floating-point number.

```c
double out = stdlib_base_asecd( 1.0 );
// returns 0.0

out = stdlib_base_asecd( 2.0 );
// returns ~60.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_asecd( const double x );
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
#include "stdlib/math/base/special/asecd.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asecd( x[ i ] );
        printf( "asecd(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/asec`][@stdlib/math/base/special/asec]</span><span class="delimiter">: </span><span class="description">compute the inverse (arc) secant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asech`][@stdlib/math/base/special/asech]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acosd`][@stdlib/math/base/special/acosd]</span><span class="delimiter">: </span><span class="description">compute the arccosine (in degrees) of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/secd`][@stdlib/math/base/special/secd]</span><span class="delimiter">: </span><span class="description">compute the secant of an angle measured in degrees.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/asec]: https://github.com/stdlib-js/math/tree/main/base/special/asec

[@stdlib/math/base/special/asech]: https://github.com/stdlib-js/math/tree/main/base/special/asech

[@stdlib/math/base/special/acosd]: https://github.com/stdlib-js/math/tree/main/base/special/acosd

[@stdlib/math/base/special/secd]: https://github.com/stdlib-js/math/tree/main/base/special/secd

<!-- </related-links> -->

</section>

<!-- /.links -->
