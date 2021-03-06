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

# Utils

> Base math utilities.

<section class="usage">

## Usage

```javascript
var utils = require( '@stdlib/math/base/utils' );
```

#### utils

Namespace for "base" (i.e., lower-level) math utilities.

```javascript
var o = utils;
// returns {...}
```

<!-- <toc pattern="*difference*" > -->

<div class="namespace-toc">

-   <span class="signature">[`absdiff( x, y )`][@stdlib/math/base/utils/absolute-difference]</span><span class="delimiter">: </span><span class="description">compute the absolute difference of two real numbers.</span>
-   <span class="signature">[`epsdiff( x, y[, scale] )`][@stdlib/math/base/utils/float64-epsilon-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers in units of double-precision floating-point epsilon.</span>
-   <span class="signature">[`reldiff( x, y[, scale] )`][@stdlib/math/base/utils/relative-difference]</span><span class="delimiter">: </span><span class="description">compute the relative difference of two real numbers.</span>

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
var utils = require( '@stdlib/math/base/utils' );

console.log( objectKeys( utils ) );
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

[@stdlib/math/base/utils/absolute-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/absolute-difference

[@stdlib/math/base/utils/float64-epsilon-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/float64-epsilon-difference

[@stdlib/math/base/utils/relative-difference]: https://github.com/stdlib-js/math/tree/main/base/utils/relative-difference

<!-- </toc-links> -->

</section>

<!-- /.links -->
