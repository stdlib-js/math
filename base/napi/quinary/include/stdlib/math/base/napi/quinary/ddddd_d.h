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

#ifndef STDLIB_MATH_BASE_NAPI_QUINARY_DDDDD_D_H
#define STDLIB_MATH_BASE_NAPI_QUINARY_DDDDD_D_H

#include <node_api.h>
#include <assert.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a quinary function accepting and returning double-precision floating-point numbers.
*
* @param fcn   quinary function
*
* @example
* static double add( const double x, const double y, const double z, const double w, const double u ) {
*     return x + y + z + w + u;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_DDDDD_D( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_DDDDD_D( fcn )                            \
	static napi_value stdlib_math_base_napi_ddddd_d_wrapper(                   \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ddddd_d( env, info, fcn );                \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ddddd_d_init(                      \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value f;                                                          \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ddddd_d_wrapper,                             \
			NULL,                                                              \
			&f                                                                 \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return f;                                                              \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ddddd_d_init )

/*
* If C++, prevent name mangling so that the compiler emits a quinary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a quinary function accepting and returning double-precision floating-point numbers.
*/
napi_value stdlib_math_base_napi_ddddd_d( napi_env env, napi_callback_info info, double (*fcn)( double, double, double, double, double ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_QUINARY_DDDDD_D_H
