/**
 * UnionFind of a 2D grid constructor
 * @param {number} m
 * @param {number} n
 */
var UnionFindGrid = function (m, n) {
    this.m = m;
    this.n = n;
    this.rootId = Array.from({length: m * n}, (v) => -1); // water
    this.sz     = Array.from({length: m * n}, (v) => 0);
    // number of elements in each tree
};
/**
 * Private method of returning the root of index i,
 * with path compression
 * @param {number} index in rootId array
 * @return {number} location of root point
 */
UnionFindGrid.prototype.root = function (i) {
    let id = i;
    if (this.rootId[id] === -1) {
        return id;
    }
    while (this.rootId[id] !== id) {
        // path compression
        this.rootId[id] = this.rootId[this.rootId[id]];
        id = this.rootId[id];
    }
    return id;
};
/**
 * Add a island point to grid
 * @param {number[]} 2D coord of point to be added
 * @return id of union find set
 */
UnionFindGrid.prototype.add = function (p) {
    let i = p[0] * this.n + p[1];
    this.rootId[i] = i;
    this.sz[i] = 1;
    return i;
};
/**
 * Is this point filled by land
 * @param {number[]} 2D coord of point
 * @return boolean
 */
UnionFindGrid.prototype.filled = function (p) {
    if (p[0] < 0 || p[0] >= this.m || p[1] < 0 || p[1] >= this.n) {
        return false;
    }
    let id = p[0] * this.n + p[1];
    return this.rootId[id] !== -1;
};
/**
 * Quick-find if p and q are connected
 * @param {number[]} 2D coord of point p
 * @param {number[]} 2D coord of point q
 * @return {bool} connected or not
 */
UnionFindGrid.prototype.find = function (p, q) {
    return this.root(p[0] * this.n + p[1]) === 
           this.root(q[0] * this.n + q[1]);
};
/**
 * Weighted quick-unite point p and q
 * @param {number[]} 2D coord of point p 
 * @param {number[]} 2D coord of point q 
 */
UnionFindGrid.prototype.unite = function (p, q) {
    let rootp = this.root(p[0] * this.n + p[1]);
    if (this.rootId[rootp] === -1) { return; }
    let rootq = this.root(q[0] * this.n + q[1]);
    if (this.rootId[rootq] === -1) { return; }

    if (this.sz[rootp] < this.sz[rootq]) {
        this.rootId[rootp] = rootq;
        this.sz[rootq] += this.sz[rootp];
    } else {
        this.rootId[rootq] = rootp;
        this.sz[rootp] += this.sz[rootq];
    }
};
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
const direction = [ [-1, 0], [0, -1], [1, 0], [0, 1] ];
var numIslands2 = function(m, n, positions) {
    let res = [];
    if (m <= 0 || m <= 0) { return res; }

    let ufGrid = new UnionFindGrid(m, n);
    let count = 0; // rolling count of islands
    for (let p = 0, plen = positions.length; p < plen; ++p) {
        ufGrid.add(positions[p]); // fill the island
        count ++;
        // check the 4 neighbor cells
        for (let d = 0; d < 4; ++d) {
            let nb = Array.from(positions[p]);
            nb[0] += direction[d][0];
            nb[1] += direction[d][1];
            // neighbor is a land and not connected before
            if (ufGrid.filled(nb) && !ufGrid.find(positions[p], nb)) {
                ufGrid.unite(positions[p], nb);
                count --;
            }
        }
        res.push(count);
    }
    return res;
};
// TEST
// Unit test
let uf = new UnionFindGrid(2, 2);
uf.add([0,0]);
uf.add([1,0]);
uf.unite([0,0], [1,0]);
console.assert(uf.find([0,0], [0,1]) === false);
console.assert(uf.find([0,0], [1,0]) === true);
uf.unite([0,0], [1,1]); // invalid input

// Solution test
[{
    m: 1,
    n: 1,
    positions: [
        [0, 0]
    ]
}, {
    m: 2,
    n: 2,
    positions: [
        [0, 1],
        [1, 0],
        [1, 1],
    ]
}, {
    m: 3,
    n: 3,
    positions: [
        [0, 0],
        [0, 1],
        [1, 2],
        [2, 1],
        [1, 1],
    ]
}
].forEach(function(test) {
    console.log("---\n(", test.m, ",", test.n, "), positions", test.positions);
    console.log("# of islands ->", numIslands2(test.m, test.n, test.positions));
});
