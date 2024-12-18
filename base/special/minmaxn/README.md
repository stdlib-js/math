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

# minmaxn

> Return the minimum and maximum values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minmaxn = require( '@stdlib/math/base/special/minmaxn' );
```

#### minmaxn( \[x\[, y\[, ...args]]] )

Returns the minimum and maximum values in a single pass.

```javascript
var v = minmaxn( 4.2, 3.14 );
// returns [ 3.14, 4.2 ]

v = minmaxn( +0.0, -0.0 );
// returns [ -0.0, +0.0 ]

v = minmaxn( 4.2, 3.14, -1.0, 6.8 );
// returns [ -1.0, 6.8 ]
```

If any argument is `NaN`, the function returns `NaN` for both the minimum value and the maximum value.

```javascript
var v = minmaxn( 4.2, NaN );
// returns [ NaN, NaN ]

v = minmaxn( NaN, 3.14 );
// returns [ NaN, NaN ]
```

#### minmaxn.assign( \[x\[, y\[, ...args]]], out, stride, offset )

Returns the minimum and maximum values in a single pass and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = minmaxn.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
// returns <Float64Array>[ -2.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound and negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum and negative infinity is the identity element for the maximum, and thus, if not provided any arguments, the function returns positive infinity for the minimum value and negative infinity for the maximum value.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var minmaxn = require( '@stdlib/math/base/special/minmaxn' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = minmaxn( x, y );
    console.log( 'minmax(%d,%d) = [%d, %d]', x, y, v[0], v[1] );
}
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
-   <span class="package-name">[`@stdlib/math/base/special/minn`][@stdlib/math/base/special/minn]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minmaxabsn`][@stdlib/math/base/special/minmaxabsn]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum absolute values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/maxn]: https://github.com/stdlib-js/math/tree/main/base/special/maxn

[@stdlib/math/base/special/minn]: https://github.com/stdlib-js/math/tree/main/base/special/minn

[@stdlib/math/base/special/minmaxabsn]: https://github.com/stdlib-js/math/tree/main/base/special/minmaxabsn

<!-- </related-links> -->

</section>

<!-- /.links -->
