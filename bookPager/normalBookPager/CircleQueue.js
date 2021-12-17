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

	constructor() {
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
	}

	slideToShowing() {
		const nodeShowing = this.getShowing()
		nodeShowing.status = waitShow
		nodeShowing.preNode.status = showing
		nodeShowing.nextNode.status = showed
	}

	assignmentShowedRef(ref) {
		this.getShowed().ref = ref
	}

	assignmentShowingRef(ref) {
		this.getShowing().ref = ref
	}

	assignmentWaitShowRef(ref) {
		this.getWaitShow().ref = ref
	}
}
