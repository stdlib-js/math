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

# atand

> Compute the [arctangent][arctangent] in degrees of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var atand = require( '@stdlib/math/base/special/atand' );
```

#### atand( x )

Computes the [arctangent][arctangent] (in degrees) of a double-precision floating-point number.

```javascript
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var v = atand( 0.0 );
// returns 0.0

v = atand( 0.5 );
// returns ~26.57

v = atand( 1.0 / sqrt( 3.0 ) );
// returns ~30.0

v = atand( 1.0 );
// returns 45.0

v = atand( Infinity );
// returns 90.0

v = atand( NaN );
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
var atand = require( '@stdlib/math/base/special/atand' );

var x = uniform( 100, -1.0, 1.0, {
    'dtype': 'float64'
});

logEachMap( 'atand(%0.4f) = %0.4f', x, atand );
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/atand.h"
```

#### stdlib_base_atand( x )

Computes the [arctangent][arctangent] (in degrees) of a double-precision floating-point number.

```c
double out = stdlib_base_atand( 0.0 );
// returns 0.0

out = stdlib_base_atand( 0.5 );
// returns ~26.57
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_atand( const double x );
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
#include "stdlib/math/base/special/atand.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_atand( x[ i ] );
        printf( "atand(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/atan`][@stdlib/math/base/special/atan]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acosd`][@stdlib/math/base/special/acosd]</span><span class="delimiter">: </span><span class="description">compute the arccosine (in degrees) of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arctangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/atan]: https://github.com/stdlib-js/math/tree/main/base/special/atan

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math/tree/main/base/special/atanh

[@stdlib/math/base/special/acosd]: https://github.com/stdlib-js/math/tree/main/base/special/acosd

<!-- </related-links> -->

</section>

<!-- /.links -->
