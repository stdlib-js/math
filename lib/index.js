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
* @name array
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/array}
*/
setReadOnly( ns, 'array', require( './../array' ) );

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/base}
*/
setReadOnly( ns, 'base', require( './../base' ) );

/**
* @name iter
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/iter}
*/
setReadOnly( ns, 'iter', require( './../iter' ) );

/**
* @name special
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/special}
*/
setReadOnly( ns, 'special', require( './../special' ) );

/**
* @name strided
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/strided}
*/
setReadOnly( ns, 'strided', require( './../strided' ) );

/**
* @name tools
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math/tools}
*/
setReadOnly( ns, 'tools', require( './../tools' ) );


// EXPORTS //

module.exports = ns;
