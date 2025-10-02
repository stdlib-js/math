<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

> Compute the [absolute value][@stdlib/math/base/special/abs] for each element in an input array.

<section class="usage">

## Usage

```javascript
var abs = require( '@stdlib/math/array/special/abs' );
```

#### abs( x\[, options] )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in an input array.

```javascript
var v = abs( [ -1.0, 2.0, -3.0, 4.0 ] );
// returns [ 1.0, 2.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **x**: input array.
-   **options**: function options.

The function accepts the following options:

-   **dtype**: output array data type.

To specify the output array data type, set the `dtype` option.

```javascript
var v = abs( [ -1.0, 2.0, -3.0, 4.0 ], {
    'dtype': 'float64'
});
// returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

#### abs.assign( x, out )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in an input array and assigns results to a provided output array.

```javascript
var zeros = require( '@stdlib/array/zeros' );

var out = zeros( 4, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0 ]

var v = abs.assign( [ -1.0, 2.0, -3.0, 4.0 ], out );
// returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]

var bool = ( v === out );
// returns true
```

The method has the following parameters:

-   **x**: input array.
-   **out**: output array.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEach = require( '@stdlib/console/log-each' );
var abs = require( '@stdlib/math/array/special/abs' );

// Generate an array of random numbers:
var x = uniform( 10, -1.0, 1.0, {
    'dtype': 'generic'
});

// Perform element-wise computation:
var y = abs( x );

// Print the results:
logEach( 'abs(%f) = %f', x, y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

</section>

<!-- /.links -->
