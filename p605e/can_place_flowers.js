/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    console.assert(n <= flowerbed.length);
    if ((n === 0) || (flowerbed.length === 1 && flowerbed[0] === 0)) { return true; }
    let pc = 0;
    for (let i = 0, len = flowerbed.length; i < len; ++i) {
        if (flowerbed[i] === 1) { continue; }
        if ((i === 0 && flowerbed[i + 1] === 0) ||
            (i === len - 1 && flowerbed[i - 1] === 0) ||
            (flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0)) {
            flowerbed[i] = 1;
            if (++pc >= n) { return true };
        }
    }
    return false;
};
// TEST
[
    [[0], 1],
    [[0, 0], 1],
    [[1,0,1], 1],
    [[1,0,0,0,1], 1],
    [[1,0,0,0,1], 2],
].forEach(function (test) {
    console.log("Can place", test[1], "flowers in", test[0], "?");
    console.log("->", canPlaceFlowers(test[0], test[1]), test[0]);
});
