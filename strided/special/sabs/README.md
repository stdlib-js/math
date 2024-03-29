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

# sabs

> Compute the [absolute value][@stdlib/math/base/special/abs] for each element in a single-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sabs = require( '@stdlib/math/strided/special/sabs' );
```

#### sabs( N, x, strideX, y, strideY )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

// Compute the absolute values in-place:
sabs( x.length, x, 1, x, 1 );
// x => <Float32Array>[ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

sabs( N, x, 2, y, -1 );
// y => <Float32Array>[ 5.0, 3.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

// Initial arrays...
var x0 = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

sabs( N, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 2.0 ]
```

#### sabs.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

sabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

sabs.ndarray( N, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 2.0 ]
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
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var Float32Array = require( '@stdlib/array/float32' );
var sabs = require( '@stdlib/math/strided/special/sabs' );

var x = new Float32Array( 10 );
var y = new Float32Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*200.0) - 100.0 );
}
console.log( x );
console.log( y );

sabs.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
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
#include "stdlib/math/strided/special/sabs.h"
```

#### stdlib_strided_sabs( N, \*X, strideX, \*Y, strideY )

Computes the absolute value for each element in a single-precision floating-point strided array `X` and assigns the results to elements in a single-precision floating-point strided array `Y`.

```c
#include <stdint.h>

const float X[] = { -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 };
float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

const int64_t N = 4;

stdlib_strided_sabs( N, X, 2, Y, 2 );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] int64_t` index increment for `X`.
-   **Y**: `[out] float*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.

```c
void stdlib_strided_sabs( const int64_t N, const float *X, const int64_t strideX, float *Y, const int64_t strideY );
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
#include "stdlib/math/strided/special/sabs.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create an input strided array:
    const float X[] = { -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 };

    // Create an output strided array:
    float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int64_t N = 4;

    // Specify the stride lengths:
    const int64_t strideX = 2;
    const int64_t strideY = 2;

    // Compute the absolute value element-wise:
    stdlib_strided_sabs( N, X, strideX, Y, strideY );

    // Print the result:
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

-   <span class="package-name">[`@stdlib/math/strided/special/abs`][@stdlib/math/strided/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/dabs`][@stdlib/math/strided/special/dabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/sabs2`][@stdlib/math/strided/special/sabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

<!-- <related-links> -->

[@stdlib/math/strided/special/abs]: https://github.com/stdlib-js/math/tree/main/strided/special/abs

[@stdlib/math/strided/special/dabs]: https://github.com/stdlib-js/math/tree/main/strided/special/dabs

[@stdlib/math/strided/special/sabs2]: https://github.com/stdlib-js/math/tree/main/strided/special/sabs2

<!-- </related-links> -->

</section>

<!-- /.links -->
