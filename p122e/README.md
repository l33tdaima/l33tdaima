# 122. Best Time to Buy and Sell Stock II (Easy)

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

## Solution
An excellent generalization of the whole series can be found in this [post](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems)

In general, stock problem can be characterized by three factors, the ordinal of the day i, the maximum number of allowable transactions k and the number of stocks in our hand at the end of the day.

This easy variant where k = Inf indicates maximum allowable transactions don't matter, k == k-1, the DP transitions are
- dpClosed_new = max(dpClosed, dpOpen + prices[i])
- dpOpen_new   = max(dpOpen, dpClosed - prices[i])

which is equivalent to accumulate the local positive gain, note this doesn't break break the requirement of no multiple transactions at the same time, just calculate the gain. However this approach doesn't extend to the case where there is a fee [714m](../p714m/README.md).

#BBG

#Array #Greedy

#Similar question
[121e](../p121e/README.md) [122e](../p122e/README.md) [123h](../p123h/README.md) [188h](../p188h/README.md) [309m](../p309m/README.md) [714m](../p714m/README.md)
