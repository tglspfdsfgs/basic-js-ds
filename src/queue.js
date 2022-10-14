const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

	constructor() {
		this.top = new ListNode(null);
	}

	enqueue(value) {
		if (this.top.value) {
			let currNode = this.top;
			while (currNode.next) {
				currNode = currNode.next;
			}
			currNode.next = new ListNode(value);
		} else {
			this.top.value = value;
		}
	}

	dequeue() {
		this.oldTop = this.top;
		this.top = this.top.next;
		return this.oldTop.value;	
	}

	getUnderlyingList() {
		return this.top;
	}
}

module.exports = {
  Queue
};
