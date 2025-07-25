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

# asinh

> Compute the [hyperbolic arcsine][inverse-hyperbolic] of a number.

<section class="usage">

## Usage

```javascript
var asinh = require( '@stdlib/math/base/special/fast/asinh' );
```

#### asinh( x )

Computes the [hyperbolic arcsine][inverse-hyperbolic] of a `number` (in radians).

```javascript
var v = asinh( 0.0 );
// returns 0.0

v = asinh( -0.0 );
// returns -0.0

v = asinh( 2.0 );
// returns ~1.444

v = asinh( -2.0 );
// returns ~-1.444

v = asinh( NaN );
// returns NaN

v = asinh( -Infinity );
// returns -Infinity

v = asinh( Infinity );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For large `x`, the function will overflow.

    ```javascript
    var v = asinh( 1.0e200 );
    // returns Infinity
    // (expected 461.2101657793691)
    ```

-   For small `x`, the function will underflow.

    ```javascript
    var v = asinh( 1.0e-50 );
    // returns 0.0
    // (expected 1.0e-50)
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var asinh = require( '@stdlib/math/base/special/fast/asinh' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 103, -5.0, 5.0, opts );

logEachMap( 'asinh(%0.4f) = %0.4f', x, asinh );
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
#include "stdlib/math/base/special/fast/asinh.h"
```

#### stdlib_base_fast_asinh( x )

Computes the [hyperbolic arcsine][inverse-hyperbolic] of a double-precision floating-point number.

```c
double out = stdlib_base_fast_asinh( 0.0 );
// returns 0.0

out = stdlib_base_fast_asinh( 2.0 );
// returns ~1.444
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_fast_asinh( const double x );
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
#include "stdlib/math/base/special/fast/asinh.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_fast_asinh( x[ i ] );
        printf( "asinh(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/asinh`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[inverse-hyperbolic]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/asinh

<!-- </related-links> -->

</section>

<!-- /.links -->
