# 33. Search in Rotated Sorted Array (Medium)

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0 1 2 4 5 6 7] might become [4 5 6 7 0 1 2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

### Example 1:
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```
### Example 2:
```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

## Solution
Need to revise the standard binary search. 

Between the part before mid and after mid point, there must be one side is sorted, the other side is rotated,
- if nums[lo] < nums[mid]: [lo .. mid) is sorted, (mid .. hi] is rotated
  - target falls into [lo .. mid]: hi = mid - 1
  - otherwise: lo = mid + 1
- if nums[mid] < nums[hi]: [lo .. mid) is rotated, (mid .. hi] is sorted
  - target falls into [mid .. hi]: lo = mid + 1
  - otherwise: hi = mid - 1

#FB #MSFT #BBG #UBER #LNKD

#Array #Binary Search

#Similar questions [#33](../p033m/README.md) [#81](../p081m/README.md) [#153](../p153m/README.md)

#Explore Facebook
