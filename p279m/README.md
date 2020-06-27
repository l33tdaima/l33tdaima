# 279. Perfect Squares (Medium)

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

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

## Solution

Similar to a Unbounded Knapsack problem where you can pick unlimited square number.

Greedy algorithm won't guarantee global optimal solution from local optimal selection strategy, like picking the largest square numbers. For example, for input 12, 4 + 4 + 4 is a better solution than 9 + 1 + 1 + 1.

When using Dynamic Programming we need all the solutions less than n to derive the solution for n, let us say solution of n is s(n), we need to loop all the squares k less than n, s(n) is the minimal of s(n-k) + 1, where (n-k) could range from 0 to n - 1.

#GOOGL

#Math #Dynamic Programming
