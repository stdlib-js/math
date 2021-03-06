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

# Epsilon Difference

> Compute the [relative difference][@stdlib/math/base/utils/relative-difference] of two real numbers in units of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

<section class="usage">

## Usage

```javascript
var epsdiff = require( '@stdlib/math/base/utils/float64-epsilon-difference' );
```

#### epsdiff( x, y\[, scale] )

Computes the [relative difference][@stdlib/math/base/utils/relative-difference] of two real numbers in units of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

```javascript
var d = epsdiff( 12.15, 12.149999999999999 ); // => ~0.658ε
// returns ~0.658
```

The following [`scale`][@stdlib/math/base/utils/relative-difference] functions are supported:

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
var d = epsdiff( 2.4341309458983933, 2.4341309458633909, 'mean-abs' ); // => ~64761.5ε => ~1.438e-11
// returns ~64761.5
```

To use a custom scale function, provide a `function` which accepts two numeric arguments `x` and `y`.

```javascript
function scale( x, y ) {
    // Return the minimum value:
    return ( x > y ) ? y : x;
}

var d = epsdiff( 1.0000000000000002, 1.0000000000000100, scale ); // => ~44ε
// returns ~44
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If computing the [relative difference][@stdlib/math/base/utils/relative-difference] in units of [epsilon][@stdlib/constants/float64/eps] will result in overflow, the function returns the [maximum double-precision floating-point number][@stdlib/constants/float64/max].

    ```javascript
    var d = epsdiff( 1.0e304, 1.0, 'min' ); // => ~1.798e308ε => 1.0e304/ε overflows
    // returns ~1.798e308
    ```

-   If the [absolute difference][@stdlib/math/base/utils/absolute-difference] of `x` and `y` is `0`, the [relative difference][@stdlib/math/base/utils/relative-difference] is **always** `0`.

    ```javascript
    var d = epsdiff( 0.0, 0.0 );
    // returns 0.0

    d = epsdiff( 3.14, 3.14 );
    // returns 0.0
    ```

-   If `x = y = +infinity` or `x = y = -infinity`, the function returns `NaN`.

    ```javascript
    var PINF = require( '@stdlib/constants/float64/pinf' );
    var NINF = require( '@stdlib/constants/float64/ninf' );

    var d = epsdiff( PINF, PINF );
    // returns NaN

    d = epsdiff( NINF, NINF );
    // returns NaN
    ```

-   If `x = -y = +infinity` or `-x = y = +infinity`, the [relative difference][@stdlib/math/base/utils/relative-difference] is `+infinity`.

    ```javascript
    var PINF = require( '@stdlib/constants/float64/pinf' );
    var NINF = require( '@stdlib/constants/float64/ninf' );

    var d = epsdiff( PINF, NINF );
    // returns Infinity

    d = epsdiff( NINF, PINF );
    // returns Infinity
    ```

-   If a `scale` function returns `0`, the function returns `NaN`.

    ```javascript
    var d = epsdiff( -1.0, 1.0, 'mean' ); // => |2/0|
    // returns NaN
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var epsdiff = require( '@stdlib/math/base/utils/float64-epsilon-difference' );

var sign;
var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    sign = ( randu() > 0.5 ) ? 1.0 : -1.0;
    y = x + ( sign*EPS*i );
    d = epsdiff( x, y );
    console.log( 'x = %d. y = %d. d = %dε.', x, y, d );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/utils/absolute-difference`][@stdlib/math/base/utils/absolute-difference]</span><span class="delimiter">: </span><span class="description">compute the absolute difference of two real numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/utils/relative-difference`][@stdlib/math/base/utils/relative-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/constants/float64/eps]: https://github.com/stdlib-js/constants-float64-eps

[@stdlib/constants/float64/max]: https://github.com/stdlib-js/constants-float64-max

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math/tree/main/base/special/abs

<!-- <related-links> -->

[@stdlib/math/base/utils/absolute-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/absolute-difference

[@stdlib/math/base/utils/relative-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/relative-difference

<!-- </related-links> -->

</section>

<!-- /.links -->
