import React, {useEffect} from "react";
import Svg, {Circle, Text, TSpan} from "react-native-svg";
import {Dimensions} from "react-native";
import {getTextWidth} from "./textSizeUtil";


const getSize = async (str, fontSize, maxWidth) => {
	const width = await getTextWidth(str, fontSize, 0, str.length)
	let strArr = [];
	if (width > maxWidth) {
		strArr = strArr.concat(await getSize(str.slice(0, parseInt(str.length / 2)), fontSize, maxWidth))
	} else {
		//TODO 判断一下再加一个字符 宽度是否正确
		strArr = strArr.push(str)
	}
	return strArr
}


const NovelContainer = ({
							texts = [],
							fontSize = 14,
							fontColor = '#000000',
							backgroundColor = '#FFFFFF',
						}) => {
	const width = Dimensions.get('window').width;
	const height = Dimensions.get('window').height;


	useEffect(() => {
		getSize(texts[0], fontSize, width).then(r => alert(JSON.stringify(r)))
	}, [])

	// console.log('------------------------------------------------------------------------------------------------------------')
	// //一行的字母数目
	// const oneLineLetterNum = Math.floor(width / fontSize);
	// console.log('一行字符数：', oneLineLetterNum)
	// let newText = [];
	// texts.map((text, index) => {
	// 	const numberOfLines = Math.ceil(text.length / oneLineLetterNum);
	// 	console.log('总行数：', numberOfLines)
	// 	const slices = [];
	// 	for (let i = 0; i < numberOfLines; i++) {
	// 		slices.push(text.slice(i * oneLineLetterNum, (i + 1) * oneLineLetterNum))
	// 	}
	// 	newText = newText.concat(slices)
	// })
	// console.log('切割好的数据：', JSON.stringify(newText))
	// console.log('------------------------------------------------------------------------------------------------------------')

	return (
		<Svg
			height={height}
			width={width}
			style={{backgroundColor}}>
			<Text fill={fontColor} fontSize={fontSize}>
				{/*{*/}
				{/*	texts.map((text, index) => {*/}
				{/*		return (*/}
				{/*			<TSpan*/}
				{/*				key={index}*/}
				{/*				y={fontSize}*/}
				{/*				x={0}>*/}
				{/*				{text}*/}
				{/*			</TSpan>*/}
				{/*		)*/}
				{/*	})*/}
				{/*}*/}

				<TSpan
					y={100}
					x={0}>
					{texts[0]}
				</TSpan>

				<TSpan
					y={200}
					x={0}>
					{texts[0]}
				</TSpan>

			</Text>


		</Svg>
	)

}

export default NovelContainer
