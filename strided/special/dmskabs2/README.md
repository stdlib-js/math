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

# dmskabs2

> Compute the [squared absolute value][@stdlib/math/base/special/abs2] for each element in a double-precision floating-point strided array according to a strided mask array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmskabs2 = require( '@stdlib/math/strided/special/dmskabs2' );
```

#### dmskabs2( N, x, sx, m, sm, y, sy )

Computes the [squared absolute value][@stdlib/math/base/special/abs2] for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
var y = new Float64Array( x.length );

dmskabs2( x.length, x, 1, m, 1, y, 1 );
// y => <Float64Array>[ 4.0, 1.0, 0.0, 25.0, 0.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **sx**: index increment for `x`.
-   **m**: mask [`Uint8Array`][@stdlib/array/uint8].
-   **sm**: index increment for `m`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **sy**: index increment for `y`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmskabs2( 3, x, 2, m, 2, y, -1 );
// y => <Float64Array>[ 0.0, 0.0, 4.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float64] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

// Initial arrays...
var x0 = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0, 0.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dmskabs2( 3, x1, -2, m1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 25.0, 1.0 ]
```

#### dmskabs2.ndarray( N, x, sx, ox, m, sm, om, y, sy, oy )

Computes the [squared absolute value][@stdlib/math/base/special/abs2] for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmskabs2.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
// y => <Float64Array>[ 4.0, 1.0, 0.0, 25.0, 0.0 ]
```

The function accepts the following additional arguments:

-   **ox**: starting index for `x`.
-   **om**: starting index for `m`.
-   **oy**: starting index for `y`.

While [`typed array`][@stdlib/array/float64] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0, 0.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmskabs2.ndarray( 3, x, 2, 1, m, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 25.0, 1.0 ]
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
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dmskabs2 = require( '@stdlib/math/strided/special/dmskabs2' );

var x = new Float64Array( 10 );
var m = new Uint8Array( 10 );
var y = new Float64Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = uniform( -100.0, 100.0 );
    if ( uniform( 0.0, 1.0 ) < 0.5 ) {
        m[ i ] = 1;
    }
}
console.log( x );
console.log( m );
console.log( y );

dmskabs2.ndarray( x.length, x, 1, 0, m, 1, 0, y, -1, y.length-1 );
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
#include "stdlib/math/strided/special/dmskabs2.h"
```

#### stdlib_strided_dmskabs2( N, \*X, strideX, \*Mask, strideMask, \*Y, strideY )

Computes the [squared absolute value][@stdlib/math/base/special/abs2] for each element in a double-precision floating-point strided array `X` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `Y`.

```c
#include <stdint.h>

const double X[] = { -2.0, 1.0, -3.0, -5.0, 4.0, 0.0, -1.0, -3.0 };
const uint8_t Mask[] = { 0, 0, 1, 0, 1, 1, 0, 0 };
double Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

const int64_t N = 4;

stdlib_strided_dmskabs2( N, X, 2, Mask, 2, Y, 2 );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] int64_t` index increment for `X`.
-   **Mask**: `[in] uint8_t*` mask array.
-   **strideMask**: `[in] int64_t` index increment for `Mask`.
-   **Y**: `[out] double*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.

```c
void stdlib_strided_dmskabs2( const int64_t N, const double *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask, double *Y, const int64_t strideY );
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
#include "stdlib/math/strided/special/dmskabs2.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create an input strided array:
    const double X[] = { -2.0, 1.0, -3.0, -5.0, 4.0, 0.0, -1.0, -3.0 };

    // Create a mask strided array:
    const uint8_t M[] = { 0, 0, 1, 0, 1, 1, 0, 0 };

    // Create an output strided array:
    double Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int64_t N = 4;

    // Specify the stride lengths:
    const int64_t strideX = 2;
    const int64_t strideM = 2;
    const int64_t strideY = 2;

    // Compute the results:
    stdlib_strided_dmskabs2( N, X, strideX, M, strideM, Y, strideY );

    // Print the results:
    for ( int i = 0; i < 8; i++ ) {
        printf( "Y[ %i ] = %lf\n", i, Y[ i ] );
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

-   <span class="package-name">[`@stdlib/math/strided/special/dabs2`][@stdlib/math/strided/special/dabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/dmskabs`][@stdlib/math/strided/special/dmskabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a double-precision floating-point strided array according to a strided mask array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/smskabs2`][@stdlib/math/strided/special/smskabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a single-precision floating-point strided array according to a strided mask array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/math/base/special/abs2]: https://github.com/stdlib-js/math/tree/main/base/special/abs2

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

<!-- <related-links> -->

[@stdlib/math/strided/special/dabs2]: https://github.com/stdlib-js/math/tree/main/strided/special/dabs2

[@stdlib/math/strided/special/dmskabs]: https://github.com/stdlib-js/math/tree/main/strided/special/dmskabs

[@stdlib/math/strided/special/smskabs2]: https://github.com/stdlib-js/math/tree/main/strided/special/smskabs2

<!-- </related-links> -->

</section>

<!-- /.links -->
