/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = new Array();
    this.size = size;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.length < this.size) {
        this.queue.push(val);
        this.sum += val;
    } else {
        this.sum -= this.queue.shift();
        this.queue.push(val);
        this.sum += val;
    }
    return this.sum / Math.min(this.queue.length, this.size);
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */
let m = new MovingAverage(3);
console.assert(m.next(1) === 1);
console.assert(m.next(10) === ((1 + 10) / 2));
console.assert(m.next(3) === ((1 + 10 + 3) / 3));
console.assert(m.next(5) === ((10 + 3 + 5) / 3));
