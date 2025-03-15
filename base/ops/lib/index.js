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
* @name caddf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/base/add}
*/
setReadOnly( ns, 'caddf', require( '@stdlib/complex/float32/base/add' ) );

/**
* @name cmulf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float32/base/mul}
*/
setReadOnly( ns, 'cmulf', require( '@stdlib/complex/float32/base/mul' ) );

/**
* @name cadd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/add}
*/
setReadOnly( ns, 'cadd', require( '@stdlib/complex/float64/base/add' ) );

/**
* @name cmul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/mul}
*/
setReadOnly( ns, 'cmul', require( '@stdlib/complex/float64/base/mul' ) );

/**
* @name sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float64/base/sub}
*/
setReadOnly( ns, 'sub', require( '@stdlib/number/float64/base/sub' ) );


// EXPORTS //

module.exports = ns;
