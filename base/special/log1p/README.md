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

# log1p

> Evaluate the [natural logarithm][@stdlib/math/base/special/ln] of `1+x`.

<section class="usage">

## Usage

```javascript
var log1p = require( '@stdlib/math/base/special/log1p' );
```

#### log1p( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+x`.

```javascript
var v = log1p( 4.0 );
// returns ~1.609

v = log1p( -1.0 );
// returns -Infinity

v = log1p( Infinity );
// returns Infinity

v = log1p( 0.0 );
// returns 0.0

v = log1p( -0.0 );
// returns -0.0

v = log1p( NaN );
// returns NaN
```

For `x < -1`, the function returns `NaN`, as the [natural logarithm][@stdlib/math/base/special/ln] is **not** defined for negative numbers.

```javascript
var v = log1p( -2.0 );
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
var log1p = require( '@stdlib/math/base/special/log1p' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( log1p( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">natural logarithm.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">base `b` logarithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math/tree/main/base/special/ln

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math/tree/main/base/special/log

<!-- </related-links> -->

</section>

<!-- /.links -->
