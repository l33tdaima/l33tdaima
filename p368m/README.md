# 368. Largest Divisible Subset (Medium)

Given a set of _distinct_ positive integers `nums`, return the largest subset answer such that every pair `(answer[i], answer[j])` of elements in this subset satisfies:

- `answer[i] % answer[j] == 0`, or
- `answer[j] % answer[i] == 0`

If there are multiple solutions, return any of them.

### Example 1:

```
Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
```

### Example 2:

```
Input: [1,2,4,8]
Output: [1,2,4,8]
```

### Constraints:

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 \* 10^9`
- All the integers in nums are unique.

## Solution

This problem is a little similar to LIS problem in the sense you need to scan all the previous DP states, O(n^2).

Define the DP state `LDS'[n]` as the longest length and `prev[n]` the index of previous element of divisible subset for S[0..i] and must include `Si` in the set.

```
LDS'[n] = max(LDS'[i]) + 1, 0 <= i < n, nums[n] % nums[i] == 0
```

#Math #Dynamic Programming

#Similar question [#300](../p300m/README.md) [#368](../p368m/README.md)
