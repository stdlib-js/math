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

# Tools

> Math iterator tools.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/iter/tools' );
```

#### ns

Namespace containing math iterator tools.

```javascript
var o = ns;
// returns {...}
```

The namespace exposes the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`map( iterator, fcn[, options] )`][@stdlib/math/iter/tools/map]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a unary function accepting a single numeric argument for each iterated value.</span>
-   <span class="signature">[`map2( iter0, iter1, fcn[, options] )`][@stdlib/math/iter/tools/map2]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a binary function accepting numeric arguments for each iterated value.</span>
-   <span class="signature">[`map3( iter0, iter1, iter2, fcn[, options] )`][@stdlib/math/iter/tools/map3]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a ternary function accepting numeric arguments for each iterated value.</span>

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
var ns = require( '@stdlib/math/iter/tools' );

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

[@stdlib/math/iter/tools/map]: https://github.com/stdlib-js/math/tree/main/iter/tools/map

[@stdlib/math/iter/tools/map2]: https://github.com/stdlib-js/math/tree/main/iter/tools/map2

[@stdlib/math/iter/tools/map3]: https://github.com/stdlib-js/math/tree/main/iter/tools/map3

<!-- </toc-links> -->

</section>

<!-- /.links -->
