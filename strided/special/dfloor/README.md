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

# dfloor

> Round each element in a double-precision floating-point strided array toward negative infinity.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dfloor = require( '@stdlib/math/strided/special/dfloor' );
```

#### dfloor( N, x, strideX, y, strideY )

Rounds each element in a double-precision floating-point strided array `x` toward negative infinity and assigns the results to elements in a double-precision floating-point strided array `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );

// Perform operation in-place:
dfloor( x.length, x, 1, x, 1 );
// x => <Float64Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9, -6.7 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dfloor( 3, x, 2, y, -1 );
// y => <Float64Array>[ 5.0, 3.0, -2.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float64] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9, -6.7 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dfloor( 3, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, -7.0, 4.0, 1.0 ]
```

#### dfloor.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Rounds each element in a double-precision floating-point strided array `x` toward negative infinity and assigns the results to elements in a double-precision floating-point strided array `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dfloor.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ -2.0, 1.0, 3.0, 4.0, 5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float64] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -1.1, 1.1, 3.8, 4.5, 5.9, -6.7 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dfloor.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, -7.0, 4.0, 1.0 ]
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
var dfloor = require( '@stdlib/math/strided/special/dfloor' );

var x = new Float64Array( 10 );
var y = new Float64Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = uniform( -10.0, 10.0 );
}
console.log( x );
console.log( y );

dfloor.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
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
#include "stdlib/math/strided/special/dfloor.h"
```

#### stdlib_strided_dfloor( N, \*X, strideX, \*Y, strideY )

Rounds each element in a double-precision floating-point strided array `X` toward negative infinity and assigns the results to elements in a double-precision floating-point strided array `Y`.

```c
#include <stdint.h>

const double X[] = { -1.5, 2.3, -3.9, 4.2, -5.0, -6.0, 7.9, -8.1 };
double Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

const int64_t N = 4;

stdlib_strided_dfloor( N, X, 2, Y, 2 );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] int64_t` index increment for `X`.
-   **Y**: `[out] double*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.

```c
void stdlib_strided_dfloor( const int64_t N, const double *X, const int64_t strideX, double *Y, const int64_t strideY );
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
#include "stdlib/math/strided/special/dfloor.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    // Create an input strided array:
    const double X[] = { -1.5, 2.3, -3.9, 4.2, -5.0, -6.0, 7.9, -8.1 };

    // Create an output strided array:
    double Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int64_t N = 4;

    // Specify the stride lengths:
    const int64_t strideX = 2;
    const int64_t strideY = 2;

    // Compute the results:
    stdlib_strided_dfloor( N, X, strideX, Y, strideY );

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

-   <span class="package-name">[`@stdlib/math/strided/special/dceil`][@stdlib/math/strided/special/dceil]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/dtrunc`][@stdlib/math/strided/special/dtrunc]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward zero.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/floor`][@stdlib/math/strided/special/floor]</span><span class="delimiter">: </span><span class="description">round each element in a strided array toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/sfloor`][@stdlib/math/strided/special/sfloor]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward negative infinity.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

<!-- <related-links> -->

[@stdlib/math/strided/special/dceil]: https://github.com/stdlib-js/math/tree/main/strided/special/dceil

[@stdlib/math/strided/special/dtrunc]: https://github.com/stdlib-js/math/tree/main/strided/special/dtrunc

[@stdlib/math/strided/special/floor]: https://github.com/stdlib-js/math/tree/main/strided/special/floor

[@stdlib/math/strided/special/sfloor]: https://github.com/stdlib-js/math/tree/main/strided/special/sfloor

<!-- </related-links> -->

</section>

<!-- /.links -->
