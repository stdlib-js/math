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

# sinh

> Compute the [hyperbolic sine][hyperbolic-sine] of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var sinh = require( '@stdlib/math/base/special/sinh' );
```

#### sinh( x )

Computes the [hyperbolic sine][hyperbolic-sine] of double-precision floating-point number `x`.

```javascript
var v = sinh( 0.0 );
// returns 0.0

v = sinh( -0.0 );
// returns -0.0

v = sinh( 2.0 );
// returns ~3.627

v = sinh( -2.0 );
// returns ~-3.627

v = sinh( NaN );
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
var sinh = require( '@stdlib/math/base/special/sinh' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'sinh( %0.4f ) = %0.4f', x, sinh );
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
#include "stdlib/math/base/special/sinh.h"
```

#### stdlib_base_sinh( x )

Computes the [hyperbolic sine][hyperbolic-sine] of double-precision floating-point number `x`.

```c
double out = stdlib_base_sinh( 2.0 );
// returns ~3.627

out = stdlib_base_sinh( -2.0 );
// returns ~-3.627
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sinh( const double x );
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
#include "stdlib/math/base/special/sinh.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_sinh( x[ i ] );
        printf( "sinh(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/cosh`][@stdlib/math/base/special/cosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tanh`][@stdlib/math/base/special/tanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic tangent of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-sine]: http://mathworld.wolfram.com/HyperbolicSine.html

<!-- <related-links> -->

[@stdlib/math/base/special/cosh]: https://github.com/stdlib-js/math/tree/main/base/special/cosh

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

[@stdlib/math/base/special/tanh]: https://github.com/stdlib-js/math/tree/main/base/special/tanh

<!-- </related-links> -->

</section>

<!-- /.links -->
