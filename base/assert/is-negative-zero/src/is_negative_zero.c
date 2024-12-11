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

#include "stdlib/math/base/assert/is_negative_zero.h"
#include <stdbool.h>
#include <math.h>

/**
* Tests if a double-precision floating-point numeric value is negative zero.
*
* @param x       number
* @return        boolean indicating if an input value is negative zero
*/
bool stdlib_base_is_negative_zero( const double x ) {
	return ( x == 0.0 && 1.0/x == -HUGE_VAL );
}
