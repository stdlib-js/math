/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* @name map
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/tools/map}
*/
setReadOnly( ns, 'map', require( './../../../iter/tools/map' ) );

/**
* @name map2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/tools/map2}
*/
setReadOnly( ns, 'map2', require( './../../../iter/tools/map2' ) );

/**
* @name map3
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/math/iter/tools/map3}
*/
setReadOnly( ns, 'map3', require( './../../../iter/tools/map3' ) );


// EXPORTS //

module.exports = ns;
