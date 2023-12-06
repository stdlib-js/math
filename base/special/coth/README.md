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

# coth

> Compute the [hyperbolic cotangent][hyperbolic-functions] of a number.

<section class="usage">

## Usage

```javascript
var coth = require( '@stdlib/math/base/special/coth' );
```

#### coth( x )

Computes the [hyperbolic cotangent][hyperbolic-functions] of `x`.

```javascript
var v = coth( 0.0 );
// returns Infinity

v = coth( 2.0 );
// returns ~1.0373

v = coth( -2.0 );
// returns ~-1.0373

v = coth( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var coth = require( '@stdlib/math/base/special/coth' );

var x = linspace( -10.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( coth( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/acoth`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cot`][@stdlib/math/base/special/cot]</span><span class="delimiter">: </span><span class="description">evaluate the cotangent of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/csch`][@stdlib/math/base/special/csch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tanh`][@stdlib/math/base/special/tanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic tangent of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-functions]: https://en.wikipedia.org/wiki/Hyperbolic_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math/tree/main/base/special/acoth

[@stdlib/math/base/special/cot]: https://github.com/stdlib-js/math/tree/main/base/special/cot

[@stdlib/math/base/special/csch]: https://github.com/stdlib-js/math/tree/main/base/special/csch

[@stdlib/math/base/special/tanh]: https://github.com/stdlib-js/math/tree/main/base/special/tanh

<!-- </related-links> -->

</section>

<!-- /.links -->
