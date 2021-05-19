/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const map = new Map();
  for (let path of paths) {
    let tokens = path.split(' ');
    for (let i = 1; i < tokens.length; ++i) {
      let match = tokens[i].match(/(\w+.txt)\((\w+)\)/);
      let dup = map.get(match[2]) || [];
      dup.push(tokens[0] + '/' + match[1]);
      map.set(match[2], dup);
    }
  }
  let ans = [];
  map.forEach((v) => {
    if (v.length > 1) ans.push(v);
  });
  return ans;
};
// TEST
[
  [[], []],
  [['root/c 3.txt(abcd)'], []],
  [['root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)'], []],
  [
    [
      'root/a 1.txt(abcd) 2.txt(efgh)',
      'root/c 3.txt(abcd)',
      'root/c/d 4.txt(efgh)',
      'root 4.txt(efgh)',
    ],
    [
      ['root/a/1.txt', 'root/c/3.txt'],
      ['root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt'],
    ],
  ],
  [
    [
      'root/a 1.txt(abcd) 2.txt(efgh)',
      'root/c 3.txt(abcd)',
      'root/c/d 4.txt(efgh)',
    ],
    [
      ['root/a/2.txt', 'root/c/d/4.txt'],
      ['root/a/1.txt', 'root/c/3.txt'],
    ],
  ],
].forEach(([paths, expected]) => {
  const actual = findDuplicate(paths);
  console.log('Grouping by duplicates ->\n', actual);
  console.assert(actual.toString() === expected.toString());
});
