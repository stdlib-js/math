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

# acscd

> Compute the [arccosecant][arccosecant] in degrees of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acscd = require( '@stdlib/math/base/special/acscd' );
```

#### acscd( x )

Computes the [arccosecant][arccosecant] (in degrees) of a double-precision floating-point number.

```javascript
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var v = acscd( Infinity );
// returns 0.0

v = acscd( 2 * sqrt( 3 ) / 3 );
// returns ~60.0

v = acscd( sqrt( 2 ) );
// returns ~45.0

v = acscd( 2 );
// returns ~30.0

v = acscd( 1 );
// returns 90.0

v = acscd( NaN );
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
var acscd = require( '@stdlib/math/base/special/acscd' );

var x = uniform( 100, -10.0, 10.0, {
    'dtype': 'float64'
});

logEachMap( 'acscd(%0.4f) = %0.4f', x, acscd );
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
#include "stdlib/math/base/special/acscd.h"
```

#### stdlib_base_acscd( x )

Computes the [arccosecant][arccosecant] (in degrees) of a double-precision floating-point number.

```c
double out = stdlib_base_acscd( 1.0 );
// returns 90.0

out = stdlib_base_acscd( 2.0 );
// returns ~30.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_acscd( const double x );
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
#include "stdlib/math/base/special/acscd.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acscd( x[ i ] );
        printf( "acscd(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acsc`][@stdlib/math/base/special/acsc]</span><span class="delimiter">: </span><span class="description">compute the arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acsch`][@stdlib/math/base/special/acsch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asecd`][@stdlib/math/base/special/asecd]</span><span class="delimiter">: </span><span class="description">compute the arcsecant (in degrees) of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asind`][@stdlib/math/base/special/asind]</span><span class="delimiter">: </span><span class="description">compute the arcsine (in degrees) of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cscd`][@stdlib/math/base/special/cscd]</span><span class="delimiter">: </span><span class="description">compute the cosecant of a degree.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arccosecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acsc]: https://github.com/stdlib-js/math/tree/main/base/special/acsc

[@stdlib/math/base/special/acsch]: https://github.com/stdlib-js/math/tree/main/base/special/acsch

[@stdlib/math/base/special/asecd]: https://github.com/stdlib-js/math/tree/main/base/special/asecd

[@stdlib/math/base/special/asind]: https://github.com/stdlib-js/math/tree/main/base/special/asind

[@stdlib/math/base/special/cscd]: https://github.com/stdlib-js/math/tree/main/base/special/cscd

<!-- </related-links> -->

</section>

<!-- /.links -->
