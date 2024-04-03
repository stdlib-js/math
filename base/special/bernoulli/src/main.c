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

#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_odd.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/special/bernoulli.h"

static const double bernoulli_value[ 130 ] = {
	1.00000000000000000000000000000000000000000,
	0.166666666666666666666666666666666666666667,
	-0.0333333333333333333333333333333333333333333,
	0.0238095238095238095238095238095238095238095,
	-0.0333333333333333333333333333333333333333333,
	0.0757575757575757575757575757575757575757576,
	-0.253113553113553113553113553113553113553114,
	1.16666666666666666666666666666666666666667,
	-7.09215686274509803921568627450980392156863,
	54.9711779448621553884711779448621553884712,
	-529.124242424242424242424242424242424242424,
	6192.12318840579710144927536231884057971014,
	-86580.2531135531135531135531135531135531136,
	1.42551716666666666666666666666666666666667e6,
	-2.72982310678160919540229885057471264367816e7,
	6.01580873900642368384303868174835916771401e8,
	-1.51163157670921568627450980392156862745098e10,
	4.29614643061166666666666666666666666666667e11,
	-1.37116552050883327721590879485616327721591e13,
	4.88332318973593166666666666666666666666667e14,
	-1.92965793419400681486326681448632668144863e16,
	8.41693047573682615000553709856035437430786e17,
	-4.03380718540594554130768115942028985507246e19,
	2.11507486380819916056014539007092198581560e21,
	-1.20866265222965259346027311937082525317819e23,
	7.50086674607696436685572007575757575757576e24,
	-5.03877810148106891413789303052201257861635e26,
	3.65287764848181233351104308429711779448622e28,
	-2.84987693024508822262691464329106781609195e30,
	2.38654274996836276446459819192192149717514e32,
	-2.13999492572253336658107447651910973926742e34,
	2.05009757234780975699217330956723102516667e36,
	-2.09380059113463784090951852900279701847092e38,
	2.27526964884635155596492603527692645814700e40,
	-2.62577102862395760473030497361582020814490e42,
	3.21250821027180325182047923042649852435219e44,
	-4.15982781667947109139170744952623589366896e46,
	5.69206954820352800238834562191210586444805e48,
	-8.21836294197845756922906534686173330145509e50,
	1.25029043271669930167323398297028955241772e53,
	-2.00155832332483702749253291988132987687242e55,
	3.36749829153643742333966769033387530162196e57,
	-5.94709705031354477186604968440515408405791e59,
	1.10119103236279775595641307904376916046305e62,
	-2.13552595452535011886583850190410656789733e64,
	4.33288969866411924196166130593792062184514e66,
	-9.18855282416693282262005552155018971389604e68,
	2.03468967763290744934550279902200200659751e71,
	-4.70038339580357310785752555350060606545967e73,
	1.13180434454842492706751862577339342678904e76,
	-2.83822495706937069592641563364817647382847e78,
	7.40642489796788506297508271409209841768797e80,
	-2.00964548027566044834656196727153631868673e83,
	5.66571700508059414457193460305193569614195e85,
	-1.65845111541362169158237133743199123014950e88,
	5.03688599504923774192894219151801548124424e90,
	-1.58614682376581863693634015729664387827410e93,
	5.17567436175456269840732406825071225612408e95,
	-1.74889218402171173396900258776181591451415e98,
	6.11605199949521852558245252642641677807677e100,
	-2.21227769127078349422883234567129324455732e103,
	8.27227767987709698542210624599845957312047e105,
	-3.19589251114157095835916343691808148735263e108,
	1.27500822233877929823100243029266798669572e111,
	-5.25009230867741338994028246245651754469199e113,
	2.23018178942416252098692981988387281437383e116,
	-9.76845219309552044386335133989802393011669e118,
	4.40983619784529542722726228748131691918758e121,
	-2.05085708864640888397293377275830154864566e124,
	9.82144332797912771075729696020975210414919e126,
	-4.84126007982088805087891967099634127611305e129,
	2.45530888014809826097834674040886903996737e132,
	-1.28069268040847475487825132786017857218118e135,
	6.86761671046685811921018885984644004360924e137,
	-3.78464685819691046949789954163795568144895e140,
	2.14261012506652915508713231351482720966602e143,
	-1.24567271371836950070196429616376072194583e146,
	7.43457875510001525436796683940520613117807e148,
	-4.55357953046417048940633332233212748767721e151,
	2.86121128168588683453638472510172325229190e154,
	-1.84377235520338697276882026536287854875414e157,
	1.21811545362210466995013165065995213558174e160,
	-8.24821871853141215484818457296893447301419e162,
	5.72258779378329433296516498142978615918685e165,
	-4.06685305250591047267679693831158655602196e168,
	2.95960920646420500628752695815851870426379e171,
	-2.20495225651894575090311752273445984836379e174,
	1.68125970728895998058311525151360665754464e177,
	-1.31167362135569576486452806355817153004431e180,
	1.04678940094780380821832853929823089643829e183,
	-8.54328935788337077185982546299082774593270e185,
	7.12878213224865423522884066771438224721245e188,
	-6.08029314555358993000847118686477458461988e191,
	5.29967764248499239300942910043247266228490e194,
	-4.71942591687458626443646229013379911103761e197,
	4.29284137914029810894168296541074669045521e200,
	-3.98767449682322074434477655542938795106651e203,
	3.78197804193588827138944181161393327898220e206,
	-3.66142336836811912436858082151197348755196e209,
	3.61760902723728623488554609298914089477541e212,
	-3.64707726451913543621383088655499449048682e215,
	3.75087554364544090983452410104814189306842e218,
	-3.93458672964390282694891288533713429355657e221,
	4.20882111481900820046571171111494898242731e224,
	-4.59022962206179186559802940573325591059371e227,
	5.10317257726295759279198185106496768539760e230,
	-5.78227623036569554015377271242917142512200e233,
	6.67624821678358810322637794412809363451080e236,
	-7.85353076444504163225916259639312444428230e239,
	9.41068940670587255245443288258762485293948e242,
	-1.14849338734651839938498599206805592548354e246,
	1.42729587428487856771416320087122499897180e249,
	-1.80595595869093090142285728117654560926719e252,
	2.32615353076608052161297985184708876161736e255,
	-3.04957517154995947681942819261542593785327e258,
	4.06858060764339734424012124124937318633684e261,
	-5.52310313219743616252320044093186392324280e264,
	7.62772793964343924869949690204961215533859e267,
	-1.07155711196978863132793524001065396932667e271,
	1.53102008959691884453440916153355334355847e274,
	-2.22448916821798346676602348865048510824835e277,
	3.28626791906901391668189736436895275365183e280,
	-4.93559289559603449020711938191575963496999e283,
	7.53495712008325067212266049779283956727824e286,
	-1.16914851545841777278088924731655041783900e290,
	1.84352614678389394126646201597702232396492e293,
	-2.95368261729680829728014917350525183485207e296,
	4.80793212775015697668878704043264072227967e299,
	-7.95021250458852528538243631671158693036798e302,
	1.33527841873546338750122832017820518292039e306
};


int32_t MAX_BERNOULLI = 258;

/**
* Computes the nth Bernoulli number.
*
* @param n    input value
* @return     output value
*
* @example
* double out = stdlib_base_bernoulli( 0 );
* // returns 1
*/
double stdlib_base_bernoulli( const int32_t n ) {
	if ( stdlib_base_is_nan( n ) || !stdlib_base_is_nonnegative_integer( n ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_odd( n ) ) {
		return 0.0;
	}
	if ( n > MAX_BERNOULLI ) {
		return ( ( n / 2 ) & 1 ) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	return bernoulli_value[ n / 2 ];
}
