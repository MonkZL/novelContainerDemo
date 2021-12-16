import React, {useEffect, useState} from "react";
import Svg, {Text, TSpan} from "react-native-svg";
import {StyleSheet, View} from "react-native";
import {getTextWidth} from "./textSizeUtil";
import Swiper from 'react-native-swiper'

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

/**
 * 处理一个单词宽度大于最大长度的情况
 * @param word
 * @param fontSize
 * @param maxWidth
 */
const formatOneWord = async (word, fontSize, maxWidth) => {
	let cursor = 0;
	let splitWords = [];
	while (cursor <= word.length) {
		const sliceWord = word.slice(0, cursor);
		const width = await getTextWidth(sliceWord, fontSize, 0, sliceWord.length)
		if (width > maxWidth) {
			splitWords.push(word.slice(0, cursor - 1))
			word = word.slice(cursor - 1, word.length)
			cursor = 0
		}
		cursor++
	}
	splitWords.push(word.slice(0, cursor))
	return splitWords
}

/**
 * 格式化段落
 * @param str
 * @param fontSize
 * @param maxWidth
 * @returns {Promise<[]>}
 */
const formatParagraph = async (str, fontSize, maxWidth) => {
	let returnArr = [];
	let strArr = str.split(' ').filter((item) => {
		return item.trim() !== ''
	})
	let cursor = 0;
	while (cursor <= strArr.length) {
		//连接text 判断长度
		let waitMeasureWithStr = strArr.slice(0, cursor).join(' ');
		const width = await getTextWidth(waitMeasureWithStr, fontSize, 0, waitMeasureWithStr.length)

		if (width > maxWidth) {
			//如果一个单词的长度都大于最大宽度了 那么直接切割掉
			if (cursor === 1) {
				const wordSplit = await formatOneWord(waitMeasureWithStr, fontSize, maxWidth)
				returnArr = returnArr.concat(wordSplit)
				strArr = strArr.slice(1, strArr.length)
			} else {
				returnArr.push(strArr.slice(0, cursor - 1).join(' '))
				strArr = strArr.slice(cursor - 1, strArr.length)
			}
			cursor = 0;
		} else {
			cursor++;
		}
	}
	returnArr.push(strArr.slice(0, cursor).join(' '))
	return returnArr
}

/**
 * 格式化每页
 * @param paragraphs
 * @param fontSize
 * @param chapterFontSize
 * @param maxHeight
 * @param lineHeight
 * @param paragraphHeight
 * @param paddingVertical
 */
const formatPage = (paragraphs, fontSize, chapterFontSize, maxHeight, lineHeight, paragraphHeight, paddingVertical) => {

	let pages = [];
	let lines = 0;
	let cursor = 0;
	while (cursor < paragraphs.length) {
		let paragraph = paragraphs[cursor];
		lines += paragraph.text.length;
		const tspanY = getTspanY(lines, fontSize, chapterFontSize, lineHeight, paragraphHeight, cursor, pages.length === 0, paddingVertical);
		if (tspanY >= maxHeight) {
			//这时做段落的拆分 因为这个段落
			//先回退到上一个paragraph的状态
			lines = lines - paragraph.text.length;
			let splitFlag = false;
			//有至少2行
			if (paragraph.text.length >= 2) {
				for (let i = 1; i <= paragraph.text.length; i++) {
					const tspanY1 = getTspanY(lines + i, fontSize, chapterFontSize, lineHeight, paragraphHeight, cursor, pages.length === 0, paddingVertical);
					const pass = tspanY1 >= maxHeight;
					//这种情况说明第一行就已经放不下了
					if (i === 1 && pass) {
						break
					}
					//下面i都大于1
					if (pass) {
						let frontParagraph = {...paragraph, text: paragraph.text.slice(0, i - 1)}
						let behindParagraph = {...paragraph, text: paragraph.text.slice(i - 1, paragraph.text.length)}
						paragraphs.splice(cursor, 1, frontParagraph, behindParagraph)
						splitFlag = true;
						break
					}
				}
			}
			if (splitFlag) {
				pages.push(paragraphs.slice(0, cursor + 1))
				paragraphs = paragraphs.slice(cursor + 1, paragraphs.length)
			} else {
				pages.push(paragraphs.slice(0, cursor))
				paragraphs = paragraphs.slice(cursor, paragraphs.length)
			}
			cursor = 0;
			lines = 0;
		} else {
			cursor++;
		}
	}
	pages.push(paragraphs.slice(0, cursor))
	return pages
}

//获取每行的y值
const getTspanY = (preLines, fontSize, chapterFontSize, lineHeight, paragraphHeight, tsArrIndex, hasChapter, paddingVertical) => {
	let allFontSize = 0
	if (hasChapter) {
		allFontSize = fontSize * (preLines - 1) + chapterFontSize
	} else {
		allFontSize = preLines * fontSize
	}
	return allFontSize + (preLines - 1) * lineHeight + paragraphHeight * tsArrIndex + paddingVertical
}

const NovelContainer = ({
							texts = [],
							fontSize = 14,
							chapterFontSize = 14,
							lineHeight = 10,
							paragraphHeight = 10,
							fontColor = '#000000',
							backgroundColor = '#FFFFFF',
							paddingVertical = 20,
							paddingLeft = 20
						}) => {

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [pages, setPages] = useState([]);
	const [isLoading, setLoading] = useState(true);

	//TODO 支持再次添加 chapter 在后台静默格式化
	useEffect(() => {
		if (width > 0 && height > 0) {
			console.log('开始格式化')
			let startTime = Date.now();
			texts.map(async (item, index) => {
				texts[index].text = await formatParagraph(item.text, fontSize, width - paddingLeft)
				//由于是多线程 现在检测是否还有为null的数据 没有的话表示格式化完成
				if (texts.find((item) => typeof item.text === 'string') === undefined) {
					setPages(formatPage(texts, fontSize, chapterFontSize, height, lineHeight, paragraphHeight, paddingVertical))
					setLoading(false)
					console.log(`耗时 ： ${Date.now() - startTime}`)
				}
			})
		}
	}, [width, height, fontSize, texts])

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
		<Swiper
			style={{backgroundColor}}
			loadMinimalSize={2}
			showsPagination={false}
			loop={false}>

			{
				pages?.map((page, pageIndex) => {
					//记录行数
					let preLines = 0
					return (
						<Svg
							key={pageIndex}
							height={height}
							width={width}>
							{
								page?.map((tsArr, tsArrIndex) => {
									return (
										<Text
											key={tsArrIndex}
											fill={fontColor}
											fontSize={tsArr.name === 'chapter' ? chapterFontSize : fontSize}>
											{
												tsArr?.text?.map((ts, tsIndex) => {
													preLines++
													return (
														<TSpan
															key={tsIndex}
															y={getTspanY(preLines, fontSize, chapterFontSize, lineHeight, paragraphHeight, tsArrIndex, pageIndex === 0, paddingVertical)}
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
				})
			}

		</Swiper>

	)

}

export default NovelContainer
