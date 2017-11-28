/**
 * Double linked list maintaining the age
 * @param {number} key
 * @param {number} value
 */ 
var DListNode = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
};
/**
 * Move a node right after the head node
 * the node must be in the list already
 * @param {object} the node to move
 * @param {object} head node
 */
var moveToHead = function(pnode, head) {
    if (head.next !== pnode) {
        // remove pnode
        pnode.prev.next = pnode.next;
        pnode.next.prev = pnode.prev;
        // insert to the head
        head.next.prev = pnode;
        pnode.next = head.next;
        head.next = pnode;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = (capacity == undefined) ? 0 : capacity;
    this.map = new Map();
    this.headMRU = new DListNode(-1, 0);
    this.tailLRU = new DListNode(-2, 0);
    this.headMRU.next = this.tailLRU;
    this.tailLRU.prev = this.headMRU;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let pnode = this.map.get(key);
    if (pnode === undefined) {
        return -1;
    }
    // update the aging list
    moveToHead(pnode, this.headMRU);
    return pnode.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
    // update existing key
        let p = this.map.get(key);
        p.val = value;
        moveToHead(p, this.headMRU);
    } else {
    // insert new key
        if (this.map.size === this.capacity) {
            // drop the LRU element
            let lru = this.tailLRU.prev;
            lru.prev.next = this.tailLRU;
            this.tailLRU.prev = lru.prev;
            
            this.map.delete(lru.key);
        }
        let p = new DListNode(key, value);
        p.prev = this.headMRU;
        p.next = this.headMRU.next;
        this.headMRU.next.prev = p;
        this.headMRU.next = p;
        this.map.set(key, p);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("Get 1 ->", cache.get(1));
cache.put(3, 3);
console.log("Get 2 ->", cache.get(2));
cache.put(4, 4);
console.log("Get 1 ->", cache.get(1));
console.log("Get 3 ->", cache.get(3));
console.log("Get 4 ->", cache.get(4));

console.log("======");

cache = new LRUCache(1);
cache.put(2, 1);
console.log("Get 2 ->", cache.get(2));
cache.put(3, 2);
console.log("Get 2 ->", cache.get(2));
console.log("Get 3 ->", cache.get(3));
