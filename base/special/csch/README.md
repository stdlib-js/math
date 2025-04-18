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

# csch

> Compute the [hyperbolic cosecant][hyperbolic-functions] of a number.

<section class="usage">

## Usage

```javascript
var csch = require( '@stdlib/math/base/special/csch' );
```

#### csch( x )

Computes the [hyperbolic cosecant][hyperbolic-functions] of `x`.

```javascript
var v = csch( 0.0 );
// returns Infinity

v = csch( 2.0 );
// returns ~0.2757

v = csch( -2.0 );
// returns ~-0.2757

v = csch( NaN );
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
var csch = require( '@stdlib/math/base/special/csch' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'csch( %0.4f ) = %0.4f', x, csch );
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
#include "stdlib/math/base/special/csch.h"
```

#### stdlib_base_csch( x )

Computes the [hyperbolic cosecant][hyperbolic-functions] of double-precision floating-point number `x`.

```c
double out = stdlib_base_csch( 2.0 );
// returns ~0.2757

out = stdlib_base_csch( -2.0 );
// returns ~-0.2757
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_csch( const double x );
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
#include "stdlib/math/base/special/csch.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -4.0, -3.11, -2.22, -1.33, -0.44, 0.44, 1.33, 2.22, 3.11, 4.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_csch( x[ i ] );
        printf( "csch(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acsch`][@stdlib/math/base/special/acsch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/csc`][@stdlib/math/base/special/csc]</span><span class="delimiter">: </span><span class="description">compute the cosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/coth`][@stdlib/math/base/special/coth]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cotangent of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sinh`][@stdlib/math/base/special/sinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic sine of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-functions]: https://en.wikipedia.org/wiki/Hyperbolic_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acsch]: https://github.com/stdlib-js/math/tree/main/base/special/acsch

[@stdlib/math/base/special/csc]: https://github.com/stdlib-js/math/tree/main/base/special/csc

[@stdlib/math/base/special/coth]: https://github.com/stdlib-js/math/tree/main/base/special/coth

[@stdlib/math/base/special/sinh]: https://github.com/stdlib-js/math/tree/main/base/special/sinh

<!-- </related-links> -->

</section>

<!-- /.links -->
