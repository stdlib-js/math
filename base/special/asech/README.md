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

# asech

> Compute the [hyperbolic arcsecant][hyperbolic-arcsecant] of a number.

<section class="usage">

## Usage

```javascript
var asech = require( '@stdlib/math/base/special/asech' );
```

#### asech( x )

Computes the [hyperbolic arcsecant][hyperbolic-arcsecant] of `x`.

```javascript
var v = asech( 1.0 );
// returns 0.0

v = asech( 0.5 );
// returns ~1.317

v = asech( 0.0 );
// returns Infinity
```

The domain of `x` is restricted to the interval `[0, 1]`. For `x` outside of this interval, the function returns `NaN`.

```javascript
var v = asech( -1.0 );
// returns NaN

v = asech( 2.0 );
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
var asech = require( '@stdlib/math/base/special/asech' );

var x = uniform( 100, 0.1, 1.0, {
    'dtype': 'float64'
});

logEachMap( 'asech(%0.4f) = %0.4f', x, asech );
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
#include "stdlib/math/base/special/asech.h"
```

#### stdlib_base_asech( x )

Computes the [hyperbolic arcsecant][hyperbolic-arcsecant] of `x`.

```c
double out = stdlib_base_asech( 1.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_asech( const double x );
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
#include "stdlib/math/base/special/asech.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.5, 1.0, 1.89, 2.33, 3.22, 3.67, 4.11, 4.56, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asech( x[ i ] );
        printf( "asech(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acosh`][@stdlib/math/base/special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asec`][@stdlib/math/base/special/asec]</span><span class="delimiter">: </span><span class="description">compute the inverse (arc) secant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asech`][@stdlib/math/base/special/asech]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acoth`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-arcsecant]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/acosh]: https://github.com/stdlib-js/math/tree/main/base/special/acosh

[@stdlib/math/base/special/asec]: https://github.com/stdlib-js/math/tree/main/base/special/asec

[@stdlib/math/base/special/asech]: https://github.com/stdlib-js/math/tree/main/base/special/asech

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math/tree/main/base/special/acoth

<!-- </related-links> -->

</section>

<!-- /.links -->
