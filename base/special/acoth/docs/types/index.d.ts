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
* Computes the inverse hyperbolic cotangent of a double-precision floating-point number.
*
* @param x - input value
* @returns inverse hyperbolic cotangent
*
* @example
* var v = acoth( 2.0 );
* // returns ~0.5493
*
* @example
* var v = acoth( 0.0 );
* // returns NaN
*
* @example
* var v = acoth( 0.5 );
* // returns NaN
*
* @example
* var v = acoth( 1.0 );
* // returns Infinity
*
* @example
* var v = acoth( NaN );
* // returns NaN
*/
declare function acoth( x: number ): number;


// EXPORTS //

export = acoth;
