# 462. Minimum Moves to Equal Array Elements II (Medium)

Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

You may assume the array's length is at most 10,000.

### Example:
```
Input:
[1,2,3]

Output:
2

Explanation:
Only two moves are needed (remember each move increments or decrements one element):

[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
```

## Solution
Sort the array, the moves is minimized when all elements are moved to the median `m`. To compute the sum of moves, we can iterate from two ends towards the median element, `sum += nums[r] - k + k - nums[l]`.

#Math

#Similar questions [#453](../p453e/README.md) [#462m](../p462m/README.md)
