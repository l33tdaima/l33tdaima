# 123. Best Time to Buy and Sell Stock III (Hard)

You are given an array prices where `prices[i]` is the price of a given stock on the `ith` day.

Find the maximum profit you can achieve. You may complete _at most two transactions_.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

### Example 1:

```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation:
  Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
  Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

### Example 2:

```
Input: [1,2,3,4,5]
Output: 4
Explanation:
  Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
  Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
```

### Example 3:

```
Input: [7,6,4,3,1]
Output: 0
Explanation:
  In this case, no transaction is done, i.e. max profit = 0.
```

### Example 4:

```
Input: prices = [1]
Output: 0
```

### Constraints:

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^5`

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
