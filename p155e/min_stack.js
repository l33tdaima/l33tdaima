/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = new Array();
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (x <= this.min) {
    // when seeing a new min, insert the min up to this point
    // so that we can reinstate the min when popping
    this.stack.push(this.min);
    this.min = x;
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // Pop twice if the min on stack is gone
  if (this.stack.pop() === this.min) {
    this.min = this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-1);
console.assert(minStack.getMin() === -2);
minStack.pop();
console.assert(minStack.top() === 0);
console.assert(minStack.getMin() === -2);
