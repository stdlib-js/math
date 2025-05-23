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

# cosh

> Compute the [hyperbolic cosine][hyperbolic-cosine] of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var cosh = require( '@stdlib/math/base/special/cosh' );
```

#### cosh( x )

Computes the [hyperbolic cosine][hyperbolic-cosine] of a double-precision floating-point number `x`.

```javascript
var v = cosh( 0.0 );
// returns 1.0

v = cosh( 2.0 );
// returns ~3.762

v = cosh( -2.0 );
// returns ~3.762

v = cosh( 710.0 );
// returns Infinity

v = cosh( NaN );
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
var cosh = require( '@stdlib/math/base/special/cosh' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'cosh(%0.4f) = %0.4f', x, cosh );
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
#include "stdlib/math/base/special/cosh.h"
```

#### stdlib_base_cosh( x )

Computes the [hyperbolic cosine][hyperbolic-cosine] of a double-precision floating-point number.

```c
double out = stdlib_base_cosh( 2.0 );
// returns ~3.762

out = stdlib_base_cosh( -2.0 );
// returns ~3.762
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_cosh( const double x );
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
#include "stdlib/math/base/special/cosh.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_cosh( x[ i ] );
        printf( "cosh(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sinh`][@stdlib/math/base/special/sinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic sine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tanh`][@stdlib/math/base/special/tanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic tangent of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-cosine]: http://mathworld.wolfram.com/HyperbolicCosine.html

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math/tree/main/base/special/cos

[@stdlib/math/base/special/sinh]: https://github.com/stdlib-js/math/tree/main/base/special/sinh

[@stdlib/math/base/special/tanh]: https://github.com/stdlib-js/math/tree/main/base/special/tanh

<!-- </related-links> -->

</section>

<!-- /.links -->
