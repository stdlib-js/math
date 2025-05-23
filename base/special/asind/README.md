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

# asind

> Compute the [arcsine][arcsine] (in degrees) of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var asind = require( '@stdlib/math/base/special/asind' );
```

#### asind( x )

Computes the [arcsine][arcsine] (in degrees) of a double-precision floating-point number.

```javascript
var sqrt = require( '@stdlib/math/base/special/sqrt' );

var v = asind( 0.0 );
// returns 0.0

v = asind( 0.5 );
// returns ~30.0

v = asind( sqrt( 2.0 ) / 2.0 );
// returns ~45.0

v = asind( sqrt( 3.0 ) / 2.0 );
// returns ~60.0

v = asind( NaN );
// returns NaN
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = asind( -3.14 );
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
var asind = require( '@stdlib/math/base/special/asind' );

var x = uniform( 100, -1.0, 1.0, {
    'dtype': 'float64'
});

logEachMap( 'asind(%0.4f) = %0.4f', x, asind );
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
#include "stdlib/math/base/special/asind.h"
```

#### stdlib_base_asind( x )

Computes the [arcsine][arcsine] (in degrees) of a double-precision floating-point number.

```c
double out = stdlib_base_asind( 0.0 );
// returns 0.0

out = stdlib_base_asind( 0.5 );
// returns ~30.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_asind( const double x );
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
#include "stdlib/math/base/special/asind.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 0.45, -0.89, 0.33, -0.78, -0.22, 0.66, 0.11, -0.55, 0.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asind( x[ i ] );
        printf( "asind(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/asin`][@stdlib/math/base/special/asin]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asinh`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atand`][@stdlib/math/base/special/atand]</span><span class="delimiter">: </span><span class="description">compute the arctangent (in degrees) of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsine]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/asin]: https://github.com/stdlib-js/math/tree/main/base/special/asin

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/asinh

[@stdlib/math/base/special/atand]: https://github.com/stdlib-js/math/tree/main/base/special/atand

<!-- </related-links> -->

</section>

<!-- /.links -->
