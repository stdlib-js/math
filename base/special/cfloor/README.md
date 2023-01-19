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

# Floor

> Round a complex number toward negative infinity.

<section class="usage">

## Usage

```javascript
var cfloor = require( '@stdlib/math/base/special/cfloor' );
```

#### cfloor( \[out,] re, im )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` toward negative infinity.

```javascript
var v = cfloor( -4.2, 5.5 );
// returns [ -5.0, 5.0 ]

v = cfloor( 9.99999, 0.1 );
// returns [ 9.0, 0.0 ]

v = cfloor( 0.0, 0.0 );
// returns [ 0.0, 0.0 ]

v = cfloor( NaN, NaN );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = cfloor( out, -4.2, 5.5 );
// returns <Float32Array>[ -5.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var randu = require( '@stdlib/random/base/randu' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var cfloor = require( '@stdlib/math/base/special/cfloor' );

var re;
var im;
var z;
var o;
var w;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cfloor( real(z), imag(z) );
    w = new Complex128( o[ 0 ], o[ 1 ] );
    console.log( 'floor(%s) = %s', z.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cceil`][@stdlib/math/base/special/cceil]</span><span class="delimiter">: </span><span class="description">round a complex number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cfloorn`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cround`][@stdlib/math/base/special/cround]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest integer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/cceil]: https://github.com/stdlib-js/math/tree/main/base/special/cceil

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math/tree/main/base/special/cfloorn

[@stdlib/math/base/special/cround]: https://github.com/stdlib-js/math/tree/main/base/special/cround

<!-- </related-links> -->

</section>

<!-- /.links -->
