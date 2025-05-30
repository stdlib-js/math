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

# Cotangent

> Evaluate the [cotangent][trigonometric-functions] of a number.

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var cot = require( '@stdlib/math/base/special/cot' );
```

#### cot( x )

Evaluates the [cotangent][trigonometric-functions] of `x` (in radians).

```javascript
var v = cot( 0.0 );
// returns Infinity

v = cot( 3.141592653589793/2.0 );
// returns ~0.0

v = cot( -3.141592653589793/4.0 );
// returns ~-1.0

v = cot( 3.141592653589793/4.0 );
// returns ~1.0

v = cot( NaN );
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
var PI = require( '@stdlib/constants/float64/pi' );
var cot = require( '@stdlib/math/base/special/cot' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -PI/2.0, PI/2.0, opts );

logEachMap( 'cot(%0.4f) = %0.4f', x, cot );
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
#include "stdlib/math/base/special/cot.h"
```

#### stdlib_base_cot( x )

Evaluates the [cotangent][trigonometric-functions] of `x` (in radians).

```c
double out = stdlib_base_cot( 0.0 );
// returns Infinity

out = stdlib_base_cot( 3.141592653589793 / 2.0 );
// returns ~0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_cot( const double x );
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
#include "stdlib/math/base/special/cot.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_cot( x[ i ] );
        printf( "cot(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/csc`][@stdlib/math/base/special/csc]</span><span class="delimiter">: </span><span class="description">compute the cosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[trigonometric-functions]: https://en.wikipedia.org/wiki/Trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/csc]: https://github.com/stdlib-js/math/tree/main/base/special/csc

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math/tree/main/base/special/tan

<!-- </related-links> -->

</section>

<!-- /.links -->
