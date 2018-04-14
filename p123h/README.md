# 123. Best Time to Buy and Sell Stock III (Hard)

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

### Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

## Solution
An excellent generalization of the whole series can be found in this [post](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems)

In general, stock problem can be characterized by three factors, the ordinal of the day i, the maximum number of allowable transactions k and the number of stocks in our hand at the end of the day.

This variant of stock problem with k = 2, the DP state transition is
```
dpClosed[i][k] = max(dpClosed[i-1][k], dpOpen[i-1][k] + prices[i])
dpOpen[i][k]   = max(dpOpen[i-1][k], dpClosed[i-1][k-1] - prices[i])
```

#Array #Dynamic Programming

#Similar question
[121e](../p121e/README.md) [122e](../p122e/README.md) [123h](../p123h/README.md) [188h](../p188h/README.md) [309m](../p309m/README.md) [714m](../p714m/README.md)
