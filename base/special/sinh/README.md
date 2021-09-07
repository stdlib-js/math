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

# sinh

> Compute the [hyperbolic sine][hyperbolic-sine] of a number.

<section class="usage">

## Usage

```javascript
var sinh = require( '@stdlib/math/base/special/sinh' );
```

#### sinh( x )

Computes the [hyperbolic sine][hyperbolic-sine] of a `number` (in radians).

```javascript
var v = sinh( 0.0 );
// returns 0.0

v = sinh( -0.0 );
// returns -0.0

v = sinh( 2.0 );
// returns ~3.627

v = sinh( -2.0 );
// returns ~-3.627

v = sinh( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var sinh = require( '@stdlib/math/base/special/sinh' );

var x = linspace( -5.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( sinh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cosh`][@stdlib/math/base/special/cosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tanh`][@stdlib/math/base/special/tanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-sine]: http://mathworld.wolfram.com/HyperbolicSine.html

<!-- <related-links> -->

[@stdlib/math/base/special/cosh]: https://github.com/stdlib-js/math/tree/main/base/special/cosh

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math/tree/main/base/special/sin

[@stdlib/math/base/special/tanh]: https://github.com/stdlib-js/math/tree/main/base/special/tanh

<!-- </related-links> -->

</section>

<!-- /.links -->
