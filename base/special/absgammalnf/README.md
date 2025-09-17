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

# absgammalnf

> [Natural logarithm][@stdlib/math/base/special/lnf] of the [absolute][@stdlib/math/base/special/absf] value of the [gamma][@stdlib/math/base/special/gamma] function.

<section class="usage">

## Usage

```javascript
var absgammalnf = require( '@stdlib/math/base/special/absgammalnf' );
```

#### absgammalnf( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/lnf] of the [absolute][@stdlib/math/base/special/absf] value of the [gamma][@stdlib/math/base/special/gamma] function.

```javascript
var v = absgammalnf( 2.0 );
// returns 0.0

v = absgammalnf( 1.0 );
// returns 0.0

v = absgammalnf( 4.0 );
// returns ~1.792

v = absgammalnf( -0.5 );
// returns ~1.266

v = absgammalnf( 0.5 );
// returns ~0.572

v = absgammalnf( 0.0 );
// returns Infinity

v = absgammalnf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var absgammalnf = require( '@stdlib/math/base/special/absgammalnf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'absgammalnf(%0.4f) = %0.4f', x, absgammalnf );
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
#include "stdlib/math/base/special/absgammalnf.h"
```

#### stdlib_base_absgammalnf( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/lnf] of the [absolute][@stdlib/math/base/special/absf] value of the [gamma][@stdlib/math/base/special/gamma] function.

```c
float out = stdlib_base_absgammalnf( 2.0f );
// returns 0.0f

out = stdlib_base_absgammalnf( 4.0f );
// returns ~1.792f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_absgammalnf( const float x );
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
#include "stdlib/math/base/special/absgammalnf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 4.0f, -1.5f, -0.5f, 0.5f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_absgammalnf( x[ i ] );
        printf( "absgammalnf(%f) = %f\n", x[ i ], y );
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

[@stdlib/math/base/special/lnf]: https://github.com/stdlib-js/math/tree/main/base/special/lnf

[@stdlib/math/base/special/absf]: https://github.com/stdlib-js/math/tree/main/base/special/absf

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math/tree/main/base/special/gamma

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
