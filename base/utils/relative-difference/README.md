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

# Relative Difference

> Compute the [relative difference][relative-difference] of two real numbers.

<section class="intro">

The [relative difference][relative-difference] of two real `numbers` is defined as

<!-- <equation class="equation" label="eq:relative_difference" align="center" raw="\Delta(x,y) = \frac{|x - y|}{|f(x,y)|} = \left|\frac{x - y}{f(x,y)}\right|" alt="Relative difference"> -->

```math
\Delta(x,y) = \frac{|x - y|}{|f(x,y)|} = \left|\frac{x - y}{f(x,y)}\right|
```

<!-- <div class="equation" align="center" data-raw-text="\Delta(x,y) = \frac{|x - y|}{|f(x,y)|} = \left|\frac{x - y}{f(x,y)}\right|" data-equation="eq:relative_difference">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/utils/relative-difference/docs/img/equation_relative_difference.svg" alt="Relative difference">
    <br>
</div> -->

<!-- </equation> -->

where `|x-y|` is the [absolute difference][@stdlib/math/base/utils/absolute-difference] and `f(x,y)` is a scale function. Common scale functions include

<!-- <equation class="equation" label="eq:scale_functions" align="center" raw="\begin{align*}f(x,y) &= \max(|x|, |y|)\\f(x,y) &= \max(x,y)\\ f(x,y) &= \min(|x|,|y|)\\f(x,y) &= \min(x,y) \\f(x,y) &= \frac{|x|+|y|}{2} \\f(x,y) &= \frac{x + y}{2}\end{align*}" alt="Scale functions"> -->

```math
\begin{align*}f(x,y) &= \max(|x|, |y|)\\f(x,y) &= \max(x,y)\\ f(x,y) &= \min(|x|,|y|)\\f(x,y) &= \min(x,y) \\f(x,y) &= \frac{|x|+|y|}{2} \\f(x,y) &= \frac{x + y}{2}\end{align*}
```

<!-- <div class="equation" align="center" data-raw-text="\begin{align*}f(x,y) &amp;= \max(|x|, |y|)\\f(x,y) &amp;= \max(x,y)\\ f(x,y) &amp;= \min(|x|,|y|)\\f(x,y) &amp;= \min(x,y) \\f(x,y) &amp;= \frac{|x|+|y|}{2} \\f(x,y) &amp;= \frac{x + y}{2}\end{align*}" data-equation="eq:scale_functions">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/utils/relative-difference/docs/img/equation_scale_functions.svg" alt="Scale functions">
    <br>
</div> -->

<!-- </equation> -->

The choice of scale function depends on application context.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var reldiff = require( '@stdlib/math/base/utils/relative-difference' );
```

#### reldiff( x, y\[, scale] )

Computes the [relative difference][relative-difference] of two real numbers.

```javascript
var d = reldiff( 2.0, 5.0 ); // => 3/5
// returns 0.6

d = reldiff( -1.0, 3.14 ); // => 4.14/3.14
// returns ~1.318
```

The following `scale` functions are supported:

-   **max-abs**: maximum [absolute value][@stdlib/math/base/special/abs] of `x` and `y` (_default_).
-   **max**: maximum value of `x` and `y`.
-   **min-abs**: minimum [absolute value][@stdlib/math/base/special/abs] of `x` and `y`.
-   **min**: minimum value of `x` and `y`.
-   **mean-abs**: arithmetic mean of the [absolute values][@stdlib/math/base/special/abs] of `x` and `y`.
-   **mean**: arithmetic mean of `x` and `y`.
-   **x**: `x` (_noncommutative_).
-   **y**: `y` (_noncommutative_).

By default, the function scales the [absolute difference][@stdlib/math/base/utils/absolute-difference] by dividing the [absolute difference][@stdlib/math/base/utils/absolute-difference] by the maximum [absolute value][@stdlib/math/base/special/abs] of `x` and `y`. To scale by a different function, specify a scale function name.

```javascript
var d = reldiff( -2.0, 5.0 ); // => |-7/5|
// returns 1.4

d = reldiff( -2.0, 5.0, 'max-abs' ); // => |-7/5|
// returns 1.4

d = reldiff( -2.0, 5.0, 'max' ); // => |-7/5|
// returns 1.4

d = reldiff( -2.0, 5.0, 'min-abs' ); // => |-7/2|
// returns 3.5

d = reldiff( -2.0, 5.0, 'min' ); // => |-7/-2|
// returns 3.5

d = reldiff( -2.0, 5.0, 'mean-abs' ); // => |-7/3.5|
// returns 2.0

d = reldiff( -2.0, 5.0, 'mean' ); // => |-7/1.5|
// returns ~4.67

d = reldiff( -2.0, 5.0, 'x' ); // => |-7/-2|
// returns 3.5

d = reldiff( 5.0, -2.0, 'x' ); // => |7/5|
// returns 1.4

d = reldiff( -2.0, 5.0, 'y' ); // => |-7/5|
// returns 1.4

d = reldiff( 5.0, -2.0, 'y' ); // => |7/-2|
// returns 3.5
```

To use a custom scale `function`, provide a `function` which accepts two numeric arguments `x` and `y`.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );

function scale( x, y ) {
    var s;
    x = abs( x );
    y = abs( y );

    // Maximum absolute value:
    s = (x < y ) ? y : x;

    // Scale in units of epsilon:
    return s * EPS;
}

var d = reldiff( 12.15, 12.149999999999999, scale );
// returns ~0.658
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the [absolute difference][@stdlib/math/base/utils/absolute-difference] of `x` and `y` is `0`, the relative difference is **always** `0`.

    ```javascript
    var d = reldiff( 0.0, 0.0 );
    // returns 0.0

    d = reldiff( 3.14, 3.14 );
    // returns 0.0
    ```

-   If `|x| = |y| = infinity`, the function returns `NaN`.

    ```javascript
    var d = reldiff( Infinity, Infinity );
    // returns NaN

    d = reldiff( -Infinity, -Infinity );
    // returns NaN
    ```

-   If `|x| = |-y| = infinity`, the relative difference is `+infinity`.

    ```javascript
    var d = reldiff( Infinity, -Infinity );
    // returns Infinity

    d = reldiff( -Infinity, Infinity );
    // returns Infinity
    ```

-   If a `scale` function returns `0`, the function returns `NaN`.

    ```javascript
    var d = reldiff( 0.0, 2.0, 'mean' ); // => |2/1|
    // returns 2.0

    d = reldiff( -1.0, 1.0, 'mean' ); // => |2/0|
    // returns NaN
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var reldiff = require( '@stdlib/math/base/utils/relative-difference' );

var scales = [ 'max-abs', 'max', 'min-abs', 'min', 'mean-abs', 'mean', 'x', 'y' ];
var x;
var y;
var d;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*1.0e4 ) - 5.0e3;
    y = ( randu()*1.0e4 ) - 5.0e3;
    for ( j = 0; j < scales.length; j++ ) {
        d = reldiff( x, y, scales[j] );
        console.log( 'x = %d. y = %d. d = %d. scale: %s.', x, y, d, scales[j] );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/utils/absolute-difference`][@stdlib/math/base/utils/absolute-difference]</span><span class="delimiter">: </span><span class="description">compute the absolute difference of two real numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/utils/float64-epsilon-difference`][@stdlib/math/base/utils/float64-epsilon-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers in units of double-precision floating-point epsilon.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

[relative-difference]: https://en.wikipedia.org/wiki/Relative_change_and_difference

<!-- <related-links> -->

[@stdlib/math/base/utils/absolute-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/absolute-difference

[@stdlib/math/base/utils/float64-epsilon-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/float64-epsilon-difference

<!-- </related-links> -->

</section>

<!-- /.links -->
