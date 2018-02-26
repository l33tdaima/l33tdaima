/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPathV1 = function(input) {
    let fileList = input.split('\n');
    let fileListLen = fileList.length;
    let longestPath = 0;
    /**
     * @param {number} currIndex: the current index in the list
     * @param {number} currLen: the current path length
     * @param {number} depth: the depth of file tree
     * @return {number} position searched up to
     */
    let recCountPathLength = function(startIndex, currLen, expectedDepth) {
        let i = startIndex;
        while (i < fileListLen) {
            // find non-tab position
            let pos = -1;
            while (fileList[i].charAt(pos + 1) === '\t') { pos ++; }
            if (pos < expectedDepth) { return i; }
            // if root level pos = -1, it is full length
            newLen = currLen + fileList[i].length - (pos + 1);
            if (fileList[i].lastIndexOf('.') >= 0) {
                longestPath = Math.max(longestPath, newLen);
            }
            i = recCountPathLength(i + 1, newLen + 1, expectedDepth + 1);
        }
    };
    recCountPathLength(0, 0, -1);
    return longestPath;
};

var lengthLongestPathV2 = function(input) {
    let longestPath = 0;
    let stack = [0];
    let fileList = input.split('\n');
    for (let i = 0, len = fileList.length; i < len; ++i) {
        // find non-tab position
        let pos = -1;
        while (fileList[i].charAt(pos + 1) === '\t') { pos ++; }
        let level = pos + 1;
        while (level + 1 < stack.length) { stack.pop(); }
        let newLen = stack[stack.length - 1] + fileList[i].length - level + 1;
        stack.push(newLen);
        if (fileList[i].lastIndexOf('.') >= 0) {
            longestPath = Math.max(longestPath, newLen - 1);
        }
    }
    return longestPath;
};
// TEST
[
    "a",
    "aa\n\tbbb",
    "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext",
    "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext\naaaaaaaaaaaaaaaaaaaaa\n\tsth.png",
    "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext",
].forEach(test => {
    console.log("Longest absolute file path length", 
                "->", lengthLongestPathV1(test));
    console.assert(lengthLongestPathV1(test) === lengthLongestPathV2(test));
});
