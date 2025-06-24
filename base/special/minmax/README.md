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

# minmax

> Return the minimum and maximum values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minmax = require( '@stdlib/math/base/special/minmax' );
```

#### minmax( x, y )

Returns the minimum and maximum values in a single pass.

```javascript
var v = minmax( 4.2, 3.14 );
// returns [ 3.14, 4.2 ]

v = minmax( +0.0, -0.0 );
// returns [ -0.0, +0.0 ]
```

If any argument is `NaN`, the function returns `NaN` for both the minimum value and the maximum value.

```javascript
var v = minmax( 4.2, NaN );
// returns [ NaN, NaN ]

v = minmax( NaN, 3.14 );
// returns [ NaN, NaN ]
```

#### minmax.assign( x, y, out, stride, offset )

Returns the minimum and maximum values in a single pass and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = minmax.assign( 5.0, -2.0, out, 1, 0 );
// returns <Float64Array>[ -2.0, 5.0 ]

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
var logEachMap = require( '@stdlib/console/log-each-map' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var minmax = require( '@stdlib/math/base/special/minmax' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, -100, 100, opts );
var y = discreteUniform( 100, -100, 100, opts );

logEachMap( 'minmax(%d, %d) = [%s]', x, y, minmax );
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
#include "stdlib/math/base/special/minmax.h"
```

#### stdlib_base_minmax( x, y, &min, &max )

Evaluates the minimum and maximum values in a single pass.

```c
double x = 3.14;
double y = 2.71;

double min;
double max;
stdlib_base_minmax( x, y, &min, &max );
```

The function accepts the following arguments:

-   **x**: `[in] double` first number.
-   **y**: `[in] double` second number.
-   **min**: `[out] double` destination for the minimum value.
-   **max**: `[out] double` destination for the maximum value.

```c
void stdlib_base_minmax( const double x, const double y, double* min, double* max );
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
#include "stdlib/math/base/special/minmax.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 0.45, -0.89, 0.0 / 0.0, -0.78, -0.22, 0.66, 0.11, -0.55, 0.0 };
    const double y[] = { -0.22, 0.66, 0.0, -0.55, 0.33, 1.0, 0.0 / 0.0, 0.11, 0.45, -0.78 };

    double min;
    double max;
    int i;
    for ( i = 0; i < 10; i++ ) {
        stdlib_base_minmax( x[ i ], y[ i ], &min, &max );
        printf( "x: %lf, y: %lf => min: %lf, max: %lf\n", x[ i ], y[ i ], min, max );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/max`][@stdlib/math/base/special/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/min`][@stdlib/math/base/special/min]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/minmaxabs`][@stdlib/math/base/special/minmaxabs]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum absolute values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math/tree/main/base/special/max

[@stdlib/math/base/special/min]: https://github.com/stdlib-js/math/tree/main/base/special/min

[@stdlib/math/base/special/minmaxabs]: https://github.com/stdlib-js/math/tree/main/base/special/minmaxabs

<!-- </related-links> -->

</section>

<!-- /.links -->
