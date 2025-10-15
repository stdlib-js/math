<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# sincosf

> Simultaneously compute the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of a single-precision floating-point number (in radians).

<section class="usage">

## Usage

```javascript
var sincosf = require( '@stdlib/math/base/special/sincosf' );
```

#### sincosf( x )

Simultaneously computes the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of a single-precision floating-point number (in radians).

```javascript
var v = sincosf( 0.0 );
// returns [ ~0.0, ~1.0 ]

v = sincosf( 3.141592653589793/2.0 );
// returns [ ~1.0, ~0.0 ]

v = sincosf( -3.141592653589793/6.0 );
// returns [ ~-0.5, ~0.866 ]
```

#### sincosf.assign( x, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of a single-precision floating-point number (in radians) and assigns the results to a provided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = sincosf.assign( 0.0, out, 1, 0 );
// returns <Float32Array>[ ~0.0, ~1.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var TWO_PI = require( '@stdlib/constants/float32/two-pi' );
var sincosf = require( '@stdlib/math/base/special/sincosf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
    y = sincosf( x[ i ] );
    console.log( 'sincosf(%d) = [ %d, %d ]', x[ i ], y[ 0 ], y[ 1 ] );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/sincosf.h"
```

#### stdlib_base_sincosf( x, &sine, &cosine )

Simultaneously computes the [sine][@stdlib/math/base/special/sinf] and [cosine][@stdlib/math/base/special/cosf] of a single-precision floating-point number (in radians).

```c
float cosine;
float sine;

stdlib_base_sincosf( 4.0f, &sine, &cosine );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **sine**: `[out] float*` destination for the sine.
-   **cosine**: `[out] float*` destination for the cosine.

```c
void stdlib_base_sincosf( const float x, float *sine, float *cosine );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/sincosf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 1.57f, 3.14f, 6.28f };

    float cosine;
    float sine;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_sincosf( x[ i ], &sine, &cosine );
        printf( "sincosf(%f) = [ %f, %f ]\n", x[ i ], sine, cosine );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/cosf]: https://github.com/stdlib-js/math/tree/main/base/special/cosf

[@stdlib/math/base/special/sinf]: https://github.com/stdlib-js/math/tree/main/base/special/sinf

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
