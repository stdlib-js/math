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

# napi

> C APIs for registering a Node-API module exporting interfaces.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/base/napi' );
```

#### ns

Namespace for C APIs for registering a Node-API module exporting interfaces.

```javascript
var napi = ns;
// returns {...}
```

The namespace contains the following packages:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`binary( fcn )`][@stdlib/math/base/napi/binary]</span><span class="delimiter">: </span><span class="description">C APIs for registering a Node-API module exporting interfaces for invoking binary numerical functions.</span>
-   <span class="signature">[`quaternary( fcn )`][@stdlib/math/base/napi/quaternary]</span><span class="delimiter">: </span><span class="description">C APIs for registering a Node-API module exporting interfaces for invoking quaternary numerical functions.</span>
-   <span class="signature">[`quinary( fcn )`][@stdlib/math/base/napi/quinary]</span><span class="delimiter">: </span><span class="description">C APIs for registering a Node-API module exporting interfaces for invoking quinary numerical functions.</span>
-   <span class="signature">[`ternary( fcn )`][@stdlib/math/base/napi/ternary]</span><span class="delimiter">: </span><span class="description">C APIs for registering a Node-API module exporting interfaces for invoking ternary numerical functions.</span>
-   <span class="signature">[`unary( fcn )`][@stdlib/math/base/napi/unary]</span><span class="delimiter">: </span><span class="description">C APIs for registering a Node-API module exporting interfaces for invoking unary numerical functions.</span>

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
var ns = require( '@stdlib/math/base/napi' );

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

[@stdlib/math/base/napi/binary]: https://github.com/stdlib-js/math/tree/main/base/napi/binary

[@stdlib/math/base/napi/quaternary]: https://github.com/stdlib-js/math/tree/main/base/napi/quaternary

[@stdlib/math/base/napi/quinary]: https://github.com/stdlib-js/math/tree/main/base/napi/quinary

[@stdlib/math/base/napi/ternary]: https://github.com/stdlib-js/math/tree/main/base/napi/ternary

[@stdlib/math/base/napi/unary]: https://github.com/stdlib-js/math/tree/main/base/napi/unary

<!-- </toc-links> -->

</section>

<!-- /.links -->
