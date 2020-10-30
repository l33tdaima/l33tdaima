/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosestTwoPasses = function (seats) {
  const N = seats.length;
  const dist = Array.from({ length: N }, (v) => Number.MAX_SAFE_INTEGER);
  let closestOne = null;
  for (let i = 0; i < N; ++i) {
    if (seats[i] === 1) closestOne = i;
    else if (closestOne) dist[i] = i - closestOne;
  }
  let ans = Number.MIN_SAFE_INTEGER;
  closestOne = null;
  for (let i = N - 1; i >= 0; --i) {
    if (seats[i] === 1) closestOne = i;
    else {
      if (closestOne) dist[i] = Math.min(dist[i], closestOne - i);
      if (dist[i]) ans = Math.max(ans, dist[i]);
    }
  }
  return ans;
};
var maxDistToClosestOnePass = function (seats) {
  let [l, r, ans] = [-1, 0, 0];
  for (; r < seats.length; ++r) {
    if (seats[r] === 1) {
      if (l < 0) ans = Math.max(ans, r);
      else ans = Math.max(ans, ~~((r - l) / 2));
      l = r;
    }
  }
  return Math.max(ans, seats.length - l - 1);
};

// TESTS
[
  { seats: [0, 1], expected: 1 },
  { seats: [1, 0, 0, 0, 1, 0, 1], expected: 2 },
  { seats: [1, 0, 0, 0], expected: 3 },
  { seats: [0, 1, 1, 0, 0, 0, 1, 0, 0, 0], expected: 3 },
].forEach(({ seats, expected }) => {
  const actual = maxDistToClosestOnePass(seats);
  console.log('Max distance to closest person of', seats, '->', actual);
  console.assert(actual === expected);
});
