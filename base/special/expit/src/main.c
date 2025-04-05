/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/math/base/special/expit.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Evaluates the standard logistic function.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_expit( 0.0 );
* // returns 0.5
*/
double stdlib_base_expit( const double x ) {
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	return 1.0 / ( 1.0 + stdlib_base_exp( -x ) );
}
