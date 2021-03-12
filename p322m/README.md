# 322. Coin Change (Medium)

You are given coins of different denominations and a total amount of money `amount`. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

### Example 1:

```
Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

### Example 2:

```
Input: coins = [2], amount = 3
Output: -1
```

### Example 3:

```
Input: coins = [1], amount = 0
Output: 0
```

### Example 4:

```
Input: coins = [1], amount = 1
Output: 1
```

### Example 5:

```
Input: coins = [1], amount = 2
Output: 2
```

### Constraints:

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 2^31 - 1
- 0 <= amount <= 10^4

## Solution

Denote dp[n] as the fewest number of coins for amount n,
`dp[n] = 1 + min(dp[n - c] for c in coins)`

#Dynamic Programming

#Similar questions [#322](../p322m/README.md) [#518](../p518m/README.md)
