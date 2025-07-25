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

# kernelLog1p

> Evaluate a correction term for double-precision base-2 and base-10 logarithms when `1+f` is in `[√2/2, √2]`.

<section class="usage">

## Usage

```javascript
var kernelLog1p = require( '@stdlib/math/base/special/kernel-log1p' );
```

#### kernelLog1p( f )

Evaluates a correction term for double-precision base-2 and base-10 logarithms when `1+f` is in `[√2/2, √2]`.

```javascript
var v = kernelLog1p( 1.0 );
// returns ~0.1931

v = kernelLog1p( 1.4142135623730951 );
// returns ~0.4672

v = kernelLog1p( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is a helper function for computing logarithms in base `e`. Argument reduction and adding the final term of the polynomial must be done by the caller for increased accuracy when different bases are used. For reference, see [`@stdlib/math/base/special/log2`][@stdlib/math/base/special/log2] and [`@stdlib/math/base/special/log10`][@stdlib/math/base/special/log10].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var kernelLog1p = require( '@stdlib/math/base/special/kernel-log1p' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, sqrt( 2.0 ) / 2.0, sqrt( 2.0 ), opts );

logEachMap( 'kernelLog1p(%0.4f) = %0.4f', x, kernelLog1p );
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
#include "stdlib/math/base/special/kernel_log1p.h"
```

#### stdlib_base_kernel_log1p( f )

Evaluates a correction term for double-precision base-2 and base-10 logarithms when `1+f` is in `[√2/2, √2]`.

```c
double out = stdlib_base_kernel_log1p( 1.0 );
// returns ~0.1931

out = stdlib_base_kernel_log1p( 1.4142135623730951 );
// returns ~0.4672
```

The function accepts the following arguments:

-   **f**: `[in] double` input value.

```c
double stdlib_base_kernel_log1p( const double f );
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
#include "stdlib/math/base/special/kernel_log1p.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.7071, 0.7856, 0.8642, 0.9428, 1.0213, 1.0999, 1.1785, 1.2570, 1.3356, 1.4142 };

    double out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_log1p( x[ i ] );
        printf ( "x[ i ]: %lf, out: %lf\n", x[ i ], out );
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

-   <span class="package-name">[`@stdlib/math/base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/log2]: https://github.com/stdlib-js/math/tree/main/base/special/log2

[@stdlib/math/base/special/log10]: https://github.com/stdlib-js/math/tree/main/base/special/log10

<!-- <related-links> -->

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math/tree/main/base/special/log1p

<!-- </related-links> -->

</section>

<!-- /.links -->
