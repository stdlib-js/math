/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Computes the arccosecant of a number.
*
* @param x - input value
* @returns arccosecant (in radians)
*
* @example
* var v = acsc( 1.0 );
* // returns ~1.57
*
* @example
* var v = acsc( 3.141592653589793 );
* // returns ~0.32
*
* @example
* var v = acsc( -3.141592653589793 );
* // returns ~-0.32
*
* @example
* var v = acsc( NaN );
* // returns NaN
*/
declare function acsc( x: number ): number;


// EXPORTS //

export = acsc;
