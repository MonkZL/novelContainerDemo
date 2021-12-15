/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Svg, {
	Text, TSpan,
} from 'react-native-svg';

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import NovelContainer from "./NovelContainer";

/*
TextProps
x?: NumberArray;
y?: NumberArray;
dx?: NumberArray;
dy?: NumberArray;
rotate?: NumberArray;
opacity?: NumberProp;
inlineSize?: NumberProp;

TextSpecificProps
alignmentBaseline?: AlignmentBaseline;
baselineShift?: BaselineShift;
verticalAlign?: NumberProp;
lengthAdjust?: LengthAdjust;
textLength?: NumberProp;
fontData?: null | { [name: string]: unknown };
fontFeatureSettings?: string;

fontStyle?: FontStyle;
fontVariant?: FontVariant;
fontWeight?: FontWeight;
fontStretch?: FontStretch;
fontSize?: NumberProp;
fontFamily?: string;
textAnchor?: TextAnchor;
textDecoration?: TextDecoration;
letterSpacing?: NumberProp; //字母间距
wordSpacing?: NumberProp; //空格的大小
kerning?: NumberProp; //单个文字间距
fontFeatureSettings?: string;
fontVariantLigatures?: FontVariantLigatures;
fontVariationSettings?: string;
 */
const App = () => {
	const texts = [
		// '\"So you\'re admitting it?\" Zhan Wu Hen poked the Embodiment\'s forehead with his finger. The two-hundred-metre-tall Embodiment instantly froze in place, unable to move.'
		"阿达肯德基离开的借口啦金德拉克阿卡绝世独立看见撒到了空间啊打了卡就收到了空间立刻就打了就看到了卡就到垃圾堆里"
	];
	return (
		<SafeAreaView>
			<NovelContainer texts={texts} fontSize={20}/>
		</SafeAreaView>
	);
}

export default App;
