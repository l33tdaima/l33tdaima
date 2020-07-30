# 309. Best Time to Buy and Sell Stock with Cooldown (Medium)

Say you have an array for which the `i-th` element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

- You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
- After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

### Example:
- prices = [1, 2, 3, 0, 2]
- maxProfit = 3
- transactions = [buy, sell, cooldown, buy, sell]

## Solution
An excellent generalization of the whole series can be found in this [post](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems)

In general, stock problem can be characterized by three factors, the ordinal of the day i, the maximum number of allowable transactions k and the number of stocks in our hand at the end of the day.

This variant of stock problem with Inf transaction like [122e](../p122e/README.md) using the day before yesterday to compute the max profit for any new open position case,
- dpClosed[i] = max(dpClosed[i-1], dpOpen[i-1] + prices[i])
- dpOpen[i]   = max(dpOpen[i-1], dpClosed[i-2] - prices[i])

#GOOGL

#Dynamic Programming

#Similar question
[121e](../p121e/README.md) [122e](../p122e/README.md) [123h](../p123h/README.md) [188h](../p188h/README.md) [309m](../p309m/README.md) [714m](../p714m/README.md)
