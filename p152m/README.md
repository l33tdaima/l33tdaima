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

### Two-pass O(N) Approach
It's really about odd negative numbers or even negative numbers, if it's odd, either the left end one or the right end one should be counted, so it will be revealed by scanning from left and from right in 2 passes, or one pass computing prefix and suffix product, one pass to find out max within these products.

0 is a kind of delimiter, product accumulation will be reset to 1.

### One-pass O(N) Approach
A very elegant solution from programming pearls:

- Calculating the new localmin and localmax of between each new element i and previous localmin/localmax
- Swap them because multiplying by a negative makes big number smaller, small number bigger so we redefine the extremums by swapping them.

#LNKD #GOOGL #AMZN #MSFT

#GOOGL.MJ

#Array #Dynamic Programming

#Similar Questions [#53](../p053e/README.md) [#152](../p152m/README.md) [#628](../p628e/README.md)
