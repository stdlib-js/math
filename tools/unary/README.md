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

# Unary

> Create a function which performs element-wise computation by applying a unary function to each element in an input ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The purpose of this package is to provide a thin wrapper around a lower-level interface supporting multiple dispatch based on the data types of provided ndarray arguments. The wrapper performs the following tasks:

-   validates input arguments.
-   casts input ndarrays according to a casting policy.
-   allocates an output ndarray according to an output data type policy.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var factory = require( '@stdlib/math/tools/unary' );
```

#### factory( fcn, idtypes, odtypes, policies )

Returns a function which performs element-wise computation by applying a unary function to each element in an input ndarray.

<!-- eslint-disable array-element-newline -->

```javascript
var base = require( '@stdlib/math/base/special/abs' );
var dispatch = require( '@stdlib/ndarray/dispatch' );
var unary = require( '@stdlib/ndarray/base/unary' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );
```

The function has the following arguments:

-   **fcn**: function which applies a unary function to each element in an ndarray and assigns results to an output ndarray.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **policies**: dispatch policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/output-dtype-policies].
    -   **casting**: input ndarray casting [policy][@stdlib/ndarray/input-casting-policies].

#### ufunc( x\[, options] )

Performs element-wise computation.

<!-- eslint-disable array-element-newline -->

```javascript
var base = require( '@stdlib/math/base/special/abs' );
var dispatch = require( '@stdlib/ndarray/dispatch' );
var unary = require( '@stdlib/ndarray/base/unary' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
// returns <ndarray>

var y = ufunc( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function has the following parameters:

-   **x**: input ndarray.
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dtype**: output ndarray data type. Setting this option, overrides the output data type policy.
-   **order**: output ndarray order.

By default, the function returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

<!-- eslint-disable array-element-newline -->

```javascript
var base = require( '@stdlib/math/base/special/abs' );
var dispatch = require( '@stdlib/ndarray/dispatch' );
var unary = require( '@stdlib/ndarray/base/unary' );
var getDType = require( '@stdlib/ndarray/dtype' );
var array = require( '@stdlib/ndarray/array' );

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
// returns <ndarray>

var y = ufunc( x, {
    'dtype': 'generic'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'generic'
```

#### ufunc.assign( x, out )

Performs element-wise computation and assigns results to a provided output ndarray.

<!-- eslint-disable array-element-newline -->

```javascript
var base = require( '@stdlib/math/base/special/abs' );
var dispatch = require( '@stdlib/ndarray/dispatch' );
var unary = require( '@stdlib/ndarray/base/unary' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );
var array = require( '@stdlib/ndarray/array' );

var types = [
    'float64', 'float64',
    'float64', 'generic',
    'generic', 'generic'
];
var data = [
    base,
    base,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

var idt = [ 'float64', 'generic' ];
var odt = idt;

var policies = {
    'output': 'real_and_generic',
    'casting': 'none'
};
var ufunc = factory( dispatcher, [ idt ], odt, policies );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
// returns <ndarray>

var y = zerosLike( x );
// returns <ndarray>

var out = ufunc.assign( x, y );
// returns <ndarray>

var bool = ( out === y );
// returns true

var arr = ndarray2array( out );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The method has the following parameters:

-   **x**: input ndarray.
-   **out**: output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A provided unary function should have the following signature:

    ```text
    f( x, y )
    ```

    where

    -   **x**: input ndarray.
    -   **y**: output ndarray.

-   The output data type policy only applies to the function returned by the main function. For the `assign` method, the output ndarray is allowed to have any supported output data type.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable array-element-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var base = require( '@stdlib/math/base/special/abs' );
var basef = require( '@stdlib/math/base/special/absf' );
var uniform = require( '@stdlib/random/uniform' );
var dispatch = require( '@stdlib/ndarray/dispatch' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var unary = require( '@stdlib/ndarray/base/unary' );
var ufunc = require( '@stdlib/math/tools/unary' );

// Create a function which dispatches based on argument data types:
var types = [
    'float64', 'float64',
    'float32', 'float32',
    'generic', 'generic'
];
var data = [
    base,
    basef,
    base
];
var dispatcher = dispatch( unary, types, data, 2, 1, 1 );

// Define the supported input and output data types:
var idt = [ 'float64', 'float32', 'generic' ];
var odt = [ 'float64', 'float32', 'generic' ];

// Define dispatch policies:
var policies = {
    'output': 'same',
    'casting': 'none'
};

// Create a function that performs element-wise computation:
var abs = ufunc( dispatcher, [ idt ], odt, policies );

// Generate an array of random numbers:
var x = uniform( [ 5, 5 ], -10.0, 10.0, {
    'dtype': 'float64'
});
console.log( ndarray2array( x ) );

// Perform element-wise computation:
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

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies

[@stdlib/ndarray/input-casting-policies]: https://github.com/stdlib-js/ndarray-input-casting-policies

</section>

<!-- /.links -->
