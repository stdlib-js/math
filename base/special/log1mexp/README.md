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

# log1mexp

> Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1-exp(-|x|)`.

<section class="usage">

## Usage

```javascript
var log1mexp = require( '@stdlib/math/base/special/log1mexp' );
```

#### log1mexp( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1-exp(-|x|)`.

```javascript
var y = log1mexp( 0.0 );
// returns -Infinity

y = log1mexp( 5.0 );
// returns ~-0.00676

y = log1mexp( 10.0 );
// returns ~-0.00005

y = log1mexp( -10.0 );
// returns ~-0.00005

y = log1mexp( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/incrspace' );
var log1mexp = require( '@stdlib/math/base/special/log1mexp' );

var x = incrspace( -10.0, 10.0, 0.01 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
    v = log1mexp( x[ i ] );
    console.log( 'x: %d, f(x): %d', x[ i ], v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">natural logarithm.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log1pexp`][@stdlib/math/base/special/log1pexp]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+exp(x).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math/tree/main/base/special/exp

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math/tree/main/base/special/log1p

[@stdlib/math/base/special/log1pexp]: https://github.com/stdlib-js/math/tree/main/base/special/log1pexp

<!-- </related-links> -->

</section>

<!-- /.links -->
