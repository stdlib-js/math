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

# atanh

> Compute the [hyperbolic arctangent][inverse-hyperbolic] of a number.

<section class="usage">

## Usage

```javascript
var atanh = require( '@stdlib/math/base/special/fast/atanh' );
```

#### atanh( x )

Computes the [hyperbolic arctangent][inverse-hyperbolic] of a `number` (in radians).

```javascript
var v = atanh( 0.0 );
// returns 0.0

v = atanh( -0.0 );
// returns -0.0

v = atanh( 0.5 );
// returns ~0.549

v = atanh( 0.9 );
// returns ~1.472

v = atanh( 1.0 );
// returns Infinity

v = atanh( -1.0 );
// returns -Infinity
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = atanh( -3.14 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For small `x`, the function will underflow.

    ```javascript
    var v = atanh( 1.0e-17 );
    // returns 0.0
    // (expected 1.0e-17)
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var atanh = require( '@stdlib/math/base/special/fast/atanh' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 103, -1.0, 1.0, opts );

logEachMap( 'atanh(%0.4f) = %0.4f', x, atanh );
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
#include "stdlib/math/base/special/fast/atanh.h"
```

#### stdlib_base_fast_atanh( x )

Computes the [hyperbolic arctangent][inverse-hyperbolic] of a double-precision floating-point number (in radians).

```c
double out = stdlib_base_fast_atanh( 0.0 );
// returns 0.0

out = stdlib_base_fast_atanh( -0.0 );
// returns -0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_fast_atanh( const double x );
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
#include "stdlib/math/base/special/fast/atanh.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -1.0, -0.78, -0.56, -0.33, -0.11, 0.11, 0.33, 0.56, 0.78, 1.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_fast_atanh( x[ i ] );
        printf( "atanh(%lf) = %lf\n", x[ i ], v );
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

-   <span class="package-name">[`@stdlib/math/base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[inverse-hyperbolic]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math/tree/main/base/special/atanh

<!-- </related-links> -->

</section>

<!-- /.links -->
