<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# evalrational

> Compile a module for evaluating a [rational function][@stdlib/math/base/tools/evalrational].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var compile = require( '@stdlib/math/base/tools/evalrational-compile' );
```

#### compile( P, Q\[, options] )

Compiles a module string containing an exported function which evaluates a [rational function][@stdlib/math/base/tools/evalrational] having coefficients `P` and `Q`.

```javascript
var P = [ 3.0, 2.0, 1.0 ];
var Q = [ -1.0, -2.0, -3.0 ];

var str = compile( P, Q );
// returns <string>
```

The function supports the following `options`:

-   **dtype**: input argument floating-point data type (e.g., `float64` or `float32`). Default: `'float64'`.

In the example above, the output string would correspond to the following module:

<!-- eslint-disable no-unused-expressions -->

```javascript
'use strict';

// MAIN //

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/
function evalrational( x ) {
    var ax;
    var s1;
    var s2;
    if ( x === 0.0 ) {
        return -3.0;
    }
    if ( x < 0.0 ) {
        ax = -x;
    } else {
        ax = x;
    }
    if ( ax <= 1.0 ) {
        s1 = 3.0 + (x * (2.0 + (x * 1.0)));
        s2 = -1.0 + (x * (-2.0 + (x * -3.0)));
    } else {
        x = 1.0 / x;
        s1 = 1.0 + (x * (2.0 + (x * 3.0)));
        s2 = -3.0 + (x * (-2.0 + (x * -1.0)));
    }
    return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
```

The coefficients should be ordered in **ascending** degree, thus matching summation notation.

By default, the function assumes double-precision floating-point arithmetic. To emulate single-precision floating-point arithmetic, set the `dtype` option to `'float32'`.

```javascript
var P = [ 3.0, 2.0, 1.0 ];
var Q = [ -1.0, -2.0, -3.0 ];

var str = compile( P, Q, {
    'dtype': 'float32'
});
// returns <string>
```

In the previous example, the output string would correspond to the following module:

<!-- eslint-disable no-unused-expressions -->

```javascript
'use strict';

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/
function evalrational( x ) {
    var ax;
    var s1;
    var s2;
    if ( x === 0.0 ) {
        return -3.0;
    }
    if ( x < 0.0 ) {
        ax = -x;
    } else {
        ax = x;
    }
    if ( ax <= 1.0 ) {
        s1 = float64ToFloat32(3.0 + float64ToFloat32(x * float64ToFloat32(2.0 + float64ToFloat32(x * 1.0)))); // eslint-disable-line max-len
        s2 = float64ToFloat32(-1.0 + float64ToFloat32(x * float64ToFloat32(-2.0 + float64ToFloat32(x * -3.0)))); // eslint-disable-line max-len
    } else {
        x = float64ToFloat32( 1.0 / x );
        s1 = float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(2.0 + float64ToFloat32(x * 3.0)))); // eslint-disable-line max-len
        s2 = float64ToFloat32(-3.0 + float64ToFloat32(x * float64ToFloat32(-2.0 + float64ToFloat32(x * -1.0)))); // eslint-disable-line max-len
    }
    return float64ToFloat32( s1 / s2 );
}


// EXPORTS //

module.exports = evalrational;
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function is intended for **non-browser** environments for the purpose of generating module files.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var compile = require( '@stdlib/math/base/tools/evalrational-compile' );

// Create arrays of random coefficients:
var P = discreteUniform( 10, -100, 100 );
var Q = discreteUniform( 10, -100, 100 );

// Compile a module for evaluating a rational function:
var str = compile( P, Q );
console.log( str );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/tools/evalrational]: https://github.com/stdlib-js/math/tree/main/base/tools/evalrational

</section>

<!-- /.links -->
