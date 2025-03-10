/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/special/lucas.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	int32_t i;
	double v;

	for ( i = 0; i < 77; i++ ) {
		v = stdlib_base_lucas( i );
		printf( "lucas(%d) = %lf\n", i, v );
	}
}
