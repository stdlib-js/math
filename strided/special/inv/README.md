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

# inv

> Compute the [multiplicative inverse][@stdlib/math/base/special/inv] for each element in a strided array.

<section class="intro">

The [multiplicative inverse][@stdlib/math/base/special/inv] (or **reciprocal**) is defined as

<!-- <equation class="equation" label="eq:multiplicative_inverse" align="center" raw="y = \frac{1}{x}" alt="Multiplicative inverse"> -->

```math
y = \frac{1}{x}
```

<!-- <div class="equation" align="center" data-raw-text="y = \frac{1}{x}" data-equation="eq:multiplicative_inverse">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c2ccda51c88b70a3311bc9ac46163826f945ebc0/lib/node_modules/@stdlib/math/strided/special/inv/docs/img/equation_multiplicative_inverse.svg" alt="Multiplicative inverse">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var inv = require( '@stdlib/math/strided/special/inv' );
```

#### inv( N, dtypeX, x, strideX, dtypeY, y, strideY )

Computes the [multiplicative inverse][@stdlib/math/base/special/inv] for each element in a strided array `x` and assigns the results to elements in a strided array `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );

// Perform operation in-place:
inv( x.length, 'float64', x, 1, 'float64', x, 1 );
// x => <Float64Array>[ -0.05, -1.0, 0.5, 0.25, 0.1 ]
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

var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0, 100.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

inv( 3, 'float64', x, 2, 'float64', y, -1 );
// y => <Float64Array>[ 0.1, 0.5, -0.05, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0, 100.0 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

inv( 3, 'float64', x1, -2, 'float64', y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 0.01, 0.25, -1.0 ]
```

#### inv.ndarray( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY )

Computes the [multiplicative inverse][@stdlib/math/base/special/inv] for each element in a strided array `x` and assigns the results to elements in a strided array `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

inv.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
// y => <Float64Array>[ -0.05, -1.0, 0.5, 0.25, 0.1 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -20.0, -1.0, 2.0, 4.0, 10.0, 100.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

inv.ndarray( 3, 'float64', x, 2, 1, 'float64', y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 0.01, 0.25, -1.0 ]
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
var inv = require( '@stdlib/math/strided/special/inv' );

var dt;
var x;
var y;
var i;

dt = dtypes();
for ( i = 0; i < dt.length; i++ ) {
    x = filledarrayBy( 10, dt[ i ], uniform( -50.0, 50.0 ) );
    console.log( x );

    y = filledarray( 0.0, x.length, 'generic' );
    console.log( y );

    inv.ndarray( x.length, dt[ i ], x, 1, 0, 'generic', y, -1, y.length-1 );
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

-   <span class="package-name">[`@stdlib/math/strided/special/dinv`][@stdlib/math/strided/special/dinv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse for each element in a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/sinv`][@stdlib/math/strided/special/sinv]</span><span class="delimiter">: </span><span class="description">compute the multiplicative inverse for each element in a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/strided/dtypes]: https://github.com/stdlib-js/strided-dtypes

[@stdlib/math/base/special/inv]: https://github.com/stdlib-js/math/tree/main/base/special/inv

<!-- <related-links> -->

[@stdlib/math/strided/special/dinv]: https://github.com/stdlib-js/math/tree/main/strided/special/dinv

[@stdlib/math/strided/special/sinv]: https://github.com/stdlib-js/math/tree/main/strided/special/sinv

<!-- </related-links> -->

</section>

<!-- /.links -->
