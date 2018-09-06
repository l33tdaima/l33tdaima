# 324. Wiggle Sort II (Medium)

Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

### Example 1:
```
Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].
```
### Example 2:
```
Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].
```

### Note:
You may assume all input has valid answer.

### Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?

## Solution
The idea is the following,
1. partition the numbers into two partitions, S where s <= median and L where l >= median.
2. The tricky part is the duplicate medians, in order to spread them, we place the numbers in a way like
  - Smaller numbers on even indices 0, 2, 4, ..., increasingly, with medians at the end,
  - Larger numbers on odd indices 1, 3, 5 ..., increasing, with medians in the beginning.
  ```
  Small half:    4 . 3 . 2 . 1 . 0 .
  Large half:    . 9 . 8 . 7 . 6 . 5
  ----------------------------------
  Together:      4 9 3 8 2 7 1 6 0 5
  ```

As long as inputs are valid, this will yield a wiggle sorted result.

The simple implementation is using sort of O(NlogN) in time and O(N) in space.

To achieve O(N) time and O(1), we can find kthSmallestNumber in O(N), then do some index mapping.

#GOOGL

#Sort

#Similar questions [#280m](../p280m/README.md) [#324m](../p324m/README.md)
