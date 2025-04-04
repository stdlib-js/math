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

# round2

> Round a numeric value to the nearest power of two on a linear scale.

<section class="usage">

## Usage

```javascript
var round2 = require( '@stdlib/math/base/special/round2' );
```

#### round2( x )

Rounds a `numeric` value to the nearest power of two on a linear scale.

```javascript
var v = round2( -4.2 );
// returns -4.0

v = round2( -4.5 );
// returns -4.0

v = round2( -4.6 );
// returns -4.0

v = round2( 9.99999 );
// returns 8.0

v = round2( 9.5 );
// returns 8.0

v = round2( 13.0 );
// returns 16.0

v = round2( -13.0 );
// returns -16.0

v = round2( 0.0 );
// returns 0.0

v = round2( -0.0 );
// returns -0.0

v = round2( Infinity );
// returns Infinity

v = round2( -Infinity );
// returns -Infinity

v = round2( NaN );
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
var round2 = require( '@stdlib/math/base/special/round2' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'x: %0.4f. Rounded: %0.4f.', x, round2 );
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
#include "stdlib/math/base/special/round2.h"
```

#### stdlib_base_round2( x )

Rounds a `numeric` value to the nearest power of two on a linear scale.

```c
double out = stdlib_base_round2( -4.2 );
// returns -4.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_round2( const double x );
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
#include "stdlib/math/base/special/round2.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_round2( x[ i ] );
        printf( "round2(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceil2`][@stdlib/math/base/special/ceil2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floor2`][@stdlib/math/base/special/floor2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/round`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="package-name">[`@stdlib/math/base/special/round10`][@stdlib/math/base/special/round10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 on a linear scale.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ceil2]: https://github.com/stdlib-js/math/tree/main/base/special/ceil2

[@stdlib/math/base/special/floor2]: https://github.com/stdlib-js/math/tree/main/base/special/floor2

[@stdlib/math/base/special/round]: https://github.com/stdlib-js/math/tree/main/base/special/round

[@stdlib/math/base/special/round10]: https://github.com/stdlib-js/math/tree/main/base/special/round10

<!-- </related-links> -->

</section>

<!-- /.links -->
