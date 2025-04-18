<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# atan2

> Compute the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

<section class="usage">

## Usage

```javascript
var atan2 = require( '@stdlib/math/base/special/atan2' );
```

#### atan2( y, x )

Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

```javascript
var v = atan2( 2.0, 2.0 ); // => atan(1.0)
// returns ~0.785

v = atan2( 6.0, 2.0 ); // => atan(3.0)
// returns ~1.249

v = atan2( -1.0, -1.0 ); // => atan(1.0) - π
// returns ~-2.356

v = atan2( 3.0, 0.0 ); // => π/2
// returns ~1.571

v = atan2( -2.0, 0.0 ); // => -π/2
// returns ~-1.571

v = atan2( 0.0, 0.0 );
// returns 0.0

v = atan2( 3.0, NaN );
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
var atan2 = require( '@stdlib/math/base/special/atan2' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 100.0, opts );
var y = uniform( 100, 0.0, 100.0, opts );

logEachMap( 'atan2(%0.4f,%0.4f) = %0.4f', y, x, atan2 );
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
#include "stdlib/math/base/special/atan2.h"
```

#### stdlib_base_atan2( y, x )

Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

```c
double out = stdlib_base_atan2( 2.0, 2.0 );
// returns ~0.785

out = stdlib_base_atan2( 6.0, 2.0 );
// returns ~1.249
```

The function accepts the following arguments:

-   **y**: `[in] double` - `y` coordinate.
-   **x**: `[in] double` - `x` coordinate.

```c
double stdlib_base_atan2( const double y, const double x );
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
#include "stdlib/math/base/special/atan2.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double y;
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        y = ( ( (double)rand() / (double)RAND_MAX ) * 100.0 );
        x = ( ( (double)rand() / (double)RAND_MAX ) * 100.0 );
        v = stdlib_base_atan2( y, x );
        printf( "atan2(%lf, %lf) = %lf\n", y, x, v );
    }
    return 0;
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/atan]: https://github.com/stdlib-js/math/tree/main/base/special/atan

<!-- </related-links> -->

</section>

<!-- /.links -->
