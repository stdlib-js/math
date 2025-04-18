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

# asinhBy

> Compute the [hyperbolic arcsine][@stdlib/math/base/special/asinh] of each element retrieved from an input strided array via a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var asinhBy = require( '@stdlib/math/strided/special/asinh-by' );
```

#### asinhBy( N, x, strideX, y, strideY, clbk\[, thisArg] )

Computes the [hyperbolic arcsine][@stdlib/math/base/special/asinh] of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, -0.0, 2.0, -2.0, 0.75 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

asinhBy( x.length, x, 1, y, 1, accessor );
// y => [ 0.0, 0.0, ~1.444, ~-1.444, ~0.693 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions).
-   **strideX**: index increment for `x`.
-   **y**: output [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions).
-   **strideY**: index increment for `y`.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback function is provided six arguments:

-   **value**: input array element.
-   **idx**: iteration index (zero-based).
-   **xi**: input array strided index (`offsetX + idx*strideX`).
-   **yi**: output array strided index (`offsetY + idx*strideY`).
-   **x**: input array/collection.
-   **y**: output array/collection.

To set the callback execution context, provide a `thisArg`.

```javascript
function accessor( v ) {
    this.count += 1;
    return v;
}

var context = {
    'count': 0
};

var x = [ 0.0, -0.0, 2.0, -2.0, 0.75 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

asinhBy( x.length, x, 1, y, 1, accessor, context );
// y => [ 0.0, 0.0, ~1.444, ~-1.444, ~0.693 ]

var cnt = context.count;
// returns 5
```

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, -0.0, 2.0, -2.0, 0.75, -0.68 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

asinhBy( 3, x, 2, y, -1, accessor );
// y => [ ~0.693, ~1.444, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v;
}

// Initial arrays...
var x0 = new Float64Array( [ 0.0, -0.0, 2.0, -2.0, 0.75, -0.68 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

asinhBy( 3, x1, -2, y1, 1, accessor );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, ~-0.636, ~-1.444, 0.0 ]
```

#### asinhBy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, clbk\[, thisArg] )

Computes the [hyperbolic arcsine][@stdlib/math/base/special/asinh] of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y` using alternative indexing semantics.

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, -0.0, 2.0, -2.0, 0.75 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

asinhBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
// y => [ 0.0, 0.0, ~1.444, ~-1.444, ~0.693 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, -0.0, 2.0, -2.0, 0.75, -0.68 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

asinhBy.ndarray( 3, x, 2, 1, y, -1, y.length-1, accessor );
// y => [ 0.0, 0.0, 0.0, ~-0.636, ~-1.444, 0.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.

    ```javascript
    function accessor() {
        // No-op...
    }

    var x = [ 0.0, -0.0, 2.0, -2.0, 0.75 ];
    var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

    asinhBy( x.length, x, 1, y, 1, accessor );
    // y => [ 0.0, 0.0, 0.0, 0.0, 0.0 ]
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
var asinhBy = require( '@stdlib/math/strided/special/asinh-by' );

function accessor( v, i ) {
    if ( (i%3) === 0 ) {
        // Simulate a "missing" value...
        return;
    }
    return v;
}

var x = filledarrayBy( 10, 'generic', uniform( -5.0, 5.0 ) );
console.log( x );

var y = filledarray( null, 10, 'generic' );
console.log( y );

asinhBy.ndarray( x.length, x, 1, 0, y, -1, y.length-1, accessor );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/strided/special/asin-by`][@stdlib/math/strided/special/asin-by]</span><span class="delimiter">: </span><span class="description">compute the arcsine of each element retrieved from an input strided array via a callback function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/asinh

<!-- <related-links> -->

[@stdlib/math/strided/special/asin-by]: https://github.com/stdlib-js/math/tree/main/strided/special/asin-by

<!-- </related-links> -->

</section>

<!-- /.links -->
