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

# Natural Logarithm

> Evaluate the [natural logarithm][natural-logarithm].

<section class="usage">

## Usage

```javascript
var ln = require( '@stdlib/math/base/special/ln' );
```

#### ln( x )

Evaluates the [natural logarithm][natural-logarithm].

```javascript
var v = ln( 4.0 );
// returns ~1.386

v = ln( 0.0 );
// returns -Infinity

v = ln( Infinity );
// returns Infinity

v = ln( NaN );
// returns NaN
```

For negative numbers, the [natural logarithm][natural-logarithm] is **not** defined.

```javascript
var v = ln( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var ln = require( '@stdlib/math/base/special/ln' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'ln(%d) = %d', x, ln( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log10`][@stdlib/math/base/special/log10]</span><span class="delimiter">: </span><span class="description">common logarithm (base ten).</span>
-   <span class="package-name">[`@stdlib/math/base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log2`][@stdlib/math/base/special/log2]</span><span class="delimiter">: </span><span class="description">binary logarithm (base 2).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[natural-logarithm]: https://en.wikipedia.org/wiki/Natural_logarithm

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/log10]: https://github.com/stdlib-js/math/tree/main/base/special/log10

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math/tree/main/base/special/log1p

[@stdlib/math/base/special/log2]: https://github.com/stdlib-js/math/tree/main/base/special/log2

<!-- </related-links> -->

</section>

<!-- /.links -->
