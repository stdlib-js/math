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

-   <span class="signature">[`cdiv( z1, z2 )`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`cneg( z )`][@stdlib/math/base/ops/cneg]</span><span class="delimiter">: </span><span class="description">negate a double-precision complex floating-point number.</span>
-   <span class="signature">[`cnegf( z )`][@stdlib/math/base/ops/cnegf]</span><span class="delimiter">: </span><span class="description">negate a single-precision complex floating-point number.</span>
-   <span class="signature">[`csub( z1, z2 )`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`csubf( z1, z2 )`][@stdlib/math/base/ops/csubf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision complex floating-point numbers.</span>
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

console.log( ns.sub( 1.25, 0.45 ) );
// => 0.8

console.log( ns.divf( 1.2, 0.4 ) );
// => 3.0

// Operations for complex numbers:
var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( -2.0, 1.0 );
console.log( ns.cmul( z1, z2 ) ); // { 're': -13.0, 'im': -1.0 }
// => <Complex128>
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

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math/tree/main/base/ops/cdiv

[@stdlib/math/base/ops/cneg]: https://github.com/stdlib-js/math/tree/main/base/ops/cneg

[@stdlib/math/base/ops/cnegf]: https://github.com/stdlib-js/math/tree/main/base/ops/cnegf

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math/tree/main/base/ops/csub

[@stdlib/math/base/ops/csubf]: https://github.com/stdlib-js/math/tree/main/base/ops/csubf

[@stdlib/math/base/ops/umuldw]: https://github.com/stdlib-js/math/tree/main/base/ops/umuldw

<!-- </toc-links> -->

</section>

<!-- /.links -->
