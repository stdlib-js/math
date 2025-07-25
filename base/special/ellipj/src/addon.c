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

#include "stdlib/math/base/special/ellipj.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_double.h"
#include "stdlib/napi/argv_float64array.h"
#include "stdlib/napi/export.h"
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 3 );
	STDLIB_NAPI_ARGV_DOUBLE( env, x, argv, 0 );
	STDLIB_NAPI_ARGV_DOUBLE( env, m, argv, 1 );
	STDLIB_NAPI_ARGV_FLOAT64ARRAY( env, y, ylen, argv, 2 );
	stdlib_base_ellipj( x, m, &y[ 0 ], &y[ 1 ], &y[ 2 ], &y[ 3 ] );
	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN( addon )
