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

#include "stdlib/math/base/special/wrapf.h"
#include <stdio.h>

int main( void ) {
	const float min[] = { 0.0f, 0.0f, 0.0f, 0.0f, -3.14f };
	const float max[] = { 5.0f, 5.0f, 5.0f, 5.0f, -0.0f };
	const float v[] = { 3.14f, -3.14f, 10.0f, -0.0f, 0.0f };

	float out;
	int i;
	for ( i = 0; i < 5; i++ ) {
		out = stdlib_base_wrapf( v[i], min[i], max[i] );
		printf( "wrapf(%f,%f,%f) => %f\n", v[i], min[i], max[i], out );
	}
}
