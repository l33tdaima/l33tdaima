# 307. Range Sum Query - Mutable (Medium)

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.

### Example:
```
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
```

### Note:
- The array is only modifiable by the update function.
- You may assume the number of calls to update and sumRange function is distributed evenly.

## Solution
Classic application of Binary Indexed Tree/Fenwick Tree. Note that binary indexed tree works on 1-based index instead of 0-based.

#Binary Indexed Tree #Segment Tree