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

# factory

> Create a function for applying a unary function to each element in an input array.

<section class="usage">

## Usage

```javascript
var factory = require( '@stdlib/math/array/tools/unary-factory' );
```

#### factory( fcn, idtypes, odtypes, policy )

Returns a function for applying a unary function to each element in an input array.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = factory( abs, dtypes, dtypes, policy );
```

The function has the following parameters:

-   **fcn**: unary function to apply.
-   **idtypes**: list of supported input data types.
-   **odtypes**: list of supported input data types.
-   **policy**: output data type policy.

#### unary( x\[, options] )

Applies a unary function to each element in a provided input array.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = factory( abs, dtypes, dtypes, policy );

var v = unary( [ -1.0, 2.0, -3.0, 4.0 ] );
// returns [ 1.0, 2.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **x**: input array.
-   **options**: function options.

The function accepts the following options:

-   **dtype**: output array data type. Setting this option, overrides the output data type policy.

By default, the function returns an array having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = factory( abs, dtypes, dtypes, policy );

var v = unary( [ -1.0, 2.0, -3.0, 4.0 ], {
    'dtype': 'float64'
});
// returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

#### unary.assign( x, out )

Applies a unary function to each element in a provided input array and assigns results to a provided output array.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var policy = 'same';

var unary = factory( abs, dtypes, dtypes, policy );

var out = zeros( 4, 'float64' );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0 ]

var v = unary.assign( [ -1.0, 2.0, -3.0, 4.0 ], out );
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

## Notes

-   The output data type policy only applies to the function returned by `factory`. For the `assign` method, the output array is allowed to be any array-like object, including [accessor arrays][@stdlib/array/base/accessor].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var base = require( '@stdlib/math/base/special/sin' );
var uniform = require( '@stdlib/random/array/uniform' );
var dtypes = require( '@stdlib/array/dtypes' );
var dtype = require( '@stdlib/array/dtype' );
var logEach = require( '@stdlib/console/log-each' );
var factory = require( '@stdlib/math/array/tools/unary-factory' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

// Define the policy mapping an input data type to an output data type:
var policy = 'real_floating_point_and_generic';

// Create an interface for computing the element-wise sine:
var sin = factory( base, idt, odt, policy );

// Generate an array of random numbers:
var x = uniform( 10, -1.0, 1.0, {
    'dtype': 'generic'
});

// Compute the element-wise sine:
var y = sin( x );

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
logEach( 'sin(%0.5f) = %0.5f', x, y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

</section>

<!-- /.links -->
