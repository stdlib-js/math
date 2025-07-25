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

# maxabsn

> Return the maximum absolute value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var maxabsn = require( '@stdlib/math/base/special/maxabsn' );
```

#### maxabsn( \[x\[, y\[, ...args]]] )

Returns the maximum absolute value.

```javascript
var v = maxabsn( -4.2, 3.14 );
// returns 4.2

v = maxabsn( +0.0, -0.0 );
// returns +0.0

v = maxabsn( 4.2, 3.14, -1.0, 6.8 );
// returns 6.8
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = maxabsn( 4.2, NaN );
// returns NaN

v = maxabsn( NaN, 3.14 );
// returns NaN
```

If not provided any arguments, the function returns `+infinity`.

```javascript
var v = maxabsn();
// returns Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, negative infinity is the identity element for the maximum, and thus, the function returns `+infinity` (i.e., the absolute value of negative infinity).

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
var maxabsn = require( '@stdlib/math/base/special/maxabsn' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -500.0, 500.0, opts );
var y = uniform( 100, -500.0, 500.0, opts );

logEachMap( 'maxabsn(%0.4f,%0.4f) = %0.4f', x, y, naryFunction( maxabsn, 2 ) );
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

-   <span class="package-name">[`@stdlib/math/base/special/maxn`][@stdlib/math/base/special/maxn]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/maxabs`][@stdlib/math/base/special/maxabs]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minabsn`][@stdlib/math/base/special/minabsn]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/maxn]: https://github.com/stdlib-js/math/tree/main/base/special/maxn

[@stdlib/math/base/special/maxabs]: https://github.com/stdlib-js/math/tree/main/base/special/maxabs

[@stdlib/math/base/special/minabsn]: https://github.com/stdlib-js/math/tree/main/base/special/minabsn

<!-- </related-links> -->

</section>

<!-- /.links -->
