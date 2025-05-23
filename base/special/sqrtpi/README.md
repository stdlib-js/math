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

# sqrtpi

> Compute the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive number.

<section class="usage">

## Usage

```javascript
var sqrtpi = require( '@stdlib/math/base/special/sqrtpi' );
```

#### sqrtpi( x )

Computes the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive double-precision floating-point number.

```javascript
var v = sqrtpi( 4.0 );
// returns ~3.5449

v = sqrtpi( 10.0 );
// returns ~5.60499

v = sqrtpi( 0.0 );
// returns 0.0

v = sqrtpi( NaN );
// returns NaN
```

For negative numbers, the principal [square root][@stdlib/math/base/special/sqrt] is **not** defined.

```javascript
var v = sqrtpi( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var sqrtpi = require( '@stdlib/math/base/special/sqrtpi' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'sqrtpi(%d) = %0.4f', x, sqrtpi );
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
#include "stdlib/math/base/special/sqrtpi.h"
```

#### stdlib_base_sqrtpi( x )

Computes the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive double-precision floating-point number.

```c
double x = stdlib_base_sqrtpi( 4.0 );
// returns ~3.5449

x = stdlib_base_sqrtpi( 10.0 );
// returns ~5.60499
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sqrtpi( const double x );
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
#include "stdlib/math/base/special/sqrtpi.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        v = stdlib_base_sqrtpi( x );
        printf( "sqrtpi(%lf) = %lf\n", x, v );
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

-   <span class="package-name">[`@stdlib/math/base/special/sqrt`][@stdlib/math/base/special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math/tree/main/base/special/sqrt

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
