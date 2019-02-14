# 441. Arranging Coins (Easy)

You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

### Example 1:
```
n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
```

### Example 2:
```
n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
```

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
