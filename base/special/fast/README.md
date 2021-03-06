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

# Special Functions

> Fast math special functions.

<section class="usage">

## Usage

```javascript
var fmath = require( '@stdlib/math/base/special/fast' );
```

#### fmath

Namespace containing "fast" math special functions. 

```javascript
var fcns = fmath;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`abs( x )`][@stdlib/math/base/special/fast/abs]</span><span class="delimiter">: </span><span class="description">compute an absolute value.</span>
-   <span class="signature">[`acosh( x )`][@stdlib/math/base/special/fast/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a number.</span>
-   <span class="signature">[`ampbm( x, y )`][@stdlib/math/base/special/fast/alpha-max-plus-beta-min]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse using the alpha max plus beta min algorithm.</span>
-   <span class="signature">[`asinh( x )`][@stdlib/math/base/special/fast/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a number.</span>
-   <span class="signature">[`atanh( x )`][@stdlib/math/base/special/fast/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a number.</span>
-   <span class="signature">[`hypot( x, y )`][@stdlib/math/base/special/fast/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse.</span>
-   <span class="signature">[`max( x, y )`][@stdlib/math/base/special/fast/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="signature">[`min( x, y )`][@stdlib/math/base/special/fast/min]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="signature">[`powint( base, exponent )`][@stdlib/math/base/special/fast/pow-int]</span><span class="delimiter">: </span><span class="description">exponential function.</span>
-   <span class="signature">[`log2Uint32( x )`][@stdlib/math/base/special/fast/uint32-log2]</span><span class="delimiter">: </span><span class="description">compute an integer binary logarithm.</span>
-   <span class="signature">[`sqrtUint32( x )`][@stdlib/math/base/special/fast/uint32-sqrt]</span><span class="delimiter">: </span><span class="description">compute an integer square root.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Implementations **may** violate strict IEEE semantics.
-   Implementations **may** assume arguments and results are **not** `NaN`.
-   Implementations **may** assume arguments are **neither** positive or negative `infinity`.
-   Implementations **may** ignore the sign of zero. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var fmath = require( '@stdlib/math/base/special/fast' );

console.log( objectKeys( fmath ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/math/base/special/fast/abs]: https://github.com/stdlib-js/math/tree/main/base/special/fast/abs

[@stdlib/math/base/special/fast/acosh]: https://github.com/stdlib-js/math/tree/main/base/special/fast/acosh

[@stdlib/math/base/special/fast/alpha-max-plus-beta-min]: https://github.com/stdlib-js/math/tree/main/base/special/fast/alpha-max-plus-beta-min

[@stdlib/math/base/special/fast/asinh]: https://github.com/stdlib-js/math/tree/main/base/special/fast/asinh

[@stdlib/math/base/special/fast/atanh]: https://github.com/stdlib-js/math/tree/main/base/special/fast/atanh

[@stdlib/math/base/special/fast/hypot]: https://github.com/stdlib-js/math/tree/main/base/special/fast/hypot

[@stdlib/math/base/special/fast/max]: https://github.com/stdlib-js/math/tree/main/base/special/fast/max

[@stdlib/math/base/special/fast/min]: https://github.com/stdlib-js/math/tree/main/base/special/fast/min

[@stdlib/math/base/special/fast/pow-int]: https://github.com/stdlib-js/math/tree/main/base/special/fast/pow-int

[@stdlib/math/base/special/fast/uint32-log2]: https://github.com/stdlib-js/math/tree/main/base/special/fast/uint32-log2

[@stdlib/math/base/special/fast/uint32-sqrt]: https://github.com/stdlib-js/math/tree/main/base/special/fast/uint32-sqrt

<!-- </toc-links> -->

</section>

<!-- /.links -->
