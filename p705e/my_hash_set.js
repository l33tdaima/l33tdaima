/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.store = new Array();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.store[key] = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  if (this.store[key]) this.store[key] = undefined;
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.store[key] ? this.store[key] === true : false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.assert(hashSet.contains(1) === true, 'contains 1');
console.assert(hashSet.contains(3) === false, "doesn't contain 3");
hashSet.add(2);
console.assert(hashSet.contains(2) === true, 'contain 2');
hashSet.remove(2);
console.assert(hashSet.contains(2) === false, "doesn't contains 2");
