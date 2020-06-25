/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // G(n): the number of unique BST for a sequence of length n.
  const G = new Array(n + 1);
  G[0] = G[1] = 1;
  // let denote the number of unique BST when i (in [1..n]) is the root
  // by F(i,n), * is Cartisian product, then
  // F(i,n) = G(i-1) * G(n-i)
  // G(n) = F(1,n) + F(2,n) + ... + F(n,n)
  //      = G(0)*G(n-1) + G(1)*G(n-2) + ... + G(n-1)*G(0)
  for (let k = 2; k <= n; ++k) {
    G[k] = 0;
    for (let i = 0; i <= k - 1; ++i) {
      G[k] += G[i] * G[k - 1 - i];
    }
  }
  return G[n];
};

[
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 5],
  [4, 14],
  [5, 42],
  [6, 132],
].forEach((t) => {
  const actual = numTrees(t[0]);
  console.log('# of unique BSTs storing values up to', t[0], '->', actual);
  console.assert(actual == t[1]);
});
