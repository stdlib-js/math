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

# Operations

> Strided array math operations.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/strided/ops' );
```

#### ns

Namespace containing strided array math operations.

```javascript
var ops = ns;
// returns {...}
```

The namespace contains the following strided array functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`addBy( N, x, strideX, y, strideY, z, strideZ, clbk[, thisArg] )`][@stdlib/math/strided/ops/add-by]</span><span class="delimiter">: </span><span class="description">element-wise addition of two strided arrays via a callback function.</span>
-   <span class="signature">[`add( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ )`][@stdlib/math/strided/ops/add]</span><span class="delimiter">: </span><span class="description">element-wise addition of two strided arrays.</span>
-   <span class="signature">[`mulBy( N, x, strideX, y, strideY, z, strideZ, clbk[, thisArg] )`][@stdlib/math/strided/ops/mul-by]</span><span class="delimiter">: </span><span class="description">element-wise multiplication of two strided arrays via a callback function.</span>
-   <span class="signature">[`mul( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ )`][@stdlib/math/strided/ops/mul]</span><span class="delimiter">: </span><span class="description">element-wise multiplication of two strided arrays.</span>
-   <span class="signature">[`subBy( N, x, strideX, y, strideY, z, strideZ, clbk[, thisArg] )`][@stdlib/math/strided/ops/sub-by]</span><span class="delimiter">: </span><span class="description">element-wise subtraction of two strided arrays via a callback function.</span>
-   <span class="signature">[`sub( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ )`][@stdlib/math/strided/ops/sub]</span><span class="delimiter">: </span><span class="description">element-wise subtraction of two strided arrays.</span>

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
var ns = require( '@stdlib/math/strided/ops' );

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

[@stdlib/math/strided/ops/add-by]: https://github.com/stdlib-js/math/tree/main/strided/ops/add-by

[@stdlib/math/strided/ops/add]: https://github.com/stdlib-js/math/tree/main/strided/ops/add

[@stdlib/math/strided/ops/mul-by]: https://github.com/stdlib-js/math/tree/main/strided/ops/mul-by

[@stdlib/math/strided/ops/mul]: https://github.com/stdlib-js/math/tree/main/strided/ops/mul

[@stdlib/math/strided/ops/sub-by]: https://github.com/stdlib-js/math/tree/main/strided/ops/sub-by

[@stdlib/math/strided/ops/sub]: https://github.com/stdlib-js/math/tree/main/strided/ops/sub

<!-- </toc-links> -->

</section>

<!-- /.links -->
