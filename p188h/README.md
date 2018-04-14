# 188. Best Time to Buy and Sell Stock IV (Hard)

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

### Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

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
