# 518. Coin Change 2 (Medium)

You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

### Example 1:
```
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

### Example 2:
```
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```

### Example 3:
```
Input: amount = 10, coins = [10] 
Output: 1
```

### Note:
You can assume that
- 0 <= amount <= 5000
- 1 <= coin <= 5000
- the number of coins is less than 500
- the answer is guaranteed to fit into signed 32-bit integer

## Solution
Similar to [#322](../p322m/README.md), we attempt to denote dp[n] as number of combinations for amount n
`dp[n] = sum(dp[n - c] for c in coins), given subproblem dp[n-c] has valid solution`
but it can't dedup the combination, F(3) = 2, where combination {1, 2} and {2, 1} are the same.

This is unbound 0-1 knapsack problem, where we should define dp[i][amount] as number of combinations from coins[i:] to make up `amount`. The answer is dp[0][amount].

#Dynamic Programming

#Similar questions [#322](../p322m/README.md) [#518](../p518m/README.md)
