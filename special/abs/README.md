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

# abs

> Compute the [absolute value][@stdlib/math/base/special/abs] for each element in an [ndarray][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var abs = require( '@stdlib/math/special/abs' );
```

#### abs( x\[, options] )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in an [ndarray][@stdlib/ndarray/ctor].

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = abs( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. Must be a real-valued or generic [data type][@stdlib/ndarray/dtypes].
-   **order**: output ndarray [order][@stdlib/ndarray/orders] (i.e., memory layout).

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] determined by the function's output data type [policy][@stdlib/ndarray/output-dtype-policies]. To override the default behavior, set the `dtype` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );
var getDType = require( '@stdlib/ndarray/dtype' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = abs( x, {
    'dtype': 'generic'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'generic'

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having the same [order][@stdlib/ndarray/orders] as the input [ndarray][@stdlib/ndarray/ctor]. To return an [ndarray][@stdlib/ndarray/ctor] having a specific memory layout irrespective of the memory layout of the input [ndarray][@stdlib/ndarray/ctor], set the `order` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );
var getOrder = require( '@stdlib/ndarray/order' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = abs( x, {
    'order': 'column-major'
});
// returns <ndarray>

var ord = getOrder( y );
// returns 'column-major'

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

#### abs.assign( x, y )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in an [ndarray][@stdlib/ndarray/ctor] and assigns results to a provided output [ndarray][@stdlib/ndarray/ctor].

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = array( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] );

var out = abs.assign( x, y );
// returns <ndarray>

var bool = ( out === y );
// returns true

var arr = ndarray2array( out );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the shape of the output [ndarray][@stdlib/ndarray/ctor].
-   **y**: output [ndarray][@stdlib/ndarray/ctor].

The function supports broadcasting an input [ndarray][@stdlib/ndarray/ctor] to the shape of the output [ndarray][@stdlib/ndarray/ctor] without performing a physical copy of the input [ndarray][@stdlib/ndarray/ctor]'s underlying data.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var array = require( '@stdlib/ndarray/array' );

// Create a 2x2 input ndarray:
var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );

// Create a 2x2x2 output ndarray:
var y = zeros( [ 2, 2, 2 ] );

var out = abs.assign( x, y );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The output data type [policy][@stdlib/ndarray/output-dtype-policies] only applies to the main function and specifies that, by default, the function must return an [ndarray][@stdlib/ndarray/ctor] having a real-valued or "generic" [data type][@stdlib/ndarray/dtypes]. For the `assign` method, the output [ndarray][@stdlib/ndarray/ctor] is allowed to have any supported output [data type][@stdlib/ndarray/dtypes].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var abs = require( '@stdlib/math/special/abs' );

var x = uniform( [ 5, 5 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

var y = abs( x );
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
