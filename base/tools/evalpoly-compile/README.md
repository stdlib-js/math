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

# evalpoly

> Compile a module for evaluating a [polynomial][@stdlib/math/base/tools/evalpoly].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var compile = require( '@stdlib/math/base/tools/evalpoly-compile' );
```

#### compile( c\[, options] )

Compiles a module string containing an exported function which evaluates a [polynomial][@stdlib/math/base/tools/evalpoly] having coefficients `c`.

```javascript
var str = compile( [ 3.0, 2.0, 1.0 ] );
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
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/
function evalpoly( x ) {
    if ( x === 0.0 ) {
        return 3.0;
    }
    return 3.0 + (x * (2.0 + (x * 1.0)));
}


// EXPORTS //

module.exports = evalpoly;
```

The coefficients should be ordered in **ascending** degree, thus matching summation notation.

By default, the function assumes double-precision floating-point arithmetic. To emulate single-precision floating-point arithmetic, set the `dtype` option to `'float32'`.

```javascript
var str = compile( [ 3.0, 2.0, 1.0 ], {
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
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/
function evalpoly( x ) {
    if ( x === 0.0 ) {
        return 3.0;
    }
    return float64ToFloat32(3.0 + float64ToFloat32(x * float64ToFloat32(2.0 + float64ToFloat32(x * 1.0)))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
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
var compile = require( '@stdlib/math/base/tools/evalpoly-compile' );

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100 );

// Compile a module for evaluating a polynomial:
var str = compile( coef );
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

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math/tree/main/base/tools/evalpoly

</section>

<!-- /.links -->
