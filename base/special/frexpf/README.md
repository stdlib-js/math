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

# frexpf

> Split a [single-precision floating-point number][ieee754] into a normalized fraction and an integer power of two.

<section class="usage">

## Usage

```javascript
var frexpf = require( '@stdlib/math/base/special/frexpf' );
```

#### frexpf( x )

Splits a [single-precision floating-point number][ieee754] into a normalized fraction and an integer power of two.

```javascript
var out = frexpf( 4.0 );
// returns [ 0.5, 3 ]
```

By default, the function returns the normalized fraction and the exponent as a two-element `array`. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.

```javascript
var pow = require( '@stdlib/math/base/special/pow' );

var x = 4.0;
var out = frexpf( x );
// returns [ 0.5, 3 ]

var frac = out[ 0 ];
var exp = out[ 1 ];

var bool = ( x === frac * pow(2.0, exp) );
// returns true
```

If provided positive or negative zero, `NaN`, or positive or negative `infinity`, the function returns a two-element `array` containing the input value and an exponent equal to `0`.

```javascript
var out = frexpf( 0.0 );
// returns [ 0.0, 0 ]

out = frexpf( -0.0 );
// returns [ -0.0, 0 ]

out = frexpf( NaN );
// returns [ NaN, 0 ]

out = frexpf( Infinity );
// returns [ Infinity, 0 ]

out = frexpf( -Infinity );
// returns [ -Infinity, 0 ]
```

For all other numeric input values, the [absolute value][@stdlib/math/base/special/absf] of the normalized fraction resides on the interval `[0.5,1)`.

#### frexpf.assign( x, out, stride, offset )

Splits a [single-precision floating-point number][ieee754] into a normalized fraction and an integer power of two and assigns results to a provided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var y = frexpf.assign( 4.0, out, 1, 0 );
// returns <Float32Array>[ 0.5, 3 ]

var bool = ( y === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Care should be taken when reconstituting a [single-precision floating-point number][ieee754] from a normalized fraction and an exponent. For example,

    ```javascript
    var pow = require( '@stdlib/math/base/special/pow' );
    var f32 = require( '@stdlib/number/float64/base/to-float32' );

    var x = 1.7014118346046923e+38; // x ~ 2^127

    var out = frexpf( x );
    // returns [ 0.5, 128 ]

    // Naive reconstitution:
    var y = f32( out[ 0 ] * f32( pow( 2.0, out[ 1 ] ) ) );
    // returns Infinity

    // Account for 2^128 evaluating as infinity by recognizing 2^128 = 2^1 * 2^127:
    y = f32( out[ 0 ] * f32( pow( 2.0, out[1]-127 ) ) * f32( pow( 2.0, 127 ) ) );
    // returns 1.7014118346046923e+38
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var roundf = require( '@stdlib/math/base/special/roundf' );
var pow = require( '@stdlib/math/base/special/pow' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var frexpf = require( '@stdlib/math/base/special/frexpf' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

// Generate random numbers and break each into a normalized fraction and an integer power of two...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = f32( -1.0 );
    } else {
        sign = f32( 1.0 );
    }
    frac = f32( randu()*10.0 );
    exp = roundf( randu()*76.0 ) - 38;
    x = f32( sign * frac * f32( pow( 10.0, exp ) ) );
    f = frexpf( x );
    if ( f[ 1 ] > BIAS ) {
        v = f32( f[ 0 ] * f32( pow(2.0, f[1]-BIAS) ) * f32( pow(2.0, BIAS) ) );
    } else {
        v = f32( f[ 0 ] * f32( pow( 2.0, f[ 1 ] ) ) );
    }
    console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
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
#include "stdlib/math/base/special/frexpf.h"
```

#### stdlib_base_frexpf( x, frac, exp )

Splits a [single-precision floating-point number][ieee754] into a normalized fraction and an integer power of two.

```c
#include <stdint.h>

float frac;
int32_t exp;
stdlib_base_frexpf( 4.0f, &frac, &exp );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **frac**: `[out] float*` destination for the normalized fraction.
-   **exp**: `[out] int32_t*` destination for the integer power of two.

```c
void stdlib_base_frexpf( const float x, float *frac, int32_t *exp );
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
#include "stdlib/math/base/special/frexpf.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    const float x[] = { 4.0f, 0.0f, -0.0f, 1.0f, -1.0f, 3.14f, -3.14f, 1.0e38f, -1.0e38f, 1.0f/0.0f, -1.0f/0.0f, 0.0f/0.0f };

    float frac;
    int32_t exp;
    int i;
    for ( i = 0; i < 12; i++ ) {
        stdlib_base_frexpf( x[i], &frac, &exp );
        printf( "x: %f => frac: %f, exp: %" PRId32 "\n", x[i], frac, exp );
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

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[@stdlib/math/base/special/absf]: https://github.com/stdlib-js/math/tree/main/base/special/absf

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
