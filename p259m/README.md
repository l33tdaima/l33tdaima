# 259. 3Sum Smaller (Medium)

Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

### Example:
```
Input: nums = [-2,0,1,3], and target = 2
Output: 2 
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
```

Follow up: Could you solve it in O(n^2) runtime?

## Solution
The intuitive approach is three loops, O(n^3).

To acheive O(n^2) complexity,
- Sort the array
- For each fixed element `i in [0, len-2)`
  - Iterate from both end at the same time in inner loop
  - if 3sum less than `target`: accumulate the count by `hi - lo`, `lo++`
  - else `hi --`

#FB

#Array #Two Pointers

#Similar questions [#015m](../p015m/README.md) [#259m](../p259m/README.md)
