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

# betainc

> [Incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var betainc = require( '@stdlib/math/base/special/betainc' );
```

#### betainc( x, a, b\[, regularized\[, upper]] )

By default, evaluates the regularized lower [incomplete beta function][incomplete-beta-function] for inputs `x`, `a > 0` and `b > 0`. The fourth and fifth parameters of the function can be used to specify whether instead to evaluate the non-regularized and/or upper incomplete beta functions, respectively.

```javascript
var y = betainc( 0.5, 2.0, 2.0 );
// returns 0.5

y = betainc( 0.5, 2.0, 2.0, false );
// returns ~0.083

y = betainc( 0.2, 1.0, 2.0 );
// returns 0.36

y = betainc( 0.2, 1.0, 2.0, true, true );
// returns 0.64
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = betainc( NaN, 1.0, 1.0 );
// returns NaN

y = betainc( 0.8, NaN, 1.0 );
// returns NaN

y = betainc( 0.8, 1.0, NaN );
// returns NaN
```

If provided a `x` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = betainc( 1.5, 1.0, 1.0 );
// returns NaN

y = betainc( -0.5, 1.0, 1.0 );
// returns NaN
```

If provided a negative `a`, the function returns `NaN`.

```javascript
var y = betainc( 0.5, -2.0, 2.0 );
// returns NaN
```

If provided a negative `b`, the function returns `NaN`.

```javascript
var y = betainc( 0.5, 2.0, -2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var betainc = require( '@stdlib/math/base/special/betainc' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 1.0, opts );
var a = uniform( 100, 0.0, 10.0, opts );
var b = uniform( 100, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, \t a: %0.4f, \t b: %0.4f, \t f(x,a,b): %0.4f', x, a, b, betainc );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/beta`][@stdlib/math/base/special/beta]</span><span class="delimiter">: </span><span class="description">beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaincinv`][@stdlib/math/base/special/betaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaln`][@stdlib/math/base/special/betaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the beta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

<!-- <related-links> -->

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math/tree/main/base/special/beta

[@stdlib/math/base/special/betaincinv]: https://github.com/stdlib-js/math/tree/main/base/special/betaincinv

[@stdlib/math/base/special/betaln]: https://github.com/stdlib-js/math/tree/main/base/special/betaln

<!-- </related-links> -->

</section>

<!-- /.links -->
