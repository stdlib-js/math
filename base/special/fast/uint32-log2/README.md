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

# Binary Logarithm

> Compute an integer [binary logarithm][binary-logarithm].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var log2Uint32 = require( '@stdlib/math/base/special/fast/uint32-log2' );
```

#### log2Uint32( x )

Returns an **approximate** [binary logarithm][binary-logarithm] of an unsigned 32-bit integer `x`.

```javascript
var v = log2Uint32( 4 >>> 0 );
// returns 2

v = log2Uint32( 8 >>> 0 );
// returns 3

v = log2Uint32( 9 >>> 0 );
// returns 3
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This implementation provides a performance boost when an application requires only **approximate** computations for integer arguments.
-   For applications requiring high-precision, this implementation is **never** suitable.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var log2Uint32 = require( '@stdlib/math/base/special/fast/uint32-log2' );

var v;
var i;

for ( i = 1; i < 101; i++ ) {
    v = log2Uint32( i >>> 0 );
    console.log( 'log2(%d) ≈ %d', i, v );
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
#include "stdlib/math/base/special/fast/uint32_log2.h"
```

#### stdlib_base_fast_uint32_log2( x )

Returns an **approximate** [binary logarithm][binary-logarithm] of an unsigned 32-bit integer `x`.

```c
#include <stdint.h>

uint32_t out = stdlib_base_fast_uint32_log2( 4 );
// returns 2

out = stdlib_base_fast_uint32_log2( 9 );
// returns 3
```

The function accepts the following arguments:

-   **x**: `[in] uint32_t` input value.

```c
uint32_t stdlib_base_fast_uint32_log2( const uint32_t x );
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
#include "stdlib/math/base/special/fast/uint32_log2.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const uint32_t x[] = { 5, 7, 10, 22, 98 };

    uint32_t y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_fast_uint32_log2( x[ i ] );
        printf( "uint32_log2(%u) = %u\n", x[ i ], y );
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

-   <span class="package-name">[`@stdlib/math/base/special/log2`][@stdlib/math/base/special/log2]</span><span class="delimiter">: </span><span class="description">binary logarithm (base 2).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[binary-logarithm]: https://en.wikipedia.org/wiki/Binary_logarithm

<!-- <related-links> -->

[@stdlib/math/base/special/log2]: https://github.com/stdlib-js/math/tree/main/base/special/log2

<!-- </related-links> -->

</section>

<!-- /.links -->
