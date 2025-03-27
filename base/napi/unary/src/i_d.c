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

#include "stdlib/math/base/napi/unary/i_d.h"
#include <node_api.h>
#include <assert.h>
#include <stdint.h>

/**
* Invokes a unary function accepting a signed 32-bit integer and returning a single-precision floating-point number.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `x`: input value.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    unary function
* @return       function return value as a Node-API double-precision floating-point number
*/
napi_value stdlib_math_base_napi_i_d( napi_env env, napi_callback_info info, double (*fcn)( int32_t ) ) {
	napi_status status;

	size_t argc = 1;
	napi_value argv[ 1 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 1 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide a number." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype0;
	status = napi_typeof( env, argv[ 0 ], &vtype0 );
	assert( status == napi_ok );
	if ( vtype0 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Must provide a number." );
		assert( status == napi_ok );
		return NULL;
	}

	int32_t x;
	status = napi_get_value_int32( env, argv[ 0 ], &x );
	assert( status == napi_ok );

	napi_value v;
	status = napi_create_double( env, fcn( x ), &v );
	assert( status == napi_ok );

	return v;
}
