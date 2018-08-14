/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    if (preorder.length === 0) { return true; }
    let lowerBound = Number.MIN_SAFE_INTEGER;
    let stack = [preorder[0]];
    for (let i = 1; i < preorder.length; ++i) {
        if (preorder[i] < lowerBound) {
            return false;
        }
        while (stack[stack.length - 1] < preorder[i]) {
            lowerBound = stack.pop();
        }
        stack.push(preorder[i]);
    }
    return true;
};
var verifyPreorderV2 = function(preorder) {
    if (preorder.length === 0) { return true; }
    let lowerBound = Number.MIN_SAFE_INTEGER;
    let top = -1;
    for (let n of preorder) {
        if (n < lowerBound) { return false; }
        while (top > 0 && preorder[top] < n) {
            lowerBound = preorder[top--];
        }
        preorder[++top] = n;
    }
    return true;
};
// TEST
[
    [[], true],
    [[2], true],
    [[2,1], true],
    [[2,3], true],
    [[2,1,3], true],
    [[5,2,3,1], false],
    [[5,2,6,1,3], false],
    [[5,2,1,3,6], true],
].forEach(t => {
    let act = verifyPreorder(t[0]);
    console.log("Verify preorder BST", t[0], "->", act);
    console.assert(act === t[1]);
    console.assert(verifyPreorderV2(t[0]) === t[1]);
});
