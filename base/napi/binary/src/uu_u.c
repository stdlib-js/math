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

#include "stdlib/math/base/napi/binary/uu_u.h"
#include <node_api.h>
#include <stdint.h>
#include <assert.h>

/**
* Invokes a binary function accepting and returning unsigned 32-bit integers.
*
* ## Notes
*
* -   This function expects that the callback `info` argument provides access to the following JavaScript arguments:
*
*     -   `x`: input value.
*     -   `y`: input value.
*
* @param env    environment under which the function is invoked
* @param info   callback data
* @param fcn    binary function
* @return       function return value as a Node-API unsigned 32-bit integer
*/
napi_value stdlib_math_base_napi_uu_u( napi_env env, napi_callback_info info, uint32_t (*fcn)( uint32_t, uint32_t ) ) {
	napi_status status;

	size_t argc = 2;
	napi_value argv[ 2 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 2 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide two numbers." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype0;
	status = napi_typeof( env, argv[ 0 ], &vtype0 );
	assert( status == napi_ok );
	if ( vtype0 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. First argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_valuetype vtype1;
	status = napi_typeof( env, argv[ 1 ], &vtype1 );
	assert( status == napi_ok );
	if ( vtype1 != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Second argument must be a number." );
		assert( status == napi_ok );
		return NULL;
	}

	uint32_t x;
	status = napi_get_value_uint32( env, argv[ 0 ], &x );
	assert( status == napi_ok );

	uint32_t y;
	status = napi_get_value_uint32( env, argv[ 1 ], &y );
	assert( status == napi_ok );

	napi_value v;
	status = napi_create_uint32( env, fcn( x, y ), &v );
	assert( status == napi_ok );

	return v;
}
