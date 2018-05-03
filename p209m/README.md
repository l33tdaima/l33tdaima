# 209. Minimum Size Subarray Sum (Medium)

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

## Solution
Maintain a sliding window, 
- Adding more items from tail will have a chance making sum >= target, hence
  ```
  while (sum < target) tail ++;
  ```
- Then we need to removing items from head to make sure the length is miminal, hence 
  ```
  while (sum >= target) head --;
  ```
- Repeat these two steps until the end

#FB

#Array #Two Pointers #Binary Search

#Similar question [#209m](../p209m/README.md) [#325m](../p325m/README.md)
