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

# Math

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Math functions.

<section class="installation">

## Installation

```bash
npm install @stdlib/math
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var math = require( '@stdlib/math' );
```

#### math

Namespace containing math functions.

```javascript
var m = math;
// returns {...}
```

The namespace consists of the following sub-namespaces:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/math/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) math functions.</span>
-   <span class="signature">[`iter`][@stdlib/math/iter]</span><span class="delimiter">: </span><span class="description">math iterators.</span>
-   <span class="signature">[`special`][@stdlib/math/special]</span><span class="delimiter">: </span><span class="description">special math functions.</span>
-   <span class="signature">[`strided`][@stdlib/math/strided]</span><span class="delimiter">: </span><span class="description">strided array math functions.</span>
-   <span class="signature">[`tools`][@stdlib/math/tools]</span><span class="delimiter">: </span><span class="description">math tools.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var math = require( '@stdlib/math' );

console.log( objectKeys( math ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math.svg
[npm-url]: https://npmjs.org/package/@stdlib/math

[test-image]: https://github.com/stdlib-js/math/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math/tree/deno
[umd-url]: https://github.com/stdlib-js/math/tree/umd
[esm-url]: https://github.com/stdlib-js/math/tree/esm
[branches-url]: https://github.com/stdlib-js/math/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base]: https://github.com/stdlib-js/math/tree/main/base

[@stdlib/math/iter]: https://github.com/stdlib-js/math/tree/main/iter

[@stdlib/math/special]: https://github.com/stdlib-js/math/tree/main/special

[@stdlib/math/strided]: https://github.com/stdlib-js/math/tree/main/strided

[@stdlib/math/tools]: https://github.com/stdlib-js/math/tree/main/tools

<!-- </toc-links> -->

</section>

<!-- /.links -->
