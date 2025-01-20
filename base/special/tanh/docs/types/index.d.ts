/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Computes the hyperbolic tangent of a double-precision floating-point number.
*
* @param x - input value
* @returns hyperbolic tangent
*
* @example
* var v = tanh( 0.0 );
* // returns 0.0
*
* @example
* var v = tanh( 2.0 );
* // returns ~0.964
*
* @example
* var v = tanh( -2.0 );
* // returns ~-0.964
*
* @example
* var v = tanh( NaN );
* // returns NaN
*/
declare function tanh( x: number ): number;


// EXPORTS //

export = tanh;
