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

# Square Root

> Compute an integer [square root][square-root].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sqrtUint32 = require( '@stdlib/math/base/special/fast/uint32-sqrt' );
```

#### sqrtUint32( x )

Returns an **approximate** [square root][square-root] of an unsigned 32-bit integer `x`.

```javascript
var v = sqrtUint32( 9 >>> 0 );
// returns 3

v = sqrtUint32( 2 >>> 0 );
// returns 1

v = sqrtUint32( 3 >>> 0 );
// returns 1

v = sqrtUint32( 0 >>> 0 );
// returns 0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Prefer hardware `sqrt` over a software implementation.
-   When using a software `sqrt`, this implementation provides a performance boost when an application requires only **approximate** computations for integer arguments.
-   For applications requiring high-precision, this implementation is **never** suitable.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sqrtUint32 = require( '@stdlib/math/base/special/fast/uint32-sqrt' );

var v;
var i;

for ( i = 0; i < 101; i++ ) {
    v = sqrtUint32( i >>> 0 );
    console.log( 'sqrt(%d) ≈ %d', i, v );
}
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
#include "stdlib/math/base/special/fast/uint32_sqrt.h"
```

#### stdlib_base_fast_uint32_sqrt( x )

Computes an integer [square root][square-root].

```c
#include <stdint.h>

uint32_t out = stdlib_base_fast_uint32_sqrt( 2 );
// returns 1

out = stdlib_base_fast_uint32_sqrt( 8 );
// returns 2
```

The function accepts the following arguments:

-   **x**: `[in] uint32_t` input value.

```c
uint32_t stdlib_base_fast_uint32_sqrt( const uint32_t x );
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
#include "stdlib/math/base/special/fast/uint32_sqrt.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const uint32_t x[] = { 10, 17, 20, 22, 98 };

    uint32_t y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_fast_uint32_sqrt( x[ i ] );
        printf( "uint32_sqrt(%u) = %u\n", x[ i ], y );
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

[square-root]: https://en.wikipedia.org/wiki/Square_root

<!-- <related-links> -->

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math/tree/main/base/special/sqrt

<!-- </related-links> -->

</section>

<!-- /.links -->
