/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
    this.hashtable = new Map();
};
/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    let hl = this.hashtable;
    if (hl.has(number)) {
        hl.set(number, 2);
    } else {
        hl.set(number, 1);
    }
};
/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    for (let val of this.hashtable.entries()) {
        let target = value - val[0];
        let c = this.hashtable.get(target);
        if (c === undefined) {
            continue;
        }
        if (target !== val[0] || c > 1) {
            return true;
        }
    }
    return false;
};
/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
[{
    add: [],
    find: [4, 7]
},{ 
    add: [0],
    find: [0]
},{ 
    add: [0,0],
    find: [0]
},{
    add: [1,3,5],
    find: [4,7]
},{ 
    add: [3,2,1],
    find: [2,3,4,5,6]
}].forEach(function (test) {
    let obj = new TwoSum();
    console.log("------\nTesting", test.add);
    test.add.forEach((v) => obj.add(v));
    test.find.forEach((v) =>
       console.log("Find", v, "->", obj.find(v))
    );
});
