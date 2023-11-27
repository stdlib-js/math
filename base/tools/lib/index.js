/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

/*
* The following modules are intentionally not exported: evalpoly-compile, evalpoly-compile-c, evalrational-compile, evalrational-compile-c
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name continuedFraction
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/continued-fraction}
*/
setReadOnly( ns, 'continuedFraction', require( './../../../base/tools/continued-fraction' ) );

/**
* @name evalpoly
* @memberof tools
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/evalpoly}
*/
setReadOnly( ns, 'evalpoly', require( './../../../base/tools/evalpoly' ) );

/**
* @name evalrational
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/evalrational}
*/
setReadOnly( ns, 'evalrational', require( './../../../base/tools/evalrational' ) );

/**
* @name fibpoly
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/fibpoly}
*/
setReadOnly( ns, 'fibpoly', require( './../../../base/tools/fibpoly' ) );

/**
* @name hermitepoly
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/hermitepoly}
*/
setReadOnly( ns, 'hermitepoly', require( './../../../base/tools/hermitepoly' ) );

/**
* @name lucaspoly
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/lucaspoly}
*/
setReadOnly( ns, 'lucaspoly', require( './../../../base/tools/lucaspoly' ) );

/**
* @name normhermitepoly
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/normhermitepoly}
*/
setReadOnly( ns, 'normhermitepoly', require( './../../../base/tools/normhermitepoly' ) );

/**
* @name sumSeries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/base/tools/sum-series}
*/
setReadOnly( ns, 'sumSeries', require( './../../../base/tools/sum-series' ) );


// EXPORTS //

module.exports = ns;
