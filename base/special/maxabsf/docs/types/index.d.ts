/*
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

// TypeScript Version: 4.1

/**
* Returns the maximum absolute single-precision floating-point number.
*
* @param x - first number
* @param y - second number
* @returns maximum absolute value
*
* @example
* var v = maxabsf( -4.0, 3.0 );
* // returns 4.0
*
* @example
* var v = maxabsf( 3.14, NaN );
* // returns NaN
*
* @example
* var v = maxabsf( +0.0, -0.0 );
* // returns +0.0
*/
declare function maxabsf( x: number, y: number ): number;


// EXPORTS //

export = maxabsf;
