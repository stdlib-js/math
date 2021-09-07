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

# tanh

> Compute the [hyperbolic tangent][hyperbolic-tangent] of a number.

<section class="usage">

## Usage

```javascript
var tanh = require( '@stdlib/math/base/special/tanh' );
```

#### tanh( x )

Computes the [hyperbolic tangent][hyperbolic-tangent] of a `number` (in radians).

```javascript
var v = tanh( 0.0 );
// returns 0.0

v = tanh( -0.0 );
// returns -0.0

v = tanh( 2.0 );
// returns ~0.964

v = tanh( -2.0 );
// returns ~-0.964

v = tanh( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var tanh = require( '@stdlib/math/base/special/tanh' );

var x = linspace( -4.0, 4.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( tanh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cosh`][@stdlib/math/base/special/cosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sinh`][@stdlib/math/base/special/sinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic sine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-tangent]: http://mathworld.wolfram.com/HyperbolicTangent.html

<!-- <related-links> -->

[@stdlib/math/base/special/cosh]: https://github.com/stdlib-js/math/tree/main/base/special/cosh

[@stdlib/math/base/special/sinh]: https://github.com/stdlib-js/math/tree/main/base/special/sinh

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math/tree/main/base/special/tan

<!-- </related-links> -->

</section>

<!-- /.links -->
