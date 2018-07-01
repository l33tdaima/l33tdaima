/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
    this.interval = 300;
    this.queue = new Array();
};

/**
 * Record a hit.
 * @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.queue.push(timestamp);
    while (timestamp - this.queue[0] >= this.interval) {
        this.queue.shift();
    }
};

/**
 * Return the number of hits in the past 5 minutes.
 * @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while (timestamp - this.queue[0] >= this.interval) {
        this.queue.shift();
    }
    return this.queue.length;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = Object.create(HitCounter).createNew()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
let ctr = new HitCounter();
ctr.hit(1);
ctr.hit(2);
ctr.hit(3);
console.assert(ctr.getHits(4) === 3);
ctr.hit(300);
console.assert(ctr.getHits(300) === 4);
console.assert(ctr.getHits(301) === 3);

