/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let count = tasks.length;
    let taskCountMap = Array.from({length: 26}, v => 0);
    for (let i = 0; i < count; ++i) {
        taskCountMap[tasks[i].charCodeAt(0) - 65] ++;
    }
    // sort decending by occurence count
    taskCountMap.sort((a, b) => b - a);
    
    // calculate number of idles to cool CPU
    let numIdle = 0, numSubs = 0;
    let maxOccurs = taskCountMap[0];
    let n1 = Math.min(n, 25);
    for (let i = 1; i <= n1; ++i) {
        if (taskCountMap[i] < maxOccurs) {
            numIdle += maxOccurs - 1 - taskCountMap[i];
        }
    }
    if (n > 25) {
        numIdle += (n-25) * (maxOccurs - 1);
    }
    for (let i = n1 + 1; i <= 25; ++i) {
        numSubs += taskCountMap[i];
    }
    return count + Math.max(numIdle - numSubs, 0);
};
// TEST
[
    [[], 3],
    [["A","A","A","B","B","B"], 2],
    [["A","A","A","B","B","B","A","C","D"], 3],
    [["A","A","A","B","B","B"], 50],
    [["A","A","A","A","A","A","B","C","D","E","F","G"], 2],
    [["A","A","A","A","A","A","B","C","D","E","F","G"], 7],
].forEach(test => {
    console.log("Least intervals to schedule tasks", test[0],
                "with", test[1], "cooling intervals ->",
                leastInterval(test[0], test[1]));
});
