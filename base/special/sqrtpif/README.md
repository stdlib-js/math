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

# sqrtpif

> Compute the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var sqrtpif = require( '@stdlib/math/base/special/sqrtpif' );
```

#### sqrtpif( x )

Computes the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive single-precision floating-point number.

```javascript
var v = sqrtpif( 4.0 );
// returns ~3.5449

v = sqrtpif( 10.0 );
// returns ~5.60499

v = sqrtpif( 0.0 );
// returns 0.0

v = sqrtpif( NaN );
// returns NaN
```

For negative numbers, the principal [square root][@stdlib/math/base/special/sqrt] is **not** defined.

```javascript
var v = sqrtpif( -4.0 );
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
var sqrtpif = require( '@stdlib/math/base/special/sqrtpif' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'sqrtpif(%d) = %0.4f', x, sqrtpif );
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
#include "stdlib/math/base/special/sqrtpif.h"
```

#### stdlib_base_sqrtpif( x )

Computes the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive single-precision floating-point number.

```c
float x = stdlib_base_sqrtpif( 4.0f );
// returns ~3.5449f

x = stdlib_base_sqrtpif( 10.0f );
// returns ~5.60499f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_sqrtpif( const float x );
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
#include "stdlib/math/base/special/sqrtpif.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    const float x[] = { 4.0f, 10.0f, 3.14f, -3.14f, 0.0f, 0.0f / 0.0f };

    float v;
    int i;
    for ( i = 0; i < 6; i++ ) {
        v = stdlib_base_sqrtpif( x[ i ] );
        printf( "sqrtpif(%f) = %f", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math/tree/main/base/special/sqrt

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
