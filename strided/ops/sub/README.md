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

<!-- lint disable maximum-heading-length -->

# sub

> Element-wise subtraction of two strided arrays.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sub = require( '@stdlib/math/strided/ops/sub' );
```

#### sub( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ )

Subtracts each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( x.length );

sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
// z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **dtypeX**: [data type][@stdlib/strided/dtypes] for `x`.
-   **x**: input array-like object.
-   **strideX**: index increment for `x`.
-   **dtypeY**: [data type][@stdlib/strided/dtypes] for `y`.
-   **y**: input array-like object.
-   **strideY**: index increment for `y`.
-   **dtypeZ**: [data type][@stdlib/strided/dtypes] for `z`.
-   **z**: output array-like object.
-   **strideZ**: index increment for `z`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( x.length );

sub( 3, 'float64', x, 2, 'float64', y, -1, 'float64', z, 1 );
// z => <Float64Array>[ -5.0, 1.0, 3.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

sub( 3, 'float64', x1, -2, 'float64', y1, 1, 'float64', z1, 1 );
// z0 => <Float64Array>[ 0.0, 0.0, -4.0, 0.0, -5.0, 0.0 ]
```

#### sub.ndarray( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ )

Subtracts each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( x.length );

sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
// z => <Float64Array>[ -3.0, -1.0, 0.0, -9.0, -1.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetZ**: starting index for `z`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( x.length );

sub.ndarray( 3, 'float64', x, 2, 1, 'float64', y, -1, y.length-1, 'float64', z, 1, 0 );
// z => <Float64Array>[ -5.0, 0.0, -4.0, 0.0, 0.0, 0.0 ]
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
var uniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var sub = require( '@stdlib/math/strided/ops/sub' );

var dt;
var x;
var y;
var z;
var i;

dt = [ 'float64', 'float32', 'int32', 'uint8', 'generic' ];

for ( i = 0; i < dt.length; i++ ) {
    x = filledarrayBy( 10, dt[ i ], uniform( 0.0, 10.0 ) );
    console.log( x );

    y = filledarrayBy( x.length, dt[ i ], uniform( 0.0, 10.0 ) );
    console.log( y );

    z = filledarray( 0.0, x.length, 'generic' );
    console.log( z );

    sub.ndarray( x.length, dt[ i ], x, 1, 0, dt[ i ], y, 1, 0, 'generic', z, -1, z.length-1 );
    console.log( z );
    console.log( '' );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/strided/ops/add`][@stdlib/math/strided/ops/add]</span><span class="delimiter">: </span><span class="description">element-wise addition of two strided arrays.</span>
-   <span class="package-name">[`@stdlib/math/strided/ops/mul`][@stdlib/math/strided/ops/mul]</span><span class="delimiter">: </span><span class="description">element-wise multiplication of two strided arrays.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/strided/dtypes]: https://github.com/stdlib-js/strided-dtypes

<!-- <related-links> -->

[@stdlib/math/strided/ops/add]: https://github.com/stdlib-js/math/tree/main/strided/ops/add

[@stdlib/math/strided/ops/mul]: https://github.com/stdlib-js/math/tree/main/strided/ops/mul

<!-- </related-links> -->

</section>

<!-- /.links -->
