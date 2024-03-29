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

# minmaxabs

> Return the minimum and maximum absolute values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minmaxabs = require( '@stdlib/math/base/special/minmaxabs' );
```

#### minmaxabs( x, y )

Returns the minimum and maximum absolute values in a single pass.

```javascript
var v = minmaxabs( 4.2, 3.14 );
// returns [ 3.14, 4.2 ]

v = minmaxabs( +0.0, -0.0 );
// returns [ 0.0, 0.0 ]
```

If any argument is `NaN`, the function returns `NaN` for both the minimum value and the maximum value.

```javascript
var v = minmaxabs( 4.2, NaN );
// returns [ NaN, NaN ]

v = minmaxabs( NaN, 3.14 );
// returns [ NaN, NaN ]
```

#### minmaxabs.assign( x, y, out, stride, offset )

Returns the minimum and maximum absolute values in a single pass and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = minmaxabs.assign( 5.0, -1.0, out, 1, 0 );
// returns <Float64Array>[ 1.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var minmaxabs = require( '@stdlib/math/base/special/minmaxabs' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*100.0 ) - 50.0;
    y = ( randu()*100.0 ) - 50.0;
    v = minmaxabs( x, y );
    console.log( 'minmaxabs(%d,%d) = [%d, %d]', x, y, v[0], v[1] );
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

-   <span class="package-name">[`@stdlib/math/base/special/maxabs`][@stdlib/math/base/special/maxabs]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minabs`][@stdlib/math/base/special/minabs]</span><span class="delimiter">: </span><span class="description">return the minimum absolute value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minmax`][@stdlib/math/base/special/minmax]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/maxabs]: https://github.com/stdlib-js/math/tree/main/base/special/maxabs

[@stdlib/math/base/special/minabs]: https://github.com/stdlib-js/math/tree/main/base/special/minabs

[@stdlib/math/base/special/minmax]: https://github.com/stdlib-js/math/tree/main/base/special/minmax

<!-- </related-links> -->

</section>

<!-- /.links -->
