# 300. Longest Increasing Subsequence (Medium)

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A _subsequence_ is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

### Example 1:

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

### Example 2:

```
Input: nums = [0,1,0,3,2,3]
Output: 4
```

### Example 3:

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

### Constraints:

- 1 <= nums.length <= 2500
- -10^4 <= nums[i] <= 10^4

## Solution

### Brutal Force Approach

Over all the combinations of elements of array, each element could contribute the longest increasing subsequence, like 0-1 Knapsack problem, we need to search 2^N space.

### Dynamic Programming O(N^2)

We can do bottom-up by dynamic programming. Denote `LIS'(A[0..n-1])` as the longest length of increasing subsequence ends with A[n-1] and _must include A[n-1]_. To compute new LIS', we need to scan all the previous `LIS'[i], i = 0..n-1`, find the max(dp[j]) for those `nums[i] > nums[j]`.

```
    LIS'(A[0..n-1]) := length of LIS ends with A[n-1] and must include A[n-1]
    LIS'(A[0..n-1]) = max(LIS'(A[0..i])) + 1, 0 <= i < n-1, if A[n-1] > A[i]
    LIS(A[0..n-1]) = max(LIS'(A[0..i])), 0 <= i <= n-1
```

### Dynamic Programming O(NlogN)

https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/

#MSFT

#Depth-first Search #Dynamic Programming

#Similar question [#300m](../p300m/README.md) [#673m](../p673m/README.md) [#674e](../p674e/README.md)
