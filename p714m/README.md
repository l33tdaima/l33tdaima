# 714. Best Time to Buy and Sell Stock with Transaction Fee (Medium)

Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

### Example 1:
- Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
- Output: 8
- Explanation: The maximum profit can be achieved by:
    - Buying at prices[0] = 1
    - Selling at prices[3] = 8
    - Buying at prices[4] = 4
    - Selling at prices[5] = 9
    - The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

### Note:
- 0 < prices.length <= 50000.
- 0 < prices[i] < 50000.
- 0 <= fee < 50000.

## Solution
An excellent generalization of the whole series can be found in this [post](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems)

In general, stock problem can be characterized by three factors, the ordinal of the day i, the maximum number of allowable transactions k and the number of stocks in our hand at the end of the day.

Since we have inf transaction, k == k - 1, k is no longer a factor, we only need to maintain two moving DP variables, one with closed position, (0 stock at hand), one with open position (1 stock at hand). State transitions on each day are the following,
- dpClosed[i] = max(dpClosed[i-1], dpOpen[i-1] + prices[i] - fee) // hold or sell
- dpOpen[i]   = max(dpOpen[i-1],   dpClosed[i-1] - prices[i])     // hold or buy
or
- dpClosed[i] = max(dpClosed[i-1], dpOpen[i-1] + prices[i])         // hold or sell
- dpOpen[i]   = max(dpOpen[i-1],   dpClosed[i-1] - prices[i] - fee) // hold or buy

#FB #BBG

#Array #Dynamic Programming #Greedy

#Similar question
[121e](../p121e/README.md) [122e](../p122e/README.md) [123h](../p123h/README.md) [188h](../p188h/README.md) [309m](../p309m/README.md) [714m](../p714m/README.md)
