const Node = require('./node');

class MaxHeap {

	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		if(this.isEmpty()) {

		} else {
			let lastRoot = this.detachRoot();
			this.restoreRootFromLastInsertedNode(lastRoot);
			this.shiftNodeDown(this.root);
			return lastRoot.data;
		}

	}

	detachRoot() {
		let oldRoot = this.root;
		this.root = null;
		return oldRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		let lastInsertedNode = this.parentNodes[this.parentNodes.length - 1];
		return lastInsertedNode;
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		return !this.root;

	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	insertNode(node) {

		if(this.isEmpty()) {
			this.root = node;
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
