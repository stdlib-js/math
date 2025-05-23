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

# acosf

> Compute the [arccosine][arccosine] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acosf = require( '@stdlib/math/base/special/acosf' );
```

#### acosf( x )

Computes the [arccosine][arccosine] of a single-precision floating-point number (in radians).

```javascript
var v = acosf( 1.0 );
// returns 0.0

v = acosf( 0.707 ); // ~pi/4
// returns ~0.7855

v = acosf( 0.866 ); // ~pi/6
// returns ~0.5236

v = acosf( NaN );
// returns NaN
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = acosf( -3.14 );
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
var acosf = require( '@stdlib/math/base/special/acosf' );

var x = uniform( 100, -1.0, 1.0, {
    'dtype': 'float32'
});

logEachMap( 'acosf(%0.4f) = %0.4f', x, acosf );
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
#include "stdlib/math/base/special/acosf.h"
```

#### stdlib_base_acosf( x )

Computes the [arccosine][arccosine] of a single-precision floating-point number (in radians).

```c
float out = stdlib_base_acosf( 1.0f );
// returns 0.0f

out = stdlib_base_acosf( 0.707f ); // ~pi/4
// returns ~0.7855f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value (in radians).

```c
float stdlib_base_acosf( const float x );
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
#include "stdlib/math/base/special/acosf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -1.0f, -0.78f, -0.56f, -0.33f, -0.11f, 0.11f, 0.33f, 0.56f, 0.78f, 1.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acosf( x[ i ] );
        printf( "acos(%f) = %f\n", x[ i ], v );
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
-   <span class="package-name">[`@stdlib/math/base/special/acosh`][@stdlib/math/base/special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asinf`][@stdlib/math/base/special/asinf]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atanf`][@stdlib/math/base/special/atanf]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arccosine]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acos]: https://github.com/stdlib-js/math/tree/main/base/special/acos

[@stdlib/math/base/special/acosh]: https://github.com/stdlib-js/math/tree/main/base/special/acosh

[@stdlib/math/base/special/asinf]: https://github.com/stdlib-js/math/tree/main/base/special/asinf

[@stdlib/math/base/special/atanf]: https://github.com/stdlib-js/math/tree/main/base/special/atanf

<!-- </related-links> -->

</section>

<!-- /.links -->
