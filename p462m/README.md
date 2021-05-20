# 462. Minimum Moves to Equal Array Elements II (Medium)

Given an integer array nums of size `n`, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

### Example 1:

```
Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
```

### Example 2:

```
Input: nums = [1,10,2,9]
Output: 16
```

### Constraints:

- n == nums.length
- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

## Solution

Sort the array, the moves is minimized when all elements are moved to the median `m`. To compute the sum of moves, we can iterate from two ends towards the median element, `sum += nums[r] - k + k - nums[l]`.

#Math

#Similar questions [#453](../p453e/README.md) [#462m](../p462m/README.md)
