/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    if (graph.length === 0) { return true; }
    let belongTo = Array.from({length: graph.length});
    // indicate which group, T or F a node belongs to
    // if undefined means not visited yet
    for (let n in graph) {
        if (belongTo[n] !== undefined) { continue; }
        // BFS traverse
        belongTo[n] = true;
        let bfsQueue = [n];
        while (bfsQueue.length > 0) {
            let i = bfsQueue.shift();
            let expected = !belongTo[i];
            for (let j of graph[i]) {
                if (belongTo[j] !== undefined) { // visited
                    if (belongTo[j] !== expected) { return false; }
                } else {
                    bfsQueue.push(j);
                    belongTo[j] = expected;
                }
            }
        }
    }
    return true;
};
// TEST
[
    [[[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]], false],
    [[[3],[2,4],[1],[0,4],[1,3]], true],
    [[[1],[0,3],[3],[1,2]], true],
    [[], true],
    [[[1], [0]], true],
    [[[1,2], [0], [0]], true],
    [[[1,2], [0,2], [0,1]], false],
    [[[1,3], [0,2], [1,3], [0,2]], true],
    [[[1,2,3], [0,2], [0,1,3], [0,2]], false],
].forEach(t => {
    console.log("Is", t[0], "bipartite? ->", t[1]);
    console.assert(isBipartite(t[0]) === t[1]);
});
