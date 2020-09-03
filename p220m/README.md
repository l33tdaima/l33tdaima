# 220. Contains Duplicate III (Medium)

Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

### Example 1:
```
Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
```

### Example 2:
```
Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
```

### Example 3:
```
Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
```

## Solution
### Intuitive Approach
For each element i, search backward for k steps, see if the difference `nums[i] - nums[j] <= t`, return if found. Time complexity of O(n * k).

### Improvement
To speed up the linear search O(2k) for each element, we can sort the sliding window in a BST and check the difference.
- Initialize an empty set
- Loop through the array, for each element x
  - Find the successor value of x, g, return true if g - x <= t
  - Find the predecessor value of x, s, return true if x - s <= t
  - Add x into set.
- return false

### Optimal Approach
The idea is like the bucket sort algorithm. Suppose we have consecutive buckets covering the range of nums with each bucket a width of (t+1).
If there are two items with difference <= t, one of the two cases will happen:
- the two are in the same bucket
- the two are in neighbor buckets

#Sort #Ordered Map

#MSFT

#Similar questions [#217](../p217e/README.md) [#219](../p219e/README.md) [#220](../p220m/README.md)
