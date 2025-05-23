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

# ceil10

> Round a numeric value to the nearest power of 10 toward positive infinity.

<section class="usage">

## Usage

```javascript
var ceil10 = require( '@stdlib/math/base/special/ceil10' );
```

#### ceil10( x )

Rounds a `numeric` value to the nearest power of `10` toward positive infinity.

```javascript
var v = ceil10( -4.2 );
// returns -1.0

v = ceil10( -4.5 );
// returns -1.0

v = ceil10( -4.6 );
// returns -1.0

v = ceil10( 9.99999 );
// returns 10.0

v = ceil10( 9.5 );
// returns 10.0

v = ceil10( 13.0 );
// returns 100.0

v = ceil10( -13.0 );
// returns -10.0

v = ceil10( 0.0 );
// returns 0.0

v = ceil10( -0.0 );
// returns -0.0

v = ceil10( Infinity );
// returns Infinity

v = ceil10( -Infinity );
// returns -Infinity

v = ceil10( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function may not return accurate results for subnormals due to a general loss in precision.

    ```javascript
    var v = ceil10( -1.0e-323 ); // should return -1.0e-323
    // returns -0.0
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var ceil10 = require( '@stdlib/math/base/special/ceil10' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'x: %0.4f. Rounded: %0.4f.', x, ceil10 );
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
#include "stdlib/math/base/special/ceil10.h"
```

#### stdlib_base_ceil10( x )

Rounds a `numeric` value to the nearest power of `10` toward positive infinity.

```c
double y = stdlib_base_ceil10( -4.2 );
// returns -1.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_ceil10( const double x );
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
#include "stdlib/math/base/special/ceil10.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.14, -3.14, 0.0, 9.0 / 0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_ceil10( x[ i ] );
        printf( "ceil10(%lf) = %lf\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/ceil`][@stdlib/math/base/special/ceil]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ceil2`][@stdlib/math/base/special/ceil2]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of two toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floor10`][@stdlib/math/base/special/floor10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/round10`][@stdlib/math/base/special/round10]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest power of 10 on a linear scale.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ceil]: https://github.com/stdlib-js/math/tree/main/base/special/ceil

[@stdlib/math/base/special/ceil2]: https://github.com/stdlib-js/math/tree/main/base/special/ceil2

[@stdlib/math/base/special/floor10]: https://github.com/stdlib-js/math/tree/main/base/special/floor10

[@stdlib/math/base/special/round10]: https://github.com/stdlib-js/math/tree/main/base/special/round10

<!-- </related-links> -->

</section>

<!-- /.links -->
