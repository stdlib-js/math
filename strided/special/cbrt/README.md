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

# cbrt

> Compute the [cube root][@stdlib/math/base/special/cbrt] of each element in a strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cbrt = require( '@stdlib/math/strided/special/cbrt' );
```

#### cbrt( N, x, strideX, y, strideY )

Computes the [cube root][@stdlib/math/base/special/cbrt] of each element in a strided array `x` and assigns the results to elements in a strided array `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );

// Perform operation in-place:
cbrt( x.length, 'float64', x, 1, 'float64', x, 1 );
// x => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **dtypeX**: [data type][@stdlib/strided/dtypes] for `x`.
-   **x**: input array-like object.
-   **strideX**: index increment for `x`.
-   **dtypeY**: [data type][@stdlib/strided/dtypes] for `y`.
-   **y**: output array-like object.
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0, 125.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cbrt( 3, 'float64', x, 2, 'float64', y, -1 );
// y => <Float64Array>[ 4.0, 2.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0, 125.0 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

cbrt( 3, 'float64', x1, -2, 'float64', y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 5.0, 3.0, 1.0 ]
```

#### cbrt.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the [cube root][@stdlib/math/base/special/cbrt] of each element in a strided array `x` and assigns the results to elements in a strided array `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cbrt.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
// y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0, 125.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cbrt.ndarray( 3, 'float64', x, 2, 1, 'float64', y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 5.0, 3.0, 1.0 ]
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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dtypes = require( '@stdlib/array/typed-real-float-dtypes' );
var cbrt = require( '@stdlib/math/strided/special/cbrt' );

var dt;
var x;
var y;
var i;

dt = dtypes();
for ( i = 0; i < dt.length; i++ ) {
    x = filledarrayBy( 10, dt[ i ], uniform( -100.0, 100.0 ) );
    console.log( x );

    y = filledarray( 0.0, x.length, 'generic' );
    console.log( y );

    cbrt.ndarray( x.length, dt[ i ], x, 1, 0, 'generic', y, -1, y.length-1 );
    console.log( y );
    console.log( '' );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/strided/special/dcbrt`][@stdlib/math/strided/special/dcbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/scbrt`][@stdlib/math/strided/special/scbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/sqrt`][@stdlib/math/strided/special/sqrt]</span><span class="delimiter">: </span><span class="description">compute the principal square root for each element in a strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math/tree/main/base/special/cbrt

[@stdlib/strided/dtypes]: https://github.com/stdlib-js/strided-dtypes

<!-- <related-links> -->

[@stdlib/math/strided/special/dcbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/dcbrt

[@stdlib/math/strided/special/scbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/scbrt

[@stdlib/math/strided/special/sqrt]: https://github.com/stdlib-js/math/tree/main/strided/special/sqrt

<!-- </related-links> -->

</section>

<!-- /.links -->
