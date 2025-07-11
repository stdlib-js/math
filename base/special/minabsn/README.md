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

# minabsn

> Return the minimum absolute value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minabsn = require( '@stdlib/math/base/special/minabsn' );
```

#### minabsn( \[x\[, y\[, ...args]]] )

Returns the minimum absolute value.

```javascript
var v = minabsn( -4.2, 3.14 );
// returns 3.14

v = minabsn( +0.0, -0.0 );
// returns +0.0

v = minabsn( 4.2, 3.14, -1.0, 6.8 );
// returns 1.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = minabsn( 4.2, NaN );
// returns NaN

v = minabsn( NaN, 3.14 );
// returns NaN
```

If not provided any arguments, the function returns `+infinity`.

```javascript
var v = minabsn();
// returns Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, the function returns `+infinity`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var minabsn = require( '@stdlib/math/base/special/minabsn' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -500.0, 500.0, opts );
var y = uniform( 100, -500.0, 500.0, opts );

logEachMap( 'minabsn(%0.4f,%0.4f) = %0.4f', x, y, naryFunction( minabsn, 2 ) );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/maxabsn`][@stdlib/math/base/special/maxabsn]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minn`][@stdlib/math/base/special/minn]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minabs`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/maxabsn]: https://github.com/stdlib-js/math/tree/main/base/special/maxabsn

[@stdlib/math/base/special/minn]: https://github.com/stdlib-js/math/tree/main/base/special/minn

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math/tree/main/base/special/minabs

<!-- </related-links> -->

</section>

<!-- /.links -->
