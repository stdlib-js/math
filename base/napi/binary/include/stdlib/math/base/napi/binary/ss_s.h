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

#ifndef STDLIB_MATH_BASE_NAPI_BINARY_SS_S_H
#define STDLIB_MATH_BASE_NAPI_BINARY_SS_S_H

#include <node_api.h>
#include <assert.h>
#include <stdint.h>

/**
* Macro for registering a Node-API module exporting an interface invoking a binary function accepting and returning signed 8-bit integers.
*
* @param fcn   binary function
*
* @example
* #include <stdint.h>
*
* static int8_t add( const int8_t x, const int8_t y ) {
*     return x + y;
* }
*
* // ...
*
* // Register a Node-API module:
* STDLIB_MATH_BASE_NAPI_MODULE_SS_S( add );
*/
#define STDLIB_MATH_BASE_NAPI_MODULE_SS_S( fcn )                               \
	static napi_value stdlib_math_base_napi_ss_s_wrapper(                      \
		napi_env env,                                                          \
		napi_callback_info info                                                \
	) {                                                                        \
		return stdlib_math_base_napi_ss_s( env, info, fcn );                   \
	};                                                                         \
	static napi_value stdlib_math_base_napi_ss_s_init(                         \
		napi_env env,                                                          \
		napi_value exports                                                     \
	) {                                                                        \
		napi_value f;                                                          \
		napi_status status = napi_create_function(                             \
			env,                                                               \
			"exports",                                                         \
			NAPI_AUTO_LENGTH,                                                  \
			stdlib_math_base_napi_ss_s_wrapper,                                \
			NULL,                                                              \
			&f                                                                 \
		);                                                                     \
		assert( status == napi_ok );                                           \
		return f;                                                              \
	};                                                                         \
	NAPI_MODULE( NODE_GYP_MODULE_NAME, stdlib_math_base_napi_ss_s_init )

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Invokes a binary function accepting and returning signed 8-bit integers.
*/
napi_value stdlib_math_base_napi_ss_s( napi_env env, napi_callback_info info, int8_t (*fcn)( int8_t, int8_t ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_NAPI_BINARY_SS_S_H
