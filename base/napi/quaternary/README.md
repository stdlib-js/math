<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# quaternary

> C APIs for registering a Node-API module exporting interfaces for invoking quaternary numerical functions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var headerDir = require( '@stdlib/math/base/napi/quaternary' );
```

#### headerDir

Absolute file path for the directory containing header files for C APIs.

```javascript
var dir = headerDir;
// returns <string>
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

```javascript
var headerDir = require( '@stdlib/math/base/napi/quaternary' );

console.log( headerDir );
// => <string>
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
#include "stdlib/math/base/napi/quaternary.h"
```

<!-- NOTE: keep in alphabetical order according to the suffix XXXX_X -->

#### STDLIB_MATH_BASE_NAPI_MODULE_DDDD_D( fcn )

Macro for registering a Node-API module exporting an interface for invoking a quaternary function accepting and returning double-precision floating-point numbers.

```c
static double add( const double x, const double y, const double z, const double w ) {
    return x + y + z + w;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_DDDD_D( add );
```

The macro expects the following arguments:

-   **fcn**: `double (*fcn)( double, double, double, double )` quaternary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### stdlib_math_base_napi_dddd_d( env, info, fcn )

Invokes a quaternary function accepting and returning double-precision floating-point numbers.

```c
#include <node_api.h>

// ...

static double add( const double x, const double y, const double z, const double w ) {
    return x + y + z + w;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_dddd_d( env, info, add );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] double (*fcn)( double, double, double, double )` quaternary function.

```c
void stdlib_math_base_napi_dddd_d( napi_env env, napi_callback_info info, double (*fcn)( double, double, double, double ) );
```

#### STDLIB_MATH_BASE_NAPI_MODULE_DIII_D( fcn )

Macro for registering a Node-API module exporting an interface invoking a quaternary function accepting a double-precision floating-point number and three signed 32-bit integers and returning a double-precision floating-point number.

```c
static double add( const double x, const int32_t y, const int32_t z, const int32_t w ) {
    return x + y + z + w;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_DIII_D( add );
```

The macro expects the following arguments:

-   **fcn**: `double (*fcn)( double, int32_t, int32_t, int32_t )` quaternary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### stdlib_math_base_napi_diii_d( env, info, fcn )

Invokes a quaternary function accepting a double-precision floating-point number and three signed 32-bit integers and returning a double-precision floating-point number.

```c
#include <node_api.h>

// ...

static double add( const double x, const int32_t y, const int32_t z, const int32_t w ) {
    return x + y + z + w;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_diii_d( env, info, add );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] double (*fcn)( double, int32_t, int32_t, int32_t )` quaternary function.

```c
void stdlib_math_base_napi_diii_d( napi_env env, napi_callback_info info, double (*fcn)( double, int32_t, int32_t, int32_t ) );
```

#### STDLIB_MATH_BASE_NAPI_MODULE_FFFF_F( fcn )

Macro for registering a Node-API module exporting an interface for invoking a quaternary function accepting and returning single-precision floating-point numbers.

```c
static float addf( const float x, const float y, const float z, const float w ) {
    return x + y + z + w;
}

// ...

// Register a Node-API module:
STDLIB_MATH_BASE_NAPI_MODULE_FFFF_F( addf );
```

The macro expects the following arguments:

-   **fcn**: `float (*fcn)( float, float, float, float )` quaternary function.

When used, this macro should be used **instead of** `NAPI_MODULE`. The macro includes `NAPI_MODULE`, thus ensuring Node-API module registration.

#### stdlib_math_base_napi_ffff_f( env, info, fcn )

Invokes a quaternary function accepting and returning single-precision floating-point numbers.

```c
#include <node_api.h>

// ...

static float addf( const float x, const float y, const float z, const float w ) {
    return x + y + z + w;
}

// ...

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
napi_value addon( napi_env env, napi_callback_info info ) {
    return stdlib_math_base_napi_ffff_f( env, info, addf );
}

// ...
```

The function accepts the following arguments:

-   **env**: `[in] napi_env` environment under which the function is invoked.
-   **info**: `[in] napi_callback_info` callback data.
-   **fcn**: `[in] float (*fcn)( float, float, float, float )` quaternary function.

```c
void stdlib_math_base_napi_ffff_f( napi_env env, napi_callback_info info, float (*fcn)( float, float, float, float ) );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The C-API functions expect that the callback `info` argument provides access to the following JavaScript arguments:

    -   `x`: input value.
    -   `y`: input value.
    -   `z`: input value.
    -   `w`: input value.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
