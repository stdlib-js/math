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

# rad2deg

> Convert an angle from radians to degrees.

<section class="usage">

## Usage

```javascript
var rad2deg = require( '@stdlib/math/base/special/rad2deg' );
```

#### rad2deg( x )

Converts an angle from radians to degrees.

```javascript
var d = rad2deg( 3.141592653589793/2.0 );
// returns 90.0

d = rad2deg( -3.141592653589793/4.0 );
// returns -45.0

d = rad2deg( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to finite precision, canonical values may not be returned. For example,

    ```javascript
    var d = rad2deg( 3.141592653589793/6.0 );
    // returns 29.999999999999996
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var rad2deg = require( '@stdlib/math/base/special/rad2deg' );

var opts = {
    'dtype': 'float64'
};
var r = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'radians: %0.4f => degrees: %0.4f', r, rad2deg );
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
#include "stdlib/math/base/special/rad2deg.h"
```

#### stdlib_base_rad2deg( x )

Converts an angle from radians to degrees.

```c
double x = 3.141592653589793/2.0;
double d = stdlib_base_rad2deg( x );
// returns 90.0

x = -3.141592653589793/4.0;
d = stdlib_base_rad2deg( x );
// returns -45.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians).

```c
double stdlib_base_rad2deg( const double x );
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
#include "stdlib/math/base/special/rad2deg.h"
#include "stdlib/constants/float64/two_pi.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double d;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = (double)rand() / (double)RAND_MAX * STDLIB_CONSTANT_FLOAT64_TWO_PI;
        d = stdlib_base_rad2deg( x );
        printf( "radians: %lf => degrees: %lf\n", x, d );
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

-   <span class="package-name">[`@stdlib/math/base/special/deg2rad`][@stdlib/math/base/special/deg2rad]</span><span class="delimiter">: </span><span class="description">convert an angle from degrees to radians.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/deg2rad]: https://github.com/stdlib-js/math/tree/main/base/special/deg2rad

<!-- </related-links> -->

</section>

<!-- /.links -->
