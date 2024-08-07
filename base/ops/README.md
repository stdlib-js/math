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
-   <span class="signature">[`add3( x, y, z )`][@stdlib/math/base/ops/add3]</span><span class="delimiter">: </span><span class="description">compute the sum of three double-precision floating-point numbers.</span>
-   <span class="signature">[`add4( x, y, z, w )`][@stdlib/math/base/ops/add4]</span><span class="delimiter">: </span><span class="description">compute the sum of four double-precision floating-point numbers.</span>
-   <span class="signature">[`add5( x, y, z, w, u )`][@stdlib/math/base/ops/add5]</span><span class="delimiter">: </span><span class="description">compute the sum of five double-precision floating-point numbers.</span>
-   <span class="signature">[`addf( x, y )`][@stdlib/math/base/ops/addf]</span><span class="delimiter">: </span><span class="description">compute the sum of two single-precision floating-point numbers.</span>
-   <span class="signature">[`cdiv( z1, z2 )`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`cneg( z )`][@stdlib/math/base/ops/cneg]</span><span class="delimiter">: </span><span class="description">negate a double-precision complex floating-point number.</span>
-   <span class="signature">[`cnegf( z )`][@stdlib/math/base/ops/cnegf]</span><span class="delimiter">: </span><span class="description">negate a single-precision complex floating-point number.</span>
-   <span class="signature">[`csub( z1, z2 )`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`csubf( z1, z2 )`][@stdlib/math/base/ops/csubf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision complex floating-point numbers.</span>
-   <span class="signature">[`div( x, y )`][@stdlib/math/base/ops/div]</span><span class="delimiter">: </span><span class="description">divide two double-precision floating-point numbers.</span>
-   <span class="signature">[`divf( x, y )`][@stdlib/math/base/ops/divf]</span><span class="delimiter">: </span><span class="description">divide two single-precision floating-point numbers.</span>
-   <span class="signature">[`imul( a, b )`][@stdlib/math/base/ops/imul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two signed 32-bit integers.</span>
-   <span class="signature">[`imuldw( a, b )`][@stdlib/math/base/ops/imuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two signed 32-bit integers.</span>
-   <span class="signature">[`mul( x, y )`][@stdlib/math/base/ops/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision floating-point numbers.</span>
-   <span class="signature">[`mulf( x, y )`][@stdlib/math/base/ops/mulf]</span><span class="delimiter">: </span><span class="description">multiply two single-precision floating-point numbers.</span>
-   <span class="signature">[`sub( x, y )`][@stdlib/math/base/ops/sub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision floating-point numbers.</span>
-   <span class="signature">[`subf( x, y )`][@stdlib/math/base/ops/subf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision floating-point numbers.</span>
-   <span class="signature">[`umul( a, b )`][@stdlib/math/base/ops/umul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two unsigned 32-bit integers.</span>
-   <span class="signature">[`umuldw( a, b )`][@stdlib/math/base/ops/umuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two unsigned 32-bit integers.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var ns = require( '@stdlib/math/base/ops' );

// Operations for double-precision floating point numbers:
console.log( ns.add( 1.25, 0.45 ) );
// => 1.7

console.log( ns.sub( 1.25, 0.45 ) );
// => 0.8

// Operations for single-precision floating point numbers:
console.log( ns.mulf( 1.3, 1.2 ) );
// => ~1.56

console.log( ns.divf( 1.2, 0.4 ) );
// => 3.0

// Operations for complex numbers:
var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( -2.0, 1.0 );
console.log( ns.cmul( z1, z2 ) ); // { 're': -13.0, 'im': -1.0 }
// => <Complex128>

// Operations for signed 32-bit integers:
// 2^30 * -5 = -5368709120 => 32-bit integer overflow
console.log( ns.imul( 1073741824|0, -5|0 ) );
// => -1073741824

// Operations for unsigned 32-bit integers:
// 2^31 * 5 = 10737418240 => 32-bit integer overflow
console.log( ns.umul( 2147483648>>>0, 5>>>0 ) );
// => 2147483648

// Operations for double word product:
// -(2^31) * 2^30 = -2305843009213694000 => 32-bit integer overflow
console.log( ns.imuldw( 0x80000000|0, 0x40000000|0 ) );
// => [ -536870912, 0 ]
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

[@stdlib/math/base/ops/add3]: https://github.com/stdlib-js/math/tree/main/base/ops/add3

[@stdlib/math/base/ops/add4]: https://github.com/stdlib-js/math/tree/main/base/ops/add4

[@stdlib/math/base/ops/add5]: https://github.com/stdlib-js/math/tree/main/base/ops/add5

[@stdlib/math/base/ops/addf]: https://github.com/stdlib-js/math/tree/main/base/ops/addf

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math/tree/main/base/ops/cdiv

[@stdlib/math/base/ops/cneg]: https://github.com/stdlib-js/math/tree/main/base/ops/cneg

[@stdlib/math/base/ops/cnegf]: https://github.com/stdlib-js/math/tree/main/base/ops/cnegf

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math/tree/main/base/ops/csub

[@stdlib/math/base/ops/csubf]: https://github.com/stdlib-js/math/tree/main/base/ops/csubf

[@stdlib/math/base/ops/div]: https://github.com/stdlib-js/math/tree/main/base/ops/div

[@stdlib/math/base/ops/divf]: https://github.com/stdlib-js/math/tree/main/base/ops/divf

[@stdlib/math/base/ops/imul]: https://github.com/stdlib-js/math/tree/main/base/ops/imul

[@stdlib/math/base/ops/imuldw]: https://github.com/stdlib-js/math/tree/main/base/ops/imuldw

[@stdlib/math/base/ops/mul]: https://github.com/stdlib-js/math/tree/main/base/ops/mul

[@stdlib/math/base/ops/mulf]: https://github.com/stdlib-js/math/tree/main/base/ops/mulf

[@stdlib/math/base/ops/sub]: https://github.com/stdlib-js/math/tree/main/base/ops/sub

[@stdlib/math/base/ops/subf]: https://github.com/stdlib-js/math/tree/main/base/ops/subf

[@stdlib/math/base/ops/umul]: https://github.com/stdlib-js/math/tree/main/base/ops/umul

[@stdlib/math/base/ops/umuldw]: https://github.com/stdlib-js/math/tree/main/base/ops/umuldw

<!-- </toc-links> -->

</section>

<!-- /.links -->
