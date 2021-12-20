import React from "react";
import Svg, {Text, TSpan} from "react-native-svg";
import {getTspanY} from "./BookPagerUtil";

const NovelPage = ({
					   pageData = [],
					   height,
					   width,
					   fontColor,
					   chapterFontSize,
					   fontSize,
					   paddingLeft,
					   paddingVertical,
					   lineHeight,
					   paragraphHeight
				   }) => {

	let preLines = 0
	return (
		<Svg
			height={height}
			width={width}>
			{
				pageData?.map((tsArr, tsArrIndex) => {
					return (
						<Text
							key={tsArrIndex}
							fill={fontColor}
							//这里用 tsArr.name === 'chapter' 是为了保证只有标题受影响
							fontSize={tsArr.name === 'chapter' ? chapterFontSize : fontSize}>
							{
								tsArr?.text?.map((ts, tsIndex) => {
									preLines++
									return (
										<TSpan
											key={tsIndex}
											//这里用 page[0].name === 'chapter' 是为了保证所有文字受影响
											y={getTspanY(preLines, fontSize, chapterFontSize, lineHeight, paragraphHeight, tsArrIndex, pageData[0].name === 'chapter', paddingVertical)}
											x={paddingLeft}>
											{ts}
										</TSpan>
									)
								})
							}
						</Text>
					)
				})
			}
		</Svg>
	)
}

export default NovelPage
