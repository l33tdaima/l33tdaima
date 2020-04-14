# 525. Contiguous Array (Medium)

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

### Example 1:
```
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
```
### Example 2:
```
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```
*Note:* The length of the given binary array will not exceed 50,000.

## Solution
### Intuitive Approach O(N^2)
- Enumrate every possible subarrays, `start = [0 .. len-1], end = [start + 1 .. len-1]`.
- For each subarray count zeros and ones to check if qualified, and if so, contribute to the global maxLen.
- O(N^2)

### Optimal Apporach O(N)
Since we only have `0` and `1` in the array, instead of counting them in two variables, we count in one variable, +1 for `1` and -1 for `0`, this count at `i` means the difference of `0` and `1` in the range `[0, i]`. Loop from start to end, if we see a count again, this indicates `0`s and `1`s between this index `i` and last index `j` even out, the subarray [j + 1, i] is a candidate. The len is `i - j`. Hence we just remember when the first time a count is seen, a map of `(count, index)`.
- Iterate array with empty map, compute count
  - If count found in the map, maxLen = max(maxLen, curr - first)
  - If count not found in the map, add (count, index) into map
```
[0, 1, 0, 0, 1]
Index 0: count = -1, map = [(-1, 0)]
Index 1: count = 0, map = [(-1, 0), (0, 1)]
Index 2: count = -1, map = [(-1, 0), (0, 1)], maxLen = 2 - 0 = 2
Index 3: count = -2, map = [(-1, 0), (0, 1), (-2, 3)]
Index 4: count = -1, map = [(-1, 0), (0, 1), (-2, 3)], maxLen = 4 - 0 = 4
```

#FB

#Hash Table

#Similar questions [#325m](../p325m/README.md) [#525m](../p525m/README.md)
