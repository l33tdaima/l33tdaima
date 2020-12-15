/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // Palindrome check
  const isPalindrome = function (s) {
    for (let l = 0, r = s.length - 1; l < r; ++l, --r) {
      if (s[l] !== s[r]) return false;
    }
    return true;
  };

  const ans = [];
  const dfs = function (s, path) {
    if (!s) {
      ans.push(Array.from(path));
      return;
    }

    for (let i = 1; i <= s.length; ++i) {
      if (isPalindrome(s.substring(0, i))) {
        path.push(s.substring(0, i));
        dfs(s.substring(i), path);
        path.pop();
      }
    }
    return ans;
  };

  dfs(s, []);
  return ans;
};

// TESTS
[
  [
    'aab',
    [
      ['a', 'a', 'b'],
      ['aa', 'b'],
    ],
  ],
  ['a', [['a']]],
].forEach(([s, expected]) => {
  const actual = partition(s);
  console.log('All possible palindrome partitioning of', s, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
