/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // Convert the input edges into a graph
    const graph = (function makeGraph() {
        let graph = Array.from({length: numCourses}, v => []);
        for (let e of prerequisites) {
            graph[e[0]].push(e[1]);
        }
        return graph;
    })();
    // console.log(graph);
    /**
     * Conduct topological sort and check cycle
     * @return true if having cycle 
     */
    const recTopologicalSort = function(v, visited, onPath, sorted) {
        if (visited[v]) { return false; }
        visited[v] = true; onPath[v] = true;
        for (let i of graph[v]) {
            if (onPath[i] || recTopologicalSort(i, visited, onPath, sorted)) {
                return true;
            }
        }
        onPath[v] = false;
        sorted.push(v);
        return false;
    };
    let sorted = [];
    let visited = Array.from({length: numCourses}, v => false);
    let onPath = Array.from(visited);
    for (let v = 0; v < numCourses; ++v) {
        if (!visited[v] && recTopologicalSort(v, visited, onPath, sorted)) {
            return [];
        }
    }
    return sorted;
};
// TEST
// TEST
[
    {
        numCourses: 1,
        prerequisites: []
    },
    {
        numCourses: 2,
        prerequisites: [[0,1]]
    },
    {
        numCourses: 2,
        prerequisites: [[0,1],[1,0]]
    },
    {
        numCourses: 4,
        prerequisites: [[0,1],[1,2],[3,1]]
    },
    {
        numCourses: 4,
        prerequisites: [[0,1],[1,2],[2,0],[3,1]]
    },
].forEach(t => {
    console.log("Order of", t.numCourses, "courses depicted by", t.prerequisites,
                "->", findOrder(t.numCourses, t.prerequisites));
});