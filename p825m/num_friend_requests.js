/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    const ageCount = Array.from({length:121}, v => 0);
    for (let age of ages) {
        ageCount[age] ++;
    }
    let ans = 0;
    for (let a = 15; a <= 120; ++a) {
        if (ageCount[a] === 0) { continue; }
        for (let b = ~~(0.5 * a + 7) + 1; b < a; ++b) {
            ans += ageCount[b] * ageCount[a];
        }
        ans += ageCount[a] * (ageCount[a] - 1);
    }
    return ans;
};
// TEST
[
    [16,16],
    [16,17,18],
    [20,30,100,110,120],
].forEach(t => {
    console.log("Friend requests in", t, "->", numFriendRequests(t));
});