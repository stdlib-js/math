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

# evalpoly

> Compile a C function for evaluating a [polynomial][@stdlib/math/base/tools/evalpoly].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var compile = require( '@stdlib/math/base/tools/evalpoly-compile-c' );
```

#### compile( c\[, options] )

Compiles a C function for evaluating a [polynomial][@stdlib/math/base/tools/evalpoly] having coefficients `c`.

```javascript
var str = compile( [ 3.0, 2.0, 1.0 ] );
// returns <string>
```

The function supports the following `options`:

-   **dtype**: input argument floating-point data type (e.g., `double` or `float`). Default: `'double'`.
-   **name**: function name. Default: `'evalpoly'`.

In the example above, the output string would correspond to the following function:

```c
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x   value at which to evaluate the polynomial
* @return    evaluated polynomial
*/
static double evalpoly( const double x ) {
    return 3.0 + (x * (2.0 + (x * 1.0)));
}
```

To generate a function having a custom name and supporting single-precision floating-point numbers, provide the corresponding options.

```javascript
var opts = {
    'dtype': 'float',
    'name': 'polyval123'
};
var str = compile( [ 3.0, 2.0, 1.0 ], opts );
// returns <string>
```

For the previous example, the output string would correspond to the following function:

```c
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x   value at which to evaluate the polynomial
* @return    evaluated polynomial
*/
static float polyval123( const float x ) {
    return 3.0f + (x * (2.0f + (x * 1.0f)));
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The coefficients should be ordered in **ascending** degree, thus matching summation notation.
-   The function is intended for **non-browser** environments for the purpose of generating functions for inclusion in source files.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var compile = require( '@stdlib/math/base/tools/evalpoly-compile-c' );

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100 );

// Compile a function for evaluating a polynomial:
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
