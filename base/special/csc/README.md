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

# Cosecant

> Evaluate the [cosecant][trigonometric-functions] of a number.

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var csc = require( '@stdlib/math/base/special/csc' );
```

#### csc( x )

Evaluates the [cosecant][trigonometric-functions] of `x` (in radians).

```javascript
var v = csc( 0.0 );
// returns Infinity

v = csc( 3.141592653589793/2.0 );
// returns 1.0

v = csc( -3.141592653589793/6.0 );
// returns ~-2.0

v = csc( 3.141592653589793/6.0 );
// returns ~2.0

v = csc( NaN );
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
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var csc = require( '@stdlib/math/base/special/csc' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -TWO_PI, TWO_PI, opts );

logEachMap( 'csc(%0.4f) = %0.4f', x, csc );
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
#include "stdlib/math/base/special/csc.h"
```

#### stdlib_base_csc( x )

Evaluates the [cosecant][trigonometric-functions] of `x` (in radians).

```c
double out = stdlib_base_csc( 0.0 );
// returns Infinity

out = stdlib_base_csc( 3.141592653589793 / 2.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_csc( const double x );
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
#include "stdlib/math/base/special/csc.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_csc( x[ i ] );
        printf( "csc(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cot`][@stdlib/math/base/special/cot]</span><span class="delimiter">: </span><span class="description">evaluate the cotangent of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[trigonometric-functions]: https://en.wikipedia.org/wiki/Trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/cot]: https://github.com/stdlib-js/math/tree/main/base/special/cot

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

<!-- </related-links> -->

</section>

<!-- /.links -->
