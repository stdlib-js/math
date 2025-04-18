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

# secd

> Compute the [secant][secant] of an angle measured in degrees.

<section class="usage">

## Usage

```javascript
var secd = require( '@stdlib/math/base/special/secd' );
```

#### secd( x )

Computes the [secant][secant] of `x` (in degrees).

```javascript
var v = secd( 30.0 );
// returns ~1.15

v = secd( 45.0 );
// returns ~1.41

v = secd( 60.0 );
// returns ~2.0

v = secd( 90.0 );
// returns Infinity

v = secd( 0.0 );
// returns 1.0

v = secd( NaN );
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
var secd = require( '@stdlib/math/base/special/secd' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'secd(%0.4f) = %0.4f', x, secd );
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
#include "stdlib/math/base/special/secd.h"
```

#### stdlib_base_secd( x )

Computes the [secant][secant] of `x` (in degrees).

```c
double out = stdlib_base_secd( 30.0 );
// returns ~1.15

out = stdlib_base_secd( 45.0 );
// returns ~1.41
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_secd( const double x );
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
#include "stdlib/math/base/special/secd.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 30.0, 45.0, 60.0, 90.0 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_secd( x[ i ] );
        printf( "secd(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cosd`][@stdlib/math/base/special/cosd]</span><span class="delimiter">: </span><span class="description">compute the cosine of an angle measured in degrees.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[secant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/cosd]: https://github.com/stdlib-js/math/tree/main/base/special/cosd

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math/tree/main/base/special/cos

<!-- </related-links> -->

</section>

<!-- /.links -->
