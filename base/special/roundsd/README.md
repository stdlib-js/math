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

# roundsd

> Round a numeric value to the nearest number with `n` significant figures.

<section class="usage">

## Usage

```javascript
var roundsd = require( '@stdlib/math/base/special/roundsd' );
```

#### roundsd( x, n\[, b] )

Rounds a `numeric` value to the nearest `number` with `n` significant figures.

```javascript
var v = roundsd( 3.141592653589793, 3 );
// returns 3.14

v = roundsd( 3.141592653589793, 1 );
// returns 3.0

v = roundsd( 12368.0, 2 );
// returns 12000.0
```

The default base is `10` (decimal). To round using a different base, provide a third argument.

```javascript
var v = roundsd( 0.0313, 2, 2 );
// returns 0.03125
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var roundsd = require( '@stdlib/math/base/special/roundsd' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -5000.0, 5000.0, opts );

logEachMap( 'x: %0.4f. y: %d. Rounded: %0.4f.', x, 5, roundsd );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ceilsd`][@stdlib/math/base/special/ceilsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward positive infinity with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorsd`][@stdlib/math/base/special/floorsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward negative infinity with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math/base/special/round`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="package-name">[`@stdlib/math/base/special/truncsd`][@stdlib/math/base/special/truncsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward zero with N significant figures.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/ceilsd]: https://github.com/stdlib-js/math/tree/main/base/special/ceilsd

[@stdlib/math/base/special/floorsd]: https://github.com/stdlib-js/math/tree/main/base/special/floorsd

[@stdlib/math/base/special/round]: https://github.com/stdlib-js/math/tree/main/base/special/round

[@stdlib/math/base/special/truncsd]: https://github.com/stdlib-js/math/tree/main/base/special/truncsd

<!-- </related-links> -->

</section>

<!-- /.links -->
