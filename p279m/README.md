# 279. Perfect Squares (Medium)

Given an integer `n`, return the least number of perfect square numbers that sum to `n`.

A _perfect square_ is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

### Example 1:

```
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
```

### Example 2:

```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```

### Constraints:

- 1 <= n <= 10^4

## Solution

Similar to a Unbounded Knapsack problem where you can pick unlimited square number.

Greedy algorithm won't guarantee global optimal solution from local optimal selection strategy, like picking the largest square numbers. For example, for input 12, 4 + 4 + 4 is a better solution than 9 + 1 + 1 + 1.

When using Dynamic Programming we need all the solutions less than n to derive the solution for n, let us say solution of n is s(n), we need to loop all the squares k less than n, s(n) is the minimal of s(n-k) + 1, where (n-k) could range from 0 to n - 1.

#AMZN #APPL #EBAY

#Math #Dynamic Programming
