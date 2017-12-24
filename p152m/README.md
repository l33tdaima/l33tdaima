# 152. Maximum Product Subarray (Medium)

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.

## Solution
A very elegant solution posted by calculating local min and local max, then swap them because multiplying by a negative makes big number smaller, small number bigger so we redefine the extremums by swapping them.

#Array #Dynamic Programming
#LNKD
