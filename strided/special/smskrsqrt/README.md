<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# smskrsqrt

> Compute the [reciprocal square root][@stdlib/math/base/special/rsqrtf] for each element in a single-precision floating-point strided array according to a strided mask array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var smskrsqrt = require( '@stdlib/math/strided/special/smskrsqrt' );
```

#### smskrsqrt( N, x, sx, m, sm, y, sy )

Computes the [reciprocal square root][@stdlib/math/base/special/rsqrtf] for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
var y = new Float32Array( x.length );

smskrsqrt( x.length, x, 1, m, 1, y, 1 );
// y => <Float32Array>[ Infinity, 0.5, 0.0, ~0.289, 0.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **sx**: index increment for `x`.
-   **m**: mask [`Uint8Array`][@stdlib/array/uint8].
-   **sm**: index increment for `m`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **sy**: index increment for `y`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0, 64.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskrsqrt( 3, x, 2, m, 2, y, -1 );
// y => <Float32Array>[ 0.0, 0.0, Infinity, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0, 64.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

smskrsqrt( 3, x1, -2, m1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, ~0.289, 0.5 ]
```

#### smskrsqrt.ndarray( N, x, sx, ox, m, sm, om, y, sy, oy )

Computes the [reciprocal square root][@stdlib/math/base/special/rsqrtf] for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskrsqrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
// y => <Float32Array>[ Infinity, 0.5, 0.0, ~0.289, 0.0 ]
```

The function accepts the following additional arguments:

-   **ox**: starting index for `x`.
-   **om**: starting index for `m`.
-   **oy**: starting index for `y`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0, 64.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskrsqrt.ndarray( 3, x, 2, 1, m, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, ~0.289, 0.5 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var smskrsqrt = require( '@stdlib/math/strided/special/smskrsqrt' );

var x = new Float32Array( 10 );
var m = new Uint8Array( 10 );
var y = new Float32Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = uniform( 0.0, 200.0 );
    if ( uniform( 0.0, 1.0 ) < 0.5 ) {
        m[ i ] = 1;
    }
}
console.log( x );
console.log( m );
console.log( y );

smskrsqrt.ndarray( x.length, x, 1, 0, m, 1, 0, y, -1, y.length-1 );
console.log( y );
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
#include "stdlib/math/strided/special/smskrsqrt.h"
```

#### stdlib_strided_smskrsqrt( N, \*X, strideX, \*Mask, strideMask, \*Y, strideY )

Computes the [reciprocal square root][@stdlib/math/base/special/rsqrtf] for each element in a single-precision floating-point strided array `X` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `Y`.

```c
#include <stdint.h>

const float X[] = { 0.0, 4.0, 9.0, 12.0, 24.0, 64.0, 81.0, 101.0 };
const uint8_t Mask[] = { 0, 0, 1, 0, 1, 1, 0, 0 };
float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

const int64_t N = 4;

stdlib_strided_smskrsqrt( N, X, 2, Mask, 2, Y, 2 );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] int64_t` index increment for `X`.
-   **Mask**: `[in] uint8_t*` mask array.
-   **strideMask**: `[in] int64_t` index increment for `Mask`.
-   **Y**: `[out] float*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.

```c
void stdlib_strided_smskrsqrt( const int64_t N, const float *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask, float *Y, const int64_t strideY );
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
#include "stdlib/math/strided/special/smskrsqrt.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create an input strided array:
    const float X[] = { 0.0, 4.0, 9.0, 12.0, 24.0, 64.0, 81.0, 101.0 };

    // Create a mask strided array:
    const uint8_t M[] = { 0, 0, 1, 0, 1, 1, 0, 0 };

    // Create an output strided array:
    float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int64_t N = 4;

    // Specify the stride lengths:
    const int64_t strideX = 2;
    const int64_t strideM = 2;
    const int64_t strideY = 2;

    // Compute the results:
    stdlib_strided_smskrsqrt( N, X, strideX, M, strideM, Y, strideY );

    // Print the results:
    for ( int i = 0; i < 8; i++ ) {
        printf( "Y[ %i ] = %f\n", i, Y[ i ] );
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

-   <span class="package-name">[`@stdlib/math/strided/special/dmskrsqrt`][@stdlib/math/strided/special/dmskrsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/smsksqrt`][@stdlib/math/strided/special/smsksqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a single-precision floating-point strided array according to a strided mask array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/srsqrt`][@stdlib/math/strided/special/srsqrt]</span><span class="delimiter">: </span><span class="description">compute the reciprocal square root for each element in a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/math/base/special/rsqrtf]: https://github.com/stdlib-js/math/tree/main/base/special/rsqrtf

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

<!-- <related-links> -->

[@stdlib/math/strided/special/dmskrsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskrsqrt

[@stdlib/math/strided/special/smsksqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/smsksqrt

[@stdlib/math/strided/special/srsqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/srsqrt

<!-- </related-links> -->

</section>

<!-- /.links -->