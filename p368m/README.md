# 368. Largest Divisible Subset (Medium)

Given a set of *distinct* positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

```
Si % Sj = 0 or Sj % Si = 0.
```

If there are multiple solutions, return any subset is fine.

### Example 1:
```
Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
```

### Example 2:
```
Input: [1,2,4,8]
Output: [1,2,4,8]
```

## Solution
This problem is a little similar to LIS problem in the sense you need to scan all the previous DP states, O(n^2).

Define the DP state `LDS'[n]` as the longest length and `prev[n]` the index of previous element of divisible subset for S[0..i] and must include `Si` in the set.
```
LDS'[n] = max(LDS'[i]) + 1, 0 <= i < n, nums[n] % nums[i] == 0
```

#Math #Dynamic Programming

#Similar question [#300](../p300m/README.md) [#368](../p368m/README.md)
