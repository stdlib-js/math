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

# acosh

> Compute the [hyperbolic arccosine][hyperbolic-arccosine] of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acosh = require( '@stdlib/math/base/special/acosh' );
```

#### acosh( x )

Computes the [hyperbolic arccosine][hyperbolic-arccosine] of double-precision floating-point number.

```javascript
var v = acosh( 1.0 );
// returns 0.0

v = acosh( 2.0 );
// returns ~1.317

v = acosh( 0.5 );
// returns NaN
```

The domain of `x` is restricted to `[1,+infinity)`. If `x < 1`, the function will return `NaN`.

```javascript
var v = acosh( 0.0 );
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
var acosh = require( '@stdlib/math/base/special/acosh' );

var x = uniform( 100, 1.0, 5.0, {
    'dtype': 'float64'
});

logEachMap( 'acosh(%0.4f) = %0.4f', x, acosh );
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
#include "stdlib/math/base/special/acosh.h"
```

#### stdlib_base_acosh( x )

Computes the [hyperbolic arccosine][hyperbolic-arccosine] of double-precision floating-point number.

```c
double out = stdlib_base_acosh( 1.0 );
// returns 0.0

out = stdlib_base_acosh( 2.0 );
// returns ~1.317
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_acosh( const double x );
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
#include "stdlib/math/base/special/acosh.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acosh( x[ i ] );
        printf( "acosh(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/acos`][@stdlib/math/base/special/acos]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asinh`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-arccosine]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/acos]: https://github.com/stdlib-js/math/tree/main/base/special/acos

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/asinh

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math/tree/main/base/special/atanh

<!-- </related-links> -->

</section>

<!-- /.links -->
