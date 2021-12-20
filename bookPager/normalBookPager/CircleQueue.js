const showing = 'showing'
const waitShow = 'waitShow'
const showed = 'showed'

/*
		维护一个环状队列

		队列的顺序为 展示中元素 showing -> 待展示元素 waitShow -> 展示过的元素 showed -> 展示中元素 showing

		初始化步骤：
		1.创建好3个对象 {ref,status,nextRef,preRef}
		2.将对象的连接关系建立好
		3.获取到展示中的元素

		操作步骤：
		1.当左滑时，操作展示中的元素滑出屏幕，修改队列状态
		2.当右滑时，操作展示过的元素滑入屏幕，修改队列状态
		3.每次修改状态的时候就是重新加载新数据，移除老数据的时候

	 */
export default class CircleQueue {

	node0;
	chapters;
	chapterIndex;
	pageIndex;


	constructor({chapters, chapterIndex, pageIndex}) {

		this.chapters = chapters;
		this.chapterIndex = chapterIndex;
		this.pageIndex = pageIndex;

		this.node0 = {id: 1, ref: null, status: showing, nextNode: null, preNode: null}
		const node1 = {id: 2, ref: null, status: waitShow, nextNode: null, preNode: null}
		const node2 = {id: 3, ref: null, status: showed, nextNode: null, preNode: null}

		this.node0.nextNode = node1
		this.node0.preNode = node2

		node1.nextNode = node2
		node1.preNode = this.node0

		node2.nextNode = this.node0
		node2.preNode = node1
	}

	getStatus(status) {
		if (this.node0.status === status) {
			return this.node0
		}
		if (this.node0.preNode.status === status) {
			return this.node0.preNode
		}
		if (this.node0.nextNode.status === status) {
			return this.node0.nextNode
		}
	}

	getShowed() {
		return this.getStatus(showed)
	}

	getShowing() {
		return this.getStatus(showing)
	}

	getWaitShow() {
		return this.getStatus(waitShow)
	}

	slideToShowed() {
		const nodeShowing = this.getShowing()
		nodeShowing.status = showed
		nodeShowing.preNode.status = waitShow
		nodeShowing.nextNode.status = showing

		const waitShowIndex = this.getWaitShowIndex();
		if (waitShowIndex) {
			this.chapterIndex = waitShowIndex.chapterIndex
			this.pageIndex = waitShowIndex.pageIndex
		}
		this.getWaitShow().ref.setPageData(this.getWaitShowData())
	}

	slideToShowing() {
		const nodeShowing = this.getShowing()
		nodeShowing.status = waitShow
		nodeShowing.preNode.status = showing
		nodeShowing.nextNode.status = showed

		const showedIndex = this.getShowedIndex();
		if (showedIndex) {
			this.chapterIndex = showedIndex.chapterIndex
			this.pageIndex = showedIndex.pageIndex
		}
		this.getShowed().ref.setPageData(this.getShowedData())
	}

	assignmentShowedRef(ref) {
		if (this.getShowed().ref) {
			return
		}
		this.getShowed().ref = ref
	}

	assignmentShowingRef(ref) {
		if (this.getShowing().ref) {
			return
		}
		this.getShowing().ref = ref
	}

	assignmentWaitShowRef(ref) {
		if (this.getWaitShow().ref) {
			return
		}
		this.getWaitShow().ref = ref
	}

	//获取已展示的index
	getShowedIndex() {
		let chapterIndex = this.chapterIndex
		let pageIndex = this.pageIndex
		//如果目前页码是本章第一页
		if (pageIndex === 0) {
			//如果目前是第一章
			if (chapterIndex === 0) {
				return null
			}
			chapterIndex -= 1
			pageIndex = this.chapters[chapterIndex].length - 1
		} else {
			pageIndex--
		}
		return {chapterIndex, pageIndex}
	}

	//获取等待展示的index
	getWaitShowIndex() {
		let chapterIndex = this.chapterIndex;
		let pageIndex = this.pageIndex;
		//如果已经是本章最后一页了
		if (pageIndex === this.chapters[chapterIndex].length - 1) {
			//如果已经是最后一章了
			if (chapterIndex === this.chapters.length - 1) {
				return null
			}
			chapterIndex += 1
			pageIndex = 0
		} else {
			pageIndex++
		}
		return {chapterIndex, pageIndex}
	}

	//获取展示过的数据
	getShowedData() {
		const showedIndex = this.getShowedIndex();
		if (!showedIndex) {
			return []
		}
		return this.chapters[showedIndex.chapterIndex][showedIndex.pageIndex]
	}

	//获取展示中的数据
	getShowingData() {
		return this.chapters[this.chapterIndex][this.pageIndex]
	}

	//获取待展示的数据
	getWaitShowData() {
		const waitShowIndex = this.getWaitShowIndex();
		if (!waitShowIndex) {
			return []
		}
		return this.chapters[waitShowIndex.chapterIndex][waitShowIndex.pageIndex]
	}

	canSlideToShowed() {
		return !(this.chapterIndex === this.chapters.length - 1 && this.pageIndex === this.chapters[this.chapterIndex].length - 1)
	}

	canSlideToShowing() {
		return !(this.chapterIndex === 0 && this.pageIndex === 0)
	}

}
