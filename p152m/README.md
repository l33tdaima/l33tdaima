# 152. Maximum Product Subarray (Medium)

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

### Example 1:
```
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```
### Example 2:
```
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

## Solution
### Intuitive Approach
Brutally try all the subarray, O(N^2) i = [0..N], j = [i..N]

### Optimal O(N) Approach
A very elegant solution from programming pearls:

calculating local min and local max, then swap them because multiplying by a negative makes big number smaller, small number bigger so we redefine the extremums by swapping them.

#LNKD #GOOGL

#Array #Dynamic Programming

#MJ.GOOGL