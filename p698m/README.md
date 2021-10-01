# 698. Partition to K Equal Sum Subsets (Medium)

Given an integer array `nums` and a positive integer `k`, return true if it is possible to divide this array into `k` non-empty subsets whose sums are all equal.

### Example 1:

```
Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
```

### Example 2:

```
Input: nums = [1,2,3,4], k = 3
Output: false
```

### Constraints:

- `1 <= k <= nums.length <= 16`
- `1 <= nums[i] <= 10^4`
- The frequency of each element is in the range `[1, 4]`.

## Solution

Assume sum is the sum of nums[]. The backtracing process is to find a subset of nums[] whose sum is equal to sum/k. sum % k !== 0 can have a partition for sure. A flag array need to store whether an element has contributed to sum or not.

#LNKD

#Backtracking

#Similar questions [#473](../p473m/README.md) [#698](../p698m/README.md)
