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

# betaincinv

> Inverse of the [incomplete beta function][incomplete-beta-function].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var betaincinv = require( '@stdlib/math/base/special/betaincinv' );
```

#### betaincinv( p, a, b\[, upper] )

Inverts the regularized [incomplete beta function][incomplete-beta-function]. Contrary to the more commonly used definition, in this implementation the first parameter is the probability `p` and the second and third parameter are `a` and `b`. By default, the function inverts the _lower_ regularized [incomplete beta function][incomplete-beta-function]. To invert the _upper_ function instead, set the `upper` argument to `true`.

```javascript
var y = betaincinv( 0.2, 3.0, 3.0 );
// returns ~0.327

y = betaincinv( 0.4, 3.0, 3.0 );
// returns ~0.446

y = betaincinv( 0.4, 3.0, 3.0, true );
// returns ~0.554

y = betaincinv( 0.4, 1.0, 6.0 );
// returns ~0.082

y = betaincinv( 0.8, 1.0, 6.0 );
// returns ~0.235
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = betaincinv( NaN, 1.0, 1.0 );
// returns NaN

y = betaincinv( 0.5, NaN, 1.0 );
// returns NaN

y = betaincinv( 0.5, 1.0, NaN );
// returns NaN
```

If provided a value outside `[0,1]` for `p`, the function returns `NaN`.

```javascript
var y = betaincinv( 1.2, 1.0, 1.0 );
// returns NaN

y = betaincinv( -0.5, 1.0, 1.0 );
// returns NaN
```

If provided a nonpositive `a`, the function returns `NaN`.

```javascript
var y = betaincinv( 0.5, -2.0, 2.0 );
// returns NaN

y = betaincinv( 0.5, 0.0, 2.0 );
// returns NaN
```

If provided a nonpositive `b`, the function returns `NaN`.

```javascript
var y = betaincinv( 0.5, 2.0, -2.0 );
// returns NaN

y = betaincinv( 0.5, 2.0, 0.0 );
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
var betaincinv = require( '@stdlib/math/base/special/betaincinv' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 100, 0.0, 1.0, opts );
var a = uniform( 100, 0.0, 10.0, opts );
var b = uniform( 100, 0.0, 10.0, opts );

logEachMap( 'p: %0.4f, \t a: %0.4f, \t b: %0.4f, \t f(p,a,b): %0.4f', p, a, b, betaincinv );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/beta`][@stdlib/math/base/special/beta]</span><span class="delimiter">: </span><span class="description">beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betainc`][@stdlib/math/base/special/betainc]</span><span class="delimiter">: </span><span class="description">incomplete beta function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/betaln`][@stdlib/math/base/special/betaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the beta function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[incomplete-beta-function]: https://en.wikipedia.org/wiki/Incomplete_beta_function

<!-- <related-links> -->

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math/tree/main/base/special/beta

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math/tree/main/base/special/betainc

[@stdlib/math/base/special/betaln]: https://github.com/stdlib-js/math/tree/main/base/special/betaln

<!-- </related-links> -->

</section>

<!-- /.links -->
