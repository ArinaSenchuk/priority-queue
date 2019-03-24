class Node {

	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if(node) {
			if(!this.left){
				this.left = node;
				node.parent = this;
			}
			else if(!this.right) {
				this.right = node;
				node.parent = this;
			}
			else if(this.right && this.left) {
				return;
			}
		} else return;

	}

	removeChild(node) {

		if (node.parent !== this) {
			throw new Error ('This node is not a child of this node');
		} else {
			if (this.left === node) {
				this.left = null;
				node.parent = null;
			}
			if (this.right === node) {
				this.right = null;
				node.parent = null;
			}
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}

	}

	swapWithParent() {
		if (!this.parent) {
			return;
		} else {

		}

	}
}

module.exports = Node;
