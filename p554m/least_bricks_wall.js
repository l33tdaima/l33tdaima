/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const ht = new Map(); // <edgePos, edgeCount>
    let maxEdges = 0;
    for (let row = 0; row < wall.length; ++row) {
        let pos = 0;
        for (let b = 0; b < wall[row].length - 1; ++b) {
            pos += wall[row][b];
            let entry = ht.get(pos);
            if (entry) {
                ht.set(pos, entry + 1);
                maxEdges = Math.max(maxEdges, entry + 1);
            } else {
                ht.set(pos, 1);
                maxEdges = Math.max(maxEdges, 1);
            }
        }
        // console.log(ht, maxEdges);
    }
    return (wall.length - maxEdges);
};
// TEST
[
    [ [3], [3], [3]],
    [
        [1, 2, 2, 1],
        [3, 1, 2],
        [1, 3, 2],
        [2, 4],
        [3, 1, 2],
        [1, 3, 1, 1]
    ]
].forEach(t => {
    console.log("Least number of crossed bricks ->",
                leastBricks(t));
});
