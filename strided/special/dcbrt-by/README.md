<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# dcbrtBy

> Compute the [cube root][@stdlib/math/base/special/cbrt] of each element retrieved from a double-precision floating-point strided array via a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcbrtBy = require( '@stdlib/math/strided/special/dcbrt-by' );
```

#### dcbrtBy( N, x, strideX, y, strideY, clbk\[, thisArg] )

Computes the [cube root][@stdlib/math/base/special/cbrt] of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy( x.length, x, 1, out, 1, accessor );
// out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback function is provided four arguments:

-   **value**: input array element.
-   **idx**: iteration index (zero-based).
-   **indices**: input and output array strided indices `[ix, iy]` (computed according to `offset + idx*stride`).
-   **arrays**: input and output arrays `[x, y]`.

To set the callback execution context, provide a `thisArg`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    this.count += 1;
    return v;
}

var context = {
    'count': 0
};

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy( x.length, x, 1, out, 1, accessor, context );
// out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]

var cnt = context.count;
// returns 5
```

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0, -9.14 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy( 3, x, 2, out, -1, accessor );
// out => <Float64Array>[ -5.0, -3.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float64] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v;
}

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0, -9.14 ] );
var out0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dcbrtBy( 3, x1, -2, out1, 1, accessor );
// out0 => <Float64Array>[ 0.0, 0.0, 0.0, ~-2.091, ~4.327, ~2.08 ]
```

#### dcbrtBy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, clbk\[, thisArg] )

Computes the [cube root][@stdlib/math/base/special/cbrt] of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy.ndarray( x.length, x, 1, 0, out, 1, 0, accessor );
// out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float64] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0, -9.14 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy.ndarray( 3, x, 2, 1, out, -1, out.length-1, accessor );
// out => <Float64Array>[ 0.0, 0.0, 0.0, ~-2.091, ~4.327, ~2.08 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.

    ```javascript
    var Float64Array = require( '@stdlib/array/float64' );

    function accessor() {
        // No-op...
    }

    var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
    var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

    dcbrtBy( x.length, x, 1, out, 1, accessor );
    // out => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dcbrtBy = require( '@stdlib/math/strided/special/dcbrt-by' );

function accessor( v, i ) {
    if ( (i%3) === 0 ) {
        // Simulate a "missing" value...
        return;
    }
    return v;
}

var x = filledarrayBy( 10, 'float64', uniform( -10.0, 10.0 ) );
console.log( x );

var out = filledarray( null, 10, 'float64' );
console.log( out );

dcbrtBy.ndarray( x.length, x, 1, 0, out, -1, out.length-1, accessor );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/strided/special/cbrt`][@stdlib/math/strided/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math/tree/main/base/special/cbrt

<!-- <related-links> -->

[@stdlib/math/strided/special/cbrt]: https://github.com/stdlib-js/math/tree/main/strided/special/cbrt

<!-- </related-links> -->

</section>

<!-- /.links -->
