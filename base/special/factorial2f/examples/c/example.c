/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/math/base/special/factorial2f.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	const int32_t x[] = { 1, 10, 50, 56, 57 };

	float b;
	int i;
	for ( i = 0; i < 5; i++ ) {
		b = stdlib_base_factorial2f( x[ i ] );
		printf ( "factorial2f(%d) = %f\n", x[ i ], b );
	}
}
