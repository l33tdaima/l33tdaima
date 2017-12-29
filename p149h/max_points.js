/**
 * Definition for a point.
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}
function gcd(a, b) {
    if (b === 0) { return a; }
    return gcd(b, a % b);
}
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let len = points.length;
    if (len === 0) { return 0; }
    if (len === 1) { return 1; }
    let maxPt = 0;
    for (let i = 0; i < len - 1; ++i) {
        let maxLines = 0;
        let dup = 0;
        let map = new Map();
        for (let j = i + 1; j < len; ++j) {
            // distances of each coordinate
            let dx = points[j].x - points[i].x;
            let dy = points[j].y - points[i].y;
            // count the duplicates
            if (dx === 0 && dy === 0) {
                dup ++;
                continue;
            }
            let d = gcd(dx, dy);
            dx /= d; dy /= d;
            let key = dx.toString() + dy.toString();
            let count = 0;
            if (map.has(key)) {
                count = map.get(key);
            }
            count ++;
            map.set(key, count);
            maxLines = Math.max(maxLines, count);
        }
        maxPt = Math.max(maxPt, maxLines + dup + 1);
        // console.log("DEBUG: map =", map);
    }
    return maxPt;
};
// TEST
[[
],[
    [0,0],
],[
    [0,0],[1,1]
],[
    [0,0],[1,1],[2,2]
],[
    [0,0],[1,1],[1,1],[2,3]
]
].forEach(function (test) {
    let points = [];
    for (let t of test) {
        points.push(new Point(t[0],t[1]));
    }
    console.log("Max points in", points, "->", maxPoints(points));
});
