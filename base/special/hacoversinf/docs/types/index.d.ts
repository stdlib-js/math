/*
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

// TypeScript Version: 4.1

/**
* Computes the half-value coversed sine of a single-precision floating-point number (in radians).
*
* ## Notes
*
* -   The half-value coversed sine is defined as `(1 - sin(x)) / 2`.
*
* @param x - input value (in radians)
* @returns half-value coversed sine
*
* @example
* var v = hacoversinf( 0.0 );
* // returns 0.5
*
* @example
* var v = hacoversinf( 3.141592653589793/2.0 );
* // returns 0.0
*
* @example
* var v = hacoversinf( -3.141592653589793/6.0 );
* // returns 0.75
*
* @example
* var v = hacoversinf( NaN );
* // returns NaN
*/
declare function hacoversinf( x: number ): number;


// EXPORTS //

export = hacoversinf;
