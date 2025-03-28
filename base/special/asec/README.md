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

# asec

> Compute the [inverse (arc) secant][arcsecant] of a number.

<section class="usage">

## Usage

```javascript
var asec = require( '@stdlib/math/base/special/asec' );
```

#### asec( x )

Computes the [inverse (arc) secant][arcsecant] of `x`.

```javascript
var v = asec( 1.0 );
// returns 0.0

v = asec( 2.0 );
// returns ~1.0472

v = asec( NaN );
// returns NaN
```

The domain of `x` is restricted to the intervals `[-inf, -1]` and `[1, inf]`. For `x` outside of these intervals, the function returns `NaN`.

```javascript
var v = asec( -0.5 );
// returns NaN

v = asec( 0.5 );
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
var asec = require( '@stdlib/math/base/special/asec' );

var x = uniform( 100, 1.0, 10.0, {
    'dtype': 'float64'
});

logEachMap( 'asec(%0.4f) = %0.4f', x, asec );
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
#include "stdlib/math/base/special/asec.h"
```

#### stdlib_base_asec( x )

Computes the [inverse (arc) secant][arcsecant] of `x`.

```c
double out = stdlib_base_asec( 2.0 );
// returns ~1.0472
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_asec( const double x );
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
#include "stdlib/math/base/special/asec.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asec( x[ i ] );
        printf( "asec(%lf) = %lf\n", x[ i ], v );
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
-   <span class="package-name">[`@stdlib/math/base/special/acsc`][@stdlib/math/base/special/acsc]</span><span class="delimiter">: </span><span class="description">compute the arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asech`][@stdlib/math/base/special/asech]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acos`][@stdlib/math/base/special/acos]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acot]: https://github.com/stdlib-js/math/tree/main/base/special/acot

[@stdlib/math/base/special/acsc]: https://github.com/stdlib-js/math/tree/main/base/special/acsc

[@stdlib/math/base/special/asech]: https://github.com/stdlib-js/math/tree/main/base/special/asech

[@stdlib/math/base/special/acos]: https://github.com/stdlib-js/math/tree/main/base/special/acos

<!-- </related-links> -->

</section>

<!-- /.links -->
