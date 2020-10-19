# 188. Best Time to Buy and Sell Stock IV (Hard)

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

### Note:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

### Example 1:

```
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```

### Example 2:

```
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```

### Constraints:

- 0 <= k <= 10^9
- 0 <= prices.length <= 10^4
- 0 <= prices[i] <= 1000

## Solution

An excellent generalization of the whole series can be found in this [post](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems)

In general, stock problem can be characterized by three factors, the ordinal of the day i, the maximum number of allowable transactions k and the number of stocks in our hand at the end of the day.

This is the most general case, if k is greater than half of the length and more than the maximum transactions possible, the problem reduces to [122e](../p122e/README.md). Otherwise the general DP transition applies,

```
dpClosed[i][k] = max(dpClosed[i-1][k], dpOpen[i-1][k] + prices[i])
dpOpen[i][k]   = max(dpOpen[i-1][k], dpClosed[i-1][k-1] - prices[i])
```

with base case,

```
dpClosed[0][k] = 0, dpClosed[i][0] = 0; // no stock owned
dpOpen[0][k] = -Inf, dpOpen[i][0] = -Inf; // impossible to have stock at beginning without buying first
```

#Array #Dynamic Programming

#Similar question
[121e](../p121e/README.md) [122e](../p122e/README.md) [123h](../p123h/README.md) [188h](../p188h/README.md) [309m](../p309m/README.md) [714m](../p714m/README.md)
