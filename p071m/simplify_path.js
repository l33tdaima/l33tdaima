/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  for (let dir of path.split('/')) {
    if (dir === '' || dir === '.') {
      continue;
    } else if (dir === '..') {
      if (stack) stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return '/' + stack.join('/');
};
// TEST
[
  ['', '/'],
  ['/', '/'],
  ['/a/b', '/a/b'],
  ['/home/', '/home'],
  ['/../', '/'],
  ['/home//foo/', '/home/foo'],
  ['/a/./b/../../c/', '/c'],
].forEach(([path, expected]) => {
  const actual = simplifyPath(path);
  console.log('Simplified canonical path of', path, '->', actual);
  console.assert(actual === expected);
});
