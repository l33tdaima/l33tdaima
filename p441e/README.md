# 441. Arranging Coins (Easy)

You have `n` coins and you want to build a staircase with these coins. The staircase consists of `k` rows where the `i`th row has exactly `i` coins. The last row of the staircase may be incomplete.

Given the integer `n`, return the number of complete rows of the staircase you will build.

### Example 1:

```
¤
¤ ¤
¤ ¤

Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
```

### Example 2:

```
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.

```

### Constraints:

- `1 <= n <= 2^31 - 1`

## Solution

### O(log N)

The formation implies a arithmetic sequence， the question is do binary search for the largest number x such that the sequence sum `x * (x + 1) / 2 <= n`

### O(1)

```
n = (x + 1) * x / 2
x² + x = 2n
x² + x + 1/4 - 1/4 = 2n
(x + 1/2)² = 2n + 1 / 4
(x + 1/2)² = (8n + 1) / 4
x + 1/2 = sqrt(8n + 1) / 2
x = (sqrt(8n + 1) / 2) - (1 / 2)
x = (sqrt(8n + 1) - 1) / 2
```

But the actual speed of this approach is not faster because of the complexity of sqrt calcuation.

#GoDaddy #GS

#Math #Binary Search
