var MyQueue_1 = function () {
	this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue_1.prototype.push = function (x) {
	this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue_1.prototype.pop = function () {
	return this.queue.shift();
};

/**
 * @return {number}
 */
MyQueue_1.prototype.peek = function () {
	if (this.queue.length) {
		return this.queue[0];
	} else this.queue;
};

/**
 * @return {boolean}
 */
MyQueue_1.prototype.empty = function () {
	if (!this.queue.length) return true;
	return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MyQueue_2 {
	constructor() {
		this.queue = [];
	}
	push(data) {
		this.queue.unshift(data);
	}
	pop() {
		return this.queue.pop();
	}
	peek() {
		return this.queue[this.queue.length - 1];
	}
	empty() {
		return !this.queue.length ? true : false;
	}
}
