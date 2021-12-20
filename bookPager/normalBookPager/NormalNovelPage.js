import React from "react";
import {View} from "react-native";
import NovelPage from "../NovelPage";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";

const NormalNovelPage = forwardRef(({
										pageData,
										width,
										height,
										fontColor,
										chapterFontSize,
										fontSize,
										lineHeight,
										paddingLeft,
										paddingVertical,
										paragraphHeight,
										backgroundColor
									}, ref) => {

	const [novelData, setNovelData] = useState(pageData);

	const viewRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			setPageData: (data) => setNovelData(data),
			setNativeProps: (props) => viewRef.current?.setNativeProps(props),
			log: () => console.log(backgroundColor)
		}
	})

	return (
		<View ref={viewRef}
			  style={{width, height, backgroundColor, position: 'absolute', opacity: 1, alignItems: 'center', justifyContent: 'center'}}>
			<NovelPage
				pageData={novelData}
				height={height}
				width={width}
				fontColor={fontColor}
				chapterFontSize={chapterFontSize}
				fontSize={fontSize}
				lineHeight={lineHeight}
				paddingLeft={paddingLeft}
				paddingVertical={paddingVertical}
				paragraphHeight={paragraphHeight}/>
		</View>
	)
})

export default NormalNovelPage
