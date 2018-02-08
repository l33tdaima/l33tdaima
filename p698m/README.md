# 698. Partition to K Equal Sum Subsets (Medium)

Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:
Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
Note:

1 <= k <= len(nums) <= 16.
0 < nums[i] < 10000.

## Solution
Assume sum is the sum of nums[]. The backtracing process is to find a subset of nums[] whose sum is equal to sum/k. sum % k !== 0 can have a partition for sure. A flag array need to store whether an element has contributed to sum or not.

#LNKD
#Backtracking