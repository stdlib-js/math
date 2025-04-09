/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/math/base/special/log.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	double out;
	double x;
	double b;
	int i;

	for ( i = 0; i < 100; i++ ) {
		x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
		b = ( (double)rand() / (double)RAND_MAX ) * 5.0;
		out = stdlib_base_log( x, b );
		printf( "log(%lf, %lf) = %lf\n", x, b, out );
	}
}
