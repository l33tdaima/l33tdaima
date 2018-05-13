/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTreeDFS = function(n, edges) {
    console.assert(n >= 0);
    if (n === 0) { return true; }
    // Transform to adjacent list representaion
    let graph = Array.from({length: n}, v => []);
    for (let e of edges) {
        // self loop
        if (e[0] === e[1]) { return false; }
        graph[e[0]].push(e[1]);
        graph[e[1]].push(e[0]);
    } 
    // console.log(graph);
    let visited = Array.from({length: n}, v => false);
    // DFS helper function
    const recHasCycle = function(i, from) {
        if (visited[i]) { return true; }
        visited[i] = true;
        for (let j of graph[i]) {
            if (j !== from && recHasCycle(j, i)) { return true; }
        }
        return false;
    };
    if (recHasCycle(0, -1)) { return false; }
    // DFS from each node
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            return false;
        } 
    }
    return true;
};
var validTreeUF = function(n, edges) {
    let nodes = Array.from({length: n}, v => -1);
    const find = function(i) {
        if (nodes[i] === -1) { return i; }
        return find(nodes[i]);
    };
    for (let [a, b] of edges) {
        let ra = find(a);
        let rb = find(b);
        if (ra === rb) { return false; }
        nodes[rb] = ra;
    }
    // console.log(nodes);
    return (edges.length === n - 1);
};
// TEST
[
    [1, [], true],
    [2, [[0,1], [1,1]], false],
    [3, [[2,0], [2,1]], true],
    [4, [[0,1], [2,3]], false],
    [5, [[0,1], [0,2], [0,3], [1,4]], true],
    [5, [[0,1], [1,2], [2,3], [1,3], [1,4]], false],
].forEach(t => {
    let ans1 = validTreeDFS(t[0], t[1]);
    let ans2 = validTreeUF(t[0], t[1]);
    console.log("Edges", t[1], "of", t[0], "nodes graph is a tree? ->", ans1, ans2);
    console.assert(ans1 === t[2]);
    console.assert(ans2 === t[2]);
});