# 121. Best Time to Buy and Sell Stock (Easy)

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.

## Example 1:

Input: [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

## Example 2:

Input: [7, 6, 4, 3, 1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

### Constraints:

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## Solution

An excellent generalization of the whole series can be found in this [post](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems)

In general, stock problem can be characterized by three factors, the ordinal of the day i, the maximum number of allowable transactions k and the number of stocks in our hand at the end of the day.

This simple version k = 1, just needs intuitively seek minimum for open and higher for closed position.

- dpClosed[i] = max(dpClosed[i-1], prices[i] - dpOpen[i-1])
- dpOpen[i] = min(dpOpen[i-1], prices[i])

#FB #MSFT #AMZN #BBG #UBER

#Array #Dynamic Programming

#Similar question
[121e](../p121e/README.md) [122e](../p122e/README.md) [123h](../p123h/README.md) [188h](../p188h/README.md) [309m](../p309m/README.md) [714m](../p714m/README.md)

#Explore Facebook
