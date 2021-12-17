# 221. Maximal Square (Medium)

Given an `m x n` binary matrix filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.

### Example 1:

```
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
```

### Example 2:

```
Input: matrix = [["0","1"],["1","0"]]
Output: 1
```

### Example 3:

```
Input: matrix = [["0"]]
Output: 0
```

### Constraints:

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `matrix[i][j]` is '`0`' or '`1`'.

## Solution

Let `dp[i+1][j+1]` be the side length of the maximum square whose bottom right corner is the cell with index (i,j) in the original matrix.

`dp[i+1][j+1] = min(dp[i+1][j],dp[i][j+1],dp[i][j]) + 1, when matrix[i][j] == 1`

```
  1 0 1 0 0
  1 0 1 1 1   =>
  1 1 1 1 1   =>
  1 0 0 1 0

0 0 0 0 0 0
0 1 0 1 0 0
0 1 0 1 1 1
0 1 1 1 2 2
0 1 0 0 1 0
```

#FB #APPL #Airbnb

#Dynamic Programming

#Similar questions [#084h](../p084h/README.md) [#085h](../p085h/README.md) [#221m](../p221m/README.md) [#1277m](../pr1277m/README.md)
