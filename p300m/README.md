# 300. Longest Increasing Subsequence (Medium)

Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n^2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?

## Solution
### Brutal Force Approach
Over all the combinations of elements of array, each element could contribute the longest increasing subsequence, like 0-1 Knapsack problem, we need to search 2^N space.

### Dynamic Programming O(N^2)
We can do bottom-up by dynamic programming. Denote the LIS length up to n-th element by dp[i]. In order to know whether the new element num[i] contributing to the LIS length, we need to scan all the previous `dp[j], j = 0..i-1`, find the max(dp[j]) for those `nums[i] > nums[j]`.
```
    LIS'(A[0..n-1]) := length of LIS ends with A[n-1]
    LIS'(A[0..n-1]) = max(LIS'(A[0..i])) + 1, 0 <= i < n-1, if A[n-1] > A[i]
    LIS(A[0..n-1]) = max(LIS'(A[0..i])), 0 <= i <= n-1
```

### Dynamic Programming O(NlogN)
If we make the dp[i] represent the list of increasing subsequence by including the i-the element, for every new element, we do binary search to insert into the list, or append if it is the largest so far. Note: dp array does not result in longest increasing subsequence, but length of dp array will give you length of LIS.

Consider the example:
input: [0, 8, 4, 12, 2]
```
dp: [0]
dp: [0, 8]
dp: [0, 4]
dp: [0, 4, 12]
dp: [0, 2, 12] which is not the longest increasing subsequence, but length of dp array results in length of Longest Increasing Subsequence.
```
#MSFT

#Depth-first Search #Dynamic Programming

#Similar question [#300m](../p300m/README.md) [#673m](../p673m/README.md) [#674e](../p674e/README.md) 
