# 279. Perfect Squares (Medium)

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

## Solution
Greedy algorithm won't guarantee global optimal solution from local optimal selection strategy, like picking the largest square numbers. For example, for input 12, 4 + 4 + 4 is a better solution than 9 + 1 + 1 + 1.

When using Dynamic Programming we need all the solutions less than n to derive the solution for n, let us say solution of n is s(n), we need to loop all the squares k less than n, s(n) is the minimal of s(n-k) + 1, where (n-k) could range from 0 to n - 1.

#GOOGL
#Math #Dynamic Programming
