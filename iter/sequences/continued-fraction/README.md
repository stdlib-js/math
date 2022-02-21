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

# iterContinuedFractionSeq

> Create an iterator which generates a list of all continued fraction terms which can be obtained given the precision of provided number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A **generalized continued fraction** has the form

<!-- <equation class="equation" label="eq:continued_fraction" align="center" raw="b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" alt="Continued fraction"> -->

<div class="equation" align="center" data-raw-text="b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" data-equation="eq:continued_fraction">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d90ea0f6c35c3049b9206823cc7c74727eca63bb/lib/node_modules/@stdlib/math/iter/sequences/continued-fraction/docs/img/equation_continued_fraction.svg" alt="Continued fraction">
    <br>
</div>

<!-- </equation> -->

If `a_i = 1` for all `i`, the above expression reduces to a **simple continued fraction**.

<!-- <equation class="equation" label="eq:simple_continued_fraction" align="center" raw="b_0 + \frac{1}{b_1+\frac{1}{b_2+\frac{1}{b_3+\frac{1}{b_4}+\ldots}}}" alt="Simple continued fraction"> -->

<div class="equation" align="center" data-raw-text="b_0 + \frac{1}{b_1+\frac{1}{b_2+\frac{1}{b_3+\frac{1}{b_4}+\ldots}}}" data-equation="eq:simple_continued_fraction">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d90ea0f6c35c3049b9206823cc7c74727eca63bb/lib/node_modules/@stdlib/math/iter/sequences/continued-fraction/docs/img/equation_simple_continued_fraction.svg" alt="Simple continued fraction">
    <br>
</div>

<!-- </equation> -->

where the integers `b_i` are called the **coefficients** or **terms** of the continued fraction.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterContinuedFractionSeq = require( '@stdlib/math/iter/sequences/continued-fraction' );
```

#### iterContinuedFractionSeq( x, \[options] )

Returns an iterator which generates a list of all continued fraction terms (`b_i`) which can be obtained given the precision of `x`.

```javascript
var it = iterContinuedFractionSeq( 3.245 );
// returns <Object>

var v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

v = it.next().value;
// returns 12

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `1e308`.
-   **tol**: tolerance at which to terminate further evaluation of the continued fraction. Default: [floating-point epsilon][@stdlib/constants/float64/eps].

By default, in theory, the function returns an infinite iterator; however, in practice, due to limited precision, every floating-point number is a rational number, and, thus, every returned iterator will end in a finite number of iterations. To explicitly cap the maximum number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterContinuedFractionSeq( 3.245, opts );
// returns <Object>

var v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned iterator terminates once the difference between the input value `x` and a continued fraction approximation is sufficiently small. The default tolerance is [floating-point epsilon][@stdlib/constants/float64/eps] (`~2.22e-16`). Once an update to a continued fraction approximation is less than or equal to this tolerance, the iterator terminates. To adjust the tolerance (e.g., to return a rough approximation of an input value `x`), set the `tol` option.

```javascript
var opts = {
    'tol': 1.0e-7
};
var it = iterContinuedFractionSeq( 3.141592653589793, opts );
// returns <Object>

var v = it.next().value;
// returns 3

v = it.next().value;
// returns 7

v = it.next().value;
// returns 16

var bool = it.next().done;
// returns true

// The returned terms [3; 7, 16] evaluate to 3.1415929203539825
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned iterator returns the terms for a **simple continued fraction**.
-   For `x < 0`, the returned iterator returns negated terms for `|x|` (i.e., if the terms for `|x|` are `[b0; b1, b2, ..., bn]`, the returned iterator returns `[-b0; -b1, -b2, ..., -bn]`). While other continued fraction representations are possible, floating-point rounding error can introduce asymmetries when evaluating terms to recover the original values for `|x|` and `x < 0`. Accordingly, alternative continued fraction representations for negative input values are not supported.
-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PI = require( '@stdlib/constants/float64/pi' );
var iterContinuedFractionSeq = require( '@stdlib/math/iter/sequences/continued-fraction' );

function evaluate( terms ) {
    var sum;
    var N;
    var i;

    N = terms.length;
    sum = 0.0;
    if ( N > 1 ) {
        sum = 1.0 / terms[ N-1 ];
        for ( i = N-2; i > 0; i-- ) {
            sum = 1.0 / ( terms[ i ] + sum );
        }
    }
    sum += terms[ 0 ];
    return sum;
}

// Create an iterator:
var opts = {
    'iter': 20
};
var it = iterContinuedFractionSeq( PI, opts );

// Perform manual iteration...
var terms = [];
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    terms.push( v.value );
}
console.log( 'original: %d', PI );
console.log( terms );
console.log( 'computed: %d', evaluate( terms ) );
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

[@stdlib/constants/float64/eps]: https://github.com/stdlib-js/constants-float64-eps

<!-- </related-links> -->

</section>

<!-- /.links -->
