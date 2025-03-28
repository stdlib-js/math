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

# Tools

> Math array function tools.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/array/tools' );
```

#### ns

Namespace containing tools for applying mathematical functions to arrays.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`unaryFactory( fcn, idtypes, odtypes, policy )`][@stdlib/math/array/tools/unary-factory]</span><span class="delimiter">: </span><span class="description">create a function for applying a unary function to each element in an input array.</span>
-   <span class="signature">[`unary( fcn, idtypes, odtypes, policy )`][@stdlib/math/array/tools/unary]</span><span class="delimiter">: </span><span class="description">constructor for applying a unary function to each element in an input array.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );
var ns = require( '@stdlib/math/array/tools' );

// Define a list of supported input dtypes:
var idtypes = [
    'float64',
    'float32',
    'generic'
];

// Define a list of supported output dtypes:
var odtypes = [
    'float64',
    'float32',
    'generic'
];

// Create a function for applying a unary function to each element of an array:
var f = new ns.unary( abs, idtypes, odtypes, 'same' );

// Create an input array:
var x = [ -1.0, 2.0, -3.0, 4.0 ];

// Perform element-wise computation:
var out = f.apply( x );
// returns [ 1.0, 2.0, 3.0, 4.0 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/math/array/tools/unary-factory]: https://github.com/stdlib-js/math/tree/main/array/tools/unary-factory

[@stdlib/math/array/tools/unary]: https://github.com/stdlib-js/math/tree/main/array/tools/unary

<!-- </toc-links> -->

</section>

<!-- /.links -->
