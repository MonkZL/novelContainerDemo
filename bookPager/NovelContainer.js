import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {StyleSheet, View} from "react-native";
import {formatPage, formatParagraph} from "./BookPagerUtil";
import NormalBookPager from "./normalBookPager/NormalBookPager";

/**
 * 测量父容器尺寸的view
 * @param onLayout
 * @returns {JSX.Element}
 * @constructor
 */
const MeasureSizeView = ({onLayout}) => {
	return (
		<View
			onLayout={onLayout}
			style={[{alignItems: 'center', justifyContent: 'center'}, StyleSheet.absoluteFill]}>
			<View style={{width: 30, height: 30, backgroundColor: 'green'}}/>
		</View>
	)
}

const NovelContainer = forwardRef(({
									   currentChapter = [],
									   fontSize = 14,
									   chapterFontSize = 14,
									   lineHeight = 10,
									   paragraphHeight = 10,
									   fontColor = '#000000',
									   backgroundColor = '#FFFFFF',
									   paddingVertical = 20,
									   paddingLeft = 20
								   }, ref) => {


	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [chapters, setChapters] = useState([]);
	const [isLoading, setLoading] = useState(true);

	/**
	 * 格式化chapter
	 * @param chapter
	 * @param position 0 往前添加 1 往后添加 2 重置
	 */
	const formatChapter = (chapter, position = 2) => {
		if (width > 0 && height > 0) {
			console.log('开始格式化')
			let startTime = Date.now();
			chapter.map(async (item, index) => {
				chapter[index].text = await formatParagraph(item.text, fontSize, width - paddingLeft)
				//由于是多线程 现在检测是否还有为null的数据 没有的话表示格式化完成
				if (chapter.find((item) => typeof item.text === 'string') === undefined) {
					const formatPageData = formatPage(chapter, fontSize, chapterFontSize, height, lineHeight, paragraphHeight, paddingVertical);
					const chaptersCopy = [...chapters]
					switch (position) {
						//往前添加
						case 0:
							chaptersCopy.unshift(formatPageData)
							setChapters(chaptersCopy)
							break
						//往后添加
						case 1:
							chaptersCopy.push(formatPageData)
							setChapters(chaptersCopy)
							break
						//重置
						case 2:
							setChapters([formatPageData])
							break
						default:
					}
					setLoading(false)
					console.log(`耗时 ： ${Date.now() - startTime}`)
				}
			})
		}
	}

	//初始化第一个章节
	useEffect(() => {
		formatChapter(currentChapter)
	}, [width, height])


	useImperativeHandle(ref, () => {
		return {
			//添加前一章
			addPreChapter: (chapter) => {
				formatChapter(chapter, 0)
			},
			//添加后一章
			addNextChapter: (chapter) => {
				formatChapter(chapter, 1)
			},
			//替换当前所有章节
			replaceChapter: (chapter) => {
				formatChapter(chapter, 2)
			}
		}
	})

	//load page数据，顺便测量容器大小
	if (isLoading || !width || !height) {
		return (
			<MeasureSizeView
				onLayout={(e) => {
					setWidth(e.nativeEvent.layout.width - paddingLeft)
					setHeight(e.nativeEvent.layout.height - paddingVertical * 2)
				}}/>
		)
	}

	return (
		<NormalBookPager
			width={width}
			height={height}
			chapters={chapters}
			chapterIndex={0}
			pageIndex={0}
			needAddPreDataCallback={() => {
			}}
			needAddNextDataCallback={() => {
			}}
			fontColor={fontColor}
			chapterFontSize={chapterFontSize}
			fontSize={fontSize}
			paddingLeft={paddingLeft}
			paddingVertical={paddingVertical}
			lineHeight={lineHeight}
			paragraphHeight={paragraphHeight}/>
	)

})

export default NovelContainer
