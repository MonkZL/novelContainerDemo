import React, {forwardRef, useRef} from "react";
import {Dimensions, PanResponder, View} from "react-native";
import CircleQueue from "./CircleQueue";
import NormalNovelPage from "./NormalNovelPage";

const Direction_Left = 'left';
const Direction_Right = 'right';
//动画播放的频率
const intervalTime = 10;
//每次移动距离
const moveDistance = 20

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/**
 * TODO 目前基础功能完成，能够无限滑动，还剩下以下一些功能
 * 	1. 页码，当前章节下的页码/当前章节的总页数
 * 	2. 加载数据，当页面滑动之后需要对数据进行加载和移除
 * 		<1>. 左滑前，已展示 1 展示中 2 待展示 3
 * 			 左滑开始时，已展示 4 展示中 2 待展示 3 //这个时候应该要检测一下是否还有数据能够填充，将要变成 待展示 的 已展示
 * 			 左滑结束时，已展示 2 展示中 3 待展示 4
 * 		<2>. 右滑前，已展示 1 展示中 2 待展示 3
 * 			 右滑开始时，已展示 1 展示中 2 待展示 0 //这个时候应该要检测一下是否还有数据能够填充，将要变成 已展示 的 待展示
 * 			 右滑结束时，已展示 0 展示中 1 待展示 2
 * 		<3>. 根据上面的分析，目前的实现步骤是，通过传入一个数组，在给定一个数组展示中的index，在bookPager内部自己去判断是否
 * 			 还有能展示的数据，如果没有，加载一个缺省页面，并通过回调通知外部该填充数据了，需要区分的是，告诉外部是往头部还是尾
 * 			 部填充数据。
 * 	实现思路：
 * 	1. 对于传入的数据规定
 * 		<1>. chapters 格式化之后的章节数据
 * 	    <2>. chapterIndex 需要展示的章节
 * 	    <3>. pageIndex 需要展示的页码
 * 	    <4>. needAddPreDataCallback 告诉外部需要添加头部数据的回调
 * 	    <5>. needAddNextDataCallback 告诉外部需要添加尾部数据的回调
 * 	2. 提供给外部的方法
 * 		<1>. addPreChapters 往头部添加一定数目的章节
 * 	    <2>. addNextChapters 往尾部添加一定数目的章节
 * @returns {JSX.Element}
 * @constructor
 */
const NormalBookPager = forwardRef(({
										chapters,
										chapterIndex,
										pageIndex,
										needAddPreDataCallback,
										needAddNextDataCallback,
										fontColor,
										chapterFontSize,
										fontSize,
										paddingLeft,
										paddingVertical,
										lineHeight,
										paragraphHeight
									}, ref) => {

	const viewData = useRef({
		slideDirection: '',// left right
		releaseOver: true,// 用来禁止在动画播放完之前操作其余page
		interval: null,// 播放动画的interval
		elevationLeftCount: 0,// 左滑之后的page，重置到右边后的elevation/zIndex
		elevationRightCount: 0,// 右滑前设置page的elevation/zIndex
	});
	//获取本地数据
	const getViewData = () => {
		return viewData.current
	}
	//循环队列
	const circleQueueRef = useRef(new CircleQueue({chapters, chapterIndex, pageIndex}));
	const getCircleQueue = () => {
		return circleQueueRef.current
	}

	const getShowing = () => {
		return getCircleQueue().getShowing()
	}
	const getShowingRef = () => {
		return getShowing().ref
	}
	const getShowed = () => {
		return getCircleQueue().getShowed()
	}
	const getShowedRef = () => {
		return getShowed().ref
	}

	//滑动结束 该初始化左侧堆栈和正在展示中堆栈的后续数据
	const SlideOver = (direction) => {
		switch (direction) {
			case Direction_Left:
				//将左移出屏幕的page重置到屏幕中，并且将位置设置为最底部
				getShowingRef().setNativeProps({
					style: {
						left: 0,
						elevation: getViewData().elevationLeftCount,//兼容android
						zIndex: getViewData().elevationLeftCount,//兼容ios
					}
				})
				//重置page status
				getCircleQueue().slideToShowed();
				break;
			case Direction_Right:
				//确保右移的page到了屏幕中
				getShowedRef().setNativeProps({
					style: {
						left: 0
					}
				})
				//重置page status
				getCircleQueue().slideToShowing();
				break
		}
	}

	//滑动操作
	const _panResponder = PanResponder.create({
		// 要求成为响应者：
		onStartShouldSetPanResponder: (evt, gestureState) => true,
		onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
		onMoveShouldSetPanResponder: (evt, gestureState) => true,
		onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
		// 操作开始的位置  有用信息 gestureState {x0 y0}
		onPanResponderGrant: (evt, gestureState) => {
			// 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
			// gestureState.{x,y} 现在会被设置为0
			// 用作每个页面的海拔高度
			getViewData().elevationRightCount += 10
			getViewData().elevationLeftCount -= 10
		},
		// 移动途中的记录  有用信息 gestureState {moveX moveY}
		onPanResponderMove: (evt, gestureState) => {

			// 最近一次的移动距离为gestureState.move{X,Y}
			// 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}

			// 未释放完成 不能操作
			if (!getViewData().releaseOver) {
				return
			}

			//判断不能往左滑动
			if (getViewData().slideDirection && getViewData().slideDirection === Direction_Left && !getCircleQueue().canSlideToShowed()) {
				return;
			}
			//判断不能往右滑动
			if (getViewData().slideDirection && getViewData().slideDirection === Direction_Right && !getCircleQueue().canSlideToShowing()) {
				return;
			}

			const {x0, moveX} = gestureState;
			// 水平拖动的距离
			let moveXDistance = moveX - x0
			switch (getViewData().slideDirection) {
				//向左滑动 控制展示中堆栈第一个view滑动
				case Direction_Left:
					getShowingRef().setNativeProps({
						style: {
							left: moveXDistance,
						}
					})
					break;
				//向右滑动 控制左边堆栈第一个view滑动
				case Direction_Right:
					getShowedRef().setNativeProps({
						style: {
							left: -width + moveXDistance,
							elevation: getViewData().elevationRightCount,//兼容android
							zIndex: getViewData().elevationRightCount,//兼容ios
						}
					})
					break;
				default:
					//设置滑动方向
					getViewData().slideDirection = moveX - x0 > 0 ? Direction_Right : Direction_Left
			}

		},
		onPanResponderTerminationRequest: (evt, gestureState) => true,
		//松手位置
		onPanResponderRelease: (evt, gestureState) => {
			// 用户放开了所有的触摸点，且此时视图已经成为了响应者。
			// 一般来说这意味着一个手势操作已经成功完成。

			//判断不能往左滑动
			if (getViewData().slideDirection && getViewData().slideDirection === Direction_Left && !getCircleQueue().canSlideToShowed()) {
				// 重置方向为空
				getViewData().slideDirection = ''
				return;
			}
			//判断不能往右滑动
			if (getViewData().slideDirection && getViewData().slideDirection === Direction_Right && !getCircleQueue().canSlideToShowing()) {
				// 重置方向为空
				getViewData().slideDirection = ''
				return;
			}

			//将释放状态设置为释放中 防止在释放未完成时 做别的操作
			getViewData().releaseOver = false;

			const {x0, moveX} = gestureState;
			// 水平拖动的距离
			let moveXDistance = moveX - x0
			switch (getViewData().slideDirection) {
				//向左滑动 控制展示中堆栈第一个view滑动
				case Direction_Left:
					//位置
					getViewData().interval = setInterval(() => {
						moveXDistance -= moveDistance;
						if (moveXDistance <= -width) {
							moveXDistance = -width
						}
						getShowingRef().setNativeProps({
							style: {
								left: moveXDistance,
							}
						})
						if (moveXDistance <= -width) {
							getViewData().releaseOver = true
							getViewData().interval && clearInterval(getViewData().interval)
							SlideOver(Direction_Left)
						}
					}, intervalTime)
					break;
				//向右滑动 控制左边堆栈第一个view滑动
				case Direction_Right:
					getViewData().interval = setInterval(() => {
						moveXDistance += moveDistance;
						if (moveXDistance >= width) {
							moveXDistance = width
						}
						getShowedRef().setNativeProps({
							style: {
								left: moveXDistance - width,
								elevation: getViewData().elevationRightCount,//兼容android
								zIndex: getViewData().elevationRightCount,//兼容ios
							}
						})
						if (moveXDistance >= width) {
							getViewData().releaseOver = true
							getViewData().interval && clearInterval(getViewData().interval)
							SlideOver(Direction_Right)
						}
					}, intervalTime)
					break;
			}
			// 重置方向为空
			getViewData().slideDirection = ''
		},
		onPanResponderTerminate: (evt, gestureState) => {
			// 另一个组件已经成为了新的响应者，所以当前手势将被取消。
		},
		onShouldBlockNativeResponder: (evt, gestureState) => {
			// 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
			// 默认返回true。目前暂时只支持android。
			return true;
		},
	});


	return (
		<View {..._panResponder.panHandlers} style={{width, height}}>

			<NormalNovelPage
				width={width}
				height={height}
				fontColor={fontColor}
				chapterFontSize={chapterFontSize}
				fontSize={fontSize}
				lineHeight={lineHeight}
				paddingLeft={paddingLeft}
				paddingVertical={paddingVertical}
				paragraphHeight={paragraphHeight}
				backgroundColor={'yellow'}
				pageData={getCircleQueue().getShowedData()}
				ref={ref => getCircleQueue().assignmentShowedRef(ref)}/>


			<NormalNovelPage
				width={width}
				height={height}
				fontColor={fontColor}
				chapterFontSize={chapterFontSize}
				fontSize={fontSize}
				lineHeight={lineHeight}
				paddingLeft={paddingLeft}
				paddingVertical={paddingVertical}
				paragraphHeight={paragraphHeight}
				backgroundColor={'pink'}
				pageData={getCircleQueue().getWaitShowData()}
				ref={ref => getCircleQueue().assignmentWaitShowRef(ref)}/>


			<NormalNovelPage
				width={width}
				height={height}
				fontColor={fontColor}
				chapterFontSize={chapterFontSize}
				fontSize={fontSize}
				lineHeight={lineHeight}
				paddingLeft={paddingLeft}
				paddingVertical={paddingVertical}
				paragraphHeight={paragraphHeight}
				backgroundColor={'green'}
				pageData={getCircleQueue().getShowingData()}
				ref={ref => getCircleQueue().assignmentShowingRef(ref)}/>

		</View>
	)
})

export default NormalBookPager
