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

# tand

> Computes the [tangent][trigonometric-functions] of an angle measured in degrees.

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var tand = require( '@stdlib/math/base/special/tand' );
```

#### tand( x )

Evaluates the [tangent][trigonometric-functions] of `x` (in degrees).

```javascript
var v = tand( 0.0 );
// returns 0

v = tand( 60.0 );
// returns ~1.73

v = tand( 90.0 );
// returns Infinity

v = tand( NaN );
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
var tand = require( '@stdlib/math/base/special/tand' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -180.0, 180.0, opts );

logEachMap( 'tand(%0.4f) = %0.4f', x, tand );
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
#include "stdlib/math/base/special/tand.h"
```

#### stdlib_base_tand( x )

Evaluates the [tangent][trigonometric-functions] of `x` (in degrees).

```c
double out = stdlib_base_tand( 0.0 );
// returns 0.0

out = stdlib_base_tand( 60.0 );
// returns ~1.73
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_tand( const double x );
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
#include "stdlib/math/base/special/tand.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 30.0, 45.0, 60.0, 90.0 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_tand( x[ i ] );
        printf( "tand(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cosd`][@stdlib/math/base/special/cosd]</span><span class="delimiter">: </span><span class="description">compute the cosine of an angle measured in degrees.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[trigonometric-functions]: https://en.wikipedia.org/wiki/Trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math/tree/main/base/special/tan

[@stdlib/math/base/special/cosd]: https://github.com/stdlib-js/math/tree/main/base/special/cosd

<!-- </related-links> -->

</section>

<!-- /.links -->
