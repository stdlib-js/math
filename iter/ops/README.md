<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

> Math operator iterators.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/iter/ops' );
```

#### ns

Namespace containing math operator iterators.

```javascript
var iterators = ns;
// returns {...}
```

The namespace contains the following functions for creating iterator protocol-compliant iterators:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`iterAdd( iter0, ...iterator )`][@stdlib/math/iter/ops/add]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise addition of two or more iterators.</span>
-   <span class="signature">[`iterDivide( iter0, ...iterator )`][@stdlib/math/iter/ops/divide]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise division of two or more iterators.</span>
-   <span class="signature">[`iterMod( iter0, ...iterator )`][@stdlib/math/iter/ops/mod]</span><span class="delimiter">: </span><span class="description">create an iterator which performs an element-wise modulo operation of two or more iterators.</span>
-   <span class="signature">[`iterMultiply( iter0, ...iterator )`][@stdlib/math/iter/ops/multiply]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise multiplication of two or more iterators.</span>
-   <span class="signature">[`iterSubtract( iter0, ...iterator )`][@stdlib/math/iter/ops/subtract]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise subtraction of two or more iterators.</span>

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
var ns = require( '@stdlib/math/iter/ops' );

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

[@stdlib/math/iter/ops/add]: https://github.com/stdlib-js/math/tree/main/iter/ops/add

[@stdlib/math/iter/ops/divide]: https://github.com/stdlib-js/math/tree/main/iter/ops/divide

[@stdlib/math/iter/ops/mod]: https://github.com/stdlib-js/math/tree/main/iter/ops/mod

[@stdlib/math/iter/ops/multiply]: https://github.com/stdlib-js/math/tree/main/iter/ops/multiply

[@stdlib/math/iter/ops/subtract]: https://github.com/stdlib-js/math/tree/main/iter/ops/subtract

<!-- </toc-links> -->

</section>

<!-- /.links -->
