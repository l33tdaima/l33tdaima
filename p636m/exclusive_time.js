/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let ans = Array.from({length: n}, v => 0);
    let funcIdStack = [];
    let prevTime = 0; // This is an assumption on the log data
    for (let l of logs) {
        let rec = l.split(":");
        let currTime = parseInt(rec[2]);
        if (rec[1] === "start") {
            let slen = funcIdStack.length;
            if (slen > 0) {
                ans[funcIdStack[slen - 1]] += currTime - prevTime;
            }
            funcIdStack.push(rec[0]);
            prevTime = currTime;
        } else { // "end":
            console.assert(rec[1] === "end");
            ans[rec[0]] += currTime - prevTime + 1;
            prevTime = currTime + 1;
            funcIdStack.pop();
        }
    }
    return ans;
};
// TEST
[
    {
        n: 2,
        logs:
        ["0:start:0",
        "1:start:2",
        "1:end:5",
        "0:end:6"]
    },
].forEach(t => {
    console.log("Exclusive time for", t.n, "functions",
                t.logs, "->\n",
                exclusiveTime(t.n, t.logs));
});
