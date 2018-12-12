/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectV1 = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
};
var intersectV2 = function(nums1, nums2) {
  let map = new Map();
  for (let n of nums1) {
    let v = map.get(n) || 0;
    map.set(n, v + 1);
  }
  let ans = [];
  for (let n of nums2) {
    let v = map.get(n) || 0;
    if (--v >= 0) {
      ans.push(n);
      map.set(n, v);
    }
  }
  return ans;
};
// This is fastest solution
var intersectV3 = function(nums1, nums2) {
  // track how often each number occurs in first list
  let store = nums1.reduce((obj, n) => {
    obj[n] = obj[n] + 1 || 1;
    return obj;
  }, {});
  // filter out numbers from second list based on
  // how often they occurred in the first list
  return nums2.filter(n => {
    if (store[n]) {
      store[n]--;
      return true;
    } else {
      return false;
    }
  });
};
// TESTS
[
  {
    nums1: [1, 2, 2, 1],
    nums2: [2, 2]
  },
  {
    nums1: [4, 9, 5],
    nums2: [9, 4, 9, 8, 4]
  }
].forEach(t => {
  let actual = intersectV3(t.nums1, t.nums2);
  console.log("Intersect of", t.nums1, t.nums2, "->", actual);
});
