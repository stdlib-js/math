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

# besselj1By

> Compute the [Bessel function of the first kind of order one][@stdlib/math/base/special/besselj1] for each element retrieved from an input strided array via a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var besselj1By = require( '@stdlib/math/strided/special/besselj1-by' );
```

#### besselj1By( N, x, strideX, y, strideY, clbk\[, thisArg] )

Computes the [Bessel function of the first kind of order one][@stdlib/math/base/special/besselj1] for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

besselj1By( x.length, x, 1, y, 1, accessor );
// y => [ 0.0, ~0.44, ~0.05, ~0.124, ~0.242 ]
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

var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

besselj1By( x.length, x, 1, y, 1, accessor, context );
// y => [ 0.0, ~0.44, ~0.05, ~0.124, ~0.242 ]

var cnt = context.count;
// returns 5
```

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, 1.0, 0.1, 0.25, 0.5, 0.67 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

besselj1By( 3, x, 2, y, -1, accessor );
// y => [ ~0.242, ~0.05, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function accessor( v ) {
    return v;
}

// Initial arrays...
var x0 = new Float64Array( [ 0.0, 1.0, 0.1, 0.25, 0.5, 0.67 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

besselj1By( 3, x1, -2, y1, 1, accessor );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, ~0.317, ~0.124, ~0.44 ]
```

#### besselj1By.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, clbk\[, thisArg] )

Computes the [Bessel function of the first kind of order one][@stdlib/math/base/special/besselj1] for each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y` using alternative indexing semantics.

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

besselj1By.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
// y => [ 0.0, ~0.44, ~0.05, ~0.124, ~0.242 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
function accessor( v ) {
    return v;
}

var x = [ 0.0, 1.0, 0.1, 0.25, 0.5, 0.67 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

besselj1By.ndarray( 3, x, 2, 1, y, -1, y.length-1, accessor );
// y => [ 0.0, 0.0, 0.0, ~0.317, ~0.124, ~0.44 ]
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

    var x = [ 0.0, 1.0, 0.1, 0.25, 0.5 ];
    var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

    besselj1By( x.length, x, 1, y, 1, accessor );
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
var besselj1By = require( '@stdlib/math/strided/special/besselj1-by' );

function accessor( v, i ) {
    if ( (i%3) === 0 ) {
        // Simulate a "missing" value...
        return;
    }
    return v;
}

var x = filledarrayBy( 10, 'generic', uniform( 0.0, 10.0 ) );
console.log( x );

var y = filledarray( null, 10, 'generic' );
console.log( y );

besselj1By.ndarray( x.length, x, 1, 0, y, -1, y.length-1, accessor );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/strided/special/besselj0-by`][@stdlib/math/strided/special/besselj0-by]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order zero for each element retrieved from an input strided array via a callback function.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/bessely0-by`][@stdlib/math/strided/special/bessely0-by]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order zero for each element retrieved from an input strided array via a callback function.</span>
-   <span class="package-name">[`@stdlib/math/strided/special/bessely1-by`][@stdlib/math/strided/special/bessely1-by]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one for each element retrieved from an input strided array via a callback function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/math/base/special/besselj1]: https://github.com/stdlib-js/math/tree/main/base/special/besselj1

<!-- <related-links> -->

[@stdlib/math/strided/special/besselj0-by]: https://github.com/stdlib-js/math/tree/main/strided/special/besselj0-by

[@stdlib/math/strided/special/bessely0-by]: https://github.com/stdlib-js/math/tree/main/strided/special/bessely0-by

[@stdlib/math/strided/special/bessely1-by]: https://github.com/stdlib-js/math/tree/main/strided/special/bessely1-by

<!-- </related-links> -->

</section>

<!-- /.links -->
