/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Convert the input edges into a graph
    const graph = (function makeGraph() {
        let graph = Array.from({length: numCourses}, v => []);
        for (let e of prerequisites) {
            graph[e[0]].push(e[1]);
        }
        return graph;
    })();
    // console.log(graph);
    let recHasCycleDFS = function(v, visited, onPath) {
        if (visited[v]) { return false; }
        visited[v] = true; onPath[v] = true;
        for (let j of graph[v]) {
            if (onPath[j] || recHasCycleDFS(j, visited, onPath)) {
                return true;
            }
        }
        onPath[v] = false;
        return false;
    };
    let visited = Array.from({length: numCourses}, v => false);
    let onPath = Array.from(visited);
    for (let i = 0; i < numCourses; ++i) {
        if (!visited[i] && recHasCycleDFS(i, visited, onPath)) {
            return false;
        }
    }
    return true;
};
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
    console.log("Can finish", t.numCourses, "courses depicted by", t.prerequisites,
                "->", canFinish(t.numCourses, t.prerequisites));
});