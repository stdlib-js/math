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

# Tools

> Base math tools.

<section class="usage">

## Usage

```javascript
var tools = require( '@stdlib/math/base/tools' );
```

#### tools

Namespace containing "base" math tools.

```javascript
var o = tools;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`continuedFraction( generator[, options ] )`][@stdlib/math/base/tools/continued-fraction]</span><span class="delimiter">: </span><span class="description">continued fraction approximation.</span>
-   <span class="signature">[`evalpoly( c, x )`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial using double-precision floating-point arithmetic.</span>
-   <span class="signature">[`evalpolyf( c, x )`][@stdlib/math/base/tools/evalpolyf]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial using single-precision floating-point arithmetic.</span>
-   <span class="signature">[`evalrational( P, Q, x )`][@stdlib/math/base/tools/evalrational]</span><span class="delimiter">: </span><span class="description">evaluate a rational function using double-precision floating-point arithmetic.</span>
-   <span class="signature">[`evalrationalf( P, Q, x )`][@stdlib/math/base/tools/evalrationalf]</span><span class="delimiter">: </span><span class="description">evaluate a rational function using single-precision floating-point arithmetic.</span>
-   <span class="signature">[`fibpoly( n, x )`][@stdlib/math/base/tools/fibpoly]</span><span class="delimiter">: </span><span class="description">evaluate a Fibonacci polynomial.</span>
-   <span class="signature">[`hermitepoly( n, x )`][@stdlib/math/base/tools/hermitepoly]</span><span class="delimiter">: </span><span class="description">evaluate a physicist's Hermite polynomial.</span>
-   <span class="signature">[`lucaspoly( n, x )`][@stdlib/math/base/tools/lucaspoly]</span><span class="delimiter">: </span><span class="description">evaluate a Lucas polynomial.</span>
-   <span class="signature">[`normhermitepoly( n, x )`][@stdlib/math/base/tools/normhermitepoly]</span><span class="delimiter">: </span><span class="description">evaluate a normalized Hermite polynomial using double-precision floating-point arithmetic.</span>
-   <span class="signature">[`sumSeries( generator[, options ] )`][@stdlib/math/base/tools/sum-series]</span><span class="delimiter">: </span><span class="description">compute the sum of an infinite series.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var tools = require( '@stdlib/math/base/tools' );

console.log( objectKeys( tools ) );
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

[@stdlib/math/base/tools/continued-fraction]: https://github.com/stdlib-js/math/tree/main/base/tools/continued-fraction

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math/tree/main/base/tools/evalpoly

[@stdlib/math/base/tools/evalpolyf]: https://github.com/stdlib-js/math/tree/main/base/tools/evalpolyf

[@stdlib/math/base/tools/evalrational]: https://github.com/stdlib-js/math/tree/main/base/tools/evalrational

[@stdlib/math/base/tools/evalrationalf]: https://github.com/stdlib-js/math/tree/main/base/tools/evalrationalf

[@stdlib/math/base/tools/fibpoly]: https://github.com/stdlib-js/math/tree/main/base/tools/fibpoly

[@stdlib/math/base/tools/hermitepoly]: https://github.com/stdlib-js/math/tree/main/base/tools/hermitepoly

[@stdlib/math/base/tools/lucaspoly]: https://github.com/stdlib-js/math/tree/main/base/tools/lucaspoly

[@stdlib/math/base/tools/normhermitepoly]: https://github.com/stdlib-js/math/tree/main/base/tools/normhermitepoly

[@stdlib/math/base/tools/sum-series]: https://github.com/stdlib-js/math/tree/main/base/tools/sum-series

<!-- </toc-links> -->

</section>

<!-- /.links -->
