import React, {useRef} from "react";
import {Dimensions, PanResponder, Text, View, StyleSheet} from "react-native";
import CircleQueue from "./CircleQueue";

const Direction_Left = 'left';
const Direction_Right = 'right';
//动画播放的频率
const intervalTime = 10;
//每次移动距离
const moveDistance = 20

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NormalBookPager = () => {

	const viewData = useRef({
		slideDirection: '',//left right
		releaseOver: true,
		interval: null,
		elevationLeftCount: 0,
		elevationRightCount: 0,
		hidePosition: 0,
		showingPosition: 1,
	});
	//获取本地数据
	const getViewData = () => {
		return viewData.current
	}


	const circleQueueRef = useRef(new CircleQueue());
	const getCircleQueue = () => {
		return circleQueueRef.current
	}
	const getShowing = () => {
		return getCircleQueue().getShowing()
	}
	const getShowingRef = () => {
		console.log(getShowing().id)
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
				getShowingRef().setNativeProps({
					style: {
						left: 0,
						elevation: getViewData().elevationLeftCount
					}
				})
				getCircleQueue().slideToShowed();
				break;
			case Direction_Right:
				getShowedRef().setNativeProps({
					style: {
						left: 0
					}
				})
				getCircleQueue().slideToShowing();
				break
		}
	}

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
			getViewData().elevationRightCount += 1
			getViewData().elevationLeftCount -= 1
		},
		// 移动途中的记录  有用信息 gestureState {moveX moveY}
		onPanResponderMove: (evt, gestureState) => {

			// 最近一次的移动距离为gestureState.move{X,Y}
			// 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
			// 未释放完成 不能操作
			// if (!getViewData().releaseOver) {
			// 	return
			// }
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
							elevation: getViewData().elevationRightCount
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
								elevation: getViewData().elevationRightCount
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

			<View
				ref={ref => getCircleQueue().assignmentShowedRef(ref)}
				style={[styles.page, {backgroundColor: 'yellow'}]}>
				<Text>333333333333333333333333333333333333</Text>
			</View>

			<View
				ref={ref => getCircleQueue().assignmentWaitShowRef(ref)}
				style={[styles.page, {backgroundColor: 'pink'}]}>
				<Text>222222222222222222222222222222222222</Text>
			</View>

			<View
				ref={ref => getCircleQueue().assignmentShowingRef(ref)}
				style={[styles.page, {backgroundColor: 'green'}]}>
				<Text>111111111111111111111111111111111111</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		width, height, position: 'absolute', opacity: 1, alignItems: 'center', justifyContent: 'center',
	}
})

export default NormalBookPager
