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

# sincosd

> Simultaneously compute the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees.

<section class="usage">

## Usage

```javascript
var sincosd = require( '@stdlib/math/base/special/sincosd' );
```

#### sincosd( x )

Simultaneously computes the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees.

```javascript
var v = sincosd( 0.0 );
// returns [ ~0.0, ~1.0 ]

v = sincosd( 90.0 );
// returns [ ~1.0, ~0.0 ]

v = sincosd( -30.0 );
// returns [ ~-0.5, ~0.866 ]
```

#### sincosd.assign( x, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees and assigns the results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = sincosd.assign( 0.0, out, 1, 0 );
// returns <Float64Array>[ ~0.0, ~1.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var sincosd = require( '@stdlib/math/base/special/sincosd' );

var x = linspace( 0.0, 180.0, 100 );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
    y = sincosd( x[ i ] );
    console.log( 'sincosd(%d) = [ %d, %d ]', x[ i ], y[ 0 ], y[ 1 ] );
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
#include "stdlib/math/base/special/sincosd.h"
```

#### stdlib_base_sincosd( x, &sine, &cosine )

Simultaneously computes the [sine][@stdlib/math/base/special/sind] and [cosine][@stdlib/math/base/special/cosd] of an angle measured in degrees.

```c
double cosine;
double sine;

stdlib_base_sincosd( 4.0, &sine, &cosine );
```

The function accepts the following arguments:

-   **x**:      `[in] double` input value.
-   **sine**:   `[out] double*` destination for the sine.
-   **cosine**: `[out] double*` destination for the cosine.

```c
void stdlib_base_sincosd( const double x, double *sine, double *cosine );
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
#include "stdlib/math/base/special/sincosd.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 90.0, 180.0, 360.0 };

    double cosine;
    double sine;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_sincosd( x[ i ], &sine, &cosine );
        printf( "x: %lf => sine: %lf, cosine: %lf\n", x[ i ], sine, cosine );
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

[@stdlib/math/base/special/cosd]: https://github.com/stdlib-js/math/tree/main/base/special/cosd

[@stdlib/math/base/special/sind]: https://github.com/stdlib-js/math/tree/main/base/special/sind

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
