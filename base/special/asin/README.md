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

# asin

> Compute the [arcsine][arcsine] of a number.

<section class="usage">

## Usage

```javascript
var asin = require( '@stdlib/math/base/special/asin' );
```

#### asin( x )

Computes the [arcsine][arcsine] of a `number` (in radians).

```javascript
var v = asin( 0.0 );
// returns 0.0

v = asin( -3.141592653589793/6.0 );
// returns ~-0.551
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = asin( -3.14 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var asin = require( '@stdlib/math/base/special/asin' );

var x = linspace( -1.0, 1.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( asin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/acos`][@stdlib/math/base/special/acos]</span><span class="delimiter">: </span><span class="description">compute the arccosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/asinh`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/atan`][@stdlib/math/base/special/atan]</span><span class="delimiter">: </span><span class="description">compute the arctangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arcsine]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acos]: https://github.com/stdlib-js/math/tree/main/base/special/acos

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/asinh

[@stdlib/math/base/special/atan]: https://github.com/stdlib-js/math/tree/main/base/special/atan

<!-- </related-links> -->

</section>

<!-- /.links -->
