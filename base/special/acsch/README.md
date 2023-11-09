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

# acsch

> Compute the [hyperbolic arccosecant][inverse-hyperbolic-functions] of a number.

<section class="usage">

## Usage

```javascript
var acsch = require( '@stdlib/math/base/special/acsch' );
```

#### acsch( x )

Computes the [hyperbolic arccosecant][inverse-hyperbolic-functions] of `x`.

```javascript
var v = acsch( 0.0 );
// returns Infinity

v = acsch( -0.0 );
// returns -Infinity

v = acsch( 1.0 );
// returns ~0.881

v = acsch( -1.0 );
// returns ~-0.881

v = acsch( NaN );
// returns NaN

v = acsch( -Infinity );
// returns -0.0

v = acsch( Infinity );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var acsch = require( '@stdlib/math/base/special/acsch' );

var x = linspace( -5.0, 5.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( acsch( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/acoth`][@stdlib/math/base/special/acoth]</span><span class="delimiter">: </span><span class="description">compute the inverse hyperbolic cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acsc`][@stdlib/math/base/special/acsc]</span><span class="delimiter">: </span><span class="description">compute the arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asech`][@stdlib/math/base/special/asech]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsecant of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asinh`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/csch`][@stdlib/math/base/special/csch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosecant of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[inverse-hyperbolic-functions]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acoth]: https://github.com/stdlib-js/math/tree/main/base/special/acoth

[@stdlib/math/base/special/acsc]: https://github.com/stdlib-js/math/tree/main/base/special/acsc

[@stdlib/math/base/special/asech]: https://github.com/stdlib-js/math/tree/main/base/special/asech

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/asinh

[@stdlib/math/base/special/csch]: https://github.com/stdlib-js/math/tree/main/base/special/csch

<!-- </related-links> -->

</section>

<!-- /.links -->
