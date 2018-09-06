# 280. Wiggle Sort (Medium)

Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

### Example:
```
Input: nums = [3,5,2,1,6,4]
Output: One possible answer is [3,5,1,6,2,4]
```

## Solution
The comparison function for sorting is increasing on even position and decreasing on odd position, and it doesn't have index information, which means we can't do that by hacking comparator in quick/merge sort to achieve O(logN).

Then we think about a greedy strategy, given an subarray already sorted, when adding a new element, we only need consider two cases:
- The previous subarray is odd length and new item too small
- The previous subarray is even length and new item too large

where we will simply swap the last of previous subarray and the new element introduced. Time complexity of O(N) and O(1) time complexity.

#MSFT #GOOGL #FB #Akuna Capital

#Array #Sort

#Similar questions [#280m](../p280m/README.md) [#324m](../p324m/README.md)
