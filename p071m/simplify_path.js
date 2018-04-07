/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    for (let dir of path.split("/")) {
        if (dir === "" || dir === ".") {
            continue;
        } else if (dir === "..") {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(dir);
        }
    }
    // console.log(stack);
    return (stack.length === 0)? "/" :
            stack.reduce((path, dir) => (path + "/" + dir), "");
};
// TEST
[
    "",
    "/",
    "/a/b",
    "/home/",
    "/a/./b/../../c/",
    "/../",
    "/home//foo/",
].forEach(t => {
    console.log("Simplified path of", t, "->",
                simplifyPath(t));
});
