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

#include "stdlib/math/base/napi/unary/c_c.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <node_api.h>
#include <assert.h>
#include <stdbool.h>

/**
* Invokes a unary function accepting and returning single-precision complex floating-point numbers.
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
* @return       function return value as a Node-API complex-like object
*/
napi_value stdlib_math_base_napi_c_c( napi_env env, napi_callback_info info, stdlib_complex64_t (*fcn)( stdlib_complex64_t ) ) {
	napi_status status;

	size_t argc = 1;
	napi_value argv[ 1 ];
	status = napi_get_cb_info( env, info, &argc, argv, NULL, NULL );
	assert( status == napi_ok );

	if ( argc < 1 ) {
		status = napi_throw_error( env, NULL, "invalid invocation. Must provide a complex number." );
		assert( status == napi_ok );
		return NULL;
	}

	bool hprop;
	status = napi_has_named_property( env, argv[ 0 ], "re", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Argument must have a real component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value xre;
	status = napi_get_named_property( env, argv[ 0 ], "re", &xre );
	assert( status == napi_ok );

	napi_valuetype xretype;
	status = napi_typeof( env, xre, &xretype );
	assert( status == napi_ok );
	if ( xretype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Argument must have a real component which is a number." );
		assert( status == napi_ok );
		return NULL;
	}

	status = napi_has_named_property( env, argv[ 0 ], "im", &hprop );
	assert( status == napi_ok );
	if ( !hprop ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Argument must have an imaginary component." );
		assert( status == napi_ok );
		return NULL;
	}

	napi_value xim;
	status = napi_get_named_property( env, argv[ 0 ], "im", &xim );
	assert( status == napi_ok );

	napi_valuetype ximtype;
	status = napi_typeof( env, xim, &ximtype );
	assert( status == napi_ok );
	if ( ximtype != napi_number ) {
		status = napi_throw_type_error( env, NULL, "invalid argument. Argument must have an imaginary component which a number." );
		assert( status == napi_ok );
		return NULL;
	}

	double re0;
	status = napi_get_value_double( env, xre, &re0 );
	assert( status == napi_ok );

	double im0;
	status = napi_get_value_double( env, xim, &im0 );
	assert( status == napi_ok );

	stdlib_complex64_t v = fcn( stdlib_complex64( (float)re0, (float)im0 ) );
	float re;
	float im;
	stdlib_complex64_reim( v, &re, &im );

	napi_value obj;
	status = napi_create_object( env, &obj );
	assert( status == napi_ok );

	napi_value vre;
	status = napi_create_double( env, (double)re, &vre );
	assert( status == napi_ok );

	status = napi_set_named_property( env, obj, "re", vre );
	assert( status == napi_ok );

	napi_value vim;
	status = napi_create_double( env, (double)im, &vim );
	assert( status == napi_ok );

	status = napi_set_named_property( env, obj, "im", vim );
	assert( status == napi_ok );

	return obj;
}
