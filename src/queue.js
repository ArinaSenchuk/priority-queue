const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxsize = maxSize;
		this.heap = new MaxHeap();

	}

	push(data, priority) {
		if(this.heap.size() >= this.maxsize){
			throw error("This size is more then 30");
		}
		else {
			this.heap.push(data, priority);
		}
	}

	shift() {
		if(this.heap.isEmpty()){
			throw error("The heap is empty!");
		} else {
			this.heap.pop();
		}

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
		
	}
}

module.exports = PriorityQueue;
