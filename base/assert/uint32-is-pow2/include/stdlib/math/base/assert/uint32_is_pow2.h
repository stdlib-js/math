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

#ifndef STDLIB_MATH_BASE_ASSERT_UINT32_IS_POW2_H
#define STDLIB_MATH_BASE_ASSERT_UINT32_IS_POW2_H

#include <stdbool.h>
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Tests whether an unsigned integer is a power of 2.
*/
bool stdlib_base_uint32_is_pow2( const uint32_t x );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_MATH_BASE_ASSERT_UINT32_IS_POW2_H
