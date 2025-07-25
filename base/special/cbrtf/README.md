<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Cube Root

> Compute the [cube root][cube-root] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var cbrtf = require( '@stdlib/math/base/special/cbrtf' );
```

#### cbrtf( x )

Computes the [cube root][cube-root] of a single-precision floating-point number.

```javascript
var v = cbrtf( 64.0 );
// returns 4.0

v = cbrtf( 27.0 );
// returns 3.0

v = cbrtf( 0.0 );
// returns 0.0

v = cbrtf( -0.0 );
// returns -0.0

v = cbrtf( -9.0 );
// returns ~-2.08

v = cbrtf( NaN );
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
var cbrtf = require( '@stdlib/math/base/special/cbrtf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -100.0, 100.0, opts );

logEachMap( 'cbrt(%0.4f) = %0.4f', x, cbrtf );
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
#include "stdlib/math/base/special/cbrtf.h"
```

#### stdlib_base_cbrtf( x )

Computes the cube root of a single-precision floating-point number.

```c
float y = stdlib_base_cbrtf( 27.0f );
// returns 3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_cbrtf( const float x );
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
#include "stdlib/math/base/special/cbrtf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, 9.0f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_cbrtf( x[ i ] );
        printf( "cbrt(%f) = %f\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/cbrt`][@stdlib/math/base/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sqrtf`][@stdlib/math/base/special/sqrtf]</span><span class="delimiter">: </span><span class="description">compute the principal square root of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cube-root]: https://en.wikipedia.org/wiki/Cube_root

<!-- <related-links> -->

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math/tree/main/base/special/cbrt

[@stdlib/math/base/special/sqrtf]: https://github.com/stdlib-js/math/tree/main/base/special/sqrtf

<!-- </related-links> -->

</section>

<!-- /.links -->
