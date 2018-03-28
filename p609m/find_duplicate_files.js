/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
    const map = new Map();
    for (let path of paths) {
        let tokens = path.split(" ");
        for (let i = tokens.length - 1; i >= 1; --i) {
            let match = tokens[i].match(/(\w+.txt)\((\w+)\)/);
            // console.log(match);
            let val = map.get(match[2]); // match[2] is file content in parenthesis
            let fp = tokens[0] + "/" + match[1];
            if (val) {
                val.push(fp);
            } else {
                val = [fp];
            }
            map.set(match[2], val);
        }
    }
    let ans = [];
    map.forEach(v => { if (v.length > 1) ans.push(v); });
    return ans;
};
// TEST
[
    [],
    ["root/c 3.txt(abcd)"],
    ["root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)"],
    ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"],
].forEach(t => {
    console.log("Grouping by duplicates ->\n",
                findDuplicate(t));
});
