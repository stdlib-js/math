<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# sinpif

> Compute the [sine][@stdlib/math/base/special/sinf] of a number times [π][@stdlib/constants/float32/pi].

<section class="usage">

## Usage

```javascript
var sinpif = require( '@stdlib/math/base/special/sinpif' );
```

#### sinpif( x )

Computes `sin(πx)` in single-precision floating-point format more accurately than `sin(pi*x)`, especially for large `x`.

```javascript
var y = sinpif( 0.0 );
// returns 0.0

y = sinpif( 0.5 );
// returns 1.0

y = sinpif( 0.9 );
// returns ~0.309

y = sinpif( NaN );
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
var sinpif = require( '@stdlib/math/base/special/sinpif' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -100.0, 100.0, opts );

logEachMap( 'sin( π * %0.4f ) = %0.4f', x, sinpif );
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
#include "stdlib/math/base/special/sinpif.h"
```

#### stdlib_base_sinpif( x )

Computes `sin(πx)` in single-precision floating-point format more accurately than `sin(pi*x)`, especially for large `x`.

```c
float y = stdlib_base_sinpif( 0.5f );
// returns 1.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_sinpif( const float x );
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
#include "stdlib/math/base/special/sinpif.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 0.523f, 0.785f, 1.047f, 3.14f };

    float y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_sinpif( x[ i ] );
        printf( "sin( π * %f ) = %f\n", x[ i ], y );
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

[@stdlib/math/base/special/sinf]: https://github.com/stdlib-js/math/tree/main/base/special/sinf

[@stdlib/constants/float32/pi]: https://github.com/stdlib-js/constants-float32-pi

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
