/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.size = 0; // size of the set
    this.vlist = new Array(); // value in array
    this.vtable = new Map(); // val -> index of list
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.vtable.has(val)) {
        return false;
    } else {
        if (this.size === this.vlist.length) {
            this.vlist.push(val);
        } else { // reuse existing space
            this.vlist[this.size] = val;
        }
        this.size ++;
        this.vtable.set(val, this.size - 1);
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.vtable.has(val)) {
        return false;
    }
    let i = this.vtable.get(val);
    // move the last element into the deleted slot
    if (i < (this.size - 1)) {
        let last = this.vlist[this.size - 1];
        this.vlist[i] = last;
        this.vtable.set(last, i);
    }
    this.size --;
    this.vtable.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let irandom = ~~(Math.random() * this.size);
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
let randomSet = new RandomizedSet();

// Inserts 0 to the set. Returns true as 1 was inserted successfully.
console.assert(randomSet.insert(0) === true);

// Returns false as 2 does not exist in the set.
console.assert(randomSet.remove(2) === false);

// Inserts 1 to the set, returns true. Set now contains [0,1].
console.assert(randomSet.insert(1) === true);

// getRandom should return either 1 or 2 randomly.
for (let i = 0; i < 10; ++i) {
    console.log("getRandom() should be random ->", randomSet.getRandom());
}

// Removes 0 from the set, returns true. Set now contains [1].
console.assert(randomSet.remove(0) === true);

// Insert a new element 2, so return true.
console.assert(randomSet.insert(2) === true);

// Removes 1 from the set, returns true. Set now contains [2].
console.assert(randomSet.remove(1) === true);

// Since 2 is the only number in the set, getRandom always return 2.
for (let i = 0; i < 10; ++i) {
    console.assert(randomSet.getRandom() === 2);
}
