import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {StatusBar, Text, View} from "react-native";
import NovelPage from "../NovelPage";

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
										backgroundColor,
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
			  style={{
				  backgroundColor: '#FFFFFF',
				  position: 'absolute',
				  opacity: 1,
				  width: '100%',
				  top: 0,
				  bottom: 0,
			  }}>
			<NovelPage
				pageData={novelData?.data}
				height={height}
				width={width}
				fontColor={fontColor}
				chapterFontSize={chapterFontSize}
				fontSize={fontSize}
				lineHeight={lineHeight}
				paddingLeft={paddingLeft}
				paddingVertical={paddingVertical}
				paragraphHeight={paragraphHeight}/>
			<View style={{position: 'absolute', bottom: 20, left: 20, right: 20}}>
				<Text style={{position: 'absolute', left: 0, fontSize: 12, color: '#CECECE'}}>{novelData.chapterName}</Text>
				<Text style={{position: 'absolute', right: 0, fontSize: 12, color: '#CECECE'}}>{novelData.chapterIndex}</Text>
			</View>
		</View>
	)
})

export default NormalNovelPage
