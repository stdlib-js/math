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

# acoth

> Compute the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a number.

<section class="usage">

## Usage

```javascript
var acoth = require( '@stdlib/math/base/special/acoth' );
```

#### acoth( x )

Computes the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a `number` (in radians).

```javascript
var v = acoth( 2.0 );
// returns ~0.5493

v = acoth( 1.0 );
// returns Infinity
```

The domain of the inverse hyperbolic cotangent is the union of the intervals `(-inf,-1]` and `[1,inf)`. If provided a value on the open interval `(-1,1)`, the function returns `NaN`.

```javascript
var v = acoth( 0.0 );
// returns NaN

v = acoth( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var acoth = require( '@stdlib/math/base/special/acoth' );

var x = linspace( 1.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( acoth( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/acosh`][@stdlib/math/base/special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/acot`][@stdlib/math/base/special/acot]</span><span class="delimiter">: </span><span class="description">compute the inverse cotangent.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asinh`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-arctangent]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/acosh]: https://github.com/stdlib-js/math/tree/main/base/special/acosh

[@stdlib/math/base/special/acot]: https://github.com/stdlib-js/math/tree/main/base/special/acot

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/asinh

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math/tree/main/base/special/atanh

<!-- </related-links> -->

</section>

<!-- /.links -->
