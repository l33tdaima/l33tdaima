/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramUnicode = function (s, t) {
  let sArray = s.split('');
  sArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  let tArray = t.split('');
  tArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  return sArray.join('') === tArray.join('');
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let signature = Array.from({ length: 26 }, (v) => 0);
  for (let i = 0; i < s.length; ++i) {
    signature[s.charCodeAt(i) - 97]++;
    signature[t.charCodeAt(i) - 97]--;
  }
  for (let i = 0; i < 26; ++i) {
    if (signature[i] !== 0) return false;
  }
  return true;
};

// TEST
[
  ['rat', 'cat', false],
  ['eat', 'tea', true],
  ['anagram', 'nagaram', true],
  ['成功', '功成', true],
  ['成功', '功夫', false],
].forEach(([s, t, expected]) => {
  const actual = isAnagramUnicode(s, t);
  console.log('Are', s, 'and', t, 'unicode anagram? ->', actual);
  console.assert(actual === expected);
});
