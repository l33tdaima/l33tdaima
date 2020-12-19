# 334. Increasing Triplet Subsequence (Medium)

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

### Example 1:

```
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
```

### Example 2:

```
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
```

### Example 3:

```
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
```

## Solution

### Intuitive Approach

Solve the longest increasing subsequence problem like [#300m](../p300m/README.md) in O(N^2) to figure out the LIS length, check if it is greater than or equal to 3.

### Optimal Approach

Since we only need to judge if we have increasing subsequence of 3, we can maintain two variables of min and 2nd min and look for the third one to return true, otherwise false.

t1 := so far the best candidate of end element of a one-cell subsequence to form a triplet subsequence

t2 := so far the best candidate of end element of a two-cell subsequence to form a triplet subsequence

So t1 and t2 are the perfect summary of history.

#FB

#Array #Dynamic Programming

#Similar question [#300m](../p300m/README.md)
