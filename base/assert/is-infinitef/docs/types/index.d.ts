/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Tests if a single-precision floating-point numeric value is infinite.
*
* @param x - value to test
* @returns boolean indicating whether the value is infinite
*
* @example
* var bool = isInfinitef( Infinity );
* // returns true
*
* @example
* var bool = isInfinitef( -Infinity );
* // returns true
*
* @example
* var bool = isInfinitef( 5.0 );
* // returns false
*
* @example
* var bool = isInfinitef( NaN );
* // returns false
*/
declare function isInfinitef( x: number ): boolean;


// EXPORTS //

export = isInfinitef;
