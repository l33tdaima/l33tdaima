/**
 * Definition for undirected graph.
 */
function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    let seen = new Map();
    let recClone = function (node) {
        if (graph === null) { return null; }
        if (seen.has(node.label)) {
            return seen.get(node.label);
        }
        let clone = new UndirectedGraphNode(node.label);
        seen.set(node.label, clone);
        for (let n of node.neighbors) {
            clone.neighbors.push(recClone(n));
        }
        return clone;
    }
    return recClone(graph);
};

// TEST
let n2 = new UndirectedGraphNode(2);
n2.neighbors.push(n2);
let n1 = new UndirectedGraphNode(1);
n1.neighbors.push(n2);
let n0 = new UndirectedGraphNode(0);
n0.neighbors.push(n1);
n0.neighbors.push(n2);
console.log("Original graph n0:", n0.neighbors);
let n0prime = cloneGraph(n0);
console.log("Clone graph n0prime:", n0prime.neighbors);
