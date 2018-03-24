# 689. Maximum Sum of 3 Non-Overlapping Subarrays (Hard)

In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.

Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.

Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.

Example:
Input: [1,2,1,2,6,7,5,1], 2
Output: [0, 3, 5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.

Note:
nums.length will be between 1 and 20000.
nums[i] will be between 1 and 65535.
k will be between 1 and floor(nums.length / 3).

## Solution
### Brutal Force Approach
Iterating the 1st subarray starting index `i = [0 .. n-1-3*k]` as outer loop, then second subarray starting index `j = [i+k-1 .. n-1-2*k]`, then third subarray starting index `l = [j+k-1 .. n-1-k]`. Calculate the sum for all the possible combinations.

### Optimal Approach
We will build a DP state for the left and right interval, the state is the starting index of each interval when the mid interval starts from i, where i = [k, n - 2*k]. Both will take O(N).

With two DP state lists handy for looking up in O(1), we simply iterate the middle subarray, and search for the overall maximum. The overall complexity is O(3*N) ~ O(N).

#FB #GOOGL

#Array #Dynamic Programming
