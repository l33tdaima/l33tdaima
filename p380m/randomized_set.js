/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.vlist = new Array(); // value in array
  this.vtable = new Map(); // val -> index of list
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.vtable.has(val)) {
    return false;
  } else {
    const len = this.vlist.push(val);
    this.vtable.set(val, len - 1);
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.vtable.has(val)) return false;
  const len = this.vlist.length;
  // swap to-be-deleted with the last element
  let i = this.vtable.get(val);
  this.vlist[i] = this.vlist[len - 1];
  this.vtable.set(this.vlist[len - 1], i);
  this.vtable.delete(val);
  this.vlist.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let irandom = ~~(Math.random() * this.vlist.length);
  return this.vlist[irandom];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// Init an empty set.
const randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.assert(randomSet.insert(1) === true);
// Returns false as 2 does not exist in the set.
console.assert(randomSet.remove(2) === false);
// Inserts 2 to the set, returns true. Set now contains [1,2].
console.assert(randomSet.insert(2) === true);
// getRandom should return either 1 or 2 randomly.
r1 = randomSet.getRandom();
console.assert(r1 >= 1 && r1 <= 2);
// Removes 1 from the set, returns true. Set now contains [1].
console.assert(randomSet.remove(1) === true);
// 2 was already in the set, so return false.
console.assert(randomSet.insert(2) === false);
// Since 2 is the only number in the set, getRandom always return 2.
console.assert(randomSet.getRandom() === 2);
