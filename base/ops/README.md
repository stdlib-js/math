<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Operators

> Base (i.e., lower-level) math operators.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/base/ops' );
```

#### ns

Namespace for "base" (i.e., lower-level) math operators.

```javascript
var operators = ns;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`add( x, y )`][@stdlib/math/base/ops/add]</span><span class="delimiter">: </span><span class="description">compute the sum of two double-precision floating-point numbers.</span>
-   <span class="signature">[`addf( x, y )`][@stdlib/math/base/ops/addf]</span><span class="delimiter">: </span><span class="description">compute the sum of two single-precision floating-point numbers.</span>
-   <span class="signature">[`cadd( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/cadd]</span><span class="delimiter">: </span><span class="description">add two complex numbers.</span>
-   <span class="signature">[`cdiv( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>
-   <span class="signature">[`cmul( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/cmul]</span><span class="delimiter">: </span><span class="description">multiply two complex numbers.</span>
-   <span class="signature">[`cneg( [out,] re, im )`][@stdlib/math/base/ops/cneg]</span><span class="delimiter">: </span><span class="description">negate a complex number.</span>
-   <span class="signature">[`csub( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two complex numbers.</span>
-   <span class="signature">[`imul( a, b )`][@stdlib/math/base/ops/imul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two signed 32-bit integers.</span>
-   <span class="signature">[`imuldw( [out,] a, b )`][@stdlib/math/base/ops/imuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two signed 32-bit integers.</span>
-   <span class="signature">[`mul( x, y )`][@stdlib/math/base/ops/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision floating-point numbers.</span>
-   <span class="signature">[`sub( x, y )`][@stdlib/math/base/ops/sub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision floating-point numbers.</span>
-   <span class="signature">[`subf( x, y )`][@stdlib/math/base/ops/subf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision floating-point numbers.</span>
-   <span class="signature">[`umul( a, b )`][@stdlib/math/base/ops/umul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two unsigned 32-bit integers.</span>
-   <span class="signature">[`umuldw( [out,] a, b )`][@stdlib/math/base/ops/umuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two unsigned 32-bit integers.</span>

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
var ns = require( '@stdlib/math/base/ops' );

console.log( objectKeys( ns ) );
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

[@stdlib/math/base/ops/add]: https://github.com/stdlib-js/math/tree/main/base/ops/add

[@stdlib/math/base/ops/addf]: https://github.com/stdlib-js/math/tree/main/base/ops/addf

[@stdlib/math/base/ops/cadd]: https://github.com/stdlib-js/math/tree/main/base/ops/cadd

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math/tree/main/base/ops/cdiv

[@stdlib/math/base/ops/cmul]: https://github.com/stdlib-js/math/tree/main/base/ops/cmul

[@stdlib/math/base/ops/cneg]: https://github.com/stdlib-js/math/tree/main/base/ops/cneg

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math/tree/main/base/ops/csub

[@stdlib/math/base/ops/imul]: https://github.com/stdlib-js/math/tree/main/base/ops/imul

[@stdlib/math/base/ops/imuldw]: https://github.com/stdlib-js/math/tree/main/base/ops/imuldw

[@stdlib/math/base/ops/mul]: https://github.com/stdlib-js/math/tree/main/base/ops/mul

[@stdlib/math/base/ops/sub]: https://github.com/stdlib-js/math/tree/main/base/ops/sub

[@stdlib/math/base/ops/subf]: https://github.com/stdlib-js/math/tree/main/base/ops/subf

[@stdlib/math/base/ops/umul]: https://github.com/stdlib-js/math/tree/main/base/ops/umul

[@stdlib/math/base/ops/umuldw]: https://github.com/stdlib-js/math/tree/main/base/ops/umuldw

<!-- </toc-links> -->

</section>

<!-- /.links -->
