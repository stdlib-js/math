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

# evalrational

> Compile a C function for evaluating a [rational function][@stdlib/math/base/tools/evalrational].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var compile = require( '@stdlib/math/base/tools/evalrational-compile-c' );
```

#### compile( P, Q )

Compiles a C function for evaluating a [rational function][@stdlib/math/base/tools/evalrational] having coefficients `P` and `Q`.

```javascript
var P = [ 3.0, 2.0, 1.0 ];
var Q = [ -1.0, -2.0, -3.0 ];

var str = compile( P, Q );
// returns <string>
```

The function supports the following `options`:

-   **dtype**: input argument floating-point data type (e.g., `double` or `float`). Default: `'double'`.
-   **name**: function name. Default: `'evalpoly'`.

In the example above, the output string would correspond to the following function:

```c
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
* @param x    value at which to evaluate the rational function
* @returns    evaluated rational function
*/
static double evalrational( const double x ) {
    double ax;
    double ix;
    double s1;
    double s2;
    if ( x == 0.0 ) {
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
        ix = 1.0 / x;
        s1 = 1.0 + (ix * (2.0 + (ix * 3.0)));
        s2 = -3.0 + (ix * (-2.0 + (ix * -1.0)));
    }
    return s1 / s2;
}
```

To generate a function having a custom name and supporting single-precision floating-point numbers, provide the corresponding options.

```javascript
var P = [ 3.0, 2.0, 1.0 ];
var Q = [ -1.0, -2.0, -3.0 ];

var opts = {
    'dtype': 'float',
    'name': 'rational123'
};
var str = compile( P, Q, opts );
// returns <string>
```

For the previous example, the output string would correspond to the following function:

```c
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
* @param x    value at which to evaluate the rational function
* @returns    evaluated rational function
*/
static float rational123( const float x ) {
    float ax;
    float ix;
    float s1;
    float s2;
    if ( x == 0.0f ) {
        return -3.0f;
    }
    if ( x < 0.0f ) {
        ax = -x;
    } else {
        ax = x;
    }
    if ( ax <= 1.0f ) {
        s1 = 3.0f + (x * (2.0f + (x * 1.0f)));
        s2 = -1.0f + (x * (-2.0f + (x * -3.0f)));
    } else {
        ix = 1.0f / x;
        s1 = 1.0f + (ix * (2.0f + (ix * 3.0f)));
        s2 = -3.0f + (ix * (-2.0f + (ix * -1.0f)));
    }
    return s1 / s2;
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The coefficients should be ordered in **ascending** degree, thus matching summation notation.
-   The function is intended for **non-browser** environments for the purpose of generating module files.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var compile = require( '@stdlib/math/base/tools/evalrational-compile-c' );

var sign;
var str;
var P;
var Q;
var i;

// Create two arrays of random coefficients...
P = new Float64Array( 10 );
Q = new Float64Array( 10 );
for ( i = 0; i < P.length; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    P[ i ] = sign * round( randu()*100.0 );
    Q[ i ] = sign * round( randu()*100.0 );
}

// Compile a function for evaluating a rational function:
str = compile( P, Q );
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
