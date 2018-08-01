# 283. Move Zeroes (Easy)

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

## Solution
Maintain a moving index of last non-zero and copy non-zero item into it. Then set the rest to zeroes.

#FB #BBG

#Array #Two Pointers

#Similar questions [#027e](../p027e/README.md) [#283e](../p283e/README.md)
